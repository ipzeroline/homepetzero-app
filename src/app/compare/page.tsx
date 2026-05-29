import type { Metadata } from "next";
import { getAllProducts, withAffiliateTag } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { CompareClient } from "./CompareClient";

export const metadata: Metadata = buildMetadata({
  title: "เปรียบเทียบของใช้แก้ปัญหายุง หนู แมลงในบ้าน",
  description:
    "เปรียบเทียบสเปก ราคา คะแนนรีวิว และพื้นที่ครอบคลุมของเครื่องดักยุง เครื่องไล่หนู เครื่องไล่แมลง และของใช้แก้ปัญหาในบ้าน",
  path: "/compare",
});

export default async function ComparePage() {
  const products = await getAllProducts();
  const withTags = products.map((p) => ({
    ...p,
    buyUrl: withAffiliateTag(p.shopeeUrl, siteConfig.affiliateSubId),
  }));

  return (
    <div className="container" style={{ paddingBlock: 40 }}>
      <h1 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 800, marginBottom: 8 }}>
        เปรียบเทียบสินค้า
      </h1>
      <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>
        เลือกได้สูงสุด 3 รุ่นเพื่อเทียบสเปกและราคาแบบเคียงข้างกัน
      </p>
      <CompareClient products={withTags} />
    </div>
  );
}
