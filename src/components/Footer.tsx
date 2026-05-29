import Link from "next/link";
import { categories } from "@/data/categories";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer
      style={{
        marginTop: 80,
        background: "#0f172a",
        color: "#cbd5e1",
        paddingBlock: "48px 28px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: 32,
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          }}
        >
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 12 }}>
              {siteConfig.shortName}
            </div>
            <p style={{ fontSize: 14, color: "#94a3b8", maxWidth: 280 }}>
              {siteConfig.description}
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#fff", marginBottom: 12 }}>หมวดหมู่</div>
            {categories.map((c) => (
              <div key={c.slug} style={{ marginBottom: 8 }}>
                <Link href={`/category/${c.slug}`} style={{ fontSize: 14, color: "#cbd5e1" }}>
                  {c.name}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "#fff", marginBottom: 12 }}>เมนู</div>
            {[
              { href: "/compare", label: "เปรียบเทียบสินค้า" },
              { href: "/blog", label: "บทความ & รีวิว" },
              { href: "/about", label: "เกี่ยวกับเรา" },
            ].map((l) => (
              <div key={l.href} style={{ marginBottom: 8 }}>
                <Link href={l.href} style={{ fontSize: 14, color: "#cbd5e1" }}>
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 36,
            paddingTop: 20,
            borderTop: "1px solid #1e293b",
            fontSize: 12.5,
            color: "#64748b",
            lineHeight: 1.7,
          }}
        >
          <p style={{ margin: "0 0 8px" }}>
            <strong>การเปิดเผยข้อมูลพันธมิตร:</strong>{" "}
            เว็บไซต์นี้มีลิงก์พันธมิตร (Affiliate) ของ Shopee
            เมื่อคุณคลิกและสั่งซื้อผ่านลิงก์ เราอาจได้รับค่าคอมมิชชันโดยที่คุณไม่ต้องจ่ายเพิ่ม
            ราคาที่แสดงเป็นราคาโดยประมาณ โปรดตรวจสอบราคาจริงที่หน้า Shopee อีกครั้ง
          </p>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} {siteConfig.name} · สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
}
