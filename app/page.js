import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]"></div>
      <div className="relative z-10 max-w-3xl w-full text-center bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-white/10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          RentMy<span className="text-blue-400">Ride</span>
        </h1>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Rent bikes and cars easily for your city and long trips.
          Simple, affordable, and reliable vehicle rentals.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/vehicles"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Browse Vehicles
          </Link>

          <Link
            href="/vehicles"
            className="bg-white/10 text-white px-6 py-3 rounded-lg text-lg hover:bg-white/20 transition"
          >
            View Deals
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-gray-400">
          <div>
            <p className="text-white font-semibold">200+</p>
            Vehicles Listed
          </div>
          <div>
            <p className="text-white font-semibold">50+</p>
            Cities Covered
          </div>
          <div>
            <p className="text-white font-semibold">24×7</p>
            Support
          </div>
        </div>
      </div>
    </main>
  );
}
