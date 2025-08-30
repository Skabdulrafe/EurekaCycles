
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
            <div className="bg-indigo-600 text-white font-bold text-sm px-4 py-1 flex justify-between">
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
                {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Compare clicked");
                  }}
                  className="text-red-500 border border-red-500 px-4 py-2 rounded-full text-sm hover:bg-red-100"
                >
                  + Compare
                </button> */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // console.log("Add to Cart clicked");
                    navigate(`/product/${product._id}`)

                  }}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm hover:bg-red-700"
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
