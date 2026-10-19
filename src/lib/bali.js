export const DAY = 864e5;

// Bali time (WITA, UTC+8) as a Date whose UTC fields read as local Bali time.
const wita = now => new Date(now + 8 * 3600e3);

export function isOpen(now = Date.now()) {
  const d = wita(now), h = d.getUTCHours() + d.getUTCMinutes() / 60;
  return h >= 10 && h < 17;
}

// Galungan repeats every 210 days (pawukon); 19 Nov 2025 was one. Kuningan is 10 days later.
// shortcut: in the 10 days between Galungan and Kuningan this already points at the next cycle; fine for a "book early" reminder.
const ANCHOR = Date.UTC(2025, 10, 19);
export function holyDays(now = Date.now()) {
  const d = wita(now), today = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  const gal = ANCHOR + Math.ceil((today - ANCHOR) / (210 * DAY)) * 210 * DAY;
  return { today, gal, prev: gal - 210 * DAY, kun: gal + 10 * DAY, bookBy: gal - 14 * DAY };
}

// Nails estimate shown in the gallery: Nail Gel on 10 fingers plus the add-ons seen in the photo.
export const nailEstimate = (adds, ADDS) => 4000 * 10 + ADDS.reduce((s, [name, price]) => s + price * (adds[name] || 0), 0);
