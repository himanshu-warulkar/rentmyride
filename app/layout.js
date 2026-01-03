import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
