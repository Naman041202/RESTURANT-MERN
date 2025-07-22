import React from "react";
import Footer from "../Components/Footer";
import Title from "../Components/Title";
import { FaEnvelope, FaPhoneAlt, FaHeadphones } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section className="max-padd-container mt-24">
        <div className="flex flex-col xl:flex-row gap-20 py-6">
          {/* Form Section (Left) */}
          <div className="w-full xl:w-1/2">
            <h2 className="text-3xl font-semibold mb-3 text-secondary">
              Get In Touch
            </h2>
            <p className="max-w-xl mb-6">
              Have questions or need help? Send us a message, and we'll get back
              to you as soon as possible.
            </p>
            <form className="flex flex-col gap-4">
              <div className="flex gap-x-4 flex-col sm:flex-row">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-2 rounded bg-deep text-gray-600 placeholder-gray-600 outline-none"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded bg-deep text-gray-600 placeholder-gray-600 outline-none"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Your message here"
                className="w-full p-2 rounded bg-deep text-gray-600 placeholder-gray-600 outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="btn-secondary rounded shadow-sm w-fit px-6 py-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details (Right) */}
          <div className="w-full xl:w-1/2 text-left">
            <h2 className="text-3xl font-semibold mb-3 text-secondary text-center xl:text-left">
              Contact Details
            </h2>
            <p className="mb-6 max-w-md text-center xl:text-left">
              Always here to assist you! Feel free to reach out to us through
              any of the following methods:
            </p>
            <div className="flex flex-col gap-6">
              {/* Location */}
              <div className="flex items-start gap-x-3">
                <FaLocationDot className="text-gray-600 text-xl mt-1" />
                <div>
                  <h5 className="h5 mb-0 text-gray-600 ">Location:</h5>
                  <p className="mt-1">123 Spice Street, Food City, India</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-x-3">
                <FaEnvelope className="text-gray-600 text-xl mt-1" />
                <div>
                  <h5 className="h5 mb-0 text-gray-600">Email:</h5>
                  <p className="mt-1">support@platedin.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-x-3">
                <FaPhoneAlt className="text-gray-600text-xl mt-1" />
                <div>
                  <h5 className="h5 mb-0 text-gray-600">Phone:</h5>
                  <p className="mt-1">+91 98765 43210</p>
                </div>
              </div>

              {/* Support */}
              <div className="flex items-start gap-x-3">
                <FaHeadphones className="text-gray-600 text-xl mt-1" />
                <div>
                  <h5 className="h5 mb-0 text-gray-600">Support:</h5>
                  <p className="mt-1">24/7 Support is open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
