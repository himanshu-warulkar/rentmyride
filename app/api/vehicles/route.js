import { vehicles } from "@/lib/data";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const vehicle = vehicles.find((v) => v.id === id);
    return Response.json(vehicle || {});
  }

  return Response.json(vehicles);
}
