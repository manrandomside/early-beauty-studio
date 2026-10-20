<p align="center">
  <img src="public/apple-touch-icon.png" alt="Logo Early Beauty Studio" width="110">
</p>

<h1 align="center">Early Beauty Studio</h1>

<p align="center"><b>Cantik sampai ke ujung kuku.</b></p>

<p align="center">
  <a href="https://earlybeauty.pages.dev">earlybeauty.pages.dev</a>
</p>

<p align="center">
  <img src="public/og.jpg" alt="Pratinjau website Early Beauty Studio" width="720">
</p>

Website untuk **Early Beauty Studio**, studio eyelash extension, nail art, lash lift, dan alis di Banyubiru, Negara, Jembrana, Bali. Pelanggannya warga lokal yang mengenal studio dari teman dan Instagram, lalu booking lewat WhatsApp. Website ini menjawab pertanyaan yang paling sering masuk ke WA, yaitu "buka tidak?", "harganya berapa?", dan "jam segini bisa?", sebelum pelanggan mengirim pesan, lalu mengubah setiap pilihan menjadi pesan WhatsApp yang sudah rapi.

Website ini tidak memakai backend. Pemilik studio tidak perlu login, mengisi jadwal, atau merawat apa pun.

## Halaman

| Halaman | Isi |
|---|---|
| `/` Beranda | Hero, etalase studio, kartu layanan beserta harga mulai, dan ulasan |
| `/harga/` | Skala bulu mata, nota nails, serta harga lash lift dan alis |
| `/galeri/` | Foto hasil kerja dengan filter, lalu postingan terbaru dari Instagram |
| `/kelas/` | Kursus nail art, eyelash, dan lash lift dengan pilihan paket |
| `/kunjungi/` | Peta dengan titik lokasi studio, jam buka, pengingat Galungan, dan ulasan |

Di HP, tombol **Menu** membuka daftar halaman, dan bar di bawah layar berisi tombol hitung nails dan booking.

## Fitur

| Fitur | Keterangan |
|---|---|
| Hero berganti | Judul "Cantik sampai ke …" berganti kata (*ujung kuku*, *helai bulu mata*, *lengkung alis*), dan foto hasil kerja di belakangnya ikut berganti |
| Etalase studio | Section berhenti di layar dan foto bergeser ke samping saat di-scroll, di laptop maupun HP |
| Skala bulu mata | Slider 7 gaya eyelash, dari Natural Classic sampai Volume Anime Lash. Gambar bulu mata makin tebal sesuai gaya yang dipilih |
| Nota nails | Kalkulator harga nail art per jari (dasar kuku, desain, dan remove), lalu nota dikirim ke WhatsApp beserta tanggal dan jam |
| Galeri | Foto hasil kerja dengan filter per layanan. Ketuk foto untuk melihat kisaran harga dan booking dengan foto itu sebagai contoh |
| Kelas kecantikan | 4 program kursus dengan pilihan paket *ilmu saja* atau *ilmu + alat*. Harga dan isi paket ikut berubah |
| Booking | Panel booking dari bawah layar: pilih layanan, tanggal, dan jam, lalu pesan WhatsApp siap dikirim |
| Info kunjungan | Peta Google dengan titik studio, status buka/tutup otomatis (WITA), alamat, dan pengingat Galungan berikutnya |
| Instagram | 12 postingan terbaru ditampilkan dengan embed resmi Instagram. Script-nya baru dimuat saat bagian itu hampir terlihat |
| Ulasan | Rating Google dan tombol "Tulis ulasan di Google". Dinding ulasan muncul sendiri begitu `REVIEWS` diisi |

## Cara kerja tanpa backend

- **Jam buka** dihitung dari jam di HP pengunjung lalu dikonversi ke WITA (UTC+8).
- **Galungan dan Kuningan** dihitung dari siklus pawukon 210 hari, jadi tanggalnya selalu terbaru tanpa perlu diisi manual.
- **Booking** memakai link `wa.me` dengan pesan yang sudah terisi. Slot tetap dikonfirmasi langsung oleh studio.
- **Postingan Instagram baru** tidak muncul sendiri. Tambahkan kodenya (bagian setelah `instagram.com/p/`) di depan daftar `INSTA` dalam [`src/data/site.js`](src/data/site.js).
- **Ulasan** ditulis di `REVIEWS` dalam file yang sama, dengan format `[nama, teks, sumber]`. Perbarui juga `GOOGLE` saat jumlah ulasan bertambah.
- **Semua harga** ada di satu file, [`src/data/site.js`](src/data/site.js). Cukup ubah di sana dan seluruh halaman ikut berubah.

## Teknologi

| Bagian | Teknologi |
|---|---|
| Framework | [Astro](https://astro.build) 7, halaman statis tanpa React atau Tailwind |
| Animasi | CSS dan JavaScript ringan, [Lenis](https://lenis.darkroom.engineering) untuk smooth scroll |
| Gambar dan font | `astro:assets` (WebP otomatis), font disimpan sendiri lewat Astro Fonts API |
| Tes | `node:test` untuk jam buka dan kalender Galungan |
| Hosting | Cloudflare Pages, deploy otomatis setiap push ke `main` |

## Struktur

```
src/
├── components/   Satu file per section, berisi markup, gaya, dan script-nya sendiri
├── data/         Harga, layanan, galeri, dan kursus (site.js) serta daftar foto
├── lib/          Jam buka Bali dan kalender Galungan, beserta tesnya
├── layouts/      Kerangka halaman, meta SEO, dan pratinjau link
├── pages/        index.astro yang menyusun semua section
├── scripts/      Animasi muncul saat scroll dan smooth scroll
└── styles/       Warna, font, dan gaya yang dipakai bersama
```

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm test         # jam buka dan tanggal Galungan
npm run build    # hasil statis di folder dist/
```

Butuh Node.js 22.22 atau lebih baru (lihat `.node-version`).

## Catatan desain

- Tampilan minimalis: hero plum gelap, lalu section terang yang dipisahkan garis tipis, dengan satu bagian blush untuk nota nails. Warna mauve dan emas diambil dari logo, dan bingkai bersudut emas dari logo hanya dipakai di hero.
- Font: Marcellus (judul), Cormorant Garamond italic (aksen), Jost (teks), dan Courier Prime (nota).
- Semua animasi memakai satu jenis easing, hanya berjalan sekali, dan otomatis mati untuk pengguna yang mengaktifkan "kurangi animasi".
- Desain dibuat untuk HP terlebih dahulu, dengan bar aksi tetap di bawah layar berisi tombol hitung nails dan booking.

## Tentang project

Dibuat oleh [Firman Fadilah](https://github.com/manrandomside) sebagai website untuk usaha keluarga dan bagian dari portofolio pengembangan web, 2026.

## Hak cipta dan atribusi

- Logo, foto hasil kerja, dan daftar harga milik **Early Beauty Studio**, dipakai atas izin pemilik.
- Font [Marcellus](https://fonts.google.com/specimen/Marcellus), [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [Jost](https://fonts.google.com/specimen/Jost), dan [Courier Prime](https://fonts.google.com/specimen/Courier+Prime): SIL Open Font License 1.1.
- [Lenis](https://github.com/darkroomengineering/lenis): MIT License.
