# Portfolio — Astro + Tailwind

Landing page portfolio pribadi untuk jasa pembuatan **website**, **aplikasi mobile**, dan **undangan digital**. Ringan, zero JS framework, dengan animasi scroll, slider keahlian, dan mock device frame.

## Menjalankan

```bash
npm install
npm run dev
```

Build production:
```bash
npm run build
```
Output ada di folder `dist/` — bisa langsung di-deploy ke Vercel, Netlify, Cloudflare Pages, atau hosting statis lainnya.

## Struktur
- `src/pages/index.astro` — halaman utama
- `src/components/*` — section komponen (Navbar, Hero, About, Skills slider, Services, Portfolio, Contact)
- `src/layouts/Layout.astro` — wrapper + script scroll reveal
- `tailwind.config.mjs` — warna brand & animasi custom

Edit nama, kontak, dan project di file komponen masing-masing.
