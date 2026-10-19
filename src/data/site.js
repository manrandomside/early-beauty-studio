// Every price and label on the site lives here. Change a price once, it updates everywhere.

export const WA = "6281348019959";
export const WA_TEXT = "0813-4801-9959";
export const IG = "https://www.instagram.com/earlybeauty.studio/";
export const MAPS = "https://maps.app.goo.gl/QnbwpMdqvM3QPx9p8";
export const ADDRESS = "Jl. Raya Negara–Gilimanuk, Banyubiru, Jembrana";
export const HOURS = "Setiap hari 10.00–17.00 WITA";

export const RIBBON = ["Natural Classic 60K", "Russian Volume 75K", "Lash Lift 55K", "Brow Bomber 80K", "Nail Gel 4rb/jari", "Japanese Marble", "Kelas Nail · Eyelash · Lash Lift", "Threading Alis 40K"];

// [name, price, description]
export const LASH = [
  ["Natural Classic", 60000, "Satu extension per helai. Hasilnya seperti bulu mata asli, hanya lebih rapi dan lentik."],
  ["3D Semi Volume", 65000, "Sedikit lebih penuh dari classic, tetap ringan untuk dipakai sehari-hari."],
  ["Russian Natural", 70000, "Teknik fan halus yang membuat garis mata terlihat lebih tegas tapi tetap natural."],
  ["Russian Volume", 75000, "Lebih tebal dan bervolume, cocok untuk acara atau foto."],
  ["Mega Volume", 80000, "Paling penuh dan gelap. Mata langsung jadi pusat perhatian."],
  ["Natural Anime Lash", 85000, "Ujung-ujung runcing seperti tokoh anime, versi yang lembut."],
  ["Volume Anime Lash", 90000, "Gaya anime dengan volume penuh, paling dramatis."]
];

// nails are priced per finger: [name, price per finger]
export const BASES = [["Nail Gel", 4000], ["Nailtip biasa", 5000], ["Soft tip", 6000], ["Polygel", 8000]];
export const ADDS = [["French", 2000], ["Desain Art", 2000], ["Cat Eye", 2000], ["Glitter", 2000], ["Chrome / Aurora", 2000], ["Ombre / Blush", 4000], ["Marble Basic", 2000], ["Japanese Marble", 4000], ["3D Flowers", 4000], ["3D Shells", 2000], ["3D PVC", 3000]];
export const REMOVES = [["Tidak", 0], ["Nail Gel", 2000], ["Nail Tip", 3000]];

export const TIMES = ["10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00"];
export const SERVICES = ["Eyelash Extension", "Nails", "Lash Lift", "Alis", "Kelas / kursus"];

// showcase in walking order: [caption, photo, is studio]
export const WORKS = [["Meja nail & rak warna", "s1", true], ["Cat eye cokelat & emas", "n1"], ["Eyelash volume", "e1"], ["Milky pink & chrome", "n4"], ["Brow lamination", "b2"], ["Kerang 3D & mutiara", "n6"], ["Eyelash wispy", "e6"], ["Bunga 3D & glitter", "n3"]];

// [category, name, photo, nail add-ons as finger counts (nails only)]
export const GALLERY = [
  ["Eyelash", "Eyelash volume", "e1"], ["Eyelash", "Eyelash lentik rapi", "e2"], ["Eyelash", "Eyelash natural tebal", "e3"],
  ["Eyelash", "Eyelash wispy", "e4"], ["Eyelash", "Eyelash volume halus", "e5"], ["Eyelash", "Eyelash wispy dramatis", "e6"],
  ["Nails", "Cat eye cokelat & emas", "n1", { "Cat Eye": 10, "Chrome / Aurora": 6 }],
  ["Nails", "Merah cat eye & kerang", "n2", { "Cat Eye": 10, "3D Shells": 2 }],
  ["Nails", "Bunga 3D & glitter", "n3", { "Cat Eye": 6, "Glitter": 4, "3D Flowers": 2 }],
  ["Nails", "Milky pink & chrome", "n4", { "Ombre / Blush": 10, "Chrome / Aurora": 10 }],
  ["Nails", "Tortoise & french hitam", "n5", { "French": 6, "Desain Art": 4 }],
  ["Nails", "Kerang 3D & mutiara", "n6", { "3D Shells": 6, "Chrome / Aurora": 4 }],
  ["Alis", "Brow lamination", "b1"], ["Alis", "Brow lamination", "b2"], ["Alis", "Brow lamination", "b3"],
  ["Alis", "Brow lamination", "b4"], ["Alis", "Brow lamination", "b5"], ["Alis", "Brow lamination", "b6"]
];
export const CATS = ["Semua", "Eyelash", "Nails", "Alis"];

// Two packages per course: [ilmu saja, ilmu + alat]. price and kit follow the package toggle.
// shortcut: 'ilmu + alat' is read as a tool set to take home (the price lists only say 'included alat'); confirm with the owner.
const NAIL_KIT = ["Alat & bahan disediakan selama kursus", "Alat & bahan disediakan, plus paket alat nail untuk dibawa pulang"];
const LASH_KIT = ["Alat dipinjamkan selama kursus", "Alat dipinjamkan selama kursus, plus paket alat untuk dibawa pulang"];
const NAIL_PERKS = ["Free modul", "Free display nail", "Info supplier", "Free edit foto", "Free konsultasi seumur hidup"];
export const COURSES = [
  { tag: "Nail Art", name: "Basic", wa: "Nail Art Basic", price: [900000, 1300000], kit: NAIL_KIT, meta: ["3× pertemuan", "2–3 jam", "Sertifikat"],
    items: ["Basic manicure, remove & nail shaping", "Desain art simpel & marble basic", "Pemasangan nail tip", "Praktek di display & ke 2 model", "Free konsultasi seumur hidup"],
    full: { Materi: ["Pengenalan alat & bahan", "Teknik basic manicure", "Teknik remove", "Teknik desain art simpel", "Teknik desain marble basic", "Teknik pemasangan nail tip", "Teknik nail rapi & tahan lama", "Nail shaping", "Sertifikat"],
      Bonus: NAIL_PERKS, "Teori & praktek": ["Praktek di display", "Praktek ke 2 model", "3× pertemuan", "Durasi 2–3 jam"] } },
  { tag: "Nail Art · terlengkap", name: "Basic to Pro", wa: "Nail Art Basic to Pro", price: [1500000, 2100000], pro: true, kit: NAIL_KIT, meta: ["3× pertemuan", "3–4 jam", "Sertifikat"],
    items: ["Semua materi Basic", "Soft gel tip & pemasangan aksesoris", "Desain lengkap, 3D & kerang", "Chrome, ombre & Japanese marble", "Free konsultasi seumur hidup"],
    full: { Materi: ["Pengenalan alat & bahan", "Teknik basic manicure", "Teknik remove", "Teknik pemasangan nail tip", "Teknik pemasangan soft gel tip", "Teknik pemasangan aksesoris", "Teknik desain lengkap", "Teknik desain 3D", "Teknik desain chrome", "Teknik ombre", "Teknik Japanese marble", "Teknik marble basic", "Teknik desain kerang", "Teknik nail rapi & tahan lama", "Nail shaping", "Sertifikat"],
      Bonus: NAIL_PERKS, "Teori & praktek": ["Praktek di display", "Praktek ke 2 model", "3× pertemuan", "Durasi 3–4 jam"] } },
  { tag: "Eyelash", name: "Eyelash Extension", wa: "Eyelash Extension", price: [900000, 1600000], kit: LASH_KIT, meta: ["3× pertemuan", "3 jam/hari", "Sertifikat"],
    items: ["Modul belajar", "Info supplier", "Free konsultasi"] },
  { tag: "Lash Lift", name: "Lash Lift", wa: "Lash Lift", price: [500000, 900000], kit: LASH_KIT, meta: ["2× pertemuan", "2 jam/hari", "Sertifikat"],
    items: ["Info supplier", "Free konsultasi"] }
];

export const rp = n => "Rp " + n.toLocaleString("id-ID");
// dates are UTC midnights of a Bali calendar day, so format them in UTC
export const formatDate = (t, o) => new Date(t).toLocaleDateString("id-ID", { timeZone: "UTC", day: "numeric", month: "long", ...o });
export const longDate = t => formatDate(t, { weekday: "long", year: "numeric" });
export const waLink = text => "https://wa.me/" + WA + "?text=" + encodeURIComponent(text);
