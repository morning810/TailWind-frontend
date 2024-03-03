import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { toast } from "react-toastify";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const handleHome = () => {
    console.log("Home");
    toast.warn("Home clicked");
  };
  const handleCompany = () => {
    toast.warn("Company clicked");
  };
  const handleResources = () => {
    toast.warn("Resources clicked");
  };
  const handleAbout = () => {
    toast.warn("About clicked");
  };
  const handleContact = () => {
    toast.warn("Contact clicked");
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", onClick: handleHome },
    { id: 2, text: "Company", onClick: handleCompany },
    { id: 3, text: "Resources", onClick: handleResources },
    { id: 4, text: "About", onClick: handleAbout },
    { id: 5, text: "Contact", onClick: handleContact }
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={item.onClick}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={item.onClick}
          >
            {item.text}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
