export default function VehiclesLoading() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Available Vehicles</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow animate-pulse"
          >
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
