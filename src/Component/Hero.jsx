import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative text-white">

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Get Your Dream products <br className="hidden md:block" />
          with Products Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
          Products Hub is a platform that helps you to create and manage your products.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Link
            href="/products"
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}
