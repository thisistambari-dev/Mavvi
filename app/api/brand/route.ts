import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/lib/db";

const BrandSchema = z.object({
  brandName: z.string().min(2).max(80),
  industry: z.string().min(2).max(80),
  description: z.string().min(10).max(2000),
  productsServices: z.string().min(2).max(1000),
  audience: z.string().min(2).max(1000),
  platforms: z.string().min(2).max(500),
  voice: z.string().min(2).max(500),
  goals: z.string().min(2).max(1000),
  contentTypes: z.string().min(2).max(500)
});

function userIdOf(session: unknown): string | null {
  const u = (session as { user?: { id?: string } } | null)?.user;
  return u?.id ?? null;
}

export async function GET() {
  const session = await auth();
  const userId = userIdOf(session);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const brand = await db.brandProfile.findFirst({ where: { userId }, orderBy: { createdAt: "desc" } });
  return NextResponse.json({ brand });
}

export async function POST(req: Request) {
  const session = await auth();
  const userId = userIdOf(session);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => null);
  const parsed = BrandSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }
  const existing = await db.brandProfile.findFirst({ where: { userId } });
  const brand = existing
    ? await db.brandProfile.update({ where: { id: existing.id }, data: parsed.data })
    : await db.brandProfile.create({ data: { ...parsed.data, userId } });
  return NextResponse.json({ brand });
}
