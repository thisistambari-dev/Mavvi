import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import BrandForm, { type BrandFormValues } from "@/components/BrandForm";

const EMPTY: BrandFormValues = {
  brandName: "",
  industry: "",
  description: "",
  productsServices: "",
  audience: "",
  platforms: "Instagram",
  voice: "",
  goals: "",
  contentTypes: ""
};

export default async function BrandPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const userId = (session.user as { id?: string }).id;
  const existing = userId
    ? await db.brandProfile.findFirst({ where: { userId }, orderBy: { createdAt: "desc" } })
    : null;
  const initial: BrandFormValues = existing
    ? {
        brandName: existing.brandName,
        industry: existing.industry,
        description: existing.description,
        productsServices: existing.productsServices,
        audience: existing.audience,
        platforms: existing.platforms,
        voice: existing.voice,
        goals: existing.goals,
        contentTypes: existing.contentTypes
      }
    : EMPTY;

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold font-display">{existing ? "Edit brand profile" : "Create your brand profile"}</h1>
      <p className="text-sm text-ink-600 mt-1">Mavvi uses this on every generation — 1 brand per user in MVP.</p>
      <BrandForm initial={initial} />
    </main>
  );
}
