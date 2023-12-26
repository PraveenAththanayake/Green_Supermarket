// import leftBG from "../../../public/images/Login/LogingVector.png";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { FaGoogle } from "react-icons/fa";
// import {
//   loginApiCall,
//   savedLoggedInUser,
//   storeToken,
// } from "../../services/auth/AuthService";
// import { useNavigate } from "react-router-dom";

// const schema = yup.object().shape({
//   username: yup
//     .string()
//     .required("Email or Username is required")
//     .test("username", "Enter a valid Email or Username", (value) => {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       const usernameRegex = /^[a-zA-Z0-9_]+$/;

//       return emailRegex.test(value) || usernameRegex.test(value);
//     }),
//   password: yup.string().required("Password is required"),
// });

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const navigator = useNavigate();

//   const onSubmit = (data: any) => {
//     loginApiCall(data.username, data.password)
//       .then((res) => {
//         const token =
//           "Basic" + window.btoa(data.username + ":" + data.password);
//         savedLoggedInUser(data.username);
//         storeToken(token);
//         navigator("/");
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (
//     <>
//       <div className="flex justify-between max-h-screen">
//         <div className="flex-1 px-[50px]">
//           <h1 className="font-nunito font-extrabold text-[24px] mt-[43px]">
//             <span className="text-[#09965D]">GREEN</span> SUPERMARKET
//           </h1>
//           <div className="flex justify-center items-center mt-[137px]">
//             <div className="w-[406px]">
//               <h2 className="font-nunito font-bold text-[48px] text-center">
//                 Hi there!
//               </h2>
//               <p className="text-center mb-[32px]">
//                 Welcome to green supermarket
//               </p>
//               <button className="flex items-center justify-center border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] mb-[80px]">
//                 <FaGoogle color="black" className="mr-[20px]" />
//                 Log in with Google
//               </button>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <input
//                   {...register("username")}
//                   className="border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] outline-0 py-2 px-3 mb-[12px]"
//                   placeholder="Email address"
//                 />
//                 <p className="text-red-500">{errors.username?.message}</p>

//                 <input
//                   {...register("password")}
//                   type="password"
//                   className="border border-[#84848220] w-full h-[44px] text-[15px] text-[#848482] font-light rounded-[5px] outline-0 py-2 px-3 mb-[12px]"
//                   placeholder="Password"
//                 />
//                 <p className="text-red-500">{errors.password?.message}</p>

//                 <a
//                   href="#"
//                   className="inline-block text-[14px] text-[#848482] ml-[300px]"
//                 >
//                   Forgot password
//                 </a>

//                 <button
//                   type="submit"
//                   className="w-full mt-[83px] h-[56px] bg-[#53B176] text-[20px] font-bold text-white rounded-[50px] mb-[12px]"
//                 >
//                   Log in
//                 </button>
//               </form>
//               <p className="font-medium text-[14px] text-[#848482] text-center">
//                 Don't have an account?{" "}
//                 <a className="font-bold text-black" href="/register">
//                   Sign up
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="relative flex justify-end flex-1">
//           <img
//             className="max-w-[704px] w-full h-screen object-fill"
//             src={leftBG}
//             alt="left-bg"
//           />
//           <div className="text-center absolute top-[320px] right-[120px] leading-[80px]">
//             <h3 className="font-nunito text-[64px]">Welcome!</h3>
//             <h3 className="font-nunito text-[48px]">back to</h3>
//             <h3 className="font-nunito text-[48px]">GREEN Supermarket!</h3>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginApiCall,
  savedLoggedInUser,
  storeToken,
} from "../../services/auth/AuthService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  async function handleLoginForm(e) {
    e.preventDefault();

    await loginApiCall(username, password)
      .then((response) => {
        console.log(response.data);

        const token = "Basic " + window.btoa(username + ":" + password);
        storeToken(token);

        savedLoggedInUser(username);
        navigator("/");

        window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center"> Login Form </h2>
            </div>

            <div className="card-body">
              <form>
                <div className="mb-3 row">
                  <label className="col-md-3 control-label">
                    {" "}
                    Username or Email
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 row">
                  <label className="col-md-3 control-label"> Password </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="mb-3 form-group">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleLoginForm(e)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
