import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "บทความรีวิวของใช้แก้ปัญหาในบ้าน",
  description:
    "รวมบทความ รีวิว และคู่มือเลือกเครื่องดักยุง เครื่องไล่หนู เครื่องไล่แมลง และสินค้า Shopee สำหรับแก้ปัญหาในบ้าน",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div className="container" style={{ paddingBlock: 40 }}>
      <h1 style={{ fontSize: "clamp(26px,4vw,36px)", fontWeight: 800, marginBottom: 8 }}>
        บทความ & คู่มือแก้ปัญหาในบ้าน
      </h1>
      <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>
        รีวิวสินค้า วิธีเลือกซื้อ และคำแนะนำสำหรับบ้านที่มีปัญหายุง หนู แมลง หรือของใช้ที่ต้องเลือกให้เหมาะกับพื้นที่จริง
      </p>
      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="card card-hover" style={{ overflow: "hidden" }}>
            <div style={{ position: "relative", aspectRatio: "16/9", background: "#f1f5f9" }}>
              <Image src={post.coverImage} alt={post.title} fill sizes="(max-width:768px) 100vw, 360px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: 18 }}>
              <div style={{ fontSize: 12, color: "var(--ink-faint)", marginBottom: 8 }}>
                {post.publishedAt} · อ่าน {post.readingMinutes} นาที
              </div>
              <h2 className="line-clamp-2" style={{ fontSize: 17, fontWeight: 800, margin: "0 0 8px" }}>
                {post.title}
              </h2>
              <p className="line-clamp-3" style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0 }}>
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
