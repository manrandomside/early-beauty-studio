// Every price and label on the site lives here. Change a price once, it updates everywhere.

export const WA = "6281348019959";
export const WA_TEXT = "0813-4801-9959";
export const IG = "https://www.instagram.com/earlybeauty.studio/";
export const MAPS = "https://maps.app.goo.gl/QnbwpMdqvM3QPx9p8";
export const ADDRESS = "Jl. Raya Negara–Gilimanuk, Banyubiru, Jembrana";
export const HOURS = "Setiap hari 10.00–17.00 WITA";
export const GEO = [-8.3509707, 114.5964022]; // studio pin for the embedded map

// the menu, one page each: [label, path]
export const PAGES = [["Harga", "/harga/"], ["Galeri", "/galeri/"], ["Kelas", "/kelas/"], ["Kunjungi", "/kunjungi/"]];

// Google rating as shown on Maps; update when new reviews come in
export const GOOGLE = { rating: "5.0", count: 3 };
// Instagram numbers for the trust row, rounded down (checked 20 Oct 2026: 784 posts, 1,373 followers)
export const INSTA_STATS = { posts: "780+", followers: "1.300+" };
// review wall: [name, text, source]. Empty until there are written reviews (the 3 on Google are stars only);
// the wall shows itself as soon as this list has entries
export const REVIEWS = [];

// Instagram posts embedded on the gallery page, newest first. Embeds do not update themselves:
// add a new post's code (from instagram.com/p/<code>/) here to show it.
export const INSTA = ["DVxt40yks5t", "DVG05PZEhaD", "DVm8w0GkqH_", "DdtZJ5XC01b", "DdoHEhLyePX", "Dc4DX0vysar", "DafLBbCSipA", "DaOvRTfS4LD", "DaCwiXPyigC", "DZ9vR7DSWVM", "DZ0B2U_SRfX", "DZ0B0xNSG2A"];


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

// showcase in walking order: [service, photo]
export const WORKS = [["Studio", "s1"], ["Nails", "n1"], ["Eyelash", "e1"], ["Nails", "n4"], ["Alis", "b2"], ["Nails", "n6"], ["Eyelash", "e6"], ["Nails", "n3"]];

// [category, photo]; photos carry no style names until the studio confirms them
export const GALLERY = [
  ...["e1", "e2", "e3", "e4", "e5", "e6"].map(p => ["Eyelash", p]),
  ...["n1", "n2", "n3", "n4", "n5", "n6"].map(p => ["Nails", p]),
  ...["b1", "b2", "b3", "b4", "b5", "b6"].map(p => ["Alis", p])
];
export const CATS = ["Semua", "Eyelash", "Nails", "Alis"];

// Course price lists from the studio. price and pkg are [ilmu saja, ilmu + alat];
// "ilmu + alat" means the student takes a tool kit home.
const NAIL_BONUS = ["Modul", "Display nail", "Info supplier", "Edit foto", "Konsultasi seumur hidup", "Sertifikat"];
const NAIL_PKG = ["Alat & bahan disediakan selama kelas", "Alat & bahan disediakan, plus paket alat untuk dibawa pulang"];
const LASH_PKG = ["Alat dipinjamkan selama kursus", "Paket alat jadi milikmu, dibawa pulang"];
export const COURSES = [
  { tag: "Nail Art", name: "Basic", wa: "Nail Art Basic", price: [900000, 1300000], pkg: NAIL_PKG,
    meta: ["3× pertemuan", "2–3 jam", "Praktek di display & 2 model"], bonus: NAIL_BONUS,
    materi: ["Pengenalan alat & bahan", "Teknik basic manicure", "Teknik remove", "Desain art simpel", "Desain marble basic", "Pemasangan nail tip", "Nail rapi & tahan lama", "Nail shaping"] },
  { tag: "Nail Art · terlengkap", name: "Basic to Pro", wa: "Nail Art Basic to Pro", price: [1500000, 2100000], pkg: NAIL_PKG, pro: true,
    meta: ["3× pertemuan", "3–4 jam", "Praktek di display & 2 model"], bonus: NAIL_BONUS,
    materi: ["Pengenalan alat & bahan", "Teknik basic manicure", "Teknik remove", "Pemasangan nail tip", "Pemasangan soft gel tip", "Pemasangan aksesoris", "Desain lengkap", "Desain 3D", "Desain chrome", "Ombre", "Japanese marble", "Marble basic", "Desain kerang", "Nail rapi & tahan lama", "Nail shaping"] },
  { tag: "Eyelash", name: "Eyelash Extension", wa: "Eyelash Extension", price: [900000, 1600000], pkg: LASH_PKG,
    meta: ["3× pertemuan", "3 jam/hari"], bonus: ["Modul", "Info supplier", "Free konsultasi", "Sertifikat"] },
  { tag: "Lash Lift", name: "Lash Lift", wa: "Lash Lift", price: [500000, 900000], pkg: LASH_PKG,
    meta: ["2× pertemuan", "2 jam/hari"], bonus: ["Info supplier", "Free konsultasi", "Sertifikat"] }
];

export const rp = n => "Rp " + n.toLocaleString("id-ID");
// dates are UTC midnights of a Bali calendar day, so format them in UTC
export const formatDate = (t, o) => new Date(t).toLocaleDateString("id-ID", { timeZone: "UTC", day: "numeric", month: "long", ...o });
export const longDate = t => formatDate(t, { weekday: "long", year: "numeric" });
export const waLink = text => "https://wa.me/" + WA + "?text=" + encodeURIComponent(text);
