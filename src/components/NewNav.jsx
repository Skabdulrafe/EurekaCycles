
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const NewNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="top-0 left-0 w-full z-50 shadow-lg"
      style={{
        background: "linear-gradient(to right, #343a40, #fd7e14)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Eureka Cycles
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium relative">
          <li className="hover:text-[#fd7e14] transition">
            <Link to="/">Home</Link>
          </li>

          {/* Products with Dropdown */}
          <li
            className="relative hover:text-[#fd7e14] transition"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="cursor-pointer">Products</span>

            <AnimatePresence>
              {showDropdown && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 left-0 mt-0.5 w-40 bg-white text-gray-800 rounded-lg shadow-lg py-2"
                >
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/category/men">Men</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/category/women">Women</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/category/kids">Kids</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/category/accessories">Accessories</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="hover:text-[#fd7e14] transition">
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li className="hover:text-[#fd7e14] transition">
            <Link to="/customersupport">Contact Us</Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="text-white">
            <Link to="/shoppingcart">
              <ShoppingCart />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="text-white">
            <Link to="/login">
              <User />
            </Link>
          </motion.div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden text-white">
            {mobileMenu ? (
              <X size={28} onClick={() => setMobileMenu(false)} className="cursor-pointer" />
            ) : (
              <Menu size={28} onClick={() => setMobileMenu(true)} className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#343a40] text-white px-6 py-4 space-y-4"
          >
            <Link to="/" onClick={() => setMobileMenu(false)} className="block">
              Home
            </Link>
            <details className="block">
              <summary className="cursor-pointer">Products</summary>
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/category/men" onClick={() => setMobileMenu(false)}>Men</Link>
                <Link to="/category/women" onClick={() => setMobileMenu(false)}>Women</Link>
                <Link to="/category/kids" onClick={() => setMobileMenu(false)}>Kids</Link>
                <Link to="/category/accessories" onClick={() => setMobileMenu(false)}>Accessories</Link>
              </div>
            </details>
            <Link to="/Aboutus" onClick={() => setMobileMenu(false)} className="block">
              About Us
            </Link>
            <Link to="/customersupport" onClick={() => setMobileMenu(false)} className="block">
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NewNav;
