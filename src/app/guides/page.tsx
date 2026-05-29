import type { Metadata } from "next";
import { seoTopics } from "@/data/seoTopics";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "บทความความรู้และแผนหัวข้อ SEO สำหรับบ้านปลอดสัตว์รบกวน",
  description:
    "คลังหัวข้อบทความ SEO มากกว่า 300 หัวข้อสำหรับเครื่องดักยุง เครื่องไล่หนู เครื่องไล่แมลง และวิธีป้องกันสัตว์รบกวน",
  path: "/guides",
  keywords: ["บทความความรู้", "หัวข้อ SEO", "เครื่องดักยุง ยี่ห้อไหนดี", "วิธีไล่หนูในบ้าน"],
});

export default function GuidesPage() {
  return (
    <div className="container" style={{ paddingBlock: 40 }}>
      <h1 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, marginBottom: 10 }}>
        บทความความรู้
      </h1>
      <p style={{ color: "var(--ink-soft)", maxWidth: 760 }}>
        แผนหัวข้อ SEO สำหรับสร้างบทความระยะยาว ครอบคลุม keyword การเลือกซื้อ รีวิว เปรียบเทียบ และวิธีแก้ปัญหายุง หนู แมลงในบ้าน
      </p>
      <div className="card" style={{ padding: 18, marginTop: 24, marginBottom: 20 }}>
        <strong>{seoTopics.length.toLocaleString()} หัวข้อพร้อมต่อยอดเป็นบทความ SEO</strong>
      </div>
      <div style={{ columns: "280px 3", columnGap: 18 }}>
        {seoTopics.map((topic, index) => (
          <div key={topic} className="card" style={{ padding: 12, marginBottom: 12, breakInside: "avoid" }}>
            <span style={{ color: "var(--ink-faint)", fontSize: 12 }}>#{index + 1}</span>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{topic}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
