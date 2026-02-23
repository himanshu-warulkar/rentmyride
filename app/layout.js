<<<<<<< HEAD
import "./globals.css";
import Providers from "./providers";
=======
"use client"
>>>>>>> a175798 (THE NAVIGATION BAR)

import "./globals.css"
import { SessionProvider } from "next-auth/react"
import Navbar from "../components/Navbar"

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-gray-100 transition-colors duration-300 antialiased">
        
        <Providers>{children}</Providers>
        
=======
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
>>>>>>> a175798 (THE NAVIGATION BAR)
      </body>
    </html>
  )
}