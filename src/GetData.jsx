
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // // import "../assets/new.css"; // Make sure the path is correct

// // // const GetData = () => {
// // //   const [data, setData] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const fetchOrderData = () => {
// // //     setLoading(true);
// // //     setError(null);
// // //     axios
// // //       .get("http://localhost:5700/product/getproduct")
// // //       .then((response) => {
// // //         setData(response.data);

// // //         setLoading(false);
// // //       })
// // //       .catch((err) => {
// // //         console.log(err);
// // //         setError("Failed to fetch product data");
// // //         setLoading(false);
// // //       });
// // //   };

// // //   useEffect(() => {
// // //     fetchOrderData(); // Fetch on mount
// // //   }, []);

// // //    const handleMainClick = () => {
// // //     console.log("hello");
// // //     alert("hello");
// // //   };

// // //   return (
// // //     <div className="main"  onClick={handleMainClick}>
// // //       <h1 className="bg-blue-400">Product Data</h1>

// // //       {loading && <p>Loading...</p>}
// // //       {error && <p className="bg-red-400">{error}</p>}

// // //       <div className="event-container">
// // //         {data.map((obj, index) => (
// // //           <div className="win" key={index}>
// // //            <div className="flex items-center justify-between flex-wrap  gap-4">
// // //              {obj.images.map((val,index)=>{
            
// // //              return(<img src={val} alt=""  heigh="300px" width="300px"/>)
                
// // //             })
// // //             }
// // //              </div>

// // //             {/* Product details */}
// // //             <p>{obj._id}</p>
// // //             <p><strong>Name:</strong> {obj.name}</p>
// // //             <p><strong>Brand:</strong> {obj.brand}</p>
// // //             <p><strong>Model:</strong> {obj.model}</p>
// // //             <p><strong>MRP:</strong> {obj.price?.mrp}</p>
// // //             <p><strong>Offer:</strong> {obj.price?.offer}</p>
// // //             <p><strong>Availability:</strong> {obj.availability}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // //  export default GetData;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const GetData = () => {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const fetchOrderData = () => {
// //     setLoading(true);
// //     setError(null);
// //     axios
// //       .get("http://localhost:5700/product/getproduct")
// //       .then((response) => {
// //         setData(response.data);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //         setError("Failed to fetch product data");
// //         setLoading(false);
// //       });
// //   };

// //   useEffect(() => {
// //     fetchOrderData(); // Fetch on mount
// //   }, []);

// //   return (
// //     <div className="main">
// //       <h1 className="bg-blue-400 text-white p-4">Product Data</h1>

// //       {loading && <p>Loading...</p>}
// //       {error && <p className="bg-red-400">{error}</p>}

// //       <div className="event-container grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
// //         {data.map((obj, index) => (
// //           <div
// //             className="win border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer"
// //             key={index}
// //             onClick={() => navigate(`/product/${obj._id}`)} // ✅ Navigate with ID
// //           >
// //             <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
// //               {obj.images.map((val, index) => (
// //                 <img
// //                   key={index}
// //                   src={val}
// //                   alt=""
// //                   height="200px"
// //                   width="200px"
// //                   className="rounded-lg"
// //                 />
// //               ))}
// //             </div>

// //             <p className="text-gray-600 text-sm">{obj._id}</p>
// //             <p><strong>Name:</strong> {obj.name}</p>
// //             <p><strong>Brand:</strong> {obj.brand}</p>
// //             <p><strong>Model:</strong> {obj.model}</p>
// //             <p><strong>MRP:</strong> {obj.price?.mrp}</p>
// //             <p><strong>Offer:</strong> {obj.price?.offer}</p>
// //             <p><strong>Availability:</strong> {obj.availability}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default GetData;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5700/product/getproduct")
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-10 text-gray-500">Loading products...</p>;
//   }

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {products.map((product) => {
//         const discountedPrice = product.price.mrp - product.price.offer;

//         return (
//           <div
//             key={product._id}
//             className="w-full bg-white shadow-lg rounded-xl overflow-hidden border"
//           >
//             {/* Header */}
//             <div className="bg-red-700 text-white font-bold text-sm px-4 py-1 flex justify-between">
//               <span>{product.brand.toUpperCase()}</span>
//               <span className="bg-red-500 px-2 rounded-full text-xs">BEST SELLER</span>
//             </div>

//             {/* Image */}
//             <div className="flex justify-center p-4 bg-gray-50">
//               <img
//                 src={product.images[0]}
//                 alt={product.name}
//                 className="w-60 h-40 object-contain"
//               />
//             </div>

//             {/* Product Info */}
//             <div className="px-4 pb-4">
//               <h2 className="text-lg font-bold">{product.name}</h2>
//               <p className="text-sm text-gray-600">⭐⭐⭐⭐⭐ (2 Reviews)</p>

//               {/* Price */}
//               <div className="mt-2">
//                 <p className="text-gray-500 text-xs">MRP:</p>
//                 <p className="text-lg font-semibold">
//                   ₹{discountedPrice.toLocaleString()}
//                   <span className="text-gray-500 text-sm line-through ml-2">
//                     ₹{product.price.mrp.toLocaleString()}
//                   </span>
//                 </p>
//                 <p className="text-xs text-green-600">
//                   EMI starting at ₹{product.price.emiOptions.startingEmi}
//                 </p>
//               </div>

//               {/* Variants */}
//               <div className="flex gap-2 mt-3">
//                 {product.variants.tyreSize.map((variant) => (
//                   <span
//                     key={variant._id}
//                     className="border border-gray-400 px-2 py-1 rounded text-xs"
//                   >
//                     {variant.label}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex justify-between mt-4">
//                 <button className="text-red-500 border border-red-500 px-4 py-2 rounded-full text-sm hover:bg-red-100">
//                   + Compare
//                 </button>
//                 <button className="bg-red-600 text-white px-6 py-2 rounded-full text-sm hover:bg-red-700">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ProductList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5700/product/getproduct")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading products...</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        const discountedPrice = product.price.mrp - product.price.offer;

        return (
          <div
            key={product._id}
            onClick={() => navigate(`/product/${product._id}`)}
            className="cursor-pointer w-full bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Header */}
            <div className="bg-red-700 text-white font-bold text-sm px-4 py-1 flex justify-between">
              <span>{product.brand.toUpperCase()}</span>
              <span className="bg-red-500 px-2 rounded-full text-xs">BEST SELLER</span>
            </div>

            {/* Image */}
            <div className="flex justify-center p-4 bg-gray-50">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-60 h-40 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="px-4 pb-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-sm text-gray-600">⭐⭐⭐⭐⭐ (2 Reviews)</p>

              {/* Price */}
              <div className="mt-2">
                <p className="text-gray-500 text-xs">MRP:</p>
                <p className="text-lg font-semibold">
                  ₹{discountedPrice.toLocaleString()}
                  <span className="text-gray-500 text-sm line-through ml-2">
                    ₹{product.price.mrp.toLocaleString()}
                  </span>
                </p>
                <p className="text-xs text-green-600">
                  EMI starting at ₹{product.price.emiOptions.startingEmi}
                </p>
              </div>

              {/* Variants */}
              <div className="flex gap-2 mt-3">
                {product.variants.tyreSize.map((variant) => (
                  <span
                    key={variant._id}
                    className="border border-gray-400 px-2 py-1 rounded text-xs"
                  >
                    {variant.label}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Compare clicked");
                  }}
                  className="text-red-500 border border-red-500 px-4 py-2 rounded-full text-sm hover:bg-red-100"
                >
                  + Compare
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Add to Cart clicked");
                  }}
                  className="bg-red-600 text-white px-6 py-2 rounded-full text-sm hover:bg-red-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
