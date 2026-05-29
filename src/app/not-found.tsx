import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container" style={{ paddingBlock: 100, textAlign: "center" }}>
      <div style={{ fontSize: 64 }}>🔍</div>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>ไม่พบหน้าที่คุณค้นหา</h1>
      <p style={{ color: "var(--ink-soft)" }}>หน้านี้อาจถูกย้ายหรือลบไปแล้ว</p>
      <Link href="/" className="btn btn-brand" style={{ marginTop: 16 }}>กลับหน้าแรก</Link>
    </div>
  );
}
