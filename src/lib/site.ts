const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://homepestzero.com").replace(/\/$/, "");

export const siteConfig = {
  name: "HomePestZero",
  shortName: "HomePestZero",
  url: siteUrl,
  description:
    "HomePestZero รีวิวของใช้ในบ้านที่ช่วยแก้ปัญหายุง หนู แมลง และสัตว์รบกวนสำหรับบ้านคนไทย พร้อมคู่มือเลือกซื้อ เปรียบเทียบสินค้า และลิงก์เช็คราคาบน Shopee",
  keywords: [
    "HomePestZero",
    "รีวิวของใช้ในบ้าน",
    "ของใช้แก้ปัญหาในบ้าน",
    "บ้านปลอดยุง ปลอดหนู ปลอดกวน",
    "อุปกรณ์ไล่สัตว์รบกวน",
    "เครื่องดักยุง",
    "เครื่องไล่ยุง",
    "เครื่องไล่หนู",
    "เครื่องไล่แมลง",
    "รีวิวสินค้า Shopee",
    "ของใช้ในบ้านราคาหลักร้อย",
    "อัลตราโซนิค ไล่สัตว์",
    "รีวิวเครื่องไล่ยุง",
    "Shopee เครื่องไล่หนู",
  ],
  locale: "th_TH",
  // Shopee affiliate sub_id (สำหรับ tracking ค่า commission)
  affiliateSubId: "pestrepel",
  logo: "/logo.png",
  icon: "/icon.png",
  ogImage: "/og-image.png",
  links: {
    facebook: "https://facebook.com/",
    line: "https://line.me/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
