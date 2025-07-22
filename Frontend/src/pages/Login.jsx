import React, { useContext, useEffect, useState } from "react";
import loginImg from "../assets/login1.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom"; // ✅ Required for <Link>

const Login = () => {
  const { token, setToken, navigate, backendUrl, getUserCart } =
    useContext(ShopContext);

  const [currState, setCurrState] = useState("Login"); // or "Sign Up"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          //fetch user cart data after login
          await getUserCart(response.data.token``);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <section className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      <Link to={"/"} className="absolute top-12 right-15 z-50">
        <span className="text-2xl sm:text-3xl text-secondary font-bold">
          PlatedIN
        </span>
      </Link>

      <div className="flex h-full w-full">
        <div className="w-1/2 hidden sm:block">
          <img
            src={loginImg}
            alt="Login"
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center sm:max-w-md m-auto gap-y-5 text-gray-800 w-full px-6"
          >
            <div className="mb-4">
              <h3 className="font-bold text-2xl sm:text-3xl">
                {currState === "Sign Up" ? "Sign Up" : "Login"}
              </h3>
            </div>

            {currState === "Sign Up" && (
              <div className="w-full">
                <label htmlFor="name" className="block font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}

            <div className="w-full">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="block font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-dark w-full mt-5 !py-[7px] rounded bg-black text-white font-medium"
            >
              {currState === "Sign Up" ? "Sign Up" : "Login"}
            </button>

            <div className="w-full flex flex-col gap-y-3 text-sm text-center mt-4">
              <div className="underline cursor-pointer">
                Forgot your password?
              </div>

              {currState === "Login" ? (
                <div>
                  Don't have an account?{" "}
                  <span
                    onClick={() => setCurrState("Sign Up")}
                    className="underline cursor-pointer text-blue-600"
                  >
                    Create account
                  </span>
                </div>
              ) : (
                <div>
                  Already have an account?{" "}
                  <span
                    onClick={() => setCurrState("Login")}
                    className="underline cursor-pointer text-blue-600"
                  >
                    Login
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
