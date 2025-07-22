import React, { useState } from "react";
import upload_icon from "../assets/upload_icon.png";
import { TbTrash } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { backendUrl } from "../App"; // if it's defined there
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Curry");
  const [prices, setPrices] = useState([]);
  const [popular, setPopular] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const addSizePrice = () => {
    setPrices([...prices, { size: "", price: "" }]);
  };

  const handleSizePriceChange = (index, field, value) => {
    const updated = prices.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setPrices(updated);
  };

  const removeSizePrice = (index) => {
    setPrices(prices.filter((_, i) => i !== index));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("prices", JSON.stringify(prices));
      formData.append("category", category);
      formData.append("popular", popular);
      formData.append("image", image);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success === true || response.data.success === "true") {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrices([]);
        setImage(null);
        setPopular(false);
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-deep text-[#404040] px-4 py-4 overflow-hidden">
      <h2 className="bold-24 text-secondary mb-2">Add Product</h2>

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-3 text-sm">
        {/* Product Name */}
        <div>
          <label className="h5 mb-1 block">Product Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Write here.."
            className="px-3 py-1 ring-1 ring-slate-900/10 rounded bg-light w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="h5 mb-1 block">Product Description</label>
          <textarea
            rows={5}
            placeholder="Write here.."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-3 py-1 ring-1 ring-slate-900/10 rounded bg-light w-full"
          />
        </div>

        {/* Category and Image */}
        <div className="flex gap-3">
          <div className="w-1/2">
            <label className="h5 mb-1 block">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-1 ring-1 ring-slate-900/10 rounded bg-light w-full text-gray-700"
            >
              <option value="Curry">Curry</option>
              <option value="Rice">Rice</option>
              <option value="Pizza">Pizza</option>
              <option value="Deserts">Deserts</option>
              <option value="Drinks">Drinks</option>
              <option value="Fruits">Fruits</option>
            </select>
          </div>

          <div className="w-1/2">
            <label className="h5 mb-1 block">Upload Image</label>
            <label
              htmlFor="image"
              className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded bg-light h-20 cursor-pointer"
            >
              <img
                src={image ? URL.createObjectURL(image) : upload_icon}
                alt="Upload"
                className="h-6 w-6 opacity-60"
              />
              <input
                onChange={handleImageChange}
                type="file"
                id="image"
                hidden
              />
            </label>
          </div>
        </div>

        {/* Sizes & Pricing */}
        <div>
          <label className="h5 mb-1 block">Sizes & Pricing</label>
          <div className="flex flex-col gap-2">
            {prices.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Size"
                  value={item.size}
                  onChange={(e) =>
                    handleSizePriceChange(index, "size", e.target.value)
                  }
                  className="px-2 py-1 ring-1 ring-slate-900/10 rounded bg-light w-24"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={item.price}
                  min={0}
                  onChange={(e) =>
                    handleSizePriceChange(index, "price", e.target.value)
                  }
                  className="px-2 py-1 ring-1 ring-slate-900/10 rounded bg-light w-24"
                />
                <button
                  type="button"
                  onClick={() => removeSizePrice(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <TbTrash className="text-lg" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSizePrice}
              className="flex items-center gap-1 text-secondary text-sm"
            >
              <FaPlus className="text-base" />
              Add Sizing
            </button>
          </div>
        </div>

        {/* Popular */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="popular"
            checked={popular}
            onChange={() => setPopular((prev) => !prev)}
          />
          <label htmlFor="popular" className="text-sm font-medium">
            Add to Popular
          </label>
        </div>

        {/* Submit */}
        <div>
          <button type="submit" className="btn-dark w-full sm:w-40 py-1.5">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
