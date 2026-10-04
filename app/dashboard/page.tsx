export default function DashboardPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-semibold font-display">Welcome back, Sarah</h1>
        <p className="text-ink-600 text-sm">
          Your brand: <strong>Velour Confectioneries</strong> · Elegant, warm and playful
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Generated", "Saved", "Upcoming", "Drafts"].map((k) => (
          <div key={k} className="bg-white rounded-xl shadow p-4">
            <p className="text-xs text-ink-400 font-bold uppercase">{k}</p>
            <p className="text-2xl font-semibold font-display">0</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold font-display">Create with Mavvi</h2>
        <p className="text-sm text-ink-600 mt-1">
          Phase 1 wires brand profile · Phase 2 wires <code>POST /api/generate</code> (OpenAI).
        </p>
      </div>
    </main>
  );
}
