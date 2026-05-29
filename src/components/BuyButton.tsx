"use client";

interface Props {
  url: string;
  productId: string;
  label?: string;
  block?: boolean;
}

export function BuyButton({ url, productId, label = "ซื้อบน Shopee", block }: Props) {
  function handleClick() {
    // ส่ง event ไป tracking endpoint (fire-and-forget) เพื่อนับคลิก affiliate
    try {
      navigator.sendBeacon?.(
        "/api/track",
        JSON.stringify({ productId, ts: Date.now() }),
      );
    } catch {
      /* noop */
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noopener"
      onClick={handleClick}
      className="btn btn-shopee"
      style={block ? { width: "100%" } : undefined}
    >
      <span style={{ fontWeight: 800 }}>🛒</span> {label}
    </a>
  );
}
