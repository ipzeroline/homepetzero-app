import type { Metadata } from "next";
import { getAllProducts } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = buildMetadata({
  title: "รีวิวสินค้าเครื่องไล่ยุง เครื่องไล่หนู และเครื่องกำจัดแมลง",
  description:
    "รวมหน้ารีวิวสินค้า Affiliate จาก Shopee และ Lazada ทั้งเครื่องดักยุง เครื่องไล่หนู เครื่องไล่แมลง และอุปกรณ์กำจัดสัตว์รบกวน",
  path: "/reviews",
  keywords: ["รีวิวสินค้า Shopee", "รีวิวเครื่องดักยุง", "รีวิวเครื่องไล่หนู", "รีวิวเครื่องไล่แมลง"],
});

export default async function ReviewsPage() {
  const products = await getAllProducts();

  return (
    <div className="container" style={{ paddingBlock: 40 }}>
      <h1 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, marginBottom: 10 }}>
        รีวิวสินค้า
      </h1>
      <p style={{ color: "var(--ink-soft)", maxWidth: 760 }}>
        คัดรีวิวสินค้าแก้ปัญหายุง หนู แมลง และสัตว์รบกวนในบ้าน พร้อมข้อดี ข้อควรพิจารณา ราคาโดยประมาณ และปุ่มเช็คราคาล่าสุด
      </p>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", marginTop: 28 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
