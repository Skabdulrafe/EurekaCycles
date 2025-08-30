import React, { useEffect, useState } from "react";
import axios from "axios";

const PreorderTable = () => {
  const [preorders, setPreorders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPreorders = async () => {
      try {
        // get token from localStorage
        const token = JSON.parse(localStorage.getItem("token"));

        if (!token) {
          setError("No token found. Please log in.");
          return;
        }

        // attach token in Authorization header
        const res = await axios.get("http://localhost:5700/pre/getpreorder", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPreorders(res.data);
        console.log(res.data)
      } catch (err) {
        console.error("Error fetching preorders", err);
        if (err.response?.status === 401) {
          setError("Unauthorized: Please log in.");
        } else if (err.response?.status === 403) {
          setError("Forbidden: Invalid token.");
        } else {
          setError("Failed to load preorders.");
        }
      }
    };

    fetchPreorders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Preorders</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <table className="min-w-full bg-white border rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Mobile</th>
            <th className="py-2 px-4 border">Company</th>
            <th className="py-2 px-4 border">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {preorders.length > 0 ? (
            preorders.map((order, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{order.customerName}</td>
                <td className="py-2 px-4 border">{order.Email}</td>
                <td className="py-2 px-4 border">{order.mobileNumber}</td>
                <td className="py-2 px-4 border">{order.Company}</td>
                <td className="py-2 px-4 border">{order.quantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="py-4 px-4 text-center text-gray-500 border"
              >
                No preorders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PreorderTable;
