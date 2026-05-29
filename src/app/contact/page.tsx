import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "ติดต่อเรา",
  description: "ติดต่อทีมงาน HomePestZero สำหรับข้อมูลเว็บไซต์ รีวิวสินค้า Affiliate และข้อเสนอแนะเกี่ยวกับเนื้อหา",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container" style={{ paddingBlock: 48, maxWidth: 760 }}>
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>ติดต่อเรา</h1>
      <p style={{ color: "var(--ink-soft)" }}>
        หากต้องการเสนอสินค้า แจ้งข้อมูลผิดพลาด หรือติดต่อเรื่องความร่วมมือ สามารถติดต่อทีมงาน {siteConfig.name} ได้ผ่านช่องทางด้านล่าง
      </p>
      <div className="card" style={{ padding: 22 }}>
        <p><strong>อีเมล:</strong> contact@homepestzero.com</p>
        <p><strong>เว็บไซต์:</strong> HomePestZero.com</p>
        <p style={{ color: "var(--ink-soft)", marginBottom: 0 }}>
          หมายเหตุ: เว็บไซต์นี้เป็นเว็บไซต์รีวิวและ Affiliate ไม่ใช่ผู้ขายสินค้าโดยตรง หากมีปัญหาการจัดส่งหรือการรับประกัน โปรดติดต่อร้านค้าบน Shopee หรือ Lazada ที่คุณสั่งซื้อ
        </p>
      </div>
    </div>
  );
}
