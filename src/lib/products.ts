import "server-only";
import { promises as fs } from "fs";
import path from "path";
import type { Product, CategorySlug } from "@/lib/types";
import seed from "@/data/products.json";

// ในแซนด์บ็อกซ์/โปรดักชันที่อ่านอย่างเดียว จะใช้ไฟล์ใน data/
// ตอน dev จะเขียนกลับลงไฟล์เดียวกันได้ผ่านหน้า Admin
const DATA_FILE = path.join(process.cwd(), "src", "data", "products.json");

async function readAll(): Promise<Product[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Product[];
  } catch {
    // fallback ไป seed ที่ import มาตอน build (กรณี read-only fs)
    return seed as unknown as Product[];
  }
}

async function writeAll(products: Product[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), "utf-8");
}

export async function getAllProducts(): Promise<Product[]> {
  const products = await readAll();
  return products.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((p) => p.featured);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await readAll();
  return products.find((p) => p.slug === slug) ?? null;
}

export async function getProductsByCategory(
  category: CategorySlug,
): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((p) => p.category === category);
}

export async function getProductsByIds(ids: string[]): Promise<Product[]> {
  const products = await readAll();
  return ids
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}

export async function upsertProduct(product: Product): Promise<Product> {
  const products = await readAll();
  const idx = products.findIndex((p) => p.id === product.id);
  const now = new Date().toISOString().slice(0, 10);
  const next: Product = { ...product, updatedAt: now };
  if (idx >= 0) {
    products[idx] = next;
  } else {
    next.createdAt = now;
    products.push(next);
  }
  await writeAll(products);
  return next;
}

export async function deleteProduct(id: string): Promise<void> {
  const products = await readAll();
  await writeAll(products.filter((p) => p.id !== id));
}

// คำนวณ rating เฉลี่ยจากรีวิว
export function computeRating(product: Product): number {
  if (!product.reviews.length) return product.rating;
  const sum = product.reviews.reduce((s, r) => s + r.rating, 0);
  return Math.round((sum / product.reviews.length) * 10) / 10;
}

// แปลงลิงก์ Shopee ให้แนบ sub_id สำหรับ tracking ค่า commission
export function withAffiliateTag(url: string, subId: string): string {
  try {
    const u = new URL(url);
    if (u.hostname === "s.shopee.co.th") return url;
    if (!u.searchParams.has("sub_id")) {
      u.searchParams.set("sub_id", subId);
    }
    u.searchParams.set("utm_source", "affiliate-site");
    return u.toString();
  } catch {
    return url;
  }
}
