import React from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-black p-5 text-white rounded-lg overflow-hidden shadow-md shadow-white transition-shadow duration-300">
      <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
        {product.image && (
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="p-4 flex flex-col justify-between h-56">
        <div>
          <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2 mb-4">
            {product.description ? product.description.slice(0, 50) + "..." : "No description available"}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-white">Price : {product.price}</span>
          <Link
            href={`/products/${product._id}`}
            className="bg-white text-black px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
