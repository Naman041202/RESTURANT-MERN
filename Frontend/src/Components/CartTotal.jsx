import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, delivery_charges, getCartAmount } = useContext(ShopContext);
  return (
    <div>
      <h4 className="h3">Cart Total</h4>
      <div className="flexBetween pt-3 ">
        <h5 className="h5">SubTotal:</h5>
        <p className="h5">
          {currency}
          {getCartAmount()}.00
        </p>
      </div>
      <hr className="w-full border-t border-gray-900/20 my-1" />
      <div className="flexBetween pt-3">
        <h5 className="h5">Shipping Charges:</h5>
        <p className="h5">
          {" "}
          {currency}
          {getCartAmount() === 0 ? "0.00" : `${delivery_charges}.00`}
        </p>
      </div>
      <hr className="w-full border-t border-gray-900/20 my-1" />
      <div className="flexBetween pt-3">
        <h5 className="h5">Total:</h5>
        <p className="h5">
          {currency}
          {getCartAmount() === 0 ? "0" : getCartAmount() + delivery_charges}.00
        </p>
      </div>
      <hr className="w-full border-t border-gray-900/20 my-1" />
    </div>
  );
};

export default CartTotal;
