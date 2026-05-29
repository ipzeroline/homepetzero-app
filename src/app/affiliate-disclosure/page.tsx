import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description: "การเปิดเผยข้อมูลลิงก์ Affiliate ของ HomePestZero สำหรับ Shopee Affiliate และ Lazada Affiliate",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <div className="container prose" style={{ paddingBlock: 48, maxWidth: 760 }}>
      <h1>Affiliate Disclosure</h1>
      <p>
        HomePestZero เป็นเว็บไซต์รีวิวสินค้าและอาจมีลิงก์ Affiliate ไปยัง Shopee และ Lazada หากคุณคลิกและสั่งซื้อผ่านลิงก์เหล่านั้น เราอาจได้รับค่าคอมมิชชั่น โดยไม่มีค่าใช้จ่ายเพิ่มเติมสำหรับคุณ
      </p>
      <h2>หลักการรีวิว</h2>
      <p>
        เราพยายามนำเสนอข้อมูลอย่างเป็นกลาง ทั้งข้อดี ข้อควรพิจารณา วิธีใช้งาน และความเหมาะสมของสินค้า เพื่อช่วยให้ผู้อ่านตัดสินใจได้ง่ายขึ้น
      </p>
      <h2>ความโปร่งใส</h2>
      <p>
        ปุ่มซื้อหรือเช็คราคาที่ออกไปยัง Shopee/Lazada จะใช้คุณสมบัติ rel="nofollow sponsored" เพื่อระบุว่าเป็นลิงก์เชิงพาณิชย์
      </p>
    </div>
  );
}
