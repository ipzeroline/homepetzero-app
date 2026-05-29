import type { Metadata } from "next";
import { isAuthenticated } from "@/lib/auth";
import { getAllProducts } from "@/lib/products";
import { AdminClient } from "./AdminClient";

export const metadata: Metadata = {
  title: "จัดการสินค้า",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const authed = await isAuthenticated();
  const products = authed ? await getAllProducts() : [];
  return <AdminClient initialAuthed={authed} initialProducts={products} />;
}
