"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface ViewedProduct {
  name: string;
  slug: string;
}

export function ProductConversionWidgets({
  product,
  buyUrl,
}: {
  product: ViewedProduct;
  buyUrl: string;
}) {
  const [showExit, setShowExit] = useState(false);
  const [recent, setRecent] = useState<ViewedProduct[]>([]);

  useEffect(() => {
    const key = "homepestzero_recently_viewed";
    const current = JSON.parse(localStorage.getItem(key) ?? "[]") as ViewedProduct[];
    const next = [product, ...current.filter((item) => item.slug !== product.slug)].slice(0, 4);
    localStorage.setItem(key, JSON.stringify(next));
    setRecent(next.filter((item) => item.slug !== product.slug));

    function onMouseLeave(event: MouseEvent) {
      if (event.clientY <= 0 && !sessionStorage.getItem("homepestzero_exit_seen")) {
        sessionStorage.setItem("homepestzero_exit_seen", "1");
        setShowExit(true);
      }
    }

    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [product]);

  return (
    <>
      {recent.length > 0 && (
        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>สินค้าที่ดูล่าสุด</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {recent.map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`} className="card card-hover" style={{ padding: 14, fontWeight: 700 }}>
                {item.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {showExit && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.55)",
            display: "grid",
            placeItems: "center",
            padding: 20,
            zIndex: 80,
          }}
          onClick={() => setShowExit(false)}
        >
          <div className="card" style={{ padding: 24, maxWidth: 420 }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 0 }}>ก่อนออกจากหน้านี้</h2>
            <p style={{ color: "var(--ink-soft)" }}>
              ราคาและคูปอง Shopee อาจเปลี่ยนได้ ลองเช็คราคาล่าสุดก่อนตัดสินใจซื้อ
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={buyUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="btn btn-shopee"
              >
                ดูราคาล่าสุด
              </a>
              <button className="btn btn-ghost" onClick={() => setShowExit(false)}>
                อ่านต่อ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
