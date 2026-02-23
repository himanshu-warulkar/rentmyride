<<<<<<< HEAD
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
=======
import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function VehiclesPage() {
  const vehicles = await prisma.vehicle.findMany({
    include: {
      owner: true,
    },
  })
>>>>>>> a175798 (THE NAVIGATION BAR)

  if (!vehicles || vehicles.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        No vehicles available yet.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {vehicles.map((vehicle) => (
        <Link
          key={vehicle.id}
          href={`/vehicles/${vehicle.id}`}   // ✅ MUST use vehicle.id (UUID)
        >
          <div className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition cursor-pointer">
            <img
              src={vehicle.image}
              alt={vehicle.title}
              className="h-40 w-full object-cover rounded-md mb-3"
            />
            <h2 className="text-xl font-semibold">{vehicle.title}</h2>
            <p className="text-gray-400">{vehicle.city}</p>
            <p className="text-blue-400">₹{vehicle.price}/day</p>
          </div>
        </Link>
      ))}
    </div>
  )
}