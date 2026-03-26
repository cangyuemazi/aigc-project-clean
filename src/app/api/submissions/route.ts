import fs from "node:fs/promises";
import path from "node:path";
import { z } from "zod";
import { NextResponse } from "next/server";

const schema = z.object({
  name: z.string().min(2),
  description: z.string().min(6),
  url: z.string().url(),
  categoryId: z.string().min(2),
  tags: z.string().optional(),
  contactEmail: z.string().email()
});

const filePath = path.join(process.cwd(), "data", "submissions.json");

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "参数不正确", detail: parsed.error.flatten() }, { status: 400 });
  }

  const raw = await fs.readFile(filePath, "utf8");
  const submissions = JSON.parse(raw) as Array<Record<string, unknown>>;
  submissions.push({
    id: crypto.randomUUID(),
    ...parsed.data,
    tags: parsed.data.tags?.split(",").map((item) => item.trim()).filter(Boolean) ?? [],
    status: "pending",
    createdAt: new Date().toISOString()
  });

  await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf8");
  return NextResponse.json({ ok: true });
}
