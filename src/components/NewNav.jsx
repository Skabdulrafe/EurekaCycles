// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ShoppingCart, User } from "lucide-react";

// export default function NewNav() {
//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 50 }}
//       className="top-0 left-0 w-full z-50 shadow-lg"
//       style={{
//         background: "linear-gradient(to right, #343a40, #fd7e14)", // Secondary → Accent gradient
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-white tracking-wide">
//           Eureka Cycles
//         </h1>

//         {/* Links */}
//         <ul className="flex space-x-8 text-white font-medium">
//           <li className="hover:text-[#fd7e14] transition"><Link to="/homepage">Home</Link></li>
//           <li className="hover:text-[#fd7e14] transition"><Link to='/'>Products</Link></li>
//           <li className="hover:text-[#fd7e14] transition" ><a href="/Aboutus">About</a></li>
//           <li className="hover:text-[#fd7e14] transition"><Link to='/customersupport'>Contact Us</Link></li>
//         </ul>

//         {/* Button */}
//         <div className="flex justify-between space-x-6">

//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }} 
//           className="text-white "
//           >
//           <Link to='/shoppingcart'>
//             <ShoppingCart  />
//           </Link>          
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           //   className="bg-white text-[#343a40] px-4 py-2 rounded-full shadow-md hover:bg-[#fd7e14] hover:text-white transition"
//           className="text-white"
//           >
//           <Link to='/login'>
//             <User />
//           </Link>
//         </motion.div>

        
//             </div>
//       </div>
//     </motion.nav>
//   );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

export default function NewNav() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="top-0 left-0 w-full z-50 shadow-lg"
      style={{
        background: "linear-gradient(to right, #343a40, #fd7e14)", // Secondary → Accent gradient
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Eureka Cycles
        </h1>

        {/* Links */}
        <ul className="flex space-x-8 text-white font-medium relative">
          <li className="hover:text-[#fd7e14] transition">
            <Link to="/homepage">Home</Link>
          </li>

          {/* Products with Dropdown */}
          <li
            className="relative hover:text-[#fd7e14] transition"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="cursor-pointer">Products</span>

            {/* Dropdown */}
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
          </li>

          <li className="hover:text-[#fd7e14] transition">
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li className="hover:text-[#fd7e14] transition">
            <Link to="/customersupport">Contact Us</Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex justify-between space-x-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white"
          >
            <Link to="/shoppingcart">
              <ShoppingCart />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white"
          >
            <Link to="/login">
              <User />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
