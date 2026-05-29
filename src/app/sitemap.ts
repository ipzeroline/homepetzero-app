import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";
import { categorySlugs } from "@/data/categories";
import { topLists } from "@/data/topLists";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const products = await getAllProducts();
  const posts = await getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "daily", priority: 1 },
    { url: `${base}/compare`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/reviews`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/rankings`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/guides`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${base}/review-yage-mosquito-trap/`,
      lastModified: new Date("2026-05-29"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categorySlugs.map((c) => ({
    url: `${base}/category/${c}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const rankingRoutes: MetadataRoute.Sitemap = topLists.map((list) => ({
    url: `${base}/rankings/${list.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...rankingRoutes, ...productRoutes, ...postRoutes];
}
