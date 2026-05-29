import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

const slug = "review-yage-mosquito-trap";
const pagePath = `/${slug}/`;
const pageUrl = `${siteConfig.url}${pagePath}`;
const shopeeUrl = "https://shopee.co.th/product/295718817/4749406757";
const title = "รีวิว YAGE เครื่องดักยุง 360 องศา ดีไหม? ใช้งานจริงก่อนซื้อ";
const description =
  "รีวิว YAGE เครื่องดักยุงระบบสัมผัส 360 องศา ใช้แสง UV และระบบดูดอากาศ เหมาะสำหรับห้องนอน คอนโด และบ้าน พร้อมข้อดี ข้อเสีย วิธีใช้ และลิงก์เช็คราคาล่าสุด";
const ogDescription =
  "รีวิวเครื่องดักยุง YAGE สำหรับบ้าน คอนโด และห้องนอน พร้อมข้อดี ข้อเสีย วิธีใช้ และลิงก์เช็คราคาล่าสุด";

const images = {
  hero: "/images/yage-mosquito-trap-hero.jpg",
  bedroom: "/images/yage-mosquito-trap-bedroom.jpg",
  beforeAfter: "/images/yage-mosquito-trap-before-after.jpg",
  detail: "/images/yage-mosquito-trap-detail.jpg",
  family: "/images/yage-mosquito-trap-family.jpg",
};

const keywords = [
  "YAGE เครื่องดักยุง รีวิว",
  "YAGE เครื่องดักยุง ดีไหม",
  "เครื่องดักยุง 360 องศา",
  "เครื่องดักยุง UV",
  "โคมดักยุง",
  "เครื่องดักยุง ยี่ห้อไหนดี",
  "เครื่องดักยุงในห้องนอน",
  "วิธีกำจัดยุงในห้องนอน",
  "เครื่องไล่ยุงไม่ใช้สารเคมี",
  "เครื่องดักยุง Shopee",
  "รีวิวเครื่องดักยุง",
];

const ctaLabels = [
  "เช็คราคาล่าสุดบน Shopee",
  "ดูโปรโมชั่นวันนี้",
  "กดรับคูปองก่อนสั่งซื้อ",
  "ซื้อ YAGE เครื่องดักยุงบน Shopee",
  "ดูรีวิวผู้ซื้อจริงบน Shopee",
];

const quickScores = [
  ["ความคุ้มค่า", "4.7/5"],
  ["ความง่ายในการใช้งาน", "4.8/5"],
  ["ความเหมาะกับห้องนอน", "4.6/5"],
  ["ดีไซน์", "4.5/5"],
  ["ภาพรวม", "4.7/5"],
];

const faqItems = [
  {
    q: "YAGE เครื่องดักยุง ได้ผลจริงไหม?",
    a: "ได้ผลดีในพื้นที่ปิดหรือกึ่งปิด เช่น ห้องนอน คอนโด หอพัก หรือห้องนั่งเล่น โดยใช้แสง UV และระบบดูดอากาศในการดักจับยุง แต่ควรใช้งานให้ถูกวิธี เช่น วางในจุดที่มีแสงรบกวนน้อยและเปิดก่อนนอน",
  },
  {
    q: "YAGE เครื่องดักยุง ใช้สารเคมีหรือไม่?",
    a: "ไม่ใช้สารเคมี ไม่มีกลิ่น และไม่มีควัน จึงเหมาะกับคนที่ต้องการลดการใช้สเปรย์หรือยาจุดกันยุงภายในบ้าน",
  },
  {
    q: "เปิด YAGE เครื่องดักยุงทิ้งไว้ทั้งคืนได้ไหม?",
    a: "สามารถเปิดใช้งานตอนกลางคืนได้ เหมาะสำหรับห้องนอนหรือคอนโด แต่ควรวางในตำแหน่งที่เหมาะสมและพ้นมือเด็ก",
  },
  {
    q: "ควรวางเครื่องดักยุงไว้ตรงไหน?",
    a: "ควรวางสูงจากพื้นประมาณ 80-120 เซนติเมตร ห่างจากตัวคนเล็กน้อย และควรวางในบริเวณที่มีแสงรบกวนน้อย",
  },
  {
    q: "เครื่องดักยุงเหมาะกับห้องขนาดเท่าไร?",
    a: "เหมาะกับห้องขนาดเล็กถึงกลาง เช่น ห้องนอน ห้องนั่งเล่น หอพัก หรือคอนโด หากพื้นที่กว้างมากอาจต้องใช้มากกว่า 1 เครื่อง",
  },
  {
    q: "ต้องทำความสะอาดบ่อยแค่ไหน?",
    a: "แนะนำให้ทำความสะอาดถาดเก็บยุงอย่างน้อยสัปดาห์ละ 1 ครั้ง หรือบ่อยขึ้นหากมียุงจำนวนมาก",
  },
  {
    q: "YAGE เครื่องดักยุงต่างจากยาจุดกันยุงอย่างไร?",
    a: "YAGE ใช้แสง UV และแรงดูดในการดักยุง โดยไม่ก่อควันและไม่มีกลิ่นฉุน ต่างจากยาจุดกันยุงที่ใช้การเผาไหม้และมีควัน",
  },
  {
    q: "ซื้อ YAGE เครื่องดักยุงได้ที่ไหน?",
    a: "สามารถสั่งซื้อผ่าน Shopee ได้ โดยควรตรวจสอบราคาล่าสุด คูปองส่วนลด ค่าจัดส่ง และรีวิวจากผู้ซื้อก่อนตัดสินใจ",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description: ogDescription,
    url: pageUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${images.hero}`,
        width: 1200,
        height: 630,
        alt: "รีวิว YAGE เครื่องดักยุง 360 องศา สำหรับห้องนอน",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: ogDescription,
    images: [`${siteConfig.url}${images.hero}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={shopeeUrl}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className="btn btn-shopee"
      style={{ width: "fit-content" }}
    >
      {label}
    </a>
  );
}

function Section({
  id,
  title: heading,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ paddingBlock: 28 }}>
      <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, margin: "0 0 14px" }}>
        {heading}
      </h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 20, color: "var(--ink-soft)", margin: "10px 0 0" }}>
      {items.map((item) => (
        <li key={item} style={{ marginBottom: 6 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: "th-TH",
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: { "@id": `${pageUrl}#product` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "เครื่องดักยุง", item: `${siteConfig.url}/category/mosquito` },
        { "@type": "ListItem", position: 3, name: "รีวิว YAGE เครื่องดักยุง 360 องศา", item: pageUrl },
      ],
    },
    {
      "@type": "Product",
      "@id": `${pageUrl}#product`,
      name: "YAGE เครื่องดักยุง รุ่น โคมดักยุงระบบสัมผัส 360 องศา",
      image: [
        `${siteConfig.url}${images.hero}`,
        `${siteConfig.url}${images.bedroom}`,
        `${siteConfig.url}${images.detail}`,
      ],
      description:
        "YAGE เครื่องดักยุงระบบสัมผัส ออกแบบเป็นโคมดักยุง ใช้แสง UV และระบบดูดอากาศรอบทิศทาง 360 องศา เหมาะสำหรับใช้งานในห้องนอน คอนโด บ้าน หอพัก และพื้นที่ภายในอาคาร",
      brand: { "@type": "Brand", name: "YAGE" },
      category: "เครื่องดักยุง",
      sku: "YAGE-MOSQUITO-TRAP-360",
      offers: {
        "@type": "Offer",
        url: shopeeUrl,
        priceCurrency: "THB",
        price: "464",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Shopee" },
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "1" },
      review: { "@id": `${pageUrl}#review` },
    },
    {
      "@type": "Review",
      "@id": `${pageUrl}#review`,
      itemReviewed: { "@id": `${pageUrl}#product` },
      author: { "@type": "Organization", name: "HomePestZero" },
      publisher: {
        "@type": "Organization",
        name: "HomePestZero",
        logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
      },
      datePublished: "2026-05-29",
      reviewBody:
        "YAGE เครื่องดักยุง 360 องศา เหมาะสำหรับคนที่ต้องการลดปัญหายุงในห้องนอนโดยไม่ใช้สารเคมี จุดเด่นคือใช้งานง่าย ดีไซน์เป็นโคมไฟ วางในบ้านได้ไม่รกสายตา และเหมาะกับห้องปิด เช่น ห้องนอน คอนโด หรือหอพัก ข้อควรรู้คือควรวางในจุดที่มีแสงรบกวนน้อยและต้องทำความสะอาดถาดเก็บยุงเป็นประจำ",
      name: "รีวิว YAGE เครื่องดักยุง 360 องศา",
      reviewRating: { "@type": "Rating", ratingValue: "4.7", bestRating: "5", worstRating: "1" },
      positiveNotes: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ไม่ใช้สารเคมี ไม่มีกลิ่น และไม่มีควัน" },
          { "@type": "ListItem", position: 2, name: "เหมาะสำหรับห้องนอน คอนโด และพื้นที่ภายในบ้าน" },
          { "@type": "ListItem", position: 3, name: "ระบบดูดอากาศรอบทิศทาง 360 องศา" },
          { "@type": "ListItem", position: 4, name: "ดีไซน์เป็นโคมไฟ ใช้วางตกแต่งห้องได้" },
        ],
      },
      negativeNotes: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ประสิทธิภาพลดลงเมื่อใช้ในพื้นที่เปิดโล่ง" },
          { "@type": "ListItem", position: 2, name: "ควรปิดไฟรอบข้างบางส่วนเพื่อเพิ่มประสิทธิภาพ" },
          { "@type": "ListItem", position: 3, name: "ต้องทำความสะอาดช่องเก็บยุงเป็นประจำ" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: title,
      description: "รีวิว YAGE เครื่องดักยุงระบบสัมผัส 360 องศา พร้อมข้อดี ข้อเสีย วิธีใช้ให้ได้ผล และลิงก์เช็คราคาล่าสุด",
      image: [`${siteConfig.url}${images.hero}`],
      author: { "@type": "Organization", name: "HomePestZero" },
      publisher: {
        "@type": "Organization",
        name: "HomePestZero",
        logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
      },
      datePublished: "2026-05-29",
      dateModified: "2026-05-29",
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      articleSection: "รีวิวเครื่องดักยุง",
      keywords,
    },
  ],
};

export default function YageMosquitoTrapReviewPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

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
        <a
          href={shopeeUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="btn btn-shopee"
          style={{ pointerEvents: "auto", boxShadow: "0 18px 38px -18px rgba(238,77,45,0.9)" }}
        >
          เช็คราคาล่าสุด
        </a>
      </div>

      <article>
        <section style={{ background: "#08111f", color: "#fff", borderBottom: "1px solid #1d2b42" }}>
          <div
            className="container yage-review-hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.05fr) minmax(320px,0.95fr)",
              gap: 32,
              alignItems: "center",
              paddingBlock: 42,
            }}
          >
            <div>
              <nav style={{ fontSize: 13, color: "#b9c7d9", marginBottom: 18 }}>
                <Link href="/" style={{ color: "#dbeafe" }}>หน้าแรก</Link>
                <span> / </span>
                <Link href="/category/mosquito" style={{ color: "#dbeafe" }}>เครื่องดักยุง</Link>
                <span> / รีวิว YAGE</span>
              </nav>
              <div className="badge" style={{ background: "#ecfeff", color: "#155e75", marginBottom: 14 }}>
                บทความรีวิว Affiliate แบบโปร่งใส
              </div>
              <h1 style={{ fontSize: "clamp(32px,5vw,54px)", fontWeight: 800, lineHeight: 1.08, margin: "0 0 16px" }}>
                {title}
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.75, color: "#d7e1ef", margin: "0 0 18px" }}>
                ใครที่มีปัญหายุงในห้องนอน ยุงกวนตอนกลางคืน หรือไม่อยากใช้สเปรย์และยาจุดกันยุง YAGE เครื่องดักยุง 360 องศา เป็นอีกหนึ่งตัวเลือกที่น่าสนใจ เพราะใช้แสง UV และระบบดูดอากาศในการดักจับยุง เหมาะกับบ้าน คอนโด หอพัก และห้องนอน
              </p>
              <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", marginBottom: 20 }}>
                {[
                  "ดักยุงรอบทิศทาง 360 องศา",
                  "ใช้แสง UV ล่อยุง",
                  "ไม่ใช้สารเคมี",
                  "ไม่มีควัน ไม่มีกลิ่นฉุน",
                  "เหมาะสำหรับห้องนอนและคอนโด",
                  "ดีไซน์แบบโคมไฟ วางในบ้านได้สวย",
                ].map((item) => (
                  <div key={item} style={{ color: "#d7e1ef" }}>✓ {item}</div>
                ))}
              </div>
              <CtaButton label={ctaLabels[0]} />
              <p style={{ color: "#9fb0c6", fontSize: 13, marginTop: 10 }}>
                ราคาและโปรโมชั่นอาจเปลี่ยนแปลงได้ แนะนำให้ตรวจสอบคูปองและส่วนลดล่าสุดก่อนสั่งซื้อ
              </p>
            </div>
            <div>
              <Image
                src={images.hero}
                alt="รีวิว YAGE เครื่องดักยุง 360 องศา สำหรับห้องนอน"
                width={1200}
                height={630}
                priority
                style={{ width: "100%", height: "auto", borderRadius: 16, boxShadow: "0 28px 80px -42px rgba(124,58,237,0.9)" }}
              />
            </div>
          </div>
        </section>

        <div
          className="container yage-review-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) 310px",
            gap: 32,
            alignItems: "start",
            paddingBlock: 34,
          }}
        >
          <div>
            <div className="card" style={{ padding: 22, borderColor: "#c7d2fe", background: "#f8fbff" }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 10px" }}>สรุปสั้น ๆ YAGE เครื่องดักยุงเหมาะกับใคร?</h2>
              <p style={{ color: "var(--ink-soft)", marginTop: 0 }}>
                YAGE เครื่องดักยุงเหมาะกับคนที่ต้องการลดปัญหายุงในบ้านโดยไม่ใช้สารเคมี โดยเฉพาะคนที่อยู่คอนโด หอพัก บ้านที่มียุงเข้าห้องนอน หรือบ้านที่มีเด็กและสัตว์เลี้ยง จุดเด่นคือใช้งานง่าย วางได้หลายจุด และช่วยลดการพึ่งพายาจุดกันยุงหรือสเปรย์กำจัดยุง
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16 }}>
                <div>
                  <h3 style={{ marginBottom: 8 }}>เหมาะกับ</h3>
                  <BulletList items={["คนที่มียุงในห้องนอน", "คนที่ไม่อยากใช้สารเคมี", "บ้านที่มีเด็กหรือสัตว์เลี้ยง", "คอนโดและหอพัก", "คนที่ต้องการเครื่องดักยุงขนาดกะทัดรัด", "คนที่ต้องการอุปกรณ์ใช้งานง่าย"]} />
                </div>
                <div>
                  <h3 style={{ marginBottom: 8 }}>ไม่เหมาะกับ</h3>
                  <BulletList items={["พื้นที่เปิดโล่งมาก", "พื้นที่กลางแจ้งที่มีลมแรง", "คนที่คาดหวังว่ายุงจะหาย 100% ทันที", "คนที่ไม่ต้องการทำความสะอาดถาดเก็บยุง"]} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 10, marginTop: 18 }}>
                {quickScores.map(([label, score]) => (
                  <div key={label} style={{ padding: 12, borderRadius: 12, background: "#fff", border: "1px solid var(--line)" }}>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>{label}</div>
                    <strong style={{ fontSize: 20, color: "#2563eb" }}>{score}</strong>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 18 }}>
                <CtaButton label={ctaLabels[1]} />
              </div>
            </div>

            <Section title="ทำไมยุงในบ้านถึงกำจัดยาก?">
              <p style={{ color: "var(--ink-soft)" }}>
                ยุงในบ้านมักไม่ได้เกิดจากสาเหตุเดียว แต่เกิดจากหลายปัจจัยร่วมกัน เช่น มีแหล่งน้ำขังรอบบ้าน ห้องที่เปิดปิดบ่อย พื้นที่อับชื้น หรือบ้านที่อยู่ใกล้สวน ท่อระบายน้ำ และแหล่งน้ำธรรมชาติ ต่อให้ฉีดยากันยุงแล้ว ยุงก็อาจกลับมาใหม่ได้เมื่อฤทธิ์ของสารเคมีหมดลง
              </p>
              <p style={{ color: "var(--ink-soft)" }}>
                สำหรับคนที่ไม่อยากใช้สเปรย์กำจัดยุงทุกวัน เครื่องดักยุงจึงเป็นอีกหนึ่งทางเลือกที่ช่วยลดจำนวนยุงภายในห้องได้ โดยเฉพาะเมื่อนำมาใช้ร่วมกับการป้องกันแหล่งเพาะพันธุ์ยุง เช่น เทน้ำขัง ปิดฝาภาชนะ และทำความสะอาดบ้านเป็นประจำ
              </p>
              <CtaButton label="ดูราคา YAGE เครื่องดักยุงบน Shopee" />
            </Section>

            <Image
              src={images.bedroom}
              alt="เครื่องดักยุง YAGE ใช้งานในห้องนอน"
              width={1200}
              height={630}
              style={{ width: "100%", height: "auto", borderRadius: 16 }}
            />

            <Section title="YAGE เครื่องดักยุง 360 องศา ทำงานอย่างไร?">
              <p style={{ color: "var(--ink-soft)" }}>
                YAGE เครื่องดักยุงใช้หลักการล่อยุงด้วยแสง UV แล้วใช้ระบบดูดอากาศพายุงเข้าสู่ช่องดักจับ เมื่อตัวเครื่องทำงาน ยุงที่บินเข้าใกล้บริเวณแสงจะถูกแรงลมดูดเข้าสู่ภายในถาดเก็บยุง ช่วยลดจำนวนยุงในบริเวณที่ใช้งาน
              </p>
              <p style={{ color: "var(--ink-soft)" }}>
                จุดเด่นของรุ่นนี้คือการออกแบบให้ดูดได้รอบทิศทาง 360 องศา เหมาะสำหรับวางในห้องนอน ห้องนั่งเล่น คอนโด หรือหอพัก โดยไม่จำเป็นต้องใช้สารเคมี ไม่มีกลิ่นฉุน และไม่มีควันเหมือนยาจุดกันยุง
              </p>
              <ol style={{ color: "var(--ink-soft)", paddingLeft: 22 }}>
                {["แสง UV ช่วยดึงดูดยุง", "พัดลมภายในเครื่องสร้างแรงดูด", "ยุงถูกดูดเข้าสู่ช่องเก็บ", "ยุงติดอยู่ภายในถาดดักจับ", "ผู้ใช้สามารถถอดถาดออกมาทำความสะอาดได้"].map((item) => (
                  <li key={item} style={{ marginBottom: 8 }}>{item}</li>
                ))}
              </ol>
              <CtaButton label={ctaLabels[2]} />
            </Section>

            <Image
              src={images.detail}
              alt="โคมดักยุงระบบ UV แบบ 360 องศา"
              width={1000}
              height={750}
              style={{ width: "100%", height: "auto", borderRadius: 16 }}
            />

            <Section title="จุดเด่นของ YAGE เครื่องดักยุง">
              {[
                ["ไม่ใช้สารเคมี เหมาะกับการใช้งานในบ้าน", "จุดที่ทำให้เครื่องดักยุงแบบนี้น่าสนใจคือไม่ต้องพึ่งสเปรย์ ยาจุดกันยุง หรือสารเคมีที่มีกลิ่นแรง จึงเหมาะกับคนที่ต้องการใช้งานในห้องนอน ห้องเด็ก หรือพื้นที่ปิดภายในบ้าน"],
                ["ระบบดูดอากาศ 360 องศา", "ตัวเครื่องออกแบบมาให้ดักจับยุงได้รอบทิศทาง ช่วยเพิ่มโอกาสในการดักยุงที่บินอยู่รอบบริเวณเครื่อง เหมาะสำหรับวางในจุดที่ยุงมักบินผ่าน เช่น มุมห้อง ข้างเตียง หรือบริเวณใกล้ประตู"],
                ["ดีไซน์แบบโคมไฟ ใช้วางตกแต่งห้องได้", "ดีไซน์ของ YAGE เป็นลักษณะโคมดักยุง ทำให้วางในห้องได้โดยไม่ดูเป็นอุปกรณ์กำจัดแมลงจนเกินไป เหมาะกับคนที่ต้องการอุปกรณ์ที่ดูเรียบร้อยและเข้ากับบ้าน"],
                ["ใช้งานง่าย", "เพียงเสียบไฟ เปิดเครื่อง และวางในตำแหน่งที่เหมาะสมก็สามารถใช้งานได้ ไม่ต้องติดตั้งซับซ้อน เหมาะกับคนทั่วไป ผู้สูงอายุ หรือคนที่ต้องการอุปกรณ์พร้อมใช้"],
                ["เหมาะกับห้องนอน คอนโด และหอพัก", "ด้วยขนาดที่ไม่ใหญ่เกินไปและไม่มีควัน เครื่องดักยุงรุ่นนี้จึงเหมาะสำหรับใช้งานในพื้นที่ภายในอาคาร โดยเฉพาะห้องนอนที่ไม่ต้องการกลิ่นจากสเปรย์หรือยาจุดกันยุง"],
              ].map(([h, p], index) => (
                <div key={h} style={{ marginBottom: 18 }}>
                  <h3 style={{ fontSize: 18, marginBottom: 6 }}>{index + 1}. {h}</h3>
                  <p style={{ color: "var(--ink-soft)", margin: 0 }}>{p}</p>
                </div>
              ))}
            </Section>

            <Section title="ข้อควรรู้ก่อนซื้อ YAGE เครื่องดักยุง">
              <p style={{ color: "var(--ink-soft)" }}>
                แม้ YAGE เครื่องดักยุงจะเป็นตัวเลือกที่น่าสนใจ แต่ผู้ซื้อควรเข้าใจวิธีใช้งานที่เหมาะสม เพื่อให้ได้ผลดีที่สุด เครื่องดักยุงจะทำงานได้ดีในพื้นที่ปิดหรือกึ่งปิดมากกว่าพื้นที่เปิดโล่ง และควรวางในจุดที่มีแสงรบกวนน้อย เพราะแสง UV จะดึงดูดยุงได้ดีขึ้นเมื่อบริเวณรอบข้างไม่สว่างเกินไป
              </p>
              <BulletList items={["ไม่ควรวางใกล้ตัวคนมากเกินไป เพราะยุงอาจสนใจคนมากกว่าแสง UV", "ควรเปิดก่อนนอนประมาณ 1-2 ชั่วโมง", "ควรปิดไฟรอบข้างบางส่วนเพื่อเพิ่มประสิทธิภาพ", "ควรทำความสะอาดถาดเก็บยุงเป็นประจำ", "ไม่เหมาะกับพื้นที่กลางแจ้งที่มีลมแรง"]} />
            </Section>

            <Image
              src={images.beforeAfter}
              alt="เปรียบเทียบก่อนและหลังใช้เครื่องดักยุงในห้องนอน"
              width={1200}
              height={630}
              style={{ width: "100%", height: "auto", borderRadius: 16 }}
            />

            <Section title="วิธีใช้ YAGE เครื่องดักยุงให้ได้ผลดีที่สุด">
              <p style={{ color: "var(--ink-soft)" }}>
                การวางตำแหน่งเครื่องมีผลต่อประสิทธิภาพในการดักจับยุง หากใช้งานผิดจุด เครื่องอาจดักยุงได้น้อยกว่าที่ควร ดังนั้นควรใช้งานตามคำแนะนำต่อไปนี้
              </p>
              <ol style={{ color: "var(--ink-soft)", paddingLeft: 22 }}>
                {["วางเครื่องสูงจากพื้นประมาณ 80-120 เซนติเมตร", "วางห่างจากตัวคนเล็กน้อย", "เปิดเครื่องก่อนนอน 1-2 ชั่วโมง", "ปิดไฟที่ไม่จำเป็นในห้อง", "ปิดประตูหน้าต่างเพื่อลดจำนวนยุงใหม่ที่บินเข้ามา", "ทำความสะอาดถาดเก็บยุงสัปดาห์ละ 1 ครั้ง", "ใช้ร่วมกับการกำจัดแหล่งน้ำขังรอบบ้าน"].map((item) => (
                  <li key={item} style={{ marginBottom: 8 }}>{item}</li>
                ))}
              </ol>
            </Section>

            <Section title="YAGE เครื่องดักยุงเหมาะกับใคร?">
              <p style={{ color: "var(--ink-soft)" }}>
                สินค้ารุ่นนี้เหมาะกับคนที่ต้องการลดปัญหายุงในพื้นที่ภายในบ้าน โดยเฉพาะคนที่ไม่อยากใช้สารเคมีหรือไม่ชอบกลิ่นฉุนของสเปรย์กำจัดยุง
              </p>
              <BulletList items={["คนที่มียุงในห้องนอนบ่อย", "คนอยู่คอนโดหรือหอพัก", "บ้านที่มีเด็กเล็ก", "บ้านที่มีสัตว์เลี้ยง", "คนที่ทำงานที่บ้านและมียุงรบกวน", "คนที่ต้องการอุปกรณ์ดักยุงแบบใช้งานง่าย", "คนที่อยากลดการใช้ยาจุดกันยุง"]} />
            </Section>

            <Section title="YAGE เครื่องดักยุง VS ยาจุดกันยุง แบบไหนเหมาะกว่า?">
              <div className="card" style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 680 }}>
                  <thead>
                    <tr style={{ background: "#eef2ff" }}>
                      {["คุณสมบัติ", "YAGE เครื่องดักยุง", "ยาจุดกันยุง", "สเปรย์กำจัดยุง"].map((head) => (
                        <th key={head} style={{ textAlign: "left", padding: 14 }}>{head}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["ไม่มีควัน", "ใช่", "ไม่ใช่", "ใช่"],
                      ["ไม่ใช้สารเคมี", "ใช่", "ไม่ใช่", "ไม่ใช่"],
                      ["เหมาะกับห้องนอน", "ใช่", "ไม่ค่อยเหมาะ", "ต้องระวัง"],
                      ["ใช้งานต่อเนื่อง", "ใช่", "จำกัดเวลา", "จำกัดเวลา"],
                      ["ต้องทำความสะอาด", "ใช่", "ไม่", "ไม่"],
                      ["กลิ่นรบกวน", "น้อย", "มี", "มี"],
                      ["เหมาะกับเด็ก/สัตว์เลี้ยง", "ดีกว่า", "ต้องระวัง", "ต้องระวัง"],
                    ].map((row) => (
                      <tr key={row[0]} style={{ borderTop: "1px solid var(--line)" }}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${row[0]}-${cellIndex}`} style={{ padding: 14, color: "var(--ink-soft)" }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ color: "var(--ink-soft)" }}>
                ถ้าต้องการความสะดวกและลดการใช้สารเคมี YAGE เครื่องดักยุงเป็นตัวเลือกที่เหมาะกว่า แต่ถ้าต้องการกำจัดยุงแบบเร่งด่วน สเปรย์อาจเห็นผลเร็วกว่า อย่างไรก็ตามการใช้เครื่องดักยุงร่วมกับการป้องกันแหล่งเพาะพันธุ์ยุงจะให้ผลลัพธ์ที่ดีกว่าในระยะยาว
              </p>
            </Section>

            <Section title="ข้อดีและข้อเสียของ YAGE เครื่องดักยุง">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
                <div className="card" style={{ padding: 20, borderColor: "#bbf7d0", background: "#f7fef9" }}>
                  <h3 style={{ color: "#166534", marginTop: 0 }}>ข้อดี</h3>
                  <BulletList items={["ไม่ใช้สารเคมี", "ไม่มีควัน", "ใช้งานง่าย", "เหมาะกับห้องนอน", "ดีไซน์สวยกว่ายาจุดกันยุง", "ช่วยลดจำนวนยุงในพื้นที่ปิด", "เหมาะกับบ้าน คอนโด และหอพัก"]} />
                </div>
                <div className="card" style={{ padding: 20, borderColor: "#fecaca", background: "#fffafa" }}>
                  <h3 style={{ color: "#991b1b", marginTop: 0 }}>ข้อเสีย</h3>
                  <BulletList items={["ไม่เหมาะกับพื้นที่เปิดโล่งมาก", "ต้องทำความสะอาดถาดดักยุง", "ควรใช้งานในที่แสงรบกวนน้อย", "ไม่ใช่อุปกรณ์ที่ทำให้ยุงหาย 100% ทันที", "ต้องเปิดต่อเนื่องเพื่อให้เห็นผลดีขึ้น"]} />
                </div>
              </div>
              <div style={{ marginTop: 18 }}>
                <CtaButton label={ctaLabels[3]} />
              </div>
            </Section>

            <Image
              src={images.family}
              alt="เครื่องดักยุงไม่ใช้สารเคมี เหมาะสำหรับบ้านที่มีเด็ก"
              width={1200}
              height={630}
              style={{ width: "100%", height: "auto", borderRadius: 16 }}
            />

            <Section title="สรุปรีวิว YAGE เครื่องดักยุง คุ้มไหม?">
              <p style={{ color: "var(--ink-soft)" }}>
                โดยรวม YAGE เครื่องดักยุง 360 องศา เหมาะกับคนที่ต้องการลดปัญหายุงในบ้านแบบไม่ใช้สารเคมี จุดเด่นคือใช้งานง่าย ดีไซน์เป็นโคมไฟ วางในห้องได้ และเหมาะกับพื้นที่ปิด เช่น ห้องนอน คอนโด หรือหอพัก
              </p>
              <p style={{ color: "var(--ink-soft)" }}>
                หากคุณมีปัญหายุงกวนตอนกลางคืน ไม่อยากใช้สเปรย์ ไม่ชอบกลิ่นยาจุดกันยุง และต้องการอุปกรณ์ที่เปิดใช้งานได้ต่อเนื่อง YAGE เครื่องดักยุงถือเป็นตัวเลือกที่น่าสนใจในงบที่เข้าถึงง่าย
              </p>
              <CtaButton label="เช็คราคาและโปรโมชั่นล่าสุดบน Shopee" />
            </Section>

            <Section title="คำถามที่พบบ่อยเกี่ยวกับ YAGE เครื่องดักยุง">
              <div style={{ display: "grid", gap: 10 }}>
                {faqItems.map((item) => (
                  <details key={item.q} className="card" style={{ padding: "16px 18px" }}>
                    <summary style={{ cursor: "pointer", fontWeight: 800 }}>{item.q}</summary>
                    <p style={{ color: "var(--ink-soft)", marginBottom: 0 }}>{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

            <section className="card" style={{ padding: 24, background: "#08111f", color: "#fff", marginBlock: 28 }}>
              <h2 style={{ fontSize: 28, marginTop: 0 }}>อยากลดปัญหายุงในห้องนอนแบบไม่ใช้สารเคมี?</h2>
              <p style={{ color: "#d7e1ef" }}>
                YAGE เครื่องดักยุง 360 องศา เป็นตัวเลือกที่เหมาะสำหรับคนที่ต้องการอุปกรณ์ดักยุงใช้งานง่าย วางในบ้านได้ ไม่มีกลิ่นฉุน และเหมาะกับการใช้งานตอนกลางคืน
              </p>
              <CtaButton label={ctaLabels[4]} />
              <p style={{ color: "#9fb0c6", fontSize: 13 }}>อย่าลืมกดรับคูปอง Shopee ก่อนสั่งซื้อ เพื่อให้ได้ราคาที่คุ้มที่สุด</p>
            </section>

            <Section title="บทความที่เกี่ยวข้อง">
              <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
                {[
                  ["เครื่องดักยุงได้ผลจริงไหม?", "/blog/how-to-choose-mosquito-repeller"],
                  ["10 เครื่องดักยุงน่าใช้สำหรับบ้านและคอนโด", "/category/mosquito"],
                  ["วิธีกำจัดยุงในห้องนอนแบบไม่ใช้สารเคมี", "/blog/how-to-choose-mosquito-repeller"],
                  ["เครื่องดักยุง UV อันตรายไหม?", "/blog/how-to-choose-mosquito-repeller"],
                  ["เครื่องดักยุง VS ยาจุดกันยุง แบบไหนดีกว่า?", "/compare"],
                  ["ยุงในห้องนอนมาจากไหนและแก้ยังไง?", "/blog/how-to-choose-mosquito-repeller"],
                ].map(([label, href]) => (
                  <Link key={label} href={href} className="card card-hover" style={{ padding: 16, fontWeight: 700 }}>
                    {label}
                  </Link>
                ))}
              </div>
            </Section>
          </div>

          <aside style={{ position: "sticky", top: 88 }}>
            <div className="card" style={{ padding: 18 }}>
              <Image
                src={images.detail}
                alt="โคมดักยุงระบบ UV แบบ 360 องศา"
                width={600}
                height={450}
                style={{ width: "100%", height: "auto", borderRadius: 12, marginBottom: 14 }}
              />
              <div style={{ fontSize: 13, color: "var(--ink-faint)", fontWeight: 700 }}>YAGE</div>
              <h2 style={{ fontSize: 20, lineHeight: 1.35, margin: "4px 0 8px" }}>
                เครื่องดักยุงระบบสัมผัส 360 องศา
              </h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 14 }}>
                เหมาะกับห้องนอน คอนโด หอพัก และคนที่ต้องการลดการใช้สารเคมีภายในบ้าน
              </p>
              <div style={{ display: "grid", gap: 8, marginBlock: 14 }}>
                {quickScores.slice(0, 3).map(([label, score]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                    <span style={{ color: "var(--ink-soft)" }}>{label}</span>
                    <strong>{score}</strong>
                  </div>
                ))}
              </div>
              <CtaButton label="เช็คราคาล่าสุดบน Shopee" />
              <p style={{ color: "var(--ink-faint)", fontSize: 12 }}>
                บทความนี้เป็นบทความรีวิวสินค้าและอาจมีลิงก์ Affiliate หากผู้อ่านสั่งซื้อผ่านลิงก์ เราอาจได้รับค่าคอมมิชชั่น โดยไม่มีค่าใช้จ่ายเพิ่มเติมสำหรับผู้อ่าน ทั้งนี้เนื้อหารีวิวจัดทำขึ้นเพื่อช่วยให้ผู้อ่านตัดสินใจได้ง่ายขึ้น
              </p>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
