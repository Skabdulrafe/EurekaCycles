import React from "react";
import { FaTruck, FaCreditCard, FaComments } from "react-icons/fa";
import { Globe } from "lucide-react"; // for world icon

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top icons row */}
      <div className="bg-indigo-700 flex flex-wrap justify-around items-center py-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <FaCreditCard size={28} />
          <span className="font-semibold">FLEXIBLE PAYMENTS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaTruck size={28} />
          <span className="font-semibold">DOORSTEP DELIVERY</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaComments size={28} />
          <span className="font-semibold">VIRTUAL EXPERT ASSISTANCE</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Globe size={28} />
          <span className="font-semibold">WORLD’S NO.1 CYCLING BRAND</span>
        </div>
      </div>

      {/* Links row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 py-10">
        <div>
          <h3 className="font-bold mb-3">WHO WE ARE?</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Our Story</li>
            <li>About us</li>
            <li>Events & Community</li>
            <li>Hero Sprint Store</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">OUR PRODUCTS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Mountain</li>
            <li>City</li>
            <li>Women</li>
            <li>Kids</li>
            <li>E-Cycles</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">OUR POLICIES</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Privacy Policy</li>
            <li>Order Policy</li>
            <li>Warranty Policy</li>
            <li>Terms and Conditions</li>
            <li>Investors</li>
            <li>CSR</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">OTHER LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Store Locator</li>
            <li>Warranty Registration</li>
            <li>Riders Zone Overview</li>
            <li>Blogs</li>
            <li>News</li>
            <li>FAQs</li>
            <li>Sitemap</li>
            <li>Cycle Hero Hai</li>
            <li>Corporate Order</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer