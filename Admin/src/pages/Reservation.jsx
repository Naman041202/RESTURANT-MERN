import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);

  // Fetch Reservations
  const fetchReservations = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/reservation/get`);
      setReservations(response.data);
    } catch (error) {
      toast.error("Error fetching reservations");
      console.log(error);
    }
  };

  // Delete Reservation
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${backendUrl}/api/reservation/delete/${id}`);
      toast.success(res.data.message || "Reservation removed");
      setReservations((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      toast.error("Error deleting reservation");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="w-full min-h-screen px-4 md:px-8 py-6 bg-[#f9f9f9]">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary text-center pb-5">
        Reservations
      </h2>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        {/* Table View - Desktop only */}
        <table className="hidden xl:table min-w-full text-sm sm:text-base text-left text-gray-700">
          <thead className="text-xs sm:text-sm text-white uppercase bg-secondary">
            <tr>
              <th className="px-4 sm:px-6 py-3">Name</th>
              <th className="px-4 sm:px-6 py-3">Email</th>
              <th className="px-4 sm:px-6 py-3">Phone</th>
              <th className="px-4 sm:px-6 py-3">Date</th>
              <th className="px-4 sm:px-6 py-3">Time</th>
              <th className="px-4 sm:px-6 py-3">Guests</th>
              <th className="px-4 sm:px-6 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {reservations.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500 font-medium">
                  No Reservations Found
                </td>
              </tr>
            ) : (
              reservations.map((res) => (
                <tr key={res._id} className="bg-white border-b hover:bg-gray-100 transition">
                  <td className="px-4 sm:px-6 py-4">{res.name}</td>
                  <td className="px-4 sm:px-6 py-4">{res.email}</td>
                  <td className="px-4 sm:px-6 py-4">{res.phone}</td>
                  <td className="px-4 sm:px-6 py-4">{res.date}</td>
                  <td className="px-4 sm:px-6 py-4">{res.time}</td>
                  <td className="px-4 sm:px-6 py-4">{res.guest}</td>
                  <td className="px-4 sm:px-6 py-4">
                    <button
                      onClick={() => handleDelete(res._id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Card View - Mobile & Tablet */}
        <div className="xl:hidden">
          {reservations.length === 0 ? (
            <p className="text-center py-6 text-gray-500 font-medium">
              No Reservations Found
            </p>
          ) : (
            reservations.map((res) => (
              <div
                key={res._id}
                className="border-b px-4 py-4 bg-white shadow-sm mb-2 rounded-lg"
              >
                <p className="text-sm"><span className="font-semibold text-secondary">Name:</span> {res.name}</p>
                <p className="text-sm"><span className="font-semibold text-secondary">Email:</span> {res.email}</p>
                <p className="text-sm"><span className="font-semibold text-secondary">Phone:</span> {res.phone}</p>
                <p className="text-sm"><span className="font-semibold text-secondary">Date:</span> {res.date}</p>
                <p className="text-sm"><span className="font-semibold text-secondary">Time:</span> {res.time}</p>
                <p className="text-sm"><span className="font-semibold text-secondary">Guests:</span> {res.guest}</p>
                <button
                  onClick={() => handleDelete(res._id)}
                  className="text-red-600 hover:text-red-800 transition mt-2 inline-flex items-center"
                >
                  <MdDelete size={20} className="mr-1" /> Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
