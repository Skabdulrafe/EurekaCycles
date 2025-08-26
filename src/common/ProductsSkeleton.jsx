import React from "react";
import { motion } from "framer-motion";

const ProductSkeleton = () => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-3 border border-gray-200 animate-pulse"
    >
      {/* Image Skeleton */}
      <div className="w-full h-40 bg-gray-300 rounded-md"></div>

      {/* Text Skeletons */}
      <div className="mt-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>

        {/* Category */}
        <div className="h-3 bg-gray-300 rounded w-1/3 mt-2"></div>

        {/* Price & Stock */}
        <div className="flex justify-between items-center mt-3">
          <div className="h-5 bg-gray-300 rounded w-1/4"></div>
          <div className="h-5 bg-gray-300 rounded w-6"></div>
        </div>

        {/* Button Skeleton */}
        <div className="w-full h-10 bg-gray-300 rounded-md mt-3"></div>
      </div>
    </motion.div>
  );
};

export default ProductSkeleton;
