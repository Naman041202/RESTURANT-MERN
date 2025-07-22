import { React, useContext, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";
import { TbUserCircle } from "react-icons/tb";
import { HiArrowNarrowRight } from "react-icons/hi";

const Header = () => {
  const { getCartCount, navigate, token, setToken } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);

  const ToggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <header className="fixed py-3 w-full top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-padd-container flexBetween">
        {/* Logo - Adjusted for equal spacing */}
        <Link to={"/"} className="flex-1 flex items-center min-w-[100px]">
          <span className="text-2xl sm:text-3xl text-secondary">PlatedIN</span>
        </Link>

        {/* Navbar - Centered on mobile */}
        <div className="flex-1 flex justify-center">
          <Navbar
            ToggleMenu={ToggleMenu}
            menuOpened={menuOpened}
            containerStyles={`${
              menuOpened
                ? "flex flex-col gap-y-10 h-screen w-[222px] fixed left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl"
                : "hidden xl:flex gap-x-5 xl:gap-x-8 medium-15 rounded-full px-2 py-1"
            }`}
          />
        </div>

        {/* Right side - Optimized for mobile */}
        <div className="flex-1 flex items-center justify-end gap-x-4 sm:gap-x-6 xl:gap-x-10">
          {/* Menu Button - Equal spacing */}
          {!menuOpened && (
            <FiMenu
              onClick={ToggleMenu}
              className="text-2xl xl:hidden cursor-pointer mx-2"
            />
          )}

          {/* Cart with protected counter */}
          <Link to={"/cart"} className="relative mx-2 sm:mx-0">
            <IoCartSharp className="text-2xl" />
            <span
              className="absolute -top-2 -right-2 bg-secondary text-white text-xs 
                           flex items-center justify-center w-5 h-5 rounded-full"
            >
              {getCartCount()}
            </span>
          </Link>

          {/* Login Button - Full visibility */}
          <div className="group relative">
            <div className="ml-2 sm:ml-0" onClick={() => navigate("./login")}>
              {token ? (
                <div className="my-[9px]">
                  <TbUserCircle className="text-[28px] cursor-pointer" />
                </div>
              ) : (
                <button
                  className="btn-outline !border-none flex items-center gap-x-1 
                              !py-2 !px-3 sm:!py-3 sm:!px-6 text-sm sm:text-base"
                >
                  <span className="hidden xs:inline">Login</span>
                  <FaUserLarge className="text-lg" />
                </button>
              )}
            </div>
            {token && (
              <>
                <ul className="bg-white shadow-sm p-2 w-32 ring-1 ring-slate-900/15 rounded absolute right-0 top-10 hidden group-hover:flex flex-col">
                  <li
                    onClick={() => navigate("/orders")}
                    className="flexBetween cursor-pointer"
                  >
                    <p>Orders</p>
                    <HiArrowNarrowRight className="opacity-50 text-[19px]" />
                  </li>
                  <hr className="my-2" />
                  <li onClick={logout} className="flexBetween cursor-pointer">
                    <p>Logout</p>
                    <HiArrowNarrowRight className="opacity-50 text-[19px]" />
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
