"use client"

import "./globals.css"
import { SessionProvider } from "next-auth/react"
import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <SessionProvider>
          <Navbar />
          <PageWrapper>
            {children}
          </PageWrapper>
        </SessionProvider>
      </body>
    </html>
  )
}