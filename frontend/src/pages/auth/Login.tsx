import leftBG from "../../../public/images/Login/LogingVector.png";
import React, { useState } from "react";
import {
  loginApiCall,
  savedLoggedInUser,
  storeToken,
} from "../../services/auth/AuthService";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  async function handleLoginForm(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    await loginApiCall(username, password)
      .then((response) => {
        console.log(response.data);

        const token = "Basic " + window.btoa(username + ":" + password);
        storeToken(token);

        savedLoggedInUser(username);
        navigator("/");

        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
                {/* <input
                  className="border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] outline-0 py-2 px-3 mb-[12px]"
                  placeholder="Email address"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  className="border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] outline-0 py-2 px-3 mb-[12px]"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /> */}
                <TextField
                  label="Username or Email"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-[90vw] md:w-[45vw] lg:w-[40vw]"
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[90vw] md:w-[45vw] lg:w-[40vw]"
                />

                <Link
                  to="#"
                  className="inline-block text-sm text-[#848482] hover:underline underline-offset-4"
                >
                  Forgot password ?
                </Link>
                <button
                  type="submit"
                  className="w-[80vw] py-2 mt-8 bg-[#53B176] text-4xl font-bold text-white rounded-[20px] mb-[12px] md:w-[30vw] lg:mt-[83px]"
                  onClick={(e) => handleLoginForm(e)}
                >
                  Log in
                </button>
              </form>
              <p className="font-medium text-[14px] text-[#848482] text-center">
                Don't have an account?{" "}
                <Link
                  className="ml-1 font-bold text-black hover:underline underline-offset-4"
                  to="/register"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden w-full max-h-screen md:flex">
          <img className="object-cover w-full" src={leftBG} alt="left-bg" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-[60px] xl:leading-[80px] font-nunito whitespace-nowrap">
            <h3 className="text-8xl xl:text-[64px]">Welcome!</h3>
            <h3 className="text-6xl xl:text-[48px]">back to</h3>
            <h3 className="text-6xl xl:text-[48px]">GREEN Supermarket!</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
