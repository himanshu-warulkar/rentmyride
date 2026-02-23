"use client"

import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="w-full bg-slate-950 border-b border-slate-800 px-8 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-white">
        Rent<span className="text-blue-500">MyRide</span>
      </Link>

      {/* Right Side */}
      <div className="flex gap-6 items-center text-sm">
        <Link href="/vehicles" className="hover:text-blue-400 transition">
          Vehicles
        </Link>

        {session ? (
          <>
            <Link href="/dashboard" className="hover:text-blue-400 transition">
              Dashboard
            </Link>

            <button
              onClick={() => signOut()}
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-blue-400 transition">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}