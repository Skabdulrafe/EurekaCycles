// // import { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { motion } from "framer-motion";
// // import { ShoppingCart } from "lucide-react";
// // import ProductSkeleton from "../common/ProductsSkeleton";

// // const CategoryPage = () => {
// //   const { categoryName } = useParams();
// //   const navigate = useNavigate();
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     setLoading(true); // show loading state on category change

// //     axios
// //       .get("http://localhost:5700/product/getproduct")
// //       .then((response) => {
// //         // Filter products based on the category name from params
// //         const filteredProducts = response.data.filter(
// //           (product) =>
// //             typeof product.productCategory === "string" &&
// //             product.productCategory.toLowerCase() === categoryName.toLowerCase()
// //         );

// //         setProducts(filteredProducts);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching products:", error);
// //         setLoading(false);
// //       });
// //   }, [categoryName]);

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 capitalize">
// //         {categoryName}
// //       </h1>

// //       {loading ? (
// //         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
// //           {Array.from({ length: 8 }).map((_, index) => (
// //             <ProductSkeleton key={index} />
// //           ))}
// //         </div>
// //       ) : products.length === 0 ? (
// //         <p className="text-center text-red-500">No products found!</p>
// //       ) : (
// //         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
// //           {products.map((product) => (
// //             <motion.div
// //               key={product._id}
// //               className="bg-white shadow-md rounded-lg p-3 border border-gray-200 hover:shadow-lg transition-transform duration-300 cursor-pointer"
// //               whileHover={{ scale: 1.02 }}
// //               onClick={() => navigate(`/product/${product._id}`)}
// //             >
// //               <div className="relative">
// //                 <img
// //                   src={product.images?.[0] || "/placeholder.jpg"}
// //                   alt={product.name}
// //                   className="w-full h-40 object-contain rounded-md"
// //                 />
// //               </div>

// //               <div className="mt-3">
// //                 <h2 className="text-sm font-semibold text-gray-800 truncate">
// //                   {product.name}
// //                 </h2>
// //                 <p className="text-xs text-gray-500">{product.brand}</p>

// //                 <div className="mt-2 text-sm text-gray-600">
// //                   <span className="text-green-600 font-bold">
// //                     ₹{product.price?.mrp - product.price?.offer}
// //                   </span>{" "}
// //                   <span className="line-through text-gray-400 text-xs ml-2">
// //                     ₹{product.price?.mrp}
// //                   </span>
// //                 </div>

// //                 <button className="mt-3 w-full bg-blue-500 text-white py-2 text-sm rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition">
// //                   <ShoppingCart size={16} />
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// export default CategoryPage;
import React,{ useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import ProductSkeleton from "../common/ProductsSkeleton";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5700/product/getproduct")
      .then((response) => {
        const filteredProducts = response.data.filter(
          (product) =>
            typeof product.productCategory === "string" &&
            product.productCategory.toLowerCase() === categoryName.toLowerCase()
        );

        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [categoryName]);
  console.log(categoryName)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 capitalize">
        {categoryName}
      </h1>

      {loading ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-red-500">No products found!</p>
      ) : (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {products.map((product) => (
              <motion.div
                key={product._id}
                className="bg-white shadow-md rounded-lg p-3 border border-gray-200 hover:shadow-lg transition-transform duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <div className="relative">
                  <img
                    src={product.images?.[0] || "/placeholder.jpg"}
                    alt={product.name}
                    className="w-full h-40 object-contain rounded-md"
                  />
                </div>

                <div className="mt-3">
                  <h2 className="text-sm font-semibold text-gray-800 truncate">
                    {product.name}
                  </h2>
                  <p className="text-xs text-gray-500">{product.brand}</p>

                  <div className="mt-2 text-sm text-gray-600">
                    <span className="text-green-600 font-bold">
                      ₹{product.price?.mrp - product.price?.offer}
                    </span>{" "}
                    <span className="line-through text-gray-400 text-xs ml-2">
                      ₹{product.price?.mrp}
                    </span>
                  </div>

                  <button className="mt-3 w-full bg-blue-500 text-white py-2 text-sm rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🔍 Display raw JSON below */}
          {/* <div className="mt-10 bg-gray-100 p-4 rounded text-sm text-gray-700 overflow-x-auto">
            <h2 className="font-semibold mb-2">Raw JSON Data:</h2>
            <pre>{JSON.stringify(products, null, 2)}</pre>
          </div> */}
        </>
      )}
    </div>
  );
};

export default CategoryPage;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const CategoryPage = () => {
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5700/product/getproduct")
//       .then((response) => {
//         const filtered = response.data.filter(
//           (product) =>
//             typeof product.productCategory === "string" &&
//             product.productCategory.toLowerCase() === categoryName.toLowerCase()
//         );
//         setProducts(filtered);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, [categoryName]);

//   return (
//     <div>
//       <h1>Category: {categoryName}</h1>
//       <pre>{JSON.stringify(products, null, 2)}</pre>
//     </div>
//   );
// };

// export default CategoryPage;
