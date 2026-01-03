import Link from "next/link";
import { headers } from "next/headers";
import Image from "next/image";

async function getVehicles() {
  const headersList = headers();
  const host = headersList.get("host");

  const res = await fetch(`http://${host}/api/vehicles`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch vehicles");
  }

  return res.json();
}

export default async function VehiclesPage() {
  const vehicles = await getVehicles();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-6">
        <div className="max-w-7xl mx-auto mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            Available Vehicles
          </h1>
          <p className="text-gray-400">
            Choose from a wide range of bikes and cars available near you.
          </p>
        </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <Link
  key={v.id}
  href={`/vehicles/${v.id}`}
  className="bg-white rounded shadow hover:shadow-lg transition block overflow-hidden"
>
  {/* Image */}
  <img
    src={v.image}
    alt={v.name}
    className="w-full h-48 object-cover"
  />

  {/* Content */}
  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-900">
      {v.name}
    </h2>

    <p className="text-sm text-gray-600">
      {v.type} • {v.location}
    </p>

    <p className="text-blue-600 font-bold mt-1">
      ₹{v.price}/day
    </p>

    <p className="mt-2 text-sm text-gray-500">
      Click to view details →
    </p>
  </div>
</Link>

        ))}
      </div>
    </main>
  );
}
