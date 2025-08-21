// // 



import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../assets/new.css"; // Make sure the path is correct

const GetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrderData = () => {
    setLoading(true);
    setError(null);
    axios
      .get("http://localhost:5700/product/getproduct")
      .then((response) => {
        setData(response.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch product data");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrderData(); // Fetch on mount
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
            <p><strong>Name:</strong> {obj.name}</p>
            <p><strong>Brand:</strong> {obj.brand}</p>
            <p><strong>Model:</strong> {obj.model}</p>
            <p><strong>MRP:</strong> {obj.price?.mrp}</p>
            <p><strong>Offer:</strong> {obj.price?.offer}</p>
            <p><strong>Availability:</strong> {obj.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetData;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const GetData = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchOrderData = () => {
//     setLoading(true);
//     setError(null);
//     axios
//       .get("http://localhost:5700/product/getproduct")
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setError("Failed to fetch product data");
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchOrderData();
//   }, []);

//   return (
//     <div className="main">
//       <h1>Product Data (Raw JSON)</h1>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Show the entire JSON data */}
//       <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "8px" }}>
//         {JSON.stringify(data, null, 2)}
//       </pre>
//     </div>
//   );
// };

// export default GetData;
