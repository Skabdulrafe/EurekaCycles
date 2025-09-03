import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminShow = () => {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setMessage("");
      try {
        const url = "https://eurekacycles-backend.onrender.com/user/getallUser";

        // ✅ Get token from localStorage
        const token = JSON.parse(localStorage.getItem("token"));

        // ✅ API Call with Authorization
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // ✅ Assuming backend returns array of users
        setUserData(response.data || []);
        setMessage("Users fetched successfully!");
      } catch (error) {
        console.error("Fetch error:", error.response?.data || error.message);

        if (error.response?.status === 401) {
          setMessage("Unauthorized! Please log in again.");
        } else {
          setMessage(
            error.response?.data?.message ||
              "Failed to fetch users. Please try again."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
        Users Table
      </h2>

      {loading && <p className="text-center">Loading...</p>}
      {message && !loading && (
        <p className="mt-2 text-center text-green-500">{message}</p>
      )}

      {userData.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-200 border border-gray-700">
                <th className="border border-gray-700 p-2">User ID</th>
                <th className="border border-gray-700 p-2">First Name</th>
                <th className="border border-gray-700 p-2">Last Name</th>
                <th className="border border-gray-700 p-2">Mobile Number</th>
                <th className="border border-gray-700 p-2">Email</th>
                <th className="border border-gray-700 p-2">Shop Category</th>
                <th className="border border-gray-700 p-2">Shop Name</th>
                <th className="border border-gray-700 p-2">Shop Address</th>
                <th className="border border-gray-700 p-2">GST</th>
                <th className="border border-gray-700 p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 border border-gray-700"
                >
                  <td className="border border-gray-700 p-2 text-center">
                    {user._id}
                  </td>
                  <td className="border border-gray-700 p-2">
                    {user.firstName}
                  </td>
                  <td className="border border-gray-700 p-2">
                    {user.lastName}
                  </td>
                  <td className="border border-gray-700 p-2 text-center">
                    {user.mobileNumber}
                  </td>
                  <td className="border border-gray-700 p-2">{user.email}</td>
                  <td className="border border-gray-700 p-2">
                    {user.shopCategory || "N/A"}
                  </td>
                  <td className="border border-gray-700 p-2">
                    {user.shopName || "N/A"}
                  </td>
                  <td className="border border-gray-700 p-2">
                    {user.shopAddress || "N/A"}
                  </td>
                  <td className="border border-gray-700 p-2">{user.GST}</td>
                  <td className="border border-gray-700 p-2 text-center">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && userData.length === 0 && (
        <p className="text-center mt-4">No users found.</p>
      )}
    </div>
  );
};

export default AdminShow ;
