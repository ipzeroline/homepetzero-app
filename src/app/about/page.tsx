import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "เกี่ยวกับเรา",
  description: `${siteConfig.name} รีวิวของใช้ในบ้านที่ช่วยแก้ปัญหายุง หนู แมลง และสัตว์รบกวน พร้อมข้อมูลเปรียบเทียบเพื่อช่วยคุณตัดสินใจ`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingBlock: 48, maxWidth: 720 }}>
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>เกี่ยวกับเรา</h1>
      <div className="prose">
        <p>
          {siteConfig.name} คือเว็บไซต์รีวิวของใช้ในบ้านสำหรับแก้ปัญหายุง หนู แมลง
          และสัตว์รบกวนในชีวิตประจำวัน เราคัดสรรสินค้า Shopee ที่น่าสนใจ
          พร้อมข้อมูลสเปก ข้อดี ข้อควรพิจารณา และการเปรียบเทียบ
          เพื่อช่วยให้คุณเลือกสินค้าที่เหมาะกับปัญหาในบ้านได้ง่ายขึ้น
        </p>
        <h2>เราหารายได้อย่างไร</h2>
        <p>
          เมื่อคุณคลิกลิงก์และสั่งซื้อสินค้าผ่าน Shopee เราอาจได้รับค่าคอมมิชชันเล็กน้อย
          โดยที่คุณไม่ต้องจ่ายเพิ่ม รายได้ส่วนนี้ช่วยให้เราดูแลเว็บและทำรีวิวต่อไปได้
          เราพยายามนำเสนอข้อมูลอย่างตรงไปตรงมาทั้งข้อดีและข้อควรพิจารณา
        </p>
      </div>
    </div>
  );
}
