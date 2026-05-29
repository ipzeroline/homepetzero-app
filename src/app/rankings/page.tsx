import Link from "next/link";
import type { Metadata } from "next";
import { topLists } from "@/data/topLists";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "จัดอันดับสินค้าเครื่องดักยุง เครื่องไล่หนู และเครื่องไล่แมลง",
  description:
    "รวมบทความจัดอันดับสินค้า TOP 10 สำหรับเครื่องดักยุง เครื่องไล่หนู เครื่องไล่แมลงสาบ และเครื่องไล่ยุง USB",
  path: "/rankings",
  keywords: ["จัดอันดับสินค้า", "TOP 10 เครื่องดักยุง", "เครื่องไล่หนู ยี่ห้อไหนดี", "เครื่องไล่แมลงสาบ ยี่ห้อไหนดี"],
});

export default function RankingsPage() {
  return (
    <div className="container" style={{ paddingBlock: 40 }}>
      <h1 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, marginBottom: 10 }}>
        จัดอันดับสินค้า
      </h1>
      <p style={{ color: "var(--ink-soft)", maxWidth: 760 }}>
        หน้า Top List สำหรับคนที่ต้องการเปรียบเทียบตัวเลือกก่อนซื้อ พร้อมลิงก์ไปยังสินค้าและบทความรีวิวที่เกี่ยวข้อง
      </p>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", marginTop: 28 }}>
        {topLists.map((list) => (
          <Link key={list.slug} href={`/rankings/${list.slug}`} className="card card-hover" style={{ padding: 22 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 10px" }}>{list.title}</h2>
            <p style={{ color: "var(--ink-soft)", margin: 0 }}>{list.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
