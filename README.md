# Early Beauty Studio

Website for Early Beauty Studio, an eyelash, nails, lash lift and brow studio in Banyubiru, Negara, Jembrana (Bali). Customers are local Indonesians who find the studio through friends and Instagram; the site answers "are you open?" and "can I come at this time?" before they chat, and turns every choice into a ready WhatsApp message. There is no backend and nothing for the owner to maintain.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm test         # opening hours, Galungan dates, nail estimate
npm run build    # static site in dist/
```

## Where things live

- `src/data/site.js` holds every price, service, gallery photo and course. Change prices here only.
- `src/lib/bali.js` has the Bali-time opening hours, the Galungan/Kuningan date (210-day pawukon cycle) and the nail estimate. Tested in `bali.test.js`.
- `src/components/` has one file per section (Hero, Showcase, LashScale, NailCalculator, BrowLift, Gallery, HolyDays, Courses, Visit, Footer, Booking), each with its own markup, styles and script. `src/pages/index.astro` puts them in order.
- `src/styles/global.css` holds the color and font tokens plus the pieces several sections share; `src/scripts/motion.js` runs the reveal-on-scroll.
- Photos are in `src/assets/photos` (`e*` eyelash, `n*` nails, `b*` brows, `s*` studio). Astro converts them to WebP at build.

## Design decisions

- Look: dark plum hero, porcelain sections, mauve and gold from the logo. The logo's square frame with gold corners is the recurring motif. Fonts: Marcellus (display), Cormorant Garamond italic (accent), Jost (body), Courier Prime (nail receipt).
- Opening: the logo reveals, its frame opens into the hero frame, letters rise from a blur, and the gold italic line rewrites itself (ujung kuku / helai bulu mata / lengkung alis). Gold glitter drifts behind.
- Signature tools: lash style slider (7 styles, drawn lashes grow denser), nail receipt calculator priced per finger, Galungan/Kuningan countdown, course price toggle (ilmu saja / ilmu + alat).
- Showcase: pinned horizontal scroll of the studio and best work on desktop, swipe on phones. Gallery with filters and counts; tapping a photo opens its price and a "Booking gaya ini" WhatsApp link. Nail photos can be loaded straight into the receipt.
- Motion follows one easing (`cubic-bezier(.22,1,.36,1)`), runs once, and switches off under reduced motion.
- Hosting: any static host. Vercel's free plan is non-commercial only, so the live business site should go on Cloudflare Pages (free, commercial use allowed).

## Still to confirm with the owner

- Style names for each eyelash photo, and the exact designs in each nail photo (the estimates are read from the photos).
- More studio photos (front, room, chair), lash lift photos, and a short process video for the hero.
- A transparent PNG of the logo for sharper small and watermark versions.
