# Nusatravel Trip Gallery

Static travel gallery website for the Nusatravel sales team and AI chatbot to share package gallery links with customers.

Customers can browse real trip photos by package, then tap WhatsApp to ask about dates, pricing, and seat availability.

This is **not** a booking engine, CRM, or admin dashboard.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static data only
- Images from `/public`
- Vercel-ready

## How to Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```text
src/
  app/
    page.tsx                 # Home
    gallery/page.tsx         # Package selection list
    gallery/[slug]/page.tsx # Package gallery detail
  components/                # UI components
  config/site.ts             # Brand + WhatsApp config
  data/galleries.ts          # Package data
  lib/                       # Helpers
public/
  gallery/
    [slug]/
      cover.webp
      peserta-01.webp
      ...
```

## How to Add a New Package

1. Open `src/data/galleries.ts`
2. Add a new object to the `galleries` array:

```ts
{
  slug: "id-bali",
  code: "ID",
  title: "ID Bali",
  description: "Lihat gambar peserta, tempat lawatan dan suasana trip Bali bersama Nusatravel.",
  coverImage: "/gallery/id-bali/cover.webp",
  whatsappText: "Hi Nusatravel, saya berminat dengan pakej ID Bali. Boleh share tarikh dan harga terkini?",
  images: [
    {
      src: "/gallery/id-bali/peserta-01.webp",
      category: "Gambar Peserta",
      caption: "Gambar peserta Nusatravel semasa trip Bali"
    }
    // add more images...
  ],
  testimonials: [
    "Trip tersusun dan team banyak membantu sepanjang perjalanan."
  ]
}
```

3. Create the image folder under `public/gallery/[slug]/`
4. Add images using the naming pattern below

Optional fields:

- `pdfUrl` — show “Download Itinerary PDF” button when set
- `testimonials` — hide testimonial section when omitted or empty

## How to Add Images

Place images manually in:

```text
public/gallery/[slug]/
  cover.webp
  peserta-01.webp
  peserta-02.webp
  tempat-lawatan-01.webp
  tempat-lawatan-02.webp
  tempat-lawatan-03.webp
  makanan-01.webp
  suasana-01.webp
  suasana-02.webp
```

Then register each image path in `src/data/galleries.ts`.

If an image file is missing, the site shows a clean placeholder:

**Gambar akan dikemaskini**

## Image Compression Recommendation

| Type | Format | Width | Quality |
|------|--------|-------|---------|
| Gallery images | WebP | 1200px | 75–80% |
| Cover images | WebP | 1600px | 75–80% |

Tips:

- Keep file sizes small for WhatsApp mobile users
- Prefer WebP over JPEG/PNG
- Avoid uploading original camera files directly

## How to Update WhatsApp Number

Edit `src/config/site.ts`:

```ts
export const siteConfig = {
  brandName: "Nusatravel",
  tagline: "That was easy.",
  whatsappNumber: "60123456789", // update this
  websiteUrl: "https://www.nusatra.com",
};
```

Use country code without `+` or spaces. Example: Malaysia `60123456789`.

## How to Update Package Data

All package content lives in `src/data/galleries.ts`:

- Title, description, code badge
- Cover image path
- WhatsApp message text
- Image list and captions
- Testimonials
- Optional PDF URL

No database or admin panel is required.

## How to Deploy on Vercel

1. Push this project to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Framework preset: **Next.js**
4. Deploy

Or deploy from CLI:

```bash
npm i -g vercel
vercel
```

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home / hero entry |
| `/gallery` | Package selection list |
| `/gallery/[slug]` | Package photo gallery |

## Notes for Marketing Team

- Share `/gallery` for customers to choose a package
- Share `/gallery/[slug]` for a specific package
- Update photos by replacing files in `public/gallery/`
- Keep captions short and natural
- Do not use external image URLs
