import "server-only";
import { cookies } from "next/headers";

// ในโปรดักชันให้ตั้งค่าใน environment variable
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "admin1234";
const COOKIE_NAME = "admin_session";

export function checkPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value === "ok";
}

export async function setSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, "ok", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8,
    path: "/",
  });
}

export async function clearSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
