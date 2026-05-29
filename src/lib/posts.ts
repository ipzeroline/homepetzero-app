import "server-only";
import type { BlogPost } from "@/lib/types";
import posts from "@/data/posts.json";

const allPosts = posts as unknown as BlogPost[];

export async function getAllPosts(): Promise<BlogPost[]> {
  return [...allPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return allPosts.find((p) => p.slug === slug) ?? null;
}
