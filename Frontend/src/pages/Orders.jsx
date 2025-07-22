import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const allOrderItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrderItem.push(item);
          });
        });
        setOrderData(allOrderItem.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="max-padd-container mt-24">
      <div className="pt-5 pb-20">
        <h3 className="text-3xl text-secondary mb-4">Orders List</h3>
        {orderData.map((item, i) => (
          <div key={i} className="p-4 rounded-xl bg-deep mt-4 text-gray-700">
            <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-4">
              {/* Left: Image and Info */}
              <div className="flex gap-x-3 flex-1">
                <div className="flexCenter p-2 bg-light rounded-lg">
                  <img src={item.image} alt="" className="w-16" />
                </div>

                <div className="w-full">
                  <h5 className="h5 capitalize line-clamp-1">{item.name}</h5>
                  <div className="text-xs mt-1 space-y-1">
                    {/* Price, Quantity, Size in one row */}
                    <div className="flex gap-x-6">
                      <div className="flex items-center gap-x-2">
                        <span className="font-medium">Price:</span>
                        <span>
                          {currency}
                          {item.price[item.size]}
                        </span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span className="font-medium">Quantity:</span>
                        <span>{item.quantity}</span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span className="font-medium">Size:</span>
                        <span>{item.size}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <span className="font-medium">Date:</span>
                      <span className="text-gray-6  00">
                        {new Date(item.date).toDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <span className="font-medium">Payment:</span>
                      <span className="text-gray-600">
                        {item.paymentMethod}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Status & Button */}
              <div className="flex flex-col justify-between items-end sm:w-[160px]">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <span className="text-gray-700">{item.status}</span>
                </div>
                <button
                  onClick={loadOrderData}
                  className="btn-secondary !p-1 !px-5 mt-2"
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
