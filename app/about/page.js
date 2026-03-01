"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Subtle Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full top-20 left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full bottom-20 right-20 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-8 py-24 space-y-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold tracking-tight">
            About Rent<span className="text-blue-500">MyRide</span>
          </h1>

          <p className="text-gray-400 max-w-2xl leading-relaxed text-lg">
            A modern, secure, and intelligent vehicle rental platform built to
            connect trusted owners with confident riders.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { label: "Vehicles Listed", value: "120+" },
            { label: "Bookings Completed", value: "850+" },
            { label: "Active Users", value: "400+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl text-center"
            >
              <h3 className="text-3xl font-bold text-blue-500">
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Founder</h2>
            <p className="text-gray-400 leading-relaxed">
              RentMyRide was built by Himanshu Warulkar, a developer focused on cloud architecture, cybersecurity, and scalable systems.
              In collaboration with batchmates Parth Kedar and Krutika Patil, the platform was shaped into a secure, modern, and production-grade rental ecosystem.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">
              Vision
            </h3>
            <p className="text-gray-400">
              To create a transparent and AI-driven vehicle rental ecosystem
              where trust, security, and efficiency are built into the
              foundation.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}