import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function VehiclesPage() {
  const vehicles = await prisma.vehicle.findMany()

  if (!vehicles.length) {
    return (
      <div className="p-10 text-gray-400">
        No vehicles available.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {vehicles.map((vehicle) => (
        <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`}>
          <div className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition">
            <h2 className="text-xl font-semibold">{vehicle.title}</h2>
            <p className="text-gray-400">{vehicle.city}</p>
            <p className="text-blue-400">₹{vehicle.price}/day</p>
          </div>
        </Link>
      ))}
    </div>
  )
}