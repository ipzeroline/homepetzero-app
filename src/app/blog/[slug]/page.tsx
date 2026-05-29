import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { getProductsByIds } from "@/lib/products";
import { buildMetadata, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.coverImage,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

// แปลง content แบบ markdown ง่าย ๆ (## heading, - list, paragraph)
function renderContent(content: string) {
  const blocks = content.split("\n\n");
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return <h2 key={i}>{block.replace("## ", "")}</h2>;
    }
    if (block.split("\n").every((l) => l.startsWith("- "))) {
      return (
        <ul key={i}>
          {block.split("\n").map((l, j) => (
            <li key={j}>{l.replace("- ", "")}</li>
          ))}
        </ul>
      );
    }
    return <p key={i}>{block}</p>;
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getProductsByIds(post.relatedProductIds);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd(post),
          breadcrumbJsonLd([
            { name: "หน้าแรก", path: "/" },
            { name: "บทความ", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="container" style={{ paddingBlock: 32, maxWidth: 760 }}>
        <Link href="/blog" style={{ fontSize: 13, color: "var(--brand-dark)", fontWeight: 600 }}>
          ← กลับไปหน้าบทความ
        </Link>
        <h1 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, margin: "16px 0 12px", lineHeight: 1.2 }}>
          {post.title}
        </h1>
        <div style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 20 }}>
          โดย {post.author} · {post.publishedAt} · อ่าน {post.readingMinutes} นาที
        </div>
        <div className="card" style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", marginBottom: 28 }}>
          <Image src={post.coverImage} alt={post.title} fill sizes="760px" style={{ objectFit: "cover" }} priority />
        </div>

        <div className="prose">{renderContent(post.content)}</div>

        {related.length > 0 && (
          <section style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>สินค้าแนะนำในบทความนี้</h2>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))" }}>
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
