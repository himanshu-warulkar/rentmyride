export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-xl w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded bg-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded bg-slate-700 text-white"
        />

        <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </div>
  );
}
