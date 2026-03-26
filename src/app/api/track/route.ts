import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { toolId?: string };
  if (!body.toolId) {
    return NextResponse.json({ error: "toolId 必填" }, { status: 400 });
  }
  console.log("[track API]", body.toolId);
  return NextResponse.json({ ok: true });
}
