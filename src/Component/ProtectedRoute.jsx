"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/Authentication/AuthContext";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else {
        setChecked(true);
      }
    }
  }, [user, loading, router]);

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Checking authentication...
      </div>
    );
  }

  return <>{children}</>;
}
