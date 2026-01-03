import { headers } from "next/headers";
import Image from "next/image";

async function getVehicle(id) {
  const headersList = headers();
  const host = headersList.get("host");

  const res = await fetch(`http://${host}/api/vehicles?id=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch vehicle");
  }

  return res.json();
}

export default async function VehicleDetails({ params }) {
  const vehicle = await getVehicle(params.id);

  if (!vehicle?.id) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold">Vehicle not found</h1>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      {/* Fixed-height image container */}
      <div className="mb-6">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          width={900}
          height={600}
          className="rounded mx-auto"
          priority
        />
      </div>


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
