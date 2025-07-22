import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-deep text-gray-700 px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and About Us */}
        <div className="flex flex-col gap-4">
          <Link to={"/"} className="bold-24 flex-1 flex">
            <span className="p-2 h-13 w-8 text-3xl text-secondary">
              PlatedIN
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            Your one-stop destination for delicious and authentic meals, crafted
            with care by expert chefs. Whether dining in or ordering online,
            satisfaction is guaranteed.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-secondary">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-secondary">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-secondary">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-secondary">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <div className="flex items-start gap-2 text-sm">
            <MdLocationOn className="text-xl mt-1" />
            <p>123 Spice Street, Food City, India</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <IoMdCall className="text-xl" />
            <p>+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MdEmail className="text-xl" />
            <p>support@platedin.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <a href="#" className="text-sm hover:text-secondary">
            Home
          </a>
          <a href="#" className="text-sm hover:text-secondary">
            Menu
          </a>
          <a href="#" className="text-sm hover:text-secondary">
            Reservations
          </a>
          <a href="#" className="text-sm hover:text-secondary">
            Contact Us
          </a>
        </div>

        {/* Useful Info */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold mb-2">Useful Info</h4>
          <a href="#" className="text-sm hover:text-secondary">
            Hot Deals
          </a>
          <a href="#" className="text-sm hover:text-secondary">
            Special Offers
          </a>
          <a href="#" className="text-sm hover:text-secondary">
            Terms & Conditions
          </a>
          <a href="#" className="text-sm hover:text-secondary">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative mt-10 pt-4 border-t border-gray-700 text-xs text-gray-500">
        <div className="text-center">
          © {new Date().getFullYear()} PlatedIn. All rights reserved.
        </div>
        <div className="absolute right-4 top-4 text-xs text-gray-700 hidden sm:block">
          Created By :- Naman Goyal
        </div>
      </div>
    </footer>
  );
};

export default Footer;
