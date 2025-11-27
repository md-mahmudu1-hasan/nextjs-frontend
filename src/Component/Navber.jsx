"use client";
import { AuthContext } from "@/app/Authentication/AuthContext";
import Link from "next/link";
import { use, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./Loader";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, SignOut, loading } = use(AuthContext);

  const handleLogout = () => {
    SignOut()
      .then(() => {
        toast.success(`Logout successfully`);
      })
      .catch(() => {});
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <nav className="py-2">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Products Hub
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link className="hover:text-blue-600 font-semibold" href="/">
            Home
          </Link>
          <Link className="hover:text-blue-600 font-semibold" href="/products">
            Products
          </Link>
          <div className="relative inline-block text-left">
            {!user ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-white hover:text-blue-600 font-semibold"
                >
                  Login
                </Link>
                <Link
                  href="/registration"
                  className="bg-white text-black hover:bg-blue-600 px-3 py-1 rounded font-semibold"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div
                onMouseLeave={() => setOpen(false)}
                onMouseEnter={() => setOpen(true)}
                className="cursor-pointer relative"
              >
                <img
                  src={user?.photoURL}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 object-cover rounded-full"
                  alt="user"
                />

                {open && (
                  <div className="absolute bg-white right-0 top-full pt-2 z-50">
                    <div className="border border-gray-200 shadow-lg rounded-lg">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">
                          {user?.displayName}
                        </h3>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                      </div>

                      <div className="py-1">
                        <Link
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                          href="/add-product"
                        >
                          Add Product
                        </Link>
                        <Link
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                          href="/manage-products"
                        >
                          Manage Products
                        </Link>

                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors border-t border-gray-200"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-3xl">☰</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link className="block py-2 border-b font-semibold" href="/">
            Home
          </Link>
          <Link className="block py-2 border-b font-semibold" href="/products">
            Products
          </Link>
          {!user ? (
            <div className="space-y-2">
              <Link href="/login" className="block text-white font-semibold">
                Login
              </Link>
              <Link
                href="/registration"
                className="block text-white px-3 py-1 rounded w-fit font-semibold"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="py-2 border-b font-semibold">
                <h3 className="font-semibold">{user?.displayName}</h3>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>

              <Link
                className="block py-2 border-b font-semibold"
                href="/add-product"
              >
                Add Product
              </Link>
              <Link
                className="block py-2 border-b font-semibold"
                href="/manage-products"
              >
                Manage Products
              </Link>
              <button
                onClick={handleLogout}
                className="block py-2 text-left w-full font-semibold"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
