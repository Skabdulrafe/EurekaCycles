
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, subtotal, totalAmount } = location.state || {};

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    phone: "",
    address: "",
    landmark: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({
    whatsapp: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Validate whatsapp and phone for 10-digit number
    if ((name === "whatsapp" || name === "phone") && !/^\d{10}$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Enter a valid 10-digit number",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate before navigating
    if (!/^\d{10}$/.test(form.whatsapp) || !/^\d{10}$/.test(form.phone)) {
      return;
    }

    navigate("/order-summary", {
      state: { cart, subtotal, totalAmount, form },
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Enter Shipping Details
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="border p-2 w-full rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <div>
          <input
            type="text"
            name="whatsapp"
            placeholder="Enter Your WhatsApp Number"
            className="border p-2 w-full rounded"
            value={form.whatsapp}
            onChange={handleChange}
            required
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-sm">{errors.whatsapp}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            className="border p-2 w-full rounded"
            value={form.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <input
          type="text"
          name="landmark"
          placeholder="Enter Landmark"
          className="border p-2 w-full rounded"
          value={form.landmark}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="pincode"
          placeholder="Enter Pincode"
          className="border p-2 w-full rounded"
          value={form.pincode}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Enter Address Details"
          className="border p-2 w-full rounded"
          value={form.address}
          onChange={handleChange}
          required
        />
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-600 text-white py-2 px-4 rounded"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
            disabled={errors.whatsapp || errors.phone}
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
