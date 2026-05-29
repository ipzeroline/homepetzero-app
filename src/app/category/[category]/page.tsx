import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getCategory, categorySlugs } from "@/data/categories";
import { getProductsByCategory } from "@/lib/products";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";

export async function generateStaticParams() {
  return categorySlugs.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return buildMetadata({
    title: cat.title,
    description: cat.description,
    path: `/category/${cat.slug}`,
    keywords: cat.keywords,
  });
}

const FAQS: Record<string, { question: string; answer: string }[]> = {
  mosquito: [
    {
      question: "เครื่องไล่ยุงอัลตราโซนิคปลอดภัยกับเด็กไหม?",
      answer:
        "ปลอดภัย เพราะใช้คลื่นเสียงความถี่สูงที่ไม่เป็นอันตรายต่อมนุษย์และสัตว์เลี้ยง ไม่มีสารเคมีและควัน",
    },
    {
      question: "ต้องเปิดทิ้งไว้ตลอดไหม?",
      answer: "แนะนำให้เปิดต่อเนื่องโดยเฉพาะช่วงเย็นถึงกลางคืนที่ยุงออกหากิน เครื่องส่วนใหญ่กินไฟต่ำมาก",
    },
  ],
  rat: [
    {
      question: "เครื่องไล่หนูได้ผลภายในกี่วัน?",
      answer: "ส่วนใหญ่เริ่มเห็นผลใน 1-2 สัปดาห์ ขึ้นกับขนาดพื้นที่และจำนวนเครื่องที่ติดตั้ง",
    },
    {
      question: "ใช้กับสัตว์เลี้ยงในบ้านได้ไหม?",
      answer: "สุนัขและแมวมักไม่ได้รับผลกระทบ แต่หนูแฮมสเตอร์ กระต่าย หรือสัตว์ฟันแทะอาจไวต่อคลื่น ควรหลีกเลี่ยง",
    },
  ],
  insect: [
    {
      question: "เครื่องไล่แมลงเหมาะกับแมลงทุกชนิดไหม?",
      answer:
        "ไม่เสมอไป ควรเลือกตามปัญหา เช่น แมลงสาบ มด หรือแมลงหวี่ เพราะอุปกรณ์และวิธีป้องกันแต่ละแบบได้ผลต่างกัน",
    },
    {
      question: "ควรใช้ของไล่แมลงร่วมกับอะไร?",
      answer:
        "ควรใช้ร่วมกับการเก็บอาหารให้มิดชิด ปิดช่องทางเข้า และทำความสะอาดพื้นที่อับชื้นเป็นประจำ",
    },
  ],
  "home-pest": [
    {
      question: "ของใช้ป้องกันสัตว์รบกวนควรเลือกจากอะไร?",
      answer:
        "เริ่มจากปัญหาหลักในบ้าน เช่น ยุง หนู แมลง กลิ่นอับ หรือสัตว์เลี้ยง แล้วเลือกสินค้าที่เหมาะกับพื้นที่ใช้งานจริง",
    },
  ],
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const products = await getProductsByCategory(cat.slug);
  const faqs = FAQS[cat.slug] ?? [];

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cat.title,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `/products/${p.slug}`,
      name: p.name,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          itemList,
          breadcrumbJsonLd([
            { name: "หน้าแรก", path: "/" },
            { name: cat.name, path: `/category/${cat.slug}` },
          ]),
          ...(faqs.length ? [faqJsonLd(faqs)] : []),
        ]}
      />

      <section
        className="container"
        style={{ paddingBlock: "40px 24px" }}
      >
        <div
          className="category-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(280px,420px)",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 48 }}>{cat.emoji}</div>
            <h1 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, margin: "8px 0 12px" }}>
              {cat.title}
            </h1>
            <p style={{ color: "var(--ink-soft)", maxWidth: 680, fontSize: 17 }}>
              {cat.description}
            </p>
          </div>
          {cat.heroImage && (
            <Image
              src={cat.heroImage}
              alt={`${cat.name} สำหรับแก้ปัญหาในบ้าน`}
              width={900}
              height={675}
              priority
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 16,
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow)",
              }}
            />
          )}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 32 }}>
        {products.length > 0 ? (
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))" }}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="card" style={{ padding: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 0 }}>
              กำลังคัดสินค้าในหมวดนี้
            </h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>
              ทีมงานกำลังเพิ่มรีวิวสินค้า Shopee ที่เหมาะกับหมวดนี้ ระหว่างนี้คุณสามารถอ่านบทความแนะนำหรือดูสินค้าในหมวดเครื่องดักยุงก่อนได้
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="/review-yage-mosquito-trap" className="btn btn-brand">
                อ่านรีวิว YAGE เครื่องดักยุง
              </a>
              <a href="/blog" className="btn btn-ghost">
                อ่านบทความล่าสุด
              </a>
            </div>
          </div>
        )}
      </section>

      {faqs.length > 0 && (
        <section className="container" style={{ paddingBlock: 24 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>คำถามที่พบบ่อย</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {faqs.map((f) => (
              <details key={f.question} className="card" style={{ padding: "16px 20px" }}>
                <summary style={{ fontWeight: 700, cursor: "pointer" }}>{f.question}</summary>
                <p style={{ color: "var(--ink-soft)", margin: "10px 0 0" }}>{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
