import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { TbTrash } from "react-icons/tb";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="px-3 sm:px-6 py-6 h-screen overflow-y-auto">
      <h2 className="text-3xl sm:text-3xl font-semibold text-center mb-8 text-secondary">
        All Products
      </h2>
      <div className="hidden md:grid grid-cols-5 gap-3 bg-light px-4 py-2 font-semibold text-sm rounded">
        <h5>Image</h5>
        <h5>Name</h5>
        <h5>Category</h5>
        <h5>Price</h5>
        <h5 className="text-right">Remove</h5>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {list.map((item) => (
          <div
            key={item._id}
            className="md:grid hidden md:grid-cols-5 gap-3 items-center bg-white px-4 py-3 rounded-lg shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 object-cover rounded-lg"
            />
            <h5 className="text-sm font-medium">{item.name}</h5>
            <p className="text-sm text-gray-700">{item.category}</p>
            <div className="text-sm font-medium">
              {currency}
              {Object.values(item.price)[0]}
            </div>
            <div className="flex justify-end">
              <TbTrash
                onClick={() => removeProduct(item._id)}
                className="text-red-600 hover:text-red-800 cursor-pointer text-xl"
              />
            </div>
          </div>
        ))}

        {/* Mobile version (visible only on small screens) */}
        {list.map((item) => (
          <div
            key={item._id}
            className="block md:hidden bg-white p-4 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h5 className="font-semibold text-base">{item.name}</h5>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
              <TbTrash
                onClick={() => removeProduct(item._id)}
                className="text-red-600 hover:text-red-800 cursor-pointer text-xl"
              />
            </div>
            <div className="text-sm text-gray-800 font-medium">
              Price: {currency}
              {Object.values(item.price)[0]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
