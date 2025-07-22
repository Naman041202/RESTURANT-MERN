import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Verify from "./pages/Verify";
import Reservations from "./pages/Reservations";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function app() {
  return (
    <main className="overflow-hidden bg-light text-[#404040] h1">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="verify" element={<Verify />} />
        <Route path="reservations" element={<Reservations />} />
      </Routes>
    </main>
  );
}
