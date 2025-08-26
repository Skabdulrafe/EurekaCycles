// // // import React from "react"; 
// // // import  { useParams } from "react-router-dom";
// // // const ProductDetails = () => {
// // //   const { id } = useParams();

// // //   return (
// // //     <div>
// // //       <h1>Product Details</h1>
// // //       <p>Product ID: {id}</p>
// // //       {/* You can call API using this id */}
// // //     </div>
// // //   );
// // // };

// // // export default ProductDetails;

// // import React from "react"; 
// // import { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";


// // const ProductDetailPage = () => {
// //   const { id } = useParams(); // Get product ID from URL
// // //   const navigate = useNavigate();

// //   const [product, setProduct] = useState(null);
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [selectedImage, setSelectedImage] = useState();

// //   useEffect(() => {
// //     axios
// //       .get(`http://localhost:5700/product/getoneproduct/${id}`)
// //       .then((response) => {
// //         if (response) {
// //           setProduct(response.data);
// //           setSelectedImage(response?.data.imageURL[0]); // Set first image
// //         } else {
// //           console.error("Product not found!");
// //         }
// //       })
// //       .catch((error) => console.error("Error fetching product:", error));
// //   }, [id]);

// //   if (!product) {
// //     return (
// //       <div className="text-center text-red-500 p-4">Loading product details...</div>
// //     );
// //   } return(
// //     JSON.stringify(product,null,2)
// //   )}
// //   export default ProductDetailPage;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState("");

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5700/product/getoneproduct/${id}`)
//       .then((res) => {
//         setProduct(res.data);
//         setSelectedImage(res.data.images[0]); // Default to first image
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching product:", err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <p className="text-center mt-10 text-gray-500">Loading product details...</p>;
//   }

//   if (!product) {
//     return <p className="text-center mt-10 text-red-500">Product not found</p>;
//   }

//   const discountedPrice = product.price.mrp - product.price.offer;

//   return (
//     <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
//       {/* LEFT: Image Gallery */}
//       <div className="flex gap-4">
//         {/* Thumbnails */}
//         <div className="flex flex-col gap-3 overflow-y-auto max-h-[500px]">
//           {product.images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Thumbnail ${index}`}
//               className={`w-16 h-16 object-cover border rounded cursor-pointer ${
//                 selectedImage === img ? "border-red-500" : "border-gray-300"
//               }`}
//               onClick={() => setSelectedImage(img)}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="flex-1">
//           <img
//             src={selectedImage}
//             alt={product.name}
//             className="w-full h-[500px] object-contain border rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* RIGHT: Product Info */}
//       <div>
//         <h1 className="text-3xl font-bold">{product.name}</h1>
//         <p className="text-yellow-500 mt-2">⭐ 5.0 star rating | 2 Reviews</p>

//         {/* Price */}
//         <div className="mt-4">
//           <p className="text-gray-500 text-sm">MRP:</p>
//           <p className="text-2xl font-bold text-red-600">
//             ₹{discountedPrice.toLocaleString()}
//             <span className="text-gray-500 text-lg line-through ml-2">
//               ₹{product.price.mrp.toLocaleString()}
//             </span>
//           </p>
//           <p className="text-sm mt-1">
//             EMI starts at <span className="font-semibold">₹{product.price.emiOptions.minInstallment}</span>
//           </p>
//         </div>

//         {/* EMI Section */}
//         <div className="border p-4 mt-4 rounded">
//           <p className="font-semibold text-gray-700">EMI OPTIONS</p>
//           <p className="text-lg text-red-600 font-bold">
//             ₹{product.price.emiOptions.startingEmi}/month | {product.price.emiOptions.durations.join("/")} months
//           </p>
//           <p className="text-sm text-gray-600 mt-1">UPI & Cards Accepted | Powered by Snapmint</p>
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 flex gap-4">
//           <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700">
//             Add to Cart
//           </button>
//           <button className="border border-gray-500 px-6 py-3 rounded-full text-lg hover:bg-gray-100">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5700/product/getoneproduct/${id}`)
      .then((res) => {
        setProduct(res.data);
        setSelectedImage(res.data.images[0]); // Default to first image
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500 text-xl">Loading product details...</p>;
  }

  if (!product) {
    return <p className="text-center mt-10 text-red-500 text-xl">Product not found</p>;
  }

  const discountedPrice = product.price.mrp - product.price.offer;

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-xl mt-6">
      {/* LEFT: Image Gallery */}
      <div className="flex gap-6">
        {/* Thumbnails */}
        <div className="flex flex-col gap-3 overflow-y-auto max-h-[500px] custom-scrollbar">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`w-20 h-20 object-cover rounded-md border-2 cursor-pointer hover:scale-105 transition-transform duration-300 ${
                selectedImage === img ? "border-red-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Main Image with Zoom Effect */}
        <div className="flex-1 relative group">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-[500px] object-contain border rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
          />
          {/* Zoom Hint */}
          <span className="absolute bottom-4 right-4 text-sm text-white bg-black bg-opacity-50 px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            Hover to Zoom
          </span>
        </div>
      </div>

      {/* RIGHT: Product Info */}
      <div className="p-4">
        <h1 className="text-3xl font-extrabold text-gray-800">{product.name}</h1>
        <p className="text-yellow-500 mt-2 font-semibold text-lg">⭐ 5.0 | 2 Reviews</p>

        {/* Price */}
        <div className="mt-6">
          <p className="text-gray-500 text-sm">MRP:</p>
          <p className="text-3xl font-bold text-red-600 flex items-center gap-2">
            ₹{discountedPrice.toLocaleString()}
            <span className="text-gray-400 text-lg line-through">
              ₹{product.price.mrp.toLocaleString()}
            </span>
            <span className="text-green-600 text-base font-semibold">
              ({Math.round((product.price.offer / product.price.mrp) * 100)}% OFF)
            </span>
          </p>
          <p className="text-sm mt-2 text-gray-600">
            EMI starts at <span className="font-semibold">₹{product.price.emiOptions.minInstallment}</span>
          </p>
        </div>

        {/* EMI Section */}
        <div className="border p-4 mt-6 rounded-lg bg-gray-50 shadow-sm">
          <p className="font-semibold text-gray-700 text-lg">EMI OPTIONS</p>
          <p className="text-xl text-red-600 font-bold mt-2">
            ₹{product.price.emiOptions.startingEmi}/month | {product.price.emiOptions.durations.join("/")} months
          </p>
          <p className="text-sm text-gray-600 mt-1">UPI & Cards Accepted | Powered by Snapmint</p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-6">
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 shadow-lg hover:shadow-xl transition">
            Add to Cart
          </button>
          <button className="border-2 border-gray-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
