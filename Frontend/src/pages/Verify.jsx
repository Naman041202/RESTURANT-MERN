import React, { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const Verify = () => {
  const { token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const success = searchParams.get("success");
  const orderId = searchParams.get("OrderId");

  const verifyPayment = async () => {
    try {
      console.log("Verifying", { success, orderId, token });

      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      toast.error("Verification failed");
      navigate("/cart");
    }
  };

  useEffect(() => {
    if (token) verifyPayment();
  }, [token]);

  return <div>Verifying Payment...</div>;
};

export default Verify;
