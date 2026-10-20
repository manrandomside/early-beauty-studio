# Early Beauty Studio

Website for Early Beauty Studio, an eyelash, nails, lash lift and brow studio in Banyubiru, Negara, Jembrana (Bali). Customers are local Indonesians who find the studio through friends and Instagram; the site answers "are you open?" and "can I come at this time?" before they chat, and turns every choice into a ready WhatsApp message. There is no backend and nothing for the owner to maintain.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm test         # opening hours and Galungan dates
npm run build    # static site in dist/
```

## Where things live

- `src/data/site.js` holds every price, service, gallery photo and course. Change prices here only.
- `src/lib/bali.js` has the Bali-time opening hours, and the Galungan/Kuningan date (210-day pawukon cycle). Tested in `bali.test.js`.
- `src/components/` has one file per section (Hero, Showcase, LashScale, NailCalculator, BrowLift, Gallery, Courses, Visit, Footer, Booking), each with its own markup, styles and script. `src/pages/index.astro` puts them in order.
- `src/styles/global.css` holds the color and font tokens plus the pieces several sections share; `src/scripts/motion.js` runs the reveal-on-scroll.
- Photos are in `src/assets/photos` (`e*` eyelash, `n*` nails, `b*` brows, `s*` studio). Astro converts them to WebP at build.

## Design decisions

- Look: minimal. A dark plum hero, then quiet porcelain sections split by hairlines with one blush band for the nail calculator. Mauve and gold come from the logo; the logo's square frame with gold corners appears only around the hero. Fonts: Marcellus (display), Cormorant Garamond italic (accent), Jost (body), Courier Prime (nail receipt), self-hosted through the Astro fonts API.
- Opening: the logo reveals, its frame opens into the hero frame, letters rise from a blur, and the gold italic line rewrites itself (ujung kuku / helai bulu mata / lengkung alis) while a matching photo (nails / eyelash / brow) wipes in behind it with a slow zoom.
- Signature tools: lash style slider (7 styles, drawn lashes grow denser), nail receipt calculator priced per finger, a Galungan reminder in the visit section, course toggle (ilmu saja / ilmu + alat) that switches the price and what the package includes; "ilmu + alat" means the student takes a tool kit home.
- Showcase: pinned horizontal scroll of the studio and best work (shorter hold on phones). Gallery with filters and counts; tapping a photo opens the price range from the price list and a WhatsApp booking link that names the photo. Photos carry only their service, never invented style names.
- Motion follows one easing (`cubic-bezier(.22,1,.36,1)`), runs once, and switches off under reduced motion. Lenis smooths wheel and touch scrolling.
- Hosting: any static host. Vercel's free plan is non-commercial only, so the live business site should go on Cloudflare Pages (free, commercial use allowed).

## Still to confirm with the owner

- Which brow treatment each brow photo shows (the gallery says only "Alis" until then).
- Bright studio photos (front, room, chair) and lash lift photos. There is no process video, so the hero uses rotating photos.
- A transparent PNG of the logo for sharper small and watermark versions.
