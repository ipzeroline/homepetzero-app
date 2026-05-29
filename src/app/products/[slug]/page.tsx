import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getProductBySlug,
  getAllProducts,
  getProductsByCategory,
  withAffiliateTag,
} from "@/lib/products";
import { getCategory } from "@/data/categories";
import { siteConfig } from "@/lib/site";
import {
  buildMetadata,
  productJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { StarRating } from "@/components/StarRating";
import { BuyButton } from "@/components/BuyButton";
import { ProductCard } from "@/components/ProductCard";
import { ProductConversionWidgets } from "@/components/ProductConversionWidgets";

// pre-render ทุกสินค้าเป็น static (SEO + เร็ว)
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} รีวิว + ราคา`,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    keywords: [product.name, product.brand, ...siteConfig.keywords.slice(0, 3)],
    image: product.image,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategory(product.category)!;
  const related = (await getProductsByCategory(product.category))
    .filter((p) => p.id !== product.id)
    .slice(0, 4);
  const buyUrl = withAffiliateTag(product.shopeeUrl, siteConfig.affiliateSubId);
  const suitableFor =
    product.category === "rat"
      ? [
          "บ้านที่มีร่องรอยหนูในห้องครัวหรือห้องเก็บของ",
          "คนที่ต้องการลดการใช้กับดักหรือยาเบื่อหนู",
          "ร้านค้า โกดังขนาดเล็ก หรือพื้นที่เก็บอาหาร",
          "คนที่ต้องการใช้อุปกรณ์ป้องกันสัตว์รบกวนต่อเนื่อง",
        ]
      : product.category === "insect" || product.category === "cockroach"
        ? [
            "บ้านหรือคอนโดที่มีแมลงรบกวนเป็นประจำ",
            "คนที่ต้องการตัวช่วยลดแมลงโดยใช้งานง่าย",
            "พื้นที่เล็ก เช่น โต๊ะทำงาน ระเบียง หรือห้องพัก",
            "คนที่ต้องการอุปกรณ์เสริมร่วมกับการทำความสะอาดบ้าน",
          ]
        : [
            "คนที่มียุงในห้องนอนหรือคอนโด",
            "บ้านที่ไม่อยากใช้สเปรย์หรือยาจุดกันยุงบ่อย ๆ",
            "ห้องนอน ห้องนั่งเล่น หอพัก หรือพื้นที่ปิด",
            "คนที่ต้องการสินค้าแก้ปัญหายุงแบบใช้งานง่าย",
          ];
  const productFaqs = [
    {
      q: `${product.name} เหมาะกับใคร?`,
      a: `เหมาะกับ ${suitableFor.slice(0, 2).join(" และ ")} โดยควรเลือกตามพื้นที่ใช้งานจริงและอ่านข้อควรพิจารณาก่อนซื้อ`,
    },
    {
      q: "ควรเช็คราคาล่าสุดจากที่ไหน?",
      a: "ควรกดปุ่มดูราคาล่าสุดบน Shopee เพื่อตรวจสอบคูปอง ค่าจัดส่ง โปรโมชัน และรีวิวผู้ซื้อก่อนสั่งซื้อ",
    },
    {
      q: "สินค้านี้เห็นผล 100% ทันทีไหม?",
      a: "ไม่ควรคาดหวังผล 100% ทันที เพราะผลลัพธ์ขึ้นกับสภาพพื้นที่ จำนวนยุง หนู หรือแมลง และวิธีใช้งาน ควรใช้ร่วมกับการจัดการต้นเหตุในบ้าน",
    },
  ];

  const breadcrumbs = [
    { name: "หน้าแรก", path: "/" },
    { name: category.name, path: `/category/${category.slug}` },
    { name: product.name, path: `/products/${product.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          productJsonLd(product),
          breadcrumbJsonLd(breadcrumbs),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: productFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />

      <div
        style={{
          position: "sticky",
          bottom: 12,
          zIndex: 40,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <BuyButton url={buyUrl} productId={product.id} label="ดูราคาล่าสุดบน Shopee" />
        </div>
      </div>

      <div className="container" style={{ paddingBlock: 28 }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 20 }}>
          {breadcrumbs.map((b, i) => (
            <span key={b.path}>
              {i > 0 && " / "}
              {i < breadcrumbs.length - 1 ? (
                <Link href={b.path} style={{ color: "var(--ink-soft)" }}>
                  {b.name}
                </Link>
              ) : (
                <span>{b.name}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Main */}
        <div
          className="product-main-grid"
          style={{
            display: "grid",
            gap: 32,
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
            alignItems: "start",
          }}
        >
          <div
            className="card"
            style={{
              position: "relative",
              aspectRatio: "1/1",
              overflow: "hidden",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width:768px) 100vw, 560px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
              {product.badges.map((b) => (
                <span key={b} className="badge badge-brand">
                  {b}
                </span>
              ))}
            </div>
            <div style={{ fontSize: 14, color: "var(--ink-faint)", fontWeight: 600 }}>
              {product.brand}
            </div>
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: "6px 0 12px", lineHeight: 1.2 }}>
              {product.name}
            </h1>
            <StarRating value={product.rating} count={product.reviews.length} size={18} />

            <div style={{ display: "flex", alignItems: "baseline", gap: 12, margin: "20px 0" }}>
              <span style={{ fontSize: 34, fontWeight: 800, color: "var(--brand-dark)" }}>
                ฿{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span
                  style={{
                    fontSize: 18,
                    color: "var(--ink-faint)",
                    textDecoration: "line-through",
                  }}
                >
                  ฿{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p style={{ color: "var(--ink-soft)", marginBottom: 20 }}>
              {product.shortDescription}
            </p>

            <BuyButton url={buyUrl} productId={product.id} block label="ซื้อบน Shopee ราคาล่าสุด" />
            <p style={{ fontSize: 12, color: "var(--ink-faint)", marginTop: 10 }}>
              * ลิงก์พันธมิตร ราคาจริงตรวจสอบที่หน้า Shopee · พื้นที่ครอบคลุม{" "}
              {product.coverage}
            </p>

            {/* Specs */}
            <div className="card" style={{ padding: 16, marginTop: 24 }}>
              <h2 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 12px" }}>
                สเปกสินค้า
              </h2>
              <dl style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 16px", margin: 0 }}>
                {product.specs.map((s) => (
                  <div key={s.label} style={{ display: "contents" }}>
                    <dt style={{ color: "var(--ink-faint)", fontSize: 14 }}>{s.label}</dt>
                    <dd style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Description + Pros/Cons */}
        <section className="product-main-grid" style={{ marginTop: 40, display: "grid", gap: 24, gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)" }}>
          <div className="card" style={{ padding: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 0 }}>รายละเอียด</h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: 16 }}>{product.description}</p>
            <h3 style={{ fontSize: 16, fontWeight: 700 }}>จุดเด่น</h3>
            <ul style={{ color: "var(--ink-soft)", paddingLeft: 20 }}>
              {product.features.map((f) => (
                <li key={f} style={{ marginBottom: 6 }}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, marginTop: 0, color: "var(--brand-dark)" }}>
              ✓ ข้อดี
            </h3>
            <ul style={{ color: "var(--ink-soft)", paddingLeft: 20, marginBottom: 20 }}>
              {product.pros.map((p) => (
                <li key={p} style={{ marginBottom: 6 }}>{p}</li>
              ))}
            </ul>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#dc2626" }}>✕ ข้อควรพิจารณา</h3>
            <ul style={{ color: "var(--ink-soft)", paddingLeft: 20, margin: 0 }}>
              {product.cons.map((c) => (
                <li key={c} style={{ marginBottom: 6 }}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="product-main-grid" style={{ marginTop: 40, display: "grid", gap: 24, gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
          <div className="card" style={{ padding: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 0 }}>เหมาะกับใคร</h2>
            <ul style={{ color: "var(--ink-soft)", paddingLeft: 20, marginBottom: 0 }}>
              {suitableFor.map((item) => (
                <li key={item} style={{ marginBottom: 8 }}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 0 }}>รีวิวการใช้งานโดยรวม</h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: 0 }}>
              จากสเปกและรูปแบบการใช้งาน สินค้านี้เหมาะเป็นตัวช่วยแก้ปัญหาในบ้านแบบใช้งานต่อเนื่อง จุดสำคัญคือควรวางหรือใช้งานให้ถูกตำแหน่ง ตรวจสอบพื้นที่ครอบคลุม และใช้ร่วมกับการจัดการต้นเหตุ เช่น ปิดช่องทางเข้า เก็บอาหารให้มิดชิด หรือกำจัดแหล่งน้ำขัง เพื่อให้ผลลัพธ์ดีขึ้นในระยะยาว
            </p>
          </div>
        </section>

        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>
            คำถามที่พบบ่อย
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {productFaqs.map((faq) => (
              <details key={faq.q} className="card" style={{ padding: "16px 20px" }}>
                <summary style={{ fontWeight: 800, cursor: "pointer" }}>{faq.q}</summary>
                <p style={{ color: "var(--ink-soft)", marginBottom: 0 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>
            รีวิวจากผู้ใช้ ({product.reviews.length})
          </h2>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}>
            {product.reviews.map((r) => (
              <div key={r.id} className="card" style={{ padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ fontSize: 14 }}>{r.author}</strong>
                  {r.verified && (
                    <span className="badge badge-brand" style={{ fontSize: 11 }}>
                      ซื้อจริง
                    </span>
                  )}
                </div>
                <div style={{ margin: "8px 0" }}>
                  <StarRating value={r.rating} />
                </div>
                <strong style={{ fontSize: 14 }}>{r.title}</strong>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: "6px 0 0" }}>
                  {r.comment}
                </p>
                <div style={{ fontSize: 12, color: "var(--ink-faint)", marginTop: 8 }}>{r.date}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>
              สินค้าที่เกี่ยวข้อง
            </h2>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))" }}>
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
        <ProductConversionWidgets
          product={{ name: product.name, slug: product.slug }}
          buyUrl={buyUrl}
        />
      </div>
    </>
  );
}
