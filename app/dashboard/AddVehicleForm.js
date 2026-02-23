"use client";

import { useState } from "react";

export default function AddVehicleForm() {
  const [form, setForm] = useState({
    title: "",
    type: "",
    city: "",
    price: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/vehicles", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Vehicle Added");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 p-6 rounded-xl max-w-lg space-y-4"
    >
      <input
        placeholder="Vehicle Title"
        className="w-full px-4 py-2 bg-slate-800 rounded"
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <input
        placeholder="Type (Bike/Car)"
        className="w-full px-4 py-2 bg-slate-800 rounded"
        onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }
      />

      <input
        placeholder="City"
        className="w-full px-4 py-2 bg-slate-800 rounded"
        onChange={(e) =>
          setForm({ ...form, city: e.target.value })
        }
      />

      <input
        placeholder="Price per day"
        type="number"
        className="w-full px-4 py-2 bg-slate-800 rounded"
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
      />

      <input
        placeholder="Image URL"
        className="w-full px-4 py-2 bg-slate-800 rounded"
        onChange={(e) =>
          setForm({ ...form, image: e.target.value })
        }
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Add Vehicle
      </button>
    </form>
  );
}