"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `transition ${
      pathname === path
        ? "text-black dark:text-white font-semibold"
        : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          href="/"
          className="text-xl font-bold text-black dark:text-white hover:text-blue-500 transition"
        >
          RentMyRide
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/vehicles" className={linkStyle("/vehicles")}>
            Vehicles
          </Link>

          <Link href="/dashboard" className={linkStyle("/dashboard")}>
            Dashboard
          </Link>

          <ThemeToggle />

          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
