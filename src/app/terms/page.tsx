import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "เงื่อนไขการใช้งาน",
  description: "เงื่อนไขการใช้งานเว็บไซต์ HomePestZero และข้อจำกัดความรับผิดชอบของเนื้อหารีวิวสินค้า Affiliate",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container prose" style={{ paddingBlock: 48, maxWidth: 760 }}>
      <h1>เงื่อนไขการใช้งาน</h1>
      <p>
        เนื้อหาบน HomePestZero จัดทำเพื่อให้ข้อมูลประกอบการตัดสินใจซื้อสินค้า ไม่ใช่คำรับรองผลลัพธ์แบบแน่นอน เพราะประสิทธิภาพของสินค้าอาจแตกต่างตามพื้นที่และวิธีใช้งาน
      </p>
      <h2>ราคาและข้อมูลสินค้า</h2>
      <p>
        ราคา โปรโมชัน คูปอง และสถานะสินค้าอาจเปลี่ยนแปลงได้ ควรตรวจสอบข้อมูลล่าสุดที่หน้า Shopee หรือ Lazada ก่อนสั่งซื้อทุกครั้ง
      </p>
      <h2>ลิงก์ภายนอก</h2>
      <p>
        เว็บไซต์มีลิงก์ไปยังแพลตฟอร์มภายนอก เราไม่รับผิดชอบต่อการจัดส่ง การรับประกัน หรือบริการหลังการขายของร้านค้าปลายทาง
      </p>
    </div>
  );
}
