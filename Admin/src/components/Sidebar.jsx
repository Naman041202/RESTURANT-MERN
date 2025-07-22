import React from "react";
import { NavLink } from "react-router-dom";
import { MdLibraryAdd, MdFactCheck } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { BiLogOut } from "react-icons/bi";

const Sidebar = ({ setToken }) => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-20 sm:w-64 bg-light shadow-md z-50">
      <div className="flex flex-col h-full py-6 px-2 sm:px-6 gap-8">
        {/* Logo */}
        <div className="hidden sm:block pl-2">
          <span className="bold-24 text-secondary">PlatedIN</span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-secondary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <MdLibraryAdd className="text-xl" />
            <span className="hidden sm:inline">Add Item</span>
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-secondary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <IoIosListBox className="text-xl" />
            <span className="hidden sm:inline">List</span>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-secondary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <MdFactCheck className="text-xl" />
            <span className="hidden sm:inline">Orders</span>
          </NavLink>

          <NavLink
            to="/reservation"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-secondary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <SlCalender className="text-xl" />
            <span className="hidden sm:inline">Reservations</span>
          </NavLink>
        </nav>

        {/* Logout Button */}
        <div className="mt-auto">
          <button
            onClick={() => setToken("")}
            className="flex items-center justify- gap-3 px-3 py-2 rounded-lg text-red-700 hover:bg-gray-100 transition-all duration-200"
          >
            <BiLogOut className="text-xl" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
