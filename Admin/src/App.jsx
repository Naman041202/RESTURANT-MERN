import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Reservation from "./pages/Reservation";
import Login from "./components/Login";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₹"

export default function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <main className="relative min-h-screen">
      <ToastContainer />

      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Sidebar setToken={setToken} />
          <div className="pl-20 sm:pl-64 bg-deep text-[#404040] min-h-screen">
            <div className="mx-auto max-w-[1440px] py-6 px-4">
              <Routes>
                <Route path="/" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
                <Route
                  path="/reservation"
                  element={<Reservation token={token} />}
                />
              </Routes>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
