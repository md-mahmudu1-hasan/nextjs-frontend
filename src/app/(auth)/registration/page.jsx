"use client";
import { AuthContext } from "@/app/Authentication/AuthContext";
import Spinner from "@/Component/Loader";
import { updateProfile } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";
import toast from "react-hot-toast";

const Registration = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { createUser, googleSignIn, loading , setUser } = use(AuthContext);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must have at least one uppercase, one lowercase, and be at least 6 characters long."
      );
      return;
    }

    setError("");
    setSuccess(false);

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            toast.success("Sign up successfully");
            setSuccess(true);
            e.target.reset();
            setUser({ ...result.user, displayName: name, photoURL: photoURL });
            router.push("/");
          })
          .catch((error) => {
            if (error.code === "auth/invalid-photo-url") {
              setError("Invalid photo URL.");
            } else {
              setError(error.message);
            }
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("This email is already registered.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email address.");
        } else if (error.code === "auth/weak-password") {
          setError("Password is too weak.");
        } else {
          setError(error.message);
        }
      });
  };

  if (loading) {
    return <Spinner />;
  }

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then(() => {
        setSuccess(true);
        toast.success(`Sign Up successfully`);
         router.push("/");
      })
      .catch((error) => {
        setError(error.message.split("or")[1]);
      });
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#111] p-8 rounded-xl shadow-lg border border-gray-800">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter full name"
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Sign Up successfully !</p>}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold mb-4 transition">
            Register
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-black font-semibold py-2 rounded flex items-center justify-center gap-2 mb-4"
        >
          Register with Google
        </button>

        <p className="text-gray-400 text-center">
          Already have an account?
          <Link
            href="/login"
            className="text-blue-400 font-semibold hover:underline ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
