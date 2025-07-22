import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ containerStyles, ToggleMenu, menuOpened }) => {
  const navItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/menu", label: "Menu", icon: <BiSolidFoodMenu /> },
    {
      to: "/reservations",
      label: "Reservations",
      icon: <BsFillCalendarDateFill />,
    },
    { to: "/contact", label: "Contact", icon: <FaPhone /> },
  ];
  return (
    <nav className={containerStyles}>
      {/* {close button inside the mobile } */}
      {menuOpened && (
        <>
          <IoMdClose
            onClick={ToggleMenu}
            className="text-xl self-end cursor-pointer relative -left-3 top-4"
          />
          <Link to={"/"} className="bold-24 mb-10">
            <h4 className="text-secondary">PlatedIN</h4>
          </Link>
        </>
      )}

      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex">
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive ? "active-link flexCenter gap-x-2" : "flexCenter gap-x-2"
            }
          >
            <span className="text-xl">{icon}</span>
            <span className="medium-16">{label}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
