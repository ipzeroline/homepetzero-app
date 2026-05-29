import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { getAllProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";
import { ProductCard } from "@/components/ProductCard";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "เครื่องไล่ยุง เครื่องไล่หนู และเครื่องกำจัดแมลงยอดนิยม",
  description:
    "รวมรีวิว เปรียบเทียบ และแนะนำเครื่องไล่ยุง เครื่องดักยุง เครื่องไล่หนู และเครื่องกำจัดแมลง พร้อมอัปเดตราคาล่าสุดจาก Shopee และ Lazada",
  path: "/",
  keywords: [
    ...siteConfig.keywords,
    "เครื่องดักยุง ยี่ห้อไหนดี",
    "เครื่องไล่หนู ยี่ห้อไหนดี",
    "ของใช้ในบ้านน่าซื้อ",
  ],
});

const problemLinks = [
  {
    title: "ปัญหายุงในห้องนอน",
    text: "เครื่องดักยุง UV โคมดักยุง และวิธีลดการใช้สารเคมีในห้องนอน",
    href: "/category/mosquito",
  },
  {
    title: "ปัญหาหนูในบ้าน",
    text: "เครื่องไล่หนูไฟฟ้า วิธีปิดทางเข้า และของใช้ที่ช่วยลดหนูในครัวหรือฝ้า",
    href: "/category/rat",
  },
  {
    title: "ปัญหาแมลงรบกวน",
    text: "ของใช้ไล่แมลงสาบ มด แมลงหวี่ และอุปกรณ์แก้ปัญหาแมลงในบ้าน",
    href: "/category/insect",
  },
  {
    title: "ของใช้แก้ปัญหาในบ้าน",
    text: "สินค้าราคาหลักร้อยถึงหลักพันที่ช่วยให้บ้านสะอาด ปลอดภัย และน่าอยู่ขึ้น",
    href: "/category/home-pest",
  },
];

const popularCategorySlugs = ["mosquito", "mosquito-repeller", "rat", "cockroach", "bat", "bird"];

const buyingGuides = [
  {
    title: "YAGE เครื่องดักยุง ดีไหม? รีวิวก่อนซื้อ",
    text: "รีวิวแบบเป็นกลาง พร้อมข้อดี ข้อควรรู้ วิธีใช้ และลิงก์เช็คราคาล่าสุด",
    href: "/review-yage-mosquito-trap",
    featured: true,
  },
  { title: "เครื่องดักยุง ยี่ห้อไหนดี สำหรับห้องนอน", href: "/rankings/best-mosquito-traps-2026" },
  { title: "เปรียบเทียบเครื่องดักยุง vs เครื่องไล่ยุง", href: "/compare" },
  { title: "เครื่องไล่หนูไฟฟ้า ได้ผลจริงหรือเปล่า", href: "/blog/ultrasonic-rat-repeller-really-work" },
  { title: "วิธีเลือกเครื่องดักยุงให้เหมาะกับห้องนอน", href: "/blog/how-to-choose-mosquito-repeller" },
  { title: "ของใช้กันยุงสำหรับบ้านที่มีเด็ก", href: "/category/mosquito-repeller" },
];

export default async function HomePage() {
  const all = await getAllProducts();
  const posts = await getAllPosts();
  const popularCategories = categories.filter((c) => popularCategorySlugs.includes(c.slug));

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background:
            "radial-gradient(1200px 400px at 80% -10%, #dcfce7 0%, transparent 60%), linear-gradient(180deg,#ffffff,var(--bg))",
          paddingBlock: "64px 48px",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="container fade-up">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} บ้านปลอดยุง ปลอดหนู ปลอดกวน`}
            width={220}
            height={147}
            priority
            style={{
              width: "min(220px, 70vw)",
              height: "auto",
              marginBottom: 14,
            }}
          />
          <span className="badge badge-accent" style={{ marginBottom: 16 }}>
            รีวิวของใช้แก้ปัญหาในบ้าน
          </span>
          <h1
            style={{
              fontSize: "clamp(32px,5vw,52px)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "12px 0 16px",
              letterSpacing: 0,
              maxWidth: 760,
            }}
          >
            เครื่องไล่ยุง เครื่องไล่หนู และเครื่องกำจัดแมลงยอดนิยม
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "var(--ink-soft)",
              maxWidth: 620,
              margin: "0 0 28px",
            }}
          >
            รวมรีวิว เปรียบเทียบ และแนะนำสินค้าคุณภาพ พร้อมอัปเดตราคาล่าสุดจาก Shopee และ Lazada
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="#featured" className="btn btn-brand">
              ดูสินค้าขายดี
            </Link>
            <Link href="#buying-guides" className="btn btn-ghost">
              อ่านคู่มือก่อนซื้อ
            </Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBlock: 48 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20 }}>
          หมวดยอดนิยม
        </h2>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          }}
        >
          {popularCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="card card-hover"
              style={{ padding: 24 }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>{c.emoji}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px" }}>
                {c.name}
              </h3>
              <p
                className="line-clamp-3"
                style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0 }}
              >
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBlock: 16 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20 }}>
          ปัญหาที่คนค้นหาและพร้อมซื้อ
        </h2>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          }}
        >
          {problemLinks.map((item) => (
            <Link key={item.title} href={item.href} className="card card-hover" style={{ padding: 22 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px" }}>
                {item.title}
              </h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 14, margin: 0 }}>
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="featured" className="container" style={{ paddingBlock: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 20,
            gap: 16,
          }}
        >
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 6px" }}>
              สินค้าที่เราคัดไว้
            </h2>
            <p style={{ color: "var(--ink-soft)", margin: 0 }}>
              รวมสินค้าแก้ปัญหายุง หนู และแมลงที่มีในเว็บตอนนี้ ไม่แสดงซ้ำ เพื่อให้เลือกง่ายขึ้น
            </p>
          </div>
          <Link href="/reviews" className="btn btn-ghost">
            ดูรีวิวทั้งหมด
          </Link>
        </div>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
          }}
        >
          {all.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section id="buying-guides" className="container" style={{ paddingBlock: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "end", marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 6px" }}>
              บทความแนะนำก่อนตัดสินใจซื้อ
            </h2>
            <p style={{ color: "var(--ink-soft)", margin: 0 }}>
              รวมรีวิว เปรียบเทียบ และคู่มือเลือกซื้อที่ช่วยให้ตัดสินใจได้ง่ายขึ้น
            </p>
          </div>
          <Link href="/rankings" className="btn btn-ghost">
            ดูทั้งหมด
          </Link>
        </div>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "minmax(0,1.1fr) minmax(280px,0.9fr)",
          }}
          className="home-buying-guide-grid"
        >
          {buyingGuides
            .filter((item) => item.featured)
            .map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card card-hover"
                style={{
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 190,
                  background: "linear-gradient(135deg,#f8fafc,#eef2ff)",
                  borderColor: "#dbe4ff",
                }}
              >
                <div>
                  <span className="badge badge-brand">รีวิวเด่น</span>
                  <h3 style={{ fontSize: 24, fontWeight: 800, margin: "14px 0 8px", lineHeight: 1.25 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--ink-soft)", margin: 0 }}>{item.text}</p>
                </div>
                <span style={{ color: "var(--brand-dark)", fontWeight: 800, marginTop: 20 }}>
                  อ่านรีวิวก่อนซื้อ →
                </span>
              </Link>
            ))}
          <div className="card" style={{ padding: 8 }}>
            {buyingGuides
              .filter((item) => !item.featured)
              .map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: 14,
                    borderRadius: 10,
                    borderBottom: index === buyingGuides.length - 2 ? "none" : "1px solid var(--line)",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "var(--ink-faint)", fontWeight: 800, minWidth: 28 }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontWeight: 700, lineHeight: 1.4 }}>{item.title}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBlock: 40 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20 }}>
          บทความล่าสุด
        </h2>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          }}
        >
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="card card-hover" style={{ padding: 20 }}>
              <div style={{ fontSize: 12, color: "var(--ink-faint)", marginBottom: 8 }}>
                อ่าน {post.readingMinutes} นาที
              </div>
              <h3 className="line-clamp-2" style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px" }}>
                {post.title}
              </h3>
              <p className="line-clamp-3" style={{ color: "var(--ink-soft)", fontSize: 14, margin: 0 }}>
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBlock: 40 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20 }}>
          คำถามที่พบบ่อย
        </h2>
        <div style={{ display: "grid", gap: 12 }}>
          {[
            {
              q: "เครื่องดักยุงกับเครื่องไล่ยุงต่างกันอย่างไร?",
              a: "เครื่องดักยุงมักใช้แสง UV หรือแรงดูดเพื่อจับยุง ส่วนเครื่องไล่ยุงเน้นทำให้ยุงไม่อยากเข้าใกล้ เช่น น้ำยาไล่ยุงหรือคลื่นเสียง ควรเลือกตามพื้นที่และรูปแบบการใช้งาน",
            },
            {
              q: "เครื่องไล่หนูอัลตราโซนิคได้ผลจริงไหม?",
              a: "ได้ผลในบางพื้นที่ โดยเฉพาะพื้นที่ปิดและไม่มีสิ่งกีดขวางมาก แต่ควรใช้ร่วมกับการปิดช่องทางเข้าและเก็บอาหารให้มิดชิด",
            },
            {
              q: "ควรซื้อผ่าน Shopee หรือ Lazada ดี?",
              a: "ควรเช็คราคาล่าสุด คูปอง รีวิวผู้ซื้อ และค่าจัดส่งก่อนสั่งซื้อ เพราะโปรโมชันของแต่ละแพลตฟอร์มเปลี่ยนบ่อย",
            },
          ].map((faq) => (
            <details key={faq.q} className="card" style={{ padding: "16px 20px" }}>
              <summary style={{ cursor: "pointer", fontWeight: 800 }}>{faq.q}</summary>
              <p style={{ color: "var(--ink-soft)", marginBottom: 0 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
