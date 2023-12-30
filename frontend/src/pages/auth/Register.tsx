import leftBG from "../../../public/images/Login/LogingVector.png";
// import { FaGoogle } from "react-icons/fa";
import { registerApiCall } from "../../services/auth/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React from "react";

const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  username: yup.string().required("User name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  interface formData {
    name: string;
    username: string;
    email: string;
    password: string;
  }

  const onSubmit = (data: formData) => {
    {
      registerApiCall(data)
        .then(() => {
          setTimeout(() => {
            navigator("/login");
          }, 3000);
        })
        .catch((err) => {
          console.error(err);
          if (err.response && err.response.status === 400) {
            const errorMessage = "Username or Email already exists";

            window.alert(errorMessage);
          }
        });
    }
  };
  return (
    <>
      <div className="flex-col min-h-screen gap-5 p-3 md:max-h-max flexCenter md:flexBetween md:flex-row">
        <div className="flexCenter flex-col lg:px-[50px]">
          <h1 className="font-nunito font-extrabold text-3xl lg:text-[24px]  underline underline-offset-8 md:no-underline">
            <span className="text-[#09965D]">GREEN</span> SUPERMARKET
          </h1>
          <div className="flex justify-center items-center mt-8 lg:mt-[10%]">
            <div className="w-full">
              <h2 className="font-nunito font-bold text-2xl lg:text-[48px] text-center">
                Hi there !
              </h2>
              <p className="text-center mb-[32px]">
                Welcome to green supermarket
              </p>
              {/* <button className="flex items-center justify-center border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] mb-[80px]">
                <FaGoogle color="black" className="mr-[20px]" />
                Log in with Google
              </button> */}
              <form className="flex-col gap-3 flexCenter">
                <TextField
                  {...register("name")}
                  type="text"
                  label="Full Name"
                  variant="outlined"
                  className="w-[90vw] md:w-[45vw] lg:w-[40vw]"
                />
                {errors.name && (
                  <Alert
                    severity="error"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  >
                    {errors.name?.message}
                  </Alert>
                )}
                <TextField
                  {...register("username")}
                  type="text"
                  label="Username"
                  variant="outlined"
                  className="w-[90vw] md:w-[45vw] lg:w-[40vw]"
                />
                {errors.username && (
                  <Alert
                    severity="error"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  >
                    {errors.username?.message}
                  </Alert>
                )}
                <TextField
                  {...register("email")}
                  type="email"
                  label="Email"
                  variant="outlined"
                  className="w-[90vw] md:w-[45vw] lg:w-[40vw]"
                />
                {errors.email && (
                  <Alert
                    severity="error"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  >
                    {errors.email?.message}
                  </Alert>
                )}
                <TextField
                  {...register("password")}
                  label="Password"
                  variant="outlined"
                  type="password"
                  className="w-[90vw] md:w-[45vw] lg:w-[40vw]"
                />
                {errors.password && (
                  <Alert
                    severity="error"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  >
                    {errors.password?.message}
                  </Alert>
                )}
                <Link
                  to="#"
                  className="inline-block text-sm text-[#848482] hover:underline underline-offset-4"
                >
                  Forgot password ?
                </Link>
                <button
                  type="submit"
                  className="w-[80vw] py-2 mt-8 bg-[#53B176] text-4xl font-bold text-white rounded-[20px] mb-[12px] md:w-[30vw] lg:mt-[83px]"
                  onClick={handleSubmit(onSubmit)}
                >
                  Create Account
                </button>
              </form>
              <p className="font-medium text-[14px] text-[#848482] text-center">
                Already have an account?{" "}
                <Link
                  className="ml-1 font-bold text-black hover:underline underline-offset-4"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden w-full max-h-screen md:flex">
          <img className="object-cover w-full" src={leftBG} alt="left-bg" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-[60px] xl:leading-[80px] font-nunito whitespace-nowrap">
            <h3 className="text-8xl xl:text-[64px]">Unlock Fresh,</h3>
            <h3 className="text-6xl xl:text-[48px]">Convenient</h3>
            <h3 className="text-6xl xl:text-[48px]">Shopping Bliss.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
