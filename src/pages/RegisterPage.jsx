
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobileNumber: "",
  });

  // Email validation to prevent multiple .com or similar cases
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const multipleDotsRegex = /(\.[a-zA-Z]{2,})\1+/; // Detects repeated domain extensions
    return emailRegex.test(email) && !multipleDotsRegex.test(email);
  };

  const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile); // Indian mobile number format

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setErrors({ ...errors, email: validateEmail(value) ? "" : "Invalid email format" });
    }
    if (name === "mobileNumber") {
      setErrors({ ...errors, mobileNumber: validateMobile(value) ? "" : "Invalid mobile number" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.email || errors.mobileNumber) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please correct the errors before submitting.",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5700/user/createuser",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Your account has been created successfully!",
      });

      console.log("Registration successful", response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Something went wrong. Please try again.",
      });

      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 bg-orange-600 flex flex-col items-center justify-center p-8">
          <h2 className="text-white text-3xl font-bold text-center">Welcome to Eureka Cycles!</h2>
          <p className="text-white mt-2 text-center">Admin / Seller Dashboard</p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 border rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 border rounded"
                required
              />
            </div>

            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-black transition duration-200"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

