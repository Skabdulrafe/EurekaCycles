
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
        setData(response.data.products);

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
   const handleMainClick = () => {
    console.log("hello");
    alert("hello");
  };

  return (
    <div className="main"  onClick={handleMainClick}>
      <h1>Product Data</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="event-container">
        {data.map((obj, index) => (
          <div className="win" key={index}>
            {/* First image only */}
            {/* {obj.images && obj.images.length > 0 && (
              <img
                src={obj.images[0]}
                alt={`Product ${index}`}
                className="card-image"
              />
            )} */}
           <div className="flex items-center justify-between flex-wrap  gap-4">
             {obj.images.map((val,index)=>{
            
             return(<img src={val} alt=""  heigh="300px" width="300px"/>)
                
            })
            }
             </div>

            {/* Product details */}
            <p>{obj._id}</p>
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
