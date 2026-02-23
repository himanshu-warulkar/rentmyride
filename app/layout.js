import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "RentMyRide",
  description: "Vehicle rental platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-gray-100 transition-colors duration-300 antialiased">
        
        <Providers>{children}</Providers>
        
      </body>
    </html>
  );
}
