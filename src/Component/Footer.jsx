import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Products Hub</h2>
          <p className="text-gray-400 text-sm">
            Building high-quality products.Connect with us on social media or check our latest updates.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-gray-400 transition-colors">Products</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-1">
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Products Hub. All rights reserved.
      </div>
    </footer>
  );
}
