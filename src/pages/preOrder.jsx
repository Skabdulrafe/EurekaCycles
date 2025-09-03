
import React, { useState } from "react";
import axios from "axios";

const PreOrder = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    Email: "",
    mobileNumber: "",
    Company: "",
    quantity: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://eurekacycles-backend.onrender.com/pre/addpreorder", formData);
      alert("Preorder submitted successfully!");
      console.log(res.data);
      setFormData({
        customerName: "",
        Email: "",
        mobileNumber: "",
        Company: "",
        quantity: ""
      });
    } catch (err) {
      console.error(err);
      alert("Error submitting preorder");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-bold tracking-widest text-gray-600">
            BULK ORDERS
          </h2>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            ZERO HASSLE!
          </h1>
          <p className="text-xl font-semibold text-red-600 mt-6">
            Looking for 25+ cycles?
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Let’s pedal forward together!
          </p>
          <p className="text-gray-600 mt-6">
            Reach out today and let’s make it happen.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            LET’S <span className="text-gray-700">PEDAL AWAY</span>
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:border-red-500 focus:outline-none py-2"
              required
            />
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Email id"
              className="w-full border-b border-gray-300 focus:border-red-500 focus:outline-none py-2"
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border-b border-gray-300 focus:border-red-500 focus:outline-none py-2"
              required
            />

            <input
              type="text"
              name="Company"
              value={formData.Company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full border-b border-gray-300 focus:border-red-500 focus:outline-none py-2"
              required
            />
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="No. of Cycles Required"
              className="w-full border-b border-gray-300 focus:border-red-500 focus:outline-none py-2"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;
