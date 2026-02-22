"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center justify-center px-6">

      {/* Background Layers (same as above) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:40px_40px] opacity-20" />

     <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl text-center lg:text-left"
>

  {/* TEXT BOX */}
  <div className="flex-1">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      RentMy<span className="text-blue-500">Ride</span>
    </h1>

    <p className="text-gray-400 mb-4 text-lg">
      Drive Freedom. Rent Smart.
    </p>

    <p className="text-gray-500 mb-8">
      Choose bikes & cars for every journey.
    </p>

    <div className="flex flex-col items-center lg:items-start gap-3">
      <Link
        href="/login"
        className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg"
      >
        Get Started
      </Link>

      <Link
        href="/login"
        className="text-sm text-gray-400 hover:text-white transition"
      >
        Already have an account? Login
      </Link>
    </div>
  </div>

  {/* IMAGE BOX (empty for now) */}
  <div className="flex-1"></div>

</motion.div>


    </main>
  );
}