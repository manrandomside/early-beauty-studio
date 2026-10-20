import { defineConfig, fontProviders } from "astro/config";

const google = (name, cssVariable, weights, styles, fallbacks) => ({ provider: fontProviders.google(), name, cssVariable, weights, styles, fallbacks, subsets: ["latin"] });

export default defineConfig({
  // site is the public address; link previews (WhatsApp, Instagram) need absolute image URLs
  site: "https://earlybeauty.pages.dev",
  // pages load in the background when a link is hovered or tapped, so moving between pages feels instant
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  // fonts are downloaded at build time and served from the site itself, so no request goes to Google
  fonts: [
    google("Marcellus", "--font-marcellus", [400], ["normal"], ["serif"]),
    google("Cormorant Garamond", "--font-cormorant", [400, 500], ["italic"], ["serif"]),
    google("Jost", "--font-jost", [300, 400, 500], ["normal"], ["sans-serif"]),
    google("Courier Prime", "--font-courier", [400, 700], ["normal"], ["monospace"])
  ]
});
