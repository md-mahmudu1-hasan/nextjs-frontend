"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import ProtectedRoute from "@/Component/ProtectedRoute";

export default function AddProjectForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      title: e.target.title.value,
      description: e.target.Description.value,
      price: e.target.price.value,
      image: e.target.imageUrl.value,
    };

    try {
      await axios.post(
        "https://smart-project-five.vercel.app/myproducts",
        formData
      );

      e.target.reset();
      toast.success("Project added successfully");
    } catch (error) {
      toast.error("Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-black shadow-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Add Project
          </h2>

          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 rounded bg-black text-white border border-gray-700"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="Description">
              Description
            </label>
            <input
              type="text"
              id="Description"
              name="Description"
              className="w-full p-2 rounded bg-black text-white border border-gray-700"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full p-2 rounded bg-black text-white border border-gray-700"
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="imageUrl">
              Optional Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              className="w-full p-2 rounded bg-black text-white border border-gray-700"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Submit (Add)"}
            </button>
          </div>
        </form>
      </div>
    </ProtectedRoute>
  );
}
