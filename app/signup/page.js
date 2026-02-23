"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState("user");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    console.log({ name, email, password, role });
    console.log("Signup payload:", {name, email, password, role,});
    router.push("/login");

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-800">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">

          {/* Role */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setRole("user")}
              className={`flex-1 py-2 rounded-lg border ${
                role === "user" ? "bg-blue-600 border-blue-500" : "border-slate-700"
              }`}
            >
              User
            </button>

            <button
              type="button"
              onClick={() => setRole("owner")}
              className={`flex-1 py-2 rounded-lg border ${
                role === "owner" ? "bg-blue-600 border-blue-500" : "border-slate-700"
              }`}
            >
              Owner
            </button>
          </div>

          {/* Inputs */}
          <input
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium"
          >
            Sign Up
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
          Login
          </a>
          </p>

        </form>
      </div>
    </div>
  );
}