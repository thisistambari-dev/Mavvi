"use client";

export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-semibold font-display">Login (placeholder)</h1>
      <p className="text-sm text-ink-600 mt-1">Auth.js wiring lands in Phase 1. No sign-in required to preview.</p>
      <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
        <input className="w-full border rounded-lg p-3" placeholder="Email" disabled />
        <input className="w-full border rounded-lg p-3" placeholder="Password" type="password" disabled />
        <button className="w-full bg-mavvi-100 text-mavvi-700 rounded-lg p-3 font-bold" disabled>
          Disabled until Phase 1
        </button>
      </form>
    </main>
  );
}
