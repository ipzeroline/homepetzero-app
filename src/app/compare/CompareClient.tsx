"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { StarRating } from "@/components/StarRating";
import { BuyButton } from "@/components/BuyButton";

type P = Product & { buyUrl: string };

export function CompareClient({ products }: { products: P[] }) {
  const [selected, setSelected] = useState<string[]>(
    products.slice(0, 2).map((p) => p.id),
  );

  function toggle(id: string) {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  }

  const chosen = products.filter((p) => selected.includes(p.id));

  const rows: { label: string; render: (p: P) => React.ReactNode }[] = [
    { label: "ราคา", render: (p) => <strong style={{ color: "var(--brand-dark)" }}>฿{p.price.toLocaleString()}</strong> },
    { label: "กำลังไฟ", render: (p) => p.specs.find((s) => /กำลังไฟ|power/i.test(s.label))?.value ?? "—" },
    { label: "ขนาดห้อง", render: (p) => p.coverage },
    { label: "เสียงรบกวน", render: (p) => p.specs.find((s) => /เสียง|noise/i.test(s.label))?.value ?? "ขึ้นกับรุ่นและตำแหน่งวาง" },
    { label: "คะแนนรีวิว", render: (p) => <StarRating value={p.rating} count={p.reviews.length} /> },
    { label: "คะแนนแนะนำ", render: (p) => <strong>{p.rating.toFixed(1)}/5</strong> },
    { label: "แบรนด์", render: (p) => p.brand },
    { label: "ซื้อ", render: (p) => <BuyButton url={p.buyUrl} productId={p.id} label="Shopee" /> },
  ];

  return (
    <div>
      {/* Selector */}
      <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", marginBottom: 28 }}>
        {products.map((p) => {
          const active = selected.includes(p.id);
          return (
            <button
              key={p.id}
              onClick={() => toggle(p.id)}
              className="card"
              style={{
                padding: 12,
                display: "flex",
                gap: 10,
                alignItems: "center",
                cursor: "pointer",
                textAlign: "left",
                borderColor: active ? "var(--brand)" : "var(--line)",
                background: active ? "var(--brand-soft)" : "var(--surface)",
              }}
            >
              <div style={{ position: "relative", width: 44, height: 44, flexShrink: 0, borderRadius: 8, overflow: "hidden" }}>
                <Image src={p.image} alt={p.name} fill sizes="44px" style={{ objectFit: "cover" }} />
              </div>
              <span className="line-clamp-2" style={{ fontSize: 13, fontWeight: 600 }}>{p.name}</span>
            </button>
          );
        })}
      </div>

      {/* Table */}
      {chosen.length > 0 ? (
        <div style={{ overflowX: "auto" }} className="card">
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
            <thead>
              <tr>
                <th style={{ padding: 16, textAlign: "left", borderBottom: "1px solid var(--line)" }} />
                {chosen.map((p) => (
                  <th key={p.id} style={{ padding: 16, borderBottom: "1px solid var(--line)", verticalAlign: "top" }}>
                    <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", borderRadius: 10, overflow: "hidden", marginBottom: 8 }}>
                      <Image src={p.image} alt={p.name} fill sizes="160px" style={{ objectFit: "cover" }} />
                    </div>
                    <div className="line-clamp-2" style={{ fontSize: 13, fontWeight: 700 }}>{p.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td style={{ padding: 14, fontWeight: 600, color: "var(--ink-faint)", fontSize: 14, borderBottom: "1px solid var(--line)" }}>
                    {row.label}
                  </td>
                  {chosen.map((p) => (
                    <td key={p.id} style={{ padding: 14, textAlign: "center", fontSize: 14, borderBottom: "1px solid var(--line)" }}>
                      {row.render(p)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{ color: "var(--ink-faint)" }}>เลือกสินค้าอย่างน้อย 1 รุ่นเพื่อเปรียบเทียบ</p>
      )}
    </div>
  );
}
