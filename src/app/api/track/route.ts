import { NextRequest, NextResponse } from "next/server";

// endpoint นับคลิก affiliate (fire-and-forget จาก BuyButton)
// โปรดักชันจริงควรเก็บลง analytics/DB — ตอนนี้ log ไว้ก่อน
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("[affiliate-click]", {
      productId: data.productId,
      marketplace: data.marketplace ?? "unknown",
      url: data.url,
      ts: new Date().toISOString(),
    });
  } catch {
    /* noop */
  }
  return NextResponse.json({ ok: true });
}
