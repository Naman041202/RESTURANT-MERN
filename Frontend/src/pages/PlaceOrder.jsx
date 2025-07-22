import React, { useContext, useState } from "react";
import CartTotal from "../Components/CartTotal";
import Footer from "../Components/Footer";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    navigate,
    backendUrl,
    cartItems,
    getCartAmount,
    delivery_charges,
    foods,
    token,
    setCartItems,
  } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    country: "",
    state: "",
    zipcode: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              foods.find((food) => food._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_charges,
      };
      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
        case "stripe":
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <section className="max-padd-container mt-24 max-sm:mt-10 max-sm:px-4">
        {/* container */}
        <form onSubmit={onSubmitHandler} className="py-6 max-sm:py-3">
          <div className="flex flex-col xl:flex-row gap-20 xl:gap-28 max-sm:gap-10">
            {/* left side */}
            <div className="flex flex-1 flex-col gap-3 text-[95%]">
              <h3 className="text-3xl font-semibold pb-6 max-sm:text-xl max-sm:pb-3 pt-7">
                Delivery Information
              </h3>

              <div className="flex gap-3 max-sm:flex-col">
                <input
                  required
                  onChange={onChangeHandler}
                  value={formData.firstName}
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none max-sm:text-sm"
                />
                <input
                  required
                  onChange={onChangeHandler}
                  value={formData.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none max-sm:text-sm"
                />
              </div>

              <input
                required
                onChange={onChangeHandler}
                value={formData.email}
                type="email"
                name="email"
                placeholder="Email"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none max-sm:text-sm"
              />

              <input
                required
                onChange={onChangeHandler}
                value={formData.phone}
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none max-sm:text-sm"
              />

              <input
                required
                onChange={onChangeHandler}
                value={formData.street}
                type="text"
                name="street"
                placeholder="Street"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none max-sm:text-sm"
              />

              <div className="flex gap-3 max-sm:flex-col">
                <input
                  required
                  onChange={onChangeHandler}
                  value={formData.city}
                  type="text"
                  name="city"
                  placeholder="City"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none max-sm:text-sm"
                />
                <input
                  required
                  onChange={onChangeHandler}
                  value={formData.state}
                  type="text"
                  name="state"
                  placeholder="State"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none max-sm:text-sm"
                />
              </div>

              <div className="flex gap-3 max-sm:flex-col">
                <input
                  required
                  onChange={onChangeHandler}
                  value={formData.zipcode}
                  type="text"
                  name="zipcode"
                  placeholder="Zip Code"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none max-sm:text-sm"
                />
                <input
                  required
                  onChange={onChangeHandler}
                  value={formData.country}
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-deep outline-none max-sm:text-sm"
                />
              </div>
            </div>

            {/* right side */}
            <div className="flex flex-1 flex-col">
              <CartTotal />

              {/* payment */}
              <div className="flex-1 flex-col mt-6 max-sm:mt-4">
                <h3 className="text-xl font-semibold mb-4 max-sm:text-lg max-sm:mb-2">
                  Payment Method
                </h3>

                <div className="flex gap-3 max-sm:flex-col">
                  <div
                    onClick={() => setMethod("stripe")}
                    className={`btn ${
                      method === "stripe" ? "btn-secondary" : "btn-outline"
                    } !py-1 text-xs cursor-pointer max-sm:text-sm`}
                  >
                    Stripe
                  </div>

                  <div
                    onClick={() => setMethod("cod")}
                    className={`btn ${
                      method === "cod" ? "btn-secondary" : "btn-outline"
                    } !py-1 !px-3 text-xs cursor-pointer max-sm:text-sm`}
                  >
                    Cash on Delivery
                  </div>
                </div>

                <div className="mt-6 max-sm:mt-4">
                  <button
                    type="submit"
                    className="btn-dark rounded text-sm max-sm:w-full"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default PlaceOrder;
