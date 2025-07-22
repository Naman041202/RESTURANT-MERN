import React, { useEffect, useState } from "react";
import axios from "axios";
import { TfiPackage } from "react-icons/tfi";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const currency = "₹";

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="px-2 sm:px-8 py-12 h-screen">
      <h2 className="text-3xl sm:text-3xl font-semibold text-center mb-8 text-secondary">
        All Orders
      </h2>

      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[0.5fr_2fr_1fr_0.5fr_1fr] gap-4 items-start p-3 text-gray-700 bg-light rounded-lg"
          >
            <div className="hidden xl:block rounded-lg h-20 w-20 p-6 bg-deep">
              <TfiPackage className="text-3xl text-secondary" />
            </div>

            <div>
              <div className="flex items-start gap-1">
                <div className="medium-15">Items:</div>
                <div className="flex flex-col relative top-0.5">
                  {order.items.map((item, index) => (
                    <p key={index}>
                      {item.name} X {item.quantity}{" "}
                      <span>"{item.size}"</span>
                    </p>
                  ))}
                </div>
              </div>

              <p>
                <span className="text-tertiary medium-14">Name:</span>{" "}
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <p>
                <span className="text-tertiary medium-14">Address:</span>{" "}
                <span>
                  {order.address.street + ", " + order.address.city + ", " +
                    order.address.state + ", " + order.address.country + ", " +
                    order.address.zipcode}
                </span>
              </p>
              <p>{order.address.phone}</p>
            </div>

            <div>
              <p>
                <span className="text-tertiary medium-14">Total:</span>{" "}
                {order.items.length}
              </p>
              <p>
                <span className="text-tertiary medium-14">Method:</span>{" "}
                {order.paymentMethod}
              </p>
              <p>
                <span className="text-tertiary medium-14">Payment:</span>{" "}
                {order.payment ? "Done" : "Pending"}
              </p>
              <p>
                <span className="text-tertiary medium-14">Date:</span>{" "}
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>

            <p>
              <span className="text-tertiary medium-14">Price:</span>{" "}
              {currency}
              {order.amount}
            </p>

            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
              className="p-1 ring-1 ring-slate-900/5 rounded max-w-36 bg-deep text-xs font-semibold"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
