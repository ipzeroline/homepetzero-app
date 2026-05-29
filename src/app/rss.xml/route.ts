import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export async function GET() {
  const posts = await getAllPosts();
  const items = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${siteConfig.url}/blog/${post.slug}</link>
          <guid>${siteConfig.url}/blog/${post.slug}</guid>
          <description><![CDATA[${post.excerpt}]]></description>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${siteConfig.name}</title>
      <link>${siteConfig.url}</link>
      <description>${siteConfig.description}</description>
      <language>th-TH</language>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
