import React, { useState, useEffect } from "react";
import axios from "axios";

const Show = () => {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setMessage("");
      try {
        const url = "http://localhost:5700/product/getproduct"; // ✅ API URL
        const response = await axios.get(url);
        setUserData(response.data);
        setMessage("Data fetched successfully!");
      } catch (error) {
        console.error("Fetch error:", error.response?.data || error.message);
        setMessage(
          error.response?.data?.message || "Failed to fetch data. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData(); //  Call on mount
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
        Product Table Data
      </h2>

      {loading && <p className="text-center">Loading...</p>}
      {message && !loading && <p className="mt-2 text-center text-green-500">{message}</p>}

      {userData.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-200 border border-gray-700">
                <th className="border border-gray-700 p-2">Product ID</th>
                <th className="border border-gray-700 p-2">Product Name</th>
                <th className="border border-gray-700 p-2">Brand</th>
                <th className="border border-gray-700 p-2">Price</th>
                <th className="border border-gray-700 p-2">Offer Price</th>
                <th className="border border-gray-700 p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((val, index) => (
                <tr key={index} className="hover:bg-gray-100 border border-gray-700">
                  <td className="border border-gray-700 p-2 text-center">{val._id}</td>
                  <td className="border border-gray-700 p-2">{val.name}</td>
                  <td className="border border-gray-700 p-2 text-center">{val.brand}</td>
                  <td className="border border-gray-700 p-2 text-center">{val.price?.mrp ?? "N/A"}</td>
                  <td className="border border-gray-700 p-2 text-center">{val.price?.offer ?? "N/A"}</td>
                  <td className="border border-gray-700 p-2 text-center">
                    {val.createdAt ? new Date(val.createdAt).toLocaleString() : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && userData.length === 0 && (
        <p className="text-center mt-4">No products found.</p>
      )}
    </div>
  );
};

export default Show;
