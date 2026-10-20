// The announcement bar: one short message the owner switches on in /admin, optionally limited to a date range.
// Shared by the site (to decide whether to show it) and the API (to check what the admin saves).

export const MAX = 160;
const DAY = /^\d{4}-\d{2}-\d{2}$/;

// returns a safe copy or throws with a message the admin page can show
export function clean(input) {
  const on = input?.on === true;
  const text = String(input?.text ?? "").trim();
  const from = String(input?.from ?? "");
  const to = String(input?.to ?? "");
  if (on && !text) throw new Error("Tulis isi pengumumannya dulu.");
  if (text.length > MAX) throw new Error(`Pengumuman maksimal ${MAX} huruf.`);
  if ((from && !DAY.test(from)) || (to && !DAY.test(to))) throw new Error("Format tanggal tidak dikenali.");
  if (from && to && from > to) throw new Error("Tanggal selesai harus setelah tanggal mulai.");
  return { on, text, from, to };
}

// today is a Bali date string (YYYY-MM-DD); ISO dates compare correctly as strings
export const showNow = (a, today) => !!a?.on && !!a.text && (!a.from || today >= a.from) && (!a.to || today <= a.to);

// today's date in Bali (UTC+8), whatever the visitor's clock zone
export const baliToday = (now = Date.now()) => new Date(now + 8 * 3600e3).toISOString().slice(0, 10);
