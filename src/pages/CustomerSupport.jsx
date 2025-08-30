import React from "react";

const CustomerSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      {/* Header */}
      <div className="max-w-4xl w-full text-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-600">
          Eureka Cycles - Customer Support
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          Need help? We’re here to assist you with your orders, products, and services.
        </p>
      </div>

      {/* Support Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Left Section: Info */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Reach out to our support team via phone, email, or by filling the form.  
            We’ll get back to you within 24 hours.
          </p>

          <ul className="space-y-4 text-gray-800">
            <li>
              📞 <span className="font-semibold">Phone:</span> +91 9370223903
            </li>
            <li>
              📧 <span className="font-semibold">Email:</span> support@eurekacycles.com
            </li>
            <li>
              🕒 <span className="font-semibold">Working Hours:</span> Mon - Sat, 9:00 AM - 7:00 PM
            </li>
            <li>
              📍 <span className="font-semibold">Address:</span> Eureka Cycles HQ, Bengaluru, India
            </li>
          </ul>
        </div>

        {/* Right Section: Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit a Query</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b border-gray-300 focus:border-red-500 focus:outline-none py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-b border-gray-300 focus:border-red-500 focus:outline-none py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border-b border-gray-300 focus:border-red-500 focus:outline-none py-2"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:border-red-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
