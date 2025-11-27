"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/Component/product";
import Spinner from "./Loader";

export default function Item() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://smart-project-five.vercel.app/myproducts")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner/>;

  const finalProducts = products.slice(0, 6);

  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
      {finalProducts.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
    </div>
  );
}
