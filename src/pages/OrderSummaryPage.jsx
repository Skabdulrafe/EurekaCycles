import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const OrderSummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cart = [], subtotal = 0, totalAmount = 0, form = {} } = location.state || {};

  const deliveryCharge = subtotal >= 500 ? 0 : 30;
  const savedAmount = 950; // Example saved amount

  const handleOrderSubmit = async () => {
    try {
      const orderData = {
        customerName: form.name || "",
        mobileNumber: form.phone || "",
        alternateNumber: form.whatsapp || "",
        address: form.address || "",
        landmark: form.landmark || "",
        pincode: form.pincode || "",
        products: cart,
        totalAmount: totalAmount + deliveryCharge, // Include delivery charge
      };

      console.log("Sending Order Data:", orderData);

      const response = await axios.post(
        "https://eurekacycles-backend.onrender.com/order/saveorder",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Order saved:", response.data);

      // ✅ Clear cart from localStorage
      localStorage.removeItem("cart");

      // ✅ Success alert
      Swal.fire({
        icon: "success",
        title: "Order Successful",
        html: `
          <p>Your Order Id: <strong>${response.data._id}</strong></p>
          <p>Your Order Has Been Placed Successfully</p>
          <p>Our Team Will Contact You Shortly.</p>
        `,
        confirmButtonText: "Okay",
        confirmButtonColor: "#6b46c1",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Error placing order:", error);

      if (error.response) {
        Swal.fire("Error!", `Server Error: ${error.response.data.message || error.response.statusText}`, "error");
      } else if (error.request) {
        Swal.fire("Error!", "No response from server. Check your connection.", "error");
      } else {
        Swal.fire("Error!", "Something went wrong. Please try again.", "error");
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 flex flex-col lg:flex-row gap-8">
      {/* Left: Customer Details */}
      <div className="w-full lg:w-1/2 border p-4 rounded">
        <h1 className="text-2xl font-bold mb-4">Shipping Details</h1>
        <p><strong>Name:</strong> {form.name || "N/A"}</p>
        <p><strong>WhatsApp Number:</strong> {form.whatsapp || "N/A"}</p>
        <p><strong>Phone Number:</strong> {form.phone || "N/A"}</p>
        <p><strong>Landmark:</strong> {form.landmark || "N/A"}</p>
        <p><strong>Pin Code:</strong> {form.pincode || "N/A"}</p>
        <p><strong>Address Details:</strong> {form.address || "N/A"}</p>

        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="bg-green-600 text-white py-2 px-4 rounded"
            onClick={handleOrderSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Right: Cart Summary */}
      <div className="w-full lg:w-1/2 border p-4 rounded">
        <h2 className="text-xl font-bold">Cart Summary</h2>
        <p className="text-lg">Subtotal: <strong>₹{subtotal}</strong></p>
        <h3 className="text-lg font-semibold mt-2">Shipping</h3>
        <p className="text-blue-600">
          Delivery Charge {deliveryCharge > 0 ? `₹30 Below ₹500` : `Free Delivery Above ₹500`}
        </p>
        <p className="text-green-600 font-semibold">Saved Amount: <strong>₹{savedAmount}</strong></p>
        <p className="text-lg"><strong>Delivery Charge:</strong> ₹{deliveryCharge}</p>
        <hr className="my-2" />
        <p className="text-xl font-bold">Order Total: ₹{totalAmount + deliveryCharge}</p>
        <h3 className="text-lg font-semibold mt-2">Pay On Delivery</h3>
        <p className="text-sm">As of now, we deliver only in Nanded and nearby areas.</p>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
