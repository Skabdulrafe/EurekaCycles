
import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowOrders = () => {
  const [orderData, setOrderData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setMessage("");
      try {
        const url = "https://eurekacycles-backend.onrender.com/order/getAllOrders";

        // ✅ Get token from localStorage
        const token = JSON.parse(localStorage.getItem("token"));

        // ✅ Include Authorization header
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // ✅ Assuming backend returns { orders: [...] }
        setOrderData(response.data || []);
        setMessage("Orders fetched successfully!");
      } catch (error) {
        console.error("Fetch error:", error.response?.data || error.message);

        if (error.response?.status === 401) {
          setMessage("Unauthorized! Please log in again.");
        } else {
          setMessage(
            error.response?.data?.message ||
              "Failed to fetch orders. Please try again."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
        Orders Table
      </h2>

      {loading && <p className="text-center">Loading...</p>}
      {message && !loading && (
        <p className="mt-2 text-center text-green-500">{message}</p>
      )}

      {orderData.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-200 border border-gray-700">
                <th className="border border-gray-700 p-2">Order ID</th>
                <th className="border border-gray-700 p-2">Customer Name</th>
                <th className="border border-gray-700 p-2">Mobile Number</th>
                <th className="border border-gray-700 p-2">Alternate Number</th>
                <th className="border border-gray-700 p-2">Address</th>
                <th className="border border-gray-700 p-2">Landmark</th>
                <th className="border border-gray-700 p-2">Pincode</th>
                <th className="border border-gray-700 p-2">Total Amount</th>
                <th className="border border-gray-700 p-2">Order Status</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 border border-gray-700"
                >
                  <td className="border border-gray-700 p-2 text-center">
                    {order._id}
                  </td>
                  <td className="border border-gray-700 p-2">
                    {order.customerName}
                  </td>
                  <td className="border border-gray-700 p-2 text-center">
                    {order.mobileNumber}
                  </td>
                  <td className="border border-gray-700 p-2 text-center">
                    {order.alternateNumber || "N/A"}
                  </td>
                  <td className="border border-gray-700 p-2">
                    {order.address}
                  </td>
                  <td className="border border-gray-700 p-2">
                    {order.landmark || "N/A"}
                  </td>
                  <td className="border border-gray-700 p-2 text-center">
                    {order.pincode || "N/A"}
                  </td>
                  <td className="border border-gray-700 p-2 text-center">
                    {order.totalAmount}
                  </td>
                  <td className="border border-gray-700 p-2 text-center">
                    {order.orderStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && orderData.length === 0 && (
        <p className="text-center mt-4">No orders found.</p>
      )}
    </div>
  );
};

export default ShowOrders;
