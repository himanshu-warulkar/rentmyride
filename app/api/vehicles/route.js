import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "OWNER") {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await req.json();

  const vehicle = await prisma.vehicle.create({
    data: {
      title: body.title,
      type: body.type,
      city: body.city,
      price: parseInt(body.price),
      image: body.image,
      ownerId: session.user.id,
    },
  });

  return NextResponse.json(vehicle);
}