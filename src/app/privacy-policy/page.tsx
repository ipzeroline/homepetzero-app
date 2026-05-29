import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "นโยบายความเป็นส่วนตัว",
  description: "นโยบายความเป็นส่วนตัวของ HomePestZero เกี่ยวกับการใช้งานข้อมูล คุกกี้ และการติดตามคลิก Affiliate",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="container prose" style={{ paddingBlock: 48, maxWidth: 760 }}>
      <h1>นโยบายความเป็นส่วนตัว</h1>
      <p>
        HomePestZero อาจเก็บข้อมูลการใช้งานพื้นฐาน เช่น หน้าที่เข้าชม เวลาเข้าใช้งาน และการคลิกลิงก์ Affiliate เพื่อปรับปรุงประสบการณ์ผู้ใช้และวิเคราะห์ประสิทธิภาพเว็บไซต์
      </p>
      <h2>คุกกี้และ Affiliate</h2>
      <p>
        เมื่อคุณคลิกลิงก์ไปยัง Shopee หรือ Lazada แพลตฟอร์มปลายทางอาจใช้คุกกี้เพื่อติดตามคำสั่งซื้อและคำนวณค่าคอมมิชชั่น โดยไม่มีค่าใช้จ่ายเพิ่มเติมสำหรับคุณ
      </p>
      <h2>การติดต่อ</h2>
      <p>หากมีคำถามเกี่ยวกับความเป็นส่วนตัว สามารถติดต่อได้ที่ contact@homepestzero.com</p>
    </div>
  );
}
