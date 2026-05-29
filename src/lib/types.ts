export type CategorySlug =
  | "mosquito"
  | "mosquito-repeller"
  | "rat"
  | "cockroach"
  | "insect"
  | "pest-control"
  | "bat"
  | "bird"
  | "home-pest";

export interface Category {
  slug: CategorySlug;
  name: string; // ชื่อไทย
  title: string; // หัวข้อหน้า
  emoji: string;
  heroImage?: string;
  description: string;
  keywords: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  date: string; // ISO
  verified: boolean;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  brand: string;
  shortDescription: string;
  description: string;
  // ราคาโดยประมาณ (บาท) — ดึงสดจาก Shopee ไม่ได้ จึงเก็บไว้แสดงผล
  price: number;
  originalPrice?: number;
  currency: string;
  image: string;
  gallery: string[];
  // ลิงก์ affiliate ของ Shopee (ใส่ผ่านหน้า Admin)
  shopeeUrl: string;
  features: string[];
  specs: ProductSpec[];
  pros: string[];
  cons: string[];
  coverage: string; // พื้นที่ครอบคลุม
  rating: number; // ค่าเฉลี่ยรวม
  reviews: Review[];
  badges: string[]; // เช่น "ขายดี", "คุ้มสุด"
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // markdown-ish (รองรับ heading/paragraph/list)
  category: CategorySlug | "guide";
  coverImage: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  relatedProductIds: string[];
  readingMinutes: number;
}
