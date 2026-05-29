import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { StarRating } from "@/components/StarRating";

export function ProductCard({ product }: { product: Product }) {
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100,
        )
      : 0;

  return (
    <Link href={`/products/${product.slug}`} className="card card-hover" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", aspectRatio: "4/3", background: "#f1f5f9" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 50vw, 280px"
          style={{ objectFit: "cover" }}
        />
        {discount > 0 && (
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 800,
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 8,
            }}
          >
            -{discount}%
          </span>
        )}
        {product.badges[0] && (
          <span
            className="badge badge-brand"
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            {product.badges[0]}
          </span>
        )}
      </div>

      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <div style={{ fontSize: 12, color: "var(--ink-faint)", fontWeight: 600 }}>
          {product.brand}
        </div>
        <h3
          className="line-clamp-2"
          style={{ fontSize: 15, fontWeight: 700, margin: 0, minHeight: 44 }}
        >
          {product.name}
        </h3>
        <StarRating value={product.rating} count={product.reviews.length} />
        <div style={{ marginTop: "auto", display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: "var(--brand-dark)" }}>
            ฿{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontSize: 13,
                color: "var(--ink-faint)",
                textDecoration: "line-through",
              }}
            >
              ฿{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
