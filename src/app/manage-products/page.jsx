"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import ProtectedRoute from "@/Component/ProtectedRoute";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://smart-project-five.vercel.app/myproducts"
      );
      setProducts(res.data);
    } catch {
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://smart-project-five.vercel.app/myproducts/${id}`
      );
      toast.success("Product deleted");
      fetchProducts();
    } catch {
      toast.error("Failed to delete");
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Manage Products</h1>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 border-b border-gray-700">Image</th>
                <th className="px-4 py-3 border-b border-gray-700">Title</th>
                <th className="px-4 py-3 border-b border-gray-700">
                  Description
                </th>
                <th className="px-4 py-3 border-b border-gray-700">Price</th>
                <th className="px-4 py-3 border-b border-gray-700 text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-700 hover:bg-gray-900 transition"
                >
                  <td className="px-4 py-3">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-500">No Image</span>
                    )}
                  </td>

                  <td className="px-4 py-3 font-semibold">{product.title}</td>

                  <td className="px-4 py-3 text-gray-300">
                    {product.description?.slice(0, 40)}...
                  </td>

                  <td className="px-4 py-3 text-green-400 font-medium">
                    {product.price ? `$${product.price}` : "N/A"}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <Link
                        href={`/products/${product._id}`}
                        className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {products.length === 0 && (
            <p className="text-center text-gray-400 mt-6">No products found.</p>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
