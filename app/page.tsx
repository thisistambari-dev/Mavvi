import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-8 space-y-6">
      <p className="text-xs font-bold bg-mavvi-100 text-mavvi-700 inline-block px-3 py-1 rounded-full">
        PHASE 0 SCAFFOLD · APP + DB RUN LOCALLY
      </p>
      <h1 className="text-4xl font-semibold font-display">Mavvi is running locally 🎉</h1>
      <p className="text-ink-600">
        Next.js + Tailwind scaffold. No sign-in or database wired yet — this proves your local app boots.
      </p>
      <div className="flex gap-3">
        <Link href="/dashboard" className="bg-mavvi-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-mavvi-700">
          Open dashboard
        </Link>
        <Link href="/login" className="bg-white border px-6 py-3 rounded-lg font-bold hover:bg-mavvi-50">
          Login (placeholder)
        </Link>
      </div>
      <p className="text-xs text-ink-400">
        Static preview still available at <code>app.html</code> · Design tokens at <code>design.html</code>
      </p>
    </main>
  );
}
