import { vehicles } from "@/lib/data";

export default function VehicleDetails({ params }) {
  const vehicle = vehicles.find((v) => v.id === params.id);

  if (!vehicle) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold">Vehicle not found</h1>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{vehicle.name}</h1>

      <p className="text-gray-600 mb-4">
        {vehicle.type} • {vehicle.location}
      </p>

      <p className="text-xl font-semibold text-blue-600 mb-4">
        ₹{vehicle.price} / day
      </p>

      <p className="text-gray-700">
        {vehicle.description}
      </p>
    </main>
  );
}
