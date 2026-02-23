"use client";

import { useState } from "react";

export default function BookingForm({ vehicleId }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleBooking = async () => {
    const res = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify({
        vehicleId,
        startDate,
        endDate,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Booking Successful");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl max-w-md space-y-4">
      <input
        type="date"
        className="w-full px-4 py-2 bg-slate-800 rounded"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <input
        type="date"
        className="w-full px-4 py-2 bg-slate-800 rounded"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button
        onClick={handleBooking}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Book Now
      </button>
    </div>
  );
}