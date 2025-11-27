"use client";
import { AuthContext } from "@/app/Authentication/AuthContext";
import Spinner from "@/Component/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import toast from "react-hot-toast";

export default function LoginForm() {
  const { signIn, googleSignIn, loading, setLoading } = use(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    setError("");
    setSuccess(false);

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then(() => {
        setSuccess(true);
        toast.success(`Login successfully`);
        e.target.reset();
        router.push("/");
      })
      .catch((error) => {
        setError(error.message.split("or")[1]);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setError("");
    setSuccess(false);
    googleSignIn()
      .then((res) => {
        setSuccess(true);
        toast.success(`${res.user.displayName} Login successfully`);
        router.push("/");
      })
      .catch((error) => {
        setError(error.message.split("or")[1]);
      });
  };

  if (loading) {
    return <Spinner/>
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#111] p-8 rounded-xl shadow-lg border border-gray-800">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Log in successfully !</p>}

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold mb-4 transition">
            Login
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-white text-black font-semibold py-2 rounded flex items-center justify-center gap-2 mb-4"
          >
            Login with Google
          </button>
          <p className="text-gray-400 text-center">
            Don't have an account?
            <Link
              href="/registration"
              className="text-blue-400 font-semibold hover:underline ml-1"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
