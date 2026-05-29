import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import {
  getAllProducts,
  upsertProduct,
  deleteProduct,
} from "@/lib/products";
import type { Product } from "@/lib/types";

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = (await req.json()) as Partial<Product>;
  const today = new Date().toISOString().slice(0, 10);
  // ตั้งค่า default ให้ field ที่อาจว่าง โดยให้ค่าจาก body มาก่อน
  const product: Product = {
    id: body.id ?? `p${Date.now()}`,
    slug: body.slug ?? "",
    name: body.name ?? "",
    category: body.category ?? "mosquito",
    brand: body.brand ?? "",
    shortDescription: body.shortDescription ?? "",
    description: body.description ?? "",
    price: body.price ?? 0,
    originalPrice: body.originalPrice,
    currency: "฿",
    image: body.image ?? "",
    gallery: body.gallery?.length ? body.gallery : body.image ? [body.image] : [],
    shopeeUrl: body.shopeeUrl ?? "",
    features: body.features ?? [],
    specs: body.specs ?? [],
    pros: body.pros ?? [],
    cons: body.cons ?? [],
    coverage: body.coverage ?? "",
    rating: body.rating ?? 0,
    reviews: body.reviews ?? [],
    badges: body.badges ?? [],
    featured: Boolean(body.featured),
    createdAt: body.createdAt ?? today,
    updatedAt: today,
  };
  const saved = await upsertProduct(product);
  return NextResponse.json(saved);
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { id } = await req.json();
  await deleteProduct(id);
  return NextResponse.json({ ok: true });
}
