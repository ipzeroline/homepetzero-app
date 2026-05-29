# 🛡️ PestRepel — เว็บ Affiliate เครื่องไล่ยุง/หนู/นก (Shopee)

เว็บไซต์รวมและรีวิวเครื่องไล่สัตว์รบกวน สร้างด้วย **Next.js 16.2.6 (App Router)** เน้น SEO สูงสุด พร้อมลิงก์ Affiliate ของ Shopee เพื่อรับค่าคอมมิชชัน

## ✨ ฟีเจอร์
- หน้าแรก / หมวดหมู่ (ยุง, หนู, นก) / รายละเอียดสินค้า / เปรียบเทียบ / บล็อก
- **หน้า Admin** (`/admin`) จัดการสินค้า — เพิ่ม/แก้ไข/ลบ + ใส่ลิงก์ Shopee
- ระบบรีวิว/เรตติ้ง (ดาว) + ข้อดี/ข้อเสีย
- เปรียบเทียบสินค้าสูงสุด 3 รุ่นแบบ interactive
- บล็อกบทความ SEO

## 🔍 SEO ที่ใส่มาให้
- Metadata API ครบ: title template, canonical, OpenGraph, Twitter Card
- **JSON-LD Structured Data**: Organization, WebSite, Product, AggregateRating, Review, BreadcrumbList, FAQPage, Article, ItemList
- `sitemap.xml` แบบ dynamic + `robots.txt` + `manifest.webmanifest`
- สินค้า/หมวด/บทความ pre-render เป็น Static (SSG) โหลดเร็ว
- ลิงก์ Affiliate ใช้ `rel="nofollow sponsored"` ตามมาตรฐาน
- รองรับภาษาไทย (`lang="th"`), ฟอนต์ Noto Sans Thai

## 🚀 เริ่มใช้งาน
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## ⚙️ ตั้งค่าก่อน Deploy
1. แก้ `src/lib/site.ts` — `url` (โดเมนจริง), `name`, `affiliateSubId` (Shopee sub_id)
2. ตั้ง environment variable `ADMIN_PASSWORD` (ค่าเริ่มต้น: `admin1234`)
3. เข้า `/admin` เพื่อใส่ลิงก์สินค้า Shopee จริง

## 📁 โครงสร้าง
- `src/data/` — products.json, posts.json (ฐานข้อมูลไฟล์), categories
- `src/lib/` — products, posts, seo, auth, site config
- `src/app/` — หน้าเว็บทั้งหมด (App Router) + API routes
- `src/components/` — UI components

## 💡 หมายเหตุ
- ใช้ไฟล์ JSON เป็น data store (เหมาะกับ affiliate ที่อ่านมาก) หน้า Admin เขียนกลับลงไฟล์ได้ตอน dev
- บน Vercel (read-only fs) แนะนำเปลี่ยนเป็น DB เช่น Vercel Postgres/Turso หรือ commit ไฟล์ผ่าน Git
- ราคาดึงสดจาก Shopee ไม่ได้ (ไม่มี public API) จึงเก็บราคาโดยประมาณไว้ในระบบ + มี disclosure แจ้งผู้ใช้
# homepetzero-app
