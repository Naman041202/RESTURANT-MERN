import React, { useState } from "react";
import Footer from "../Components/Footer";
import { FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";

const Reservations = () => {
  const backendUrl = "http://localhost:4000/";

  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guest: "1",
  });

  const handleChanges = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(backendUrl + "api/reservation/create", formData);
      toast.success("Reservation Successfull");
      setformData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guest: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 21; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? "AM" : "PM";
      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const endPeriod = hour + 1 < 12 ? "AM" : "PM";
      slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
    }
    return slots;
  };

  return (
    <>
      <section className="max-padd-container mt-24 text-gray-900">
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* Left Column - Reservation Info */}
          <div className="lg:w-1/2 bg-deep rounded-xl p-8 lg:sticky lg:top-24 h-fit">
            <h2 className="text-3xl font-semibold text-secondary mb-13">
              Reservation Information
            </h2>
            <div className="flex flex-col gap-6 text-gray-800">
              <div className="flex items-start gap-3">
                <FaLocationDot className=" text-gray-600 text-lg mt-1" />
                <div>
                  <h5 className="font-semibold  text-gray-600">Address</h5>
                  <p>123 Spice Street, Food City, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className=" text-gray-600 text-lg mt-1" />
                <div>
                  <h5 className="font-semibold  text-gray-600">Phone</h5>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className=" text-gray-600 text-lg mt-1" />
                <div>
                  <h5 className="font-semibold  text-gray-600">Email</h5>
                  <p>support@platedin.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaClock className=" text-gray-600 text-lg mt-1" />
                <div>
                  <h5 className="font-semibold  text-gray-600">Open Hours</h5>
                  <p>Mon – Sun: 09:00 AM – 09:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Reservation Form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-secondary mb-6">
              Reserve Your Table
            </h2>
            <p className="mb-10 text-gray-600">
              Book your seat in advance and make your experience smooth and
              delightful.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChanges}
                    placeholder="Full Name"
                    required
                    className="w-full p-4 rounded bg-deep text-gray-600 placeholder-gray-600 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChanges}
                    placeholder="Email"
                    required
                    className="w-full p-4 rounded bg-deep text-gray-600 placeholder-gray-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChanges}
                    placeholder="Phone Number"
                    required
                    className="w-full p-4 rounded bg-deep text-gray-600 placeholder-gray-600 outline-none"
                  />
                </div>
                <div>
                  <select
                    name="guest"
                    value={formData.guest}
                    onChange={handleChanges}
                    className="w-full p-4 rounded bg-deep text-gray-600 outline-none"
                  >
                    {[...Array(10).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} Guest(s)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 mb-2">
                    Date of Reservation
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChanges}
                    required
                    className="w-full p-4 rounded bg-deep text-gray-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">
                    Time of Reservation
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChanges}
                    required
                    className="w-full p-4 rounded bg-deep text-gray-600 outline-none"
                  >
                    <option value="">Select Time</option>
                    {generateTimeSlots().map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-secondary mt-4 w-full md:w-fit px-8 py-3 rounded shadow"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Reservations;
