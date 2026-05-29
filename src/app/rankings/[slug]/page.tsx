import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { topLists } from "@/data/topLists";
import { getAllProducts } from "@/lib/products";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return topLists.map((list) => ({ slug: list.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const list = topLists.find((item) => item.slug === slug);
  if (!list) return {};
  return buildMetadata({
    title: list.title,
    description: list.description,
    path: `/rankings/${list.slug}`,
    keywords: [...list.keywords],
  });
}

export default async function RankingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const list = topLists.find((item) => item.slug === slug);
  if (!list) notFound();

  const targetCategory = list.category === "cockroach" ? "insect" : list.category;
  const products = (await getAllProducts())
    .filter((product) => product.category === targetCategory)
    .slice(0, 10);
  const faqs = [
    {
      question: `${list.title} ควรเลือกจากอะไร?`,
      answer: "ควรดูพื้นที่ใช้งาน ราคา คะแนนรีวิว ข้อดีข้อเสีย และความเหมาะสมกับปัญหาในบ้านจริงก่อนตัดสินใจ",
    },
    {
      question: "ราคาควรเช็คจากที่ไหน?",
      answer: "ควรเช็คราคาล่าสุด คูปอง และรีวิวผู้ซื้อจาก Shopee หรือ Lazada ก่อนสั่งซื้อ เพราะโปรโมชันเปลี่ยนได้บ่อย",
    },
  ];

  return (
    <div className="container" style={{ paddingBlock: 40 }}>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "หน้าแรก", path: "/" },
            { name: "จัดอันดับสินค้า", path: "/rankings" },
            { name: list.title, path: `/rankings/${list.slug}` },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <h1 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, marginBottom: 10 }}>
        {list.title}
      </h1>
      <p style={{ color: "var(--ink-soft)", maxWidth: 760 }}>{list.description}</p>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800 }}>อันดับสินค้าแนะนำ</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))" }}>
          {products.map((product, index) => (
            <div key={product.id} style={{ position: "relative" }}>
              <span className="badge badge-accent" style={{ position: "absolute", top: 10, left: 10, zIndex: 2 }}>
                #{index + 1}
              </span>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 36 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800 }}>คำถามที่พบบ่อย</h2>
        {faqs.map((faq) => (
          <details key={faq.question} className="card" style={{ padding: "16px 20px", marginBottom: 10 }}>
            <summary style={{ cursor: "pointer", fontWeight: 800 }}>{faq.question}</summary>
            <p style={{ color: "var(--ink-soft)", marginBottom: 0 }}>{faq.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
