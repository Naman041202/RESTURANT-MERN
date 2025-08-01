import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login2.jpg";
import axios from "axios";
import { backendUrl } from "../App";

import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* container */}
      <div className="flex h-full w-full">
        {/* image side */}
        <div className="w-1/2 hidden sm:block">
          <img src={loginImg} alt="" className="object-cover h-full w-full" />
        </div>

        {/* form side */}
        <div className="flexCenter w-full sm:w-1/2">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800"
          >
            {/* Logo - Adjusted for equal spacing */}
            
              <span className="text-3xl sm:text-4xl font-bold text-secondary tracking-wide">
                PlatedIN
              </span>
            

            <div className="w-full mb-4">
              <h3 className="bold-36">Admin Login</h3>
            </div>
            <div className="w-full">
              <label htmlFor="Email" className="medium-15">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="medium-15">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <button
              type="submit"
              className="btn-dark w-full mt-5 !py-[7px] !rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
