"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export type BrandFormValues = {
  brandName: string;
  industry: string;
  description: string;
  productsServices: string;
  audience: string;
  platforms: string;
  voice: string;
  goals: string;
  contentTypes: string;
};

const FIELDS: { key: keyof BrandFormValues; label: string; hint: string; textarea?: boolean }[] = [
  { key: "brandName", label: "Brand / business name", hint: "e.g. Velour Confectioneries" },
  { key: "industry", label: "Industry", hint: "e.g. Bakery & Confectionery" },
  { key: "description", label: "Business description", hint: "What do you do?", textarea: true },
  { key: "productsServices", label: "Products / services", hint: "e.g. Birthday cakes, cupcakes", textarea: true },
  { key: "audience", label: "Target audience", hint: "e.g. People ordering cakes for celebrations", textarea: true },
  { key: "platforms", label: "Social media platforms", hint: "e.g. Instagram, TikTok" },
  { key: "voice", label: "Brand voice", hint: "e.g. Elegant, warm and playful" },
  { key: "goals", label: "Content goals", hint: "e.g. Increase cake orders" },
  { key: "contentTypes", label: "Preferred content types", hint: "e.g. Captions, reels, carousels" }
];

export default function BrandForm({ initial }: { initial: BrandFormValues }) {
  const router = useRouter();
  const [values, setValues] = useState<BrandFormValues>(initial);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/brand", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) {
      setError(data.error ?? "Could not save brand.");
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-4">
      {FIELDS.map((f) => (
        <div key={f.key}>
          <label className="text-sm font-bold">{f.label}</label>
          {f.textarea ? (
            <textarea
              className="mt-1 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-mavvi-500"
              placeholder={f.hint}
              value={values[f.key]}
              onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
              required
              rows={2}
            />
          ) : (
            <input
              className="mt-1 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-mavvi-500"
              placeholder={f.hint}
              value={values[f.key]}
              onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
              required
            />
          )}
        </div>
      ))}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        className="bg-mavvi-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-mavvi-700 disabled:opacity-50"
        disabled={busy}
      >
        {busy ? "Saving…" : "Save brand"}
      </button>
    </form>
  );
}
