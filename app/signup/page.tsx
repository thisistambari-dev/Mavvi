"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) {
      setError(data.error ?? "Signup failed.");
      return;
    }
    router.push("/login");
  }

  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-semibold font-display">Create your account</h1>
      <p className="text-sm text-ink-600 mt-1">Phase 1 — stored locally in SQLite.</p>
      <form className="mt-4 space-y-3" onSubmit={onSubmit}>
        <input
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-mavvi-500"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
        />
        <input
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-mavvi-500"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-mavvi-500"
          placeholder="Password (8+ chars)"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          className="w-full bg-mavvi-600 text-white rounded-lg p-3 font-bold hover:bg-mavvi-700 disabled:opacity-50"
          disabled={busy}
        >
          {busy ? "Creating…" : "Sign up"}
        </button>
      </form>
      <p className="text-sm mt-4">
        Have an account? <Link href="/login" className="text-mavvi-700 font-bold">Log in</Link>
      </p>
    </main>
  );
}
