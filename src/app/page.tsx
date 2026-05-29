import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { getFeaturedProducts, getAllProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";
import { ProductCard } from "@/components/ProductCard";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "HomePestZero รีวิวของใช้แก้ปัญหายุง หนู แมลง สำหรับบ้านคนไทย",
  description:
    "HomePestZero รีวิวของใช้ในบ้าน เครื่องดักยุง เครื่องไล่หนู เครื่องไล่แมลง และสินค้า Shopee ที่ช่วยแก้ปัญหายุง หนู แมลง และสัตว์รบกวน",
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

const moneyPages = [
  { title: "YAGE เครื่องดักยุง ดีไหม? รีวิวก่อนซื้อ", href: "/review-yage-mosquito-trap" },
  { title: "เครื่องดักยุง ยี่ห้อไหนดี สำหรับห้องนอน", href: "/category/mosquito" },
  { title: "เปรียบเทียบเครื่องดักยุง vs เครื่องไล่ยุง", href: "/compare" },
  { title: "เครื่องไล่หนูไฟฟ้า ได้ผลจริงหรือเปล่า", href: "/blog/ultrasonic-rat-repeller-really-work" },
  { title: "วิธีเลือกเครื่องดักยุงให้เหมาะกับห้องนอน", href: "/blog/how-to-choose-mosquito-repeller" },
  { title: "ของใช้กันยุงสำหรับบ้านที่มีเด็ก", href: "/category/mosquito" },
];

export default async function HomePage() {
  const featured = await getFeaturedProducts();
  const all = await getAllProducts();
  const posts = await getAllPosts();

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
            รีวิวของใช้ในบ้าน แก้ปัญหายุง หนู แมลง{" "}
            <span style={{ color: "var(--brand)" }}>สำหรับบ้านคนไทย</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "var(--ink-soft)",
              maxWidth: 620,
              margin: "0 0 28px",
            }}
          >
            รวมรีวิวเครื่องดักยุง เครื่องไล่หนู เครื่องไล่แมลง และสินค้า Shopee
            ที่ช่วยแก้ปัญหาจริงในบ้าน พร้อมข้อดี ข้อควรรู้ วิธีใช้ และลิงก์เช็คราคาล่าสุด
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="#featured" className="btn btn-brand">
              ดูสินค้าแก้ปัญหา
            </Link>
            <Link href="#money-pages" className="btn btn-ghost">
              อ่านบทความทำเงิน
            </Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBlock: 48 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20 }}>
          เลือกสินค้าตามปัญหาในบ้าน
        </h2>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          }}
        >
          {categories.map((c) => (
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
          }}
        >
          <h2 style={{ fontSize: 26, fontWeight: 800, margin: 0 }}>รีวิวเครื่องดักยุงยอดนิยม</h2>
        </div>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
          }}
        >
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section id="money-pages" className="container" style={{ paddingBlock: 40 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20 }}>
          หน้าทำเงินที่ควรอ่านก่อนซื้อ
        </h2>
        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          }}
        >
          {moneyPages.map((item) => (
            <Link key={item.title} href={item.href} className="card card-hover" style={{ padding: 18, fontWeight: 800 }}>
              {item.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBlock: 40 }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20 }}>
          สินค้า Shopee ที่คัดไว้
        </h2>
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
    </>
  );
}
