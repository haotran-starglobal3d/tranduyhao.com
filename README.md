# tranduyhao.com

Website cá nhân của Dr. Tran Duy Hao - Inventor, Founder & CEO của StarGlobal3D.com.
Dựng bằng [Astro](https://astro.build) (mẫu blog), chạy trên Cloudflare.

## Lệnh

| Lệnh | Tác dụng |
| --- | --- |
| `npm install` | Cài thư viện |
| `npm run dev` | Chạy thử tại `localhost:4321` |
| `npm run build` | Dựng bản tĩnh vào `dist/` |
| `npm run preview` | Xem thử bản đã dựng |

## Viết bài

Thêm file `.md` hoặc `.mdx` vào `src/content/blog/` với phần đầu:

```md
---
title: 'Tiêu đề'
description: 'Mô tả ngắn'
pubDate: '2026-11-12'
heroImage: '../../assets/ten-anh.jpg' # không bắt buộc
---
```

## Sửa nội dung

- Tên, khẩu hiệu, mô tả: `src/consts.ts`
- Trang chủ: `src/pages/index.astro`
- Trang giới thiệu: `src/pages/about.astro`
- Menu và chân trang: `src/components/Header.astro`, `src/components/Footer.astro`

## Triển khai lên Cloudflare

Trong Cloudflare, vào Workers & Pages, tạo ứng dụng mới, nối với repo GitHub này:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Cấu hình nằm ở `wrangler.jsonc` (phục vụ thư mục `dist/`). Sau đó gắn tên miền `tranduyhao.com` ở mục Domains.
