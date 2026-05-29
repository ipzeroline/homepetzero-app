import { NextRequest, NextResponse } from "next/server";
import { checkPassword, setSession, clearSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { password, action } = await req.json();
  if (action === "logout") {
    await clearSession();
    return NextResponse.json({ ok: true });
  }
  if (checkPassword(password)) {
    await setSession();
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ ok: false, error: "รหัสผ่านไม่ถูกต้อง" }, { status: 401 });
}
