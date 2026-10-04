import { redirect } from "next/navigation";
import Link from "next/link";
import { auth, signOut } from "@/auth";
import { db } from "@/lib/db";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const userId = (session.user as { id?: string }).id;
  const name = session.user.name ?? "there";

  let brand = null;
  let counts = { generated: 0, saved: 0, drafts: 0 };
  if (userId) {
    brand = await db.brandProfile.findFirst({ where: { userId }, orderBy: { createdAt: "desc" } });
    const [generations, saved] = await Promise.all([
      db.generation.count({ where: { userId } }),
      db.contentItem.count({ where: { userId } })
    ]);
    counts = { generated: generations, saved, drafts: saved };
  }

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold font-display">Welcome back, {name}</h1>
          <p className="text-ink-600 text-sm">
            {brand ? (
              <>Your brand: <strong>{brand.brandName}</strong> · {brand.voice}</>
            ) : (
              <>No brand yet — <Link href="/brand" className="text-mavvi-700 font-bold">create your brand profile</Link></>
            )}
          </p>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button className="text-sm border rounded-lg px-4 py-2 hover:bg-white">Sign out</button>
        </form>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          ["Generated", counts.generated],
          ["Saved", counts.saved],
          ["Upcoming", 0],
          ["Drafts", counts.drafts]
        ].map(([k, v]) => (
          <div key={k as string} className="bg-white rounded-xl shadow p-4">
            <p className="text-xs text-ink-400 font-bold uppercase">{k}</p>
            <p className="text-2xl font-semibold font-display">{v as number}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-wrap gap-3">
        <Link href="/brand" className="bg-mavvi-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-mavvi-700">
          {brand ? "Edit brand" : "Create with Mavvi"}
        </Link>
        <span className="text-sm text-ink-400 self-center">Generator + Library land in Phase 2/3.</span>
      </div>
    </main>
  );
}
