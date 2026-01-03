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
    <main className="p-6 max-w-4xl mx-auto">
      {/* Image */}
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      {/* Details */}
      <h1 className="text-3xl font-bold mb-2">
        {vehicle.name}
      </h1>

      <p className="text-gray-600 mb-4">
        {vehicle.type} • {vehicle.location}
      </p>

      <p className="text-xl font-semibold text-blue-600 mb-4">
        ₹{vehicle.price} / day
      </p>

      <p className="text-gray-300">
        {vehicle.description}
      </p>
    </main>
  );
}
