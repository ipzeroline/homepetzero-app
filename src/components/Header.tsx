import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "saturate(180%) blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          height: 64,
        }}
      >
        <Link
          href="/"
          aria-label={`${siteConfig.name} หน้าแรก`}
          style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}
        >
          <Image
            src={siteConfig.icon}
            alt={`${siteConfig.name} logo`}
            width={42}
            height={42}
            priority
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              objectFit: "cover",
              boxShadow: "0 6px 18px -12px rgba(15,23,42,0.65)",
            }}
          />
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: 0 }}>
            {siteConfig.shortName}
          </span>
        </Link>

        <nav
          style={{
            display: "flex",
            gap: 4,
            marginLeft: "auto",
            alignItems: "center",
          }}
        >
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              style={{
                padding: "8px 12px",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                color: "var(--ink-soft)",
              }}
            >
              {c.emoji} {c.name}
            </Link>
          ))}
          <Link
            href="/compare"
            style={{
              padding: "8px 12px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              color: "var(--ink-soft)",
            }}
          >
            เปรียบเทียบ
          </Link>
          <Link
            href="/blog"
            style={{
              padding: "8px 12px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              color: "var(--ink-soft)",
            }}
          >
            บทความ
          </Link>
        </nav>
      </div>
    </header>
  );
}
