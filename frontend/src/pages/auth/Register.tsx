import leftBG from "../../../public/images/Login/LogingVector.png";
import { FaGoogle } from "react-icons/fa";
import { registerApiCall } from "../../services/auth/AuthService";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  username: yup.string().required("User name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    registerApiCall(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className="flex justify-between max-h-screen">
        <div className="flex-1 px-[50px]">
          <h1 className="font-nunito font-extrabold text-[24px] mt-[43px]">
            <span className="text-[#09965D]">GREEN</span> SUPERMARKET
          </h1>
          <div className="flex justify-center items-center mt-[137px]">
            <div className="w-[406px]">
              <h2 className="font-nunito font-bold text-[48px] text-center">
                Hi there!
              </h2>
              <p className="text-center mb-[32px]">
                Wellcome to green supermarket
              </p>
              <button className="flex items-center justify-center border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] mb-[80px]">
                <FaGoogle color="black" className="mr-[20px]" />
                Log in with Google
              </button>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  className="border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] outline-0 py-2 px-3 mb-[12px]"
                  placeholder="Full name"
                />
                <p className="text-red-500">{errors.name?.message}</p>

                <input
                  {...register("username")}
                  className="border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] outline-0 py-2 px-3 mb-[12px]"
                  placeholder="User name"
                />
                <p className="text-red-500">{errors.username?.message}</p>

                <input
                  {...register("email")}
                  className="border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] outline-0 py-2 px-3 mb-[12px]"
                  placeholder="Email address"
                />
                <p className="text-red-500">{errors.email?.message}</p>

                <input
                  {...register("password")}
                  type="password"
                  className="border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] outline-0 py-2 px-3 mb-[12px]"
                  placeholder="Password"
                />
                <p className="text-red-500">{errors.password?.message}</p>

                <Link
                  to="#"
                  className="inline-block text-[14px] text-[#848482] ml-[300px]"
                >
                  Forgot password
                </Link>

                <button
                  type="submit"
                  className="w-full mt-[83px] h-[56px] bg-[#53B176] text-[20px] font-bold text-white rounded-[50px] mb-[12px]"
                >
                  Create account
                </button>
              </form>
              <p className="font-medium text-[14px] text-[#848482] text-center">
                Already have an account?{" "}
                <Link className="font-bold text-black" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-end flex-1">
          <img
            className="max-w-[704px] w-full h-screen object-fill"
            src={leftBG}
            alt="left-bg"
          />
          <div className="text-center absolute top-[320px] right-11 leading-[80px]">
            <h3 className="font-nunito text-[96px]">Unlock Fresh,</h3>
            <h3 className="font-nunito text-[64px]">Convenient</h3>
            <h3 className="font-nunito text-[64px]">Shopping Bliss.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
