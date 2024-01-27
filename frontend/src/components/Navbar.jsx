import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <nav className="flex justify-around p-4 shadow-sm">
      <div className="flex gap-4 items-center">
        <img src={logo} alt="logo" />

        <p className="text-2xl font-semibold">Shopper</p>
      </div>
      <ul className="flex gap-4 items-center text-lg text-[#626262]">
        <li
          className={menu === "shop" ? "border-b-4 border-b-orange-500 mb-1 cursor-pointer" : "cursor-pointer"}
          onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
        </li>

        <li
          className={menu === "men" ? "border-b-4 border-b-orange-500 mb-1 cursor-pointer" : "cursor-pointer"}
          onClick={() => setMenu("men")}>
          <Link to="/men">Men</Link>
        </li>
        <li
          className={menu === "women" ? "border-b-4 border-b-orange-500 mb-1 cursor-pointer" : "cursor-pointer"}
          onClick={() => setMenu("women")}>
          <Link to="/women">Women</Link>
        </li>
        <li
          className={menu === "kids" ? "border-b-4 border-b-orange-500 mb-1 cursor-pointer" : "cursor-pointer"}
          onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
      <div className="flex items-center">
        <Link to="/login">
          <button className="border border-gray-500 py-2 px-4 rounded-lg mr-4">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="cart" />
        </Link>
        <div className="w-5 h-5 flex justify-center items-center -mt-9 -ml-1 bg-red-500 rounded-full text-white text-sm">
          0
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
