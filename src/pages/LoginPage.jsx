
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa"; // Import profile icon

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // React Router Navigation

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5700/user/login";

    try {
      const res = await axios.post(url, formData, {
        headers: { "Content-Type": "application/json" },
      });

      localStorage.setItem("token", JSON.stringify(res.data.token));
      setIsLoggedIn(true); // Update state after successful login

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are being redirected...",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.response?.data?.message || "Invalid email or password. Please try again.",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[800px]">
        {/* Left Section */}
        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Sign In</h2>

          {isLoggedIn ? (
            <div className="flex flex-col items-center">
              <FaUserCircle className="text-6xl text-gray-600 mb-4" />
              <p className="text-lg font-semibold">Shaikh Abdul Rafe</p>
              <p className="text-lg font-semibold">Welcome Back!</p>
              <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-600 font-medium">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Sign In
              </button>
              <p className="text-center text-sm mt-4">
                Not a user?{" "}
                <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/register")}>
                  Register
                </span>
              </p>
            </form>
          )}
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-black flex flex-col items-center justify-center text-white p-6">
          <h2 className="text-2xl font-bold text-center">Welcome To Tekisky Mart!</h2>
          <p className="text-center text-sm mt-2">User Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;