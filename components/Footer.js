export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} RentMyRide - By HimanshuW </p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a href="#" className="hover:text-white transition">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
