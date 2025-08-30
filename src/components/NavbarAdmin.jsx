
import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();

  // ✅ Logout Function
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token"); // ✅ Remove token
      navigate("/login"); // ✅ Redirect to login page
    }
  };

  // Fetch products when search query changes
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      axios
        .get(`http://localhost:5700/product/getproduct`)
        .then((response) => {
          const filteredProducts = response.data.filter((product) =>
            product.productName.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setSearchResults(filteredProducts);
          setShowResults(true);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleCategoryClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-indigo-600 text-white">
      {/* Top Navbar */}
      <nav
        style={{ background: "linear-gradient(to right, #343a40, #fd7e14)" }}
        className="flex justify-between items-center px-4 py-3"
      >
        <h1 className="text-lg font-bold text-gray-100">Eureka Cycles</h1>

        {/* Menu Items */}
        <ul className="hidden md:flex justify-between text-sm font-semibold space-x-4">
          {[
            { label: "HOME", path: "/" },
            { label: "ALL ORDERS", path: "/ALLORDERS" },
            { label: "ALL PRODUCTS", path: "/ALLPRODUCTS" },
            { label: "ALL USERS", path: "/ALLUSERS" },
            { label: "PRE ORDER REQUESTS", path: "/PREORDERREQUESTS" },
          ].map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="hover:text-gray-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side (Cart + Logout + Hamburger) */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          {/* <div className="relative">
            <Link to="/shoppingcart">
              <ShoppingBag size={24} className="text-white" />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              0
            </span>
          </div> */}

          {/* ✅ Logout Button (Always Visible) */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            <LogOut size={18} /> Logout
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="bg-blue-700 md:hidden">
          <ul className="flex flex-col text-center text-sm font-semibold space-y-2 py-4">
            {[
              { label: "HOME", path: "/" },
              { label: "ALL ORDERS", path: "/ALLORDERS" },
              { label: "ALL PRODUCTS", path: "/ALLPRODUCTS" },
              { label: "ALL USERS", path: "/ALLUSERS" },
              { label: "PRE ORDER REQUESTS", path: "/PREORDERREQUESTS" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block py-2 hover:bg-blue-800"
                  onClick={handleCategoryClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavbarAdmin;
