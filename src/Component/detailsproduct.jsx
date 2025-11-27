// ProductDetails.jsx — Tailwind CSS Version
// This is a pure JSX component styled with Tailwind classes.

import React from "react";

export default function ProductDetails({ product }) {
  const p = Array.isArray(product) ? product[0] : product;

  const title = p?.title || "Untitled Product";
  const description = p?.description || "No description available.";
  const image = p?.image || p?.banner || "/placeholder.png";
  const price = p?.price ?? "N/A";
  const dateRaw = p?.date || p?.createdAt;
  const date = dateRaw ? new Date(dateRaw).toLocaleDateString() : "Unknown date";
  const priority = p?.priority ?? "—";

  return (
    <main className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Banner / Large Image */}
        <div className="w-full h-96 rounded-2xl overflow-hidden bg-neutral-900 shadow-xl mb-10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-8">
          <span className="px-3 py-1 bg-white/10 rounded-md">Price: <strong className="text-white">{price}</strong></span>
          <span className="px-3 py-1 bg-white/10 rounded-md">Date: <strong className="text-white">{date}</strong></span>
          <span className="px-3 py-1 bg-white/10 rounded-md">Priority: <strong className="text-white">{priority}</strong></span>
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-200 mb-10">{description}</p>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
        >
          ← Back
        </button>
      </div>
    </main>
  );
}