import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { error: "Login required" },
      { status: 401 }
    );
  }

  const { vehicleId, startDate, endDate } =
    await req.json();

  if (new Date(startDate) >= new Date(endDate)) {
    return NextResponse.json(
      { error: "Invalid date range" },
      { status: 400 }
    );
  }

  // 🔥 Overlap Check
  const existingBooking = await prisma.booking.findFirst({
    where: {
      vehicleId,
      OR: [
        {
          startDate: { lte: new Date(endDate) },
          endDate: { gte: new Date(startDate) },
        },
      ],
    },
  });

  if (existingBooking) {
    return NextResponse.json(
      { error: "Vehicle already booked for selected dates" },
      { status: 400 }
    );
  }

  const booking = await prisma.booking.create({
    data: {
      userId: session.user.id,
      vehicleId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    },
  });

  return NextResponse.json(booking);
}