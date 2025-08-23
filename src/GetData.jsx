import React, { useEffect, useState } from "react";
import axios from "axios";

const GetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrderData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("http://localhost:5700/product/getproduct");

      console.log("API Response:", res.data); // 👈 check structure here

      // Adjust this based on actual response
      if (Array.isArray(res.data.products)) {
        setData(res.data.products);
      } else if (Array.isArray(res.data.data)) {
        setData(res.data.data);
      } else if (Array.isArray(res.data)) {
        setData(res.data);
      } else {
        setError("Unexpected API response format");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  return (
    <div className="main">
      <h1>Product Data</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="event-container">
        {data.map((obj, index) => (
          <div className="win" key={index}>
            {/* First image only */}
            {obj.images && obj.images.length > 0 && (
              <img
                src={obj.images[0]}
                alt={`Product ${index}`}
                className="card-image"
              />
            )}

            {/* Product details */}
            <p>
              <strong>Name:</strong> {obj.name}
            </p>
            <p>
              <strong>Brand:</strong> {obj.brand}
            </p>
            <p>
              <strong>Model:</strong> {obj.model}
            </p>
            <p>
              <strong>MRP:</strong> {obj.price?.mrp}
            </p>
            <p>
              <strong>Offer:</strong> {obj.price?.offer}
            </p>
            <p>
              <strong>Availability:</strong> {obj.availability}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetData;