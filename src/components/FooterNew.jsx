import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const FooterNew = () => {
  return (
    <footer className="bg-[#343a40] mt-[1px] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            🚲 <span className="font-[cursive] text-[#fd7e14]">Eureka</span>
          </h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Discover the perfect cycle for your adventures. Quality bikes,
            exceptional service, endless possibilities.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#fd7e14] rounded-full hover:bg-white hover:text-[#343a40] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#fd7e14] rounded-full hover:bg-white hover:text-[#343a40] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-[#fd7e14] rounded-full hover:bg-white hover:text-[#343a40] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/homepage" className="hover:text-[#fd7e14]">Home</Link></li>
            <li><Link to="#" className="hover:text-[#fd7e14]">Shop</Link></li>
            <li><Link to="/aboutus" className="hover:text-[#fd7e14]">About Us</Link></li>
            <li><Link to="/customersupport" className="hover:text-[#fd7e14]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white">Categories</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/category/Men" className="hover:text-[#fd7e14]">Men</Link></li>
            <li><Link to="/category/women" className="hover:text-[#fd7e14]">Women</Link></li>
            <li><Link to="/category/kids" className="hover:text-[#fd7e14]">Kids</Link></li>
            <li><Link to="/category/accessories" className="hover:text-[#fd7e14]">Accessories</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-2 text-gray-300 hover:text-[#fd7e14] transition">
              <MdLocationOn className="text-lg text-[#fd7e14]" />
              123 Cycle Street, City, State 12345
            </li>
            <li className="flex items-center gap-2 text-gray-300 hover:text-[#fd7e14] transition">
              <MdPhone className="text-lg text-[#fd7e14]" />
              +91 9370223903
              <br />
              +91 9823019713
            </li>
            <li className="flex items-center gap-2 text-gray-300 hover:text-[#fd7e14] transition">
              <MdEmail className="text-lg text-[#fd7e14]" />
              info@eureka.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        2025 <span className="text-[#fd7e14]">Eureka Cycles</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterNew;