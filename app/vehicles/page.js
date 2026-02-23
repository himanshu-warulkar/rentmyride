"use client";

import Link from "next/link";
import { vehicles } from "@/lib/data";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function VehiclesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();


  useEffect(() => {
  if (status === "unauthenticated") {
    router.push("/login");
  }
}, [status, router]);

if (status === "loading") return <p>Loading...</p>;
if (status === "unauthenticated") return null;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Available Vehicles</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <Link
            key={v.id}
            href={`/vehicles/${v.id}`}
            className="bg-white rounded shadow hover:shadow-lg transition block overflow-hidden"
          >
            <img
              src={v.image}
              alt={v.name}
              className="w-full h-48 object-cover"
            />

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
