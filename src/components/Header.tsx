import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { siteConfig } from "@/lib/site";

export function Header() {
  const mainLinks = [
    ...categories
      .filter((c) =>
        ["mosquito", "mosquito-repeller", "rat", "cockroach", "pest-control"].includes(c.slug),
      )
      .map((c) => ({ href: `/category/${c.slug}`, label: c.name })),
    { href: "/reviews", label: "รีวิวสินค้า" },
    { href: "/compare", label: "เปรียบเทียบ" },
    { href: "/rankings", label: "จัดอันดับ" },
    { href: "/blog", label: "บทความ" },
  ];

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
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 12px",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                color: "var(--ink-soft)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
