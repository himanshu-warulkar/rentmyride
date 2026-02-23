import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import AddVehicleForm from "./AddVehicleForm";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  if (session.user.role !== "OWNER") redirect("/");

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">
        Owner Dashboard
      </h1>

      <AddVehicleForm />
    </div>
  );
}