"use client";

import { useState } from "react";
import type { Product, CategorySlug } from "@/lib/types";
import { categories } from "@/data/categories";

type Draft = {
  id: string;
  name: string;
  slug: string;
  category: CategorySlug;
  brand: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  shopeeUrl: string;
  coverage: string;
  rating: number;
  featured: boolean;
};

const emptyDraft = (): Draft => ({
  id: `p${Date.now()}`,
  name: "",
  slug: "",
  category: "mosquito",
  brand: "",
  shortDescription: "รอให้ AI เพิ่มคำอธิบายสินค้า",
  description: "รอให้ AI เพิ่มรายละเอียดสินค้า",
  price: 0,
  originalPrice: 0,
  image: "/logo.png",
  shopeeUrl: "",
  coverage: "รอให้ AI เพิ่มข้อมูล",
  rating: 0,
  featured: false,
});

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\u0E00-\u0E7F]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid var(--line)",
  fontSize: 14,
  fontFamily: "inherit",
};

export function AdminClient({
  initialAuthed,
  initialProducts,
}: {
  initialAuthed: boolean;
  initialProducts: Product[];
}) {
  const [authed, setAuthed] = useState(initialAuthed);
  const [products, setProducts] = useState(initialProducts);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [draft, setDraft] = useState<Draft | null>(null);
  const [saving, setSaving] = useState(false);

  async function login() {
    setError("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthed(true);
      const list = await fetch("/api/products").then((r) => r.json());
      setProducts(list);
    } else {
      const d = await res.json();
      setError(d.error ?? "เข้าสู่ระบบไม่สำเร็จ");
    }
  }

  async function logout() {
    await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "logout" }),
    });
    setAuthed(false);
  }

  function edit(p: Product) {
    setDraft({
      id: p.id,
      name: p.name,
      slug: p.slug,
      category: p.category,
      brand: p.brand,
      shortDescription: p.shortDescription,
      description: p.description,
      price: p.price,
      originalPrice: p.originalPrice ?? 0,
      image: p.image,
      shopeeUrl: p.shopeeUrl,
      coverage: p.coverage,
      rating: p.rating,
      featured: p.featured,
    });
  }

  async function save() {
    if (!draft) return;
    const categoryName =
      categories.find((c) => c.slug === draft.category)?.name ?? "อุปกรณ์ไล่สัตว์รบกวน";
    setSaving(true);
    const payload = {
      ...draft,
      slug: draft.slug || slugify(draft.name),
      shortDescription:
        draft.shortDescription.trim() ||
        `${draft.name || categoryName} จาก ${draft.brand || "HomePestZero"} รอให้ AI เพิ่มคำอธิบายสินค้า`,
      description:
        draft.description.trim() ||
        `${draft.name || categoryName} รอให้ AI เพิ่มรายละเอียดสินค้า`,
      image: draft.image.trim() || "/logo.png",
      coverage: draft.coverage.trim() || "รอให้ AI เพิ่มข้อมูล",
      originalPrice: draft.originalPrice || undefined,
    };
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    if (res.ok) {
      const list = await fetch("/api/products").then((r) => r.json());
      setProducts(list);
      setDraft(null);
    } else {
      alert("บันทึกไม่สำเร็จ");
    }
  }

  async function remove(id: string) {
    if (!confirm("ลบสินค้านี้?")) return;
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  if (!authed) {
    return (
      <div className="container" style={{ paddingBlock: 80, maxWidth: 400 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>เข้าสู่ระบบผู้ดูแล</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && login()}
          placeholder="รหัสผ่าน"
          style={{ ...inputStyle, marginBlock: 16 }}
        />
        {error && <p style={{ color: "#dc2626", fontSize: 14 }}>{error}</p>}
        <button onClick={login} className="btn btn-brand" style={{ width: "100%" }}>
          เข้าสู่ระบบ
        </button>
        <p style={{ fontSize: 12, color: "var(--ink-faint)", marginTop: 12 }}>
          ค่าเริ่มต้น: admin1234 (เปลี่ยนผ่าน ADMIN_PASSWORD)
        </p>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingBlock: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0 }}>จัดการสินค้า</h1>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => setDraft(emptyDraft())} className="btn btn-brand">
            + เพิ่มสินค้า
          </button>
          <button onClick={logout} className="btn btn-ghost">
            ออกจากระบบ
          </button>
        </div>
      </div>

      {/* List */}
      <div className="card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8fafc", textAlign: "left" }}>
              {["สินค้า", "หมวด", "ราคา", "ลิงก์ Shopee", ""].map((h) => (
                <th key={h} style={{ padding: 12, fontSize: 13, color: "var(--ink-faint)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} style={{ borderTop: "1px solid var(--line)" }}>
                <td style={{ padding: 12, fontWeight: 600, fontSize: 14 }}>{p.name}</td>
                <td style={{ padding: 12, fontSize: 13 }}>
                  {categories.find((c) => c.slug === p.category)?.name}
                </td>
                <td style={{ padding: 12, fontSize: 14 }}>฿{p.price.toLocaleString()}</td>
                <td style={{ padding: 12, fontSize: 12, color: "var(--ink-faint)", maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {p.shopeeUrl}
                </td>
                <td style={{ padding: 12, whiteSpace: "nowrap" }}>
                  <button onClick={() => edit(p)} className="btn btn-ghost" style={{ padding: "6px 12px", fontSize: 13, marginRight: 6 }}>
                    แก้ไข
                  </button>
                  <button onClick={() => remove(p.id)} className="btn btn-ghost" style={{ padding: "6px 12px", fontSize: 13, color: "#dc2626" }}>
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Editor modal */}
      {draft && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.5)",
            display: "grid",
            placeItems: "center",
            padding: 20,
            zIndex: 100,
          }}
          onClick={() => setDraft(null)}
        >
          <div
            className="card"
            style={{ padding: 24, width: "100%", maxWidth: 560, maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 0 }}>
              {products.some((p) => p.id === draft.id) ? "แก้ไขสินค้า" : "เพิ่มสินค้า"}
            </h2>
            <div style={{ display: "grid", gap: 12 }}>
              <Field label="ชื่อสินค้า">
                <input style={inputStyle} value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
              </Field>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Field label="หมวดหมู่">
                  <select style={inputStyle} value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value as CategorySlug })}>
                    {categories.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </Field>
                <Field label="แบรนด์">
                  <input style={inputStyle} value={draft.brand} onChange={(e) => setDraft({ ...draft, brand: e.target.value })} />
                </Field>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                <Field label="ราคา (฿)">
                  <input type="number" style={inputStyle} value={draft.price} onChange={(e) => setDraft({ ...draft, price: +e.target.value })} />
                </Field>
                <Field label="ราคาเดิม">
                  <input type="number" style={inputStyle} value={draft.originalPrice} onChange={(e) => setDraft({ ...draft, originalPrice: +e.target.value })} />
                </Field>
                <Field label="คะแนน">
                  <input type="number" step="0.1" max={5} style={inputStyle} value={draft.rating} onChange={(e) => setDraft({ ...draft, rating: +e.target.value })} />
                </Field>
              </div>
              <Field label="ลิงก์ Shopee (Affiliate)">
                <input style={inputStyle} placeholder="https://shopee.co.th/..." value={draft.shopeeUrl} onChange={(e) => setDraft({ ...draft, shopeeUrl: e.target.value })} />
              </Field>
              <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14 }}>
                <input type="checkbox" checked={draft.featured} onChange={(e) => setDraft({ ...draft, featured: e.target.checked })} />
                แสดงเป็นสินค้าแนะนำ
              </label>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button onClick={save} disabled={saving} className="btn btn-brand" style={{ flex: 1 }}>
                {saving ? "กำลังบันทึก..." : "บันทึก"}
              </button>
              <button onClick={() => setDraft(null)} className="btn btn-ghost">
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "block" }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-soft)", display: "block", marginBottom: 6 }}>
        {label}
      </span>
      {children}
    </label>
  );
}
