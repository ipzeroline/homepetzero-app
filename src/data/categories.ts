import type { Category, CategorySlug } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "mosquito",
    name: "เครื่องดักยุง",
    title: "เครื่องดักยุงและเครื่องไล่ยุงสำหรับบ้าน คอนโด และห้องนอน",
    emoji: "🦟",
    heroImage: "/images/hero-360-uv-mosquito-trap-lamp.jpg",
    description:
      "รวมรีวิวเครื่องดักยุง โคมดักยุง UV เครื่องไล่ยุง และของใช้กันยุงสำหรับบ้านที่ไม่อยากพึ่งสเปรย์หรือยาจุดกันยุง",
    keywords: [
      "เครื่องดักยุง",
      "โคมดักยุง",
      "เครื่องดักยุง UV",
      "เครื่องดักยุงในห้องนอน",
      "เครื่องไล่ยุงไม่ใช้สารเคมี",
    ],
  },
  {
    slug: "rat",
    name: "เครื่องไล่หนู",
    title: "เครื่องไล่หนูและวิธีไล่หนูในบ้านแบบไม่ต้องใช้ยาเบื่อ",
    emoji: "🐀",
    heroImage: "/images/hero-ultrasonic-rat-insect-repeller.jpg",
    description:
      "รีวิวเครื่องไล่หนูไฟฟ้า เครื่องไล่หนูอัลตราโซนิค และวิธีจัดการหนูในบ้าน โกดัง ห้องครัว หรือฝ้าเพดานอย่างปลอดภัย",
    keywords: ["เครื่องไล่หนู", "ไล่หนูอัลตราโซนิค", "เครื่องไล่หนูไฟฟ้า", "ไล่หนูในบ้านแบบไม่ฆ่า"],
  },
  {
    slug: "insect",
    name: "เครื่องไล่แมลง",
    title: "เครื่องไล่แมลงและของใช้จัดการแมลงกวนใจในบ้าน",
    emoji: "🪳",
    heroImage: "/images/hero-smart-portable-insect-repeller.jpg",
    description:
      "รวมของใช้แก้ปัญหาแมลงสาบ มด แมลงหวี่ และแมลงรบกวนในบ้าน พร้อมแนวทางเลือกอุปกรณ์ที่เหมาะกับแต่ละพื้นที่",
    keywords: ["เครื่องไล่แมลง", "ไล่แมลงสาบ", "ของใช้ไล่แมลง", "แมลงในบ้าน"],
  },
  {
    slug: "home-pest",
    name: "ของใช้ป้องกันสัตว์รบกวน",
    title: "ของใช้ป้องกันสัตว์รบกวนและแก้ปัญหาในบ้าน",
    emoji: "🏠",
    heroImage: "/images/hero-natural-rat-repellent-gel-blocks.jpg",
    description:
      "คัดของใช้ในบ้านราคาหลักร้อยถึงหลักพันที่ช่วยลดปัญหายุง หนู แมลง กลิ่นอับ และความรบกวนในชีวิตประจำวัน",
    keywords: ["ของใช้แก้ปัญหาในบ้าน", "ของใช้ป้องกันสัตว์รบกวน", "รีวิวสินค้า Shopee", "ของใช้ในบ้านน่าซื้อ"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const categorySlugs: CategorySlug[] = categories.map((c) => c.slug);
