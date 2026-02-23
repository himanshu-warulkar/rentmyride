import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

export default async function VehicleDetail({ params }) {
  const vehicle = await prisma.vehicle.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="p-10">
      <h1>{vehicle.title}</h1>
      <p>{vehicle.description}</p>
    </div>
  )
}