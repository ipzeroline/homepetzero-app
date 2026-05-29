import Link from "next/link";
import type { Metadata } from "next";
import { getAllProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ค้นหาเครื่องไล่ยุง เครื่องไล่หนู และบทความรีวิว",
  description: "ค้นหาสินค้าและบทความ HomePestZero เกี่ยวกับเครื่องดักยุง เครื่องไล่หนู เครื่องไล่แมลง และของใช้แก้ปัญหาในบ้าน",
  path: "/search",
});

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const products = await getAllProducts();
  const posts = await getAllPosts();
  const productResults = query
    ? products.filter((p) => `${p.name} ${p.brand} ${p.shortDescription}`.toLowerCase().includes(query))
    : [];
  const postResults = query
    ? posts.filter((p) => `${p.title} ${p.excerpt} ${p.keywords.join(" ")}`.toLowerCase().includes(query))
    : [];

  return (
    <div className="container" style={{ paddingBlock: 40 }}>
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>ค้นหา</h1>
      <form action="/search" style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        <input
          name="q"
          defaultValue={q}
          placeholder="เช่น เครื่องดักยุง, ไล่หนู, แมลงสาบ"
          style={{
            flex: 1,
            padding: "12px 14px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            fontFamily: "inherit",
          }}
        />
        <button className="btn btn-brand">ค้นหา</button>
      </form>
      {query && (
        <>
          <h2 style={{ fontSize: 22, fontWeight: 800 }}>สินค้า</h2>
          <div style={{ display: "grid", gap: 10, marginBottom: 28 }}>
            {productResults.map((p) => (
              <Link key={p.id} href={`/products/${p.slug}`} className="card card-hover" style={{ padding: 16 }}>
                <strong>{p.name}</strong>
                <p style={{ color: "var(--ink-soft)", margin: "6px 0 0" }}>{p.shortDescription}</p>
              </Link>
            ))}
            {!productResults.length && <p style={{ color: "var(--ink-faint)" }}>ไม่พบสินค้า</p>}
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800 }}>บทความ</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {postResults.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="card card-hover" style={{ padding: 16 }}>
                <strong>{p.title}</strong>
                <p style={{ color: "var(--ink-soft)", margin: "6px 0 0" }}>{p.excerpt}</p>
              </Link>
            ))}
            {!postResults.length && <p style={{ color: "var(--ink-faint)" }}>ไม่พบบทความ</p>}
          </div>
        </>
      )}
    </div>
  );
}
