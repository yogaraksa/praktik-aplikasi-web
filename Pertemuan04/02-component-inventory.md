# 02 – Inventaris Komponen UI

Nama: Muhammad Raihandhika Yogaraksa · NIM: 24051130045 · Kelas: TI-J 2024
Kode: `components/ui.js` (objek global `UI`) · Gaya: `styles/components.css` · Semua komponen memakai token pada `01-design-tokens.md`.

| Komponen | Fungsi/Kelas | Parameter | State | Dipakai di | Sumber P3 |
|---|---|---|---|---|---|
| Button | `UI.btn()` · `.btn--primary/--secondary/--full` | label, variant, href, type, id, disabled, full, loading | default, hover/focus (outline 3 px), disabled, loading (spinner + `aria-busy`) | semua halaman | Tombol utama "+ Tambah Tugas", "Simpan Tugas", "Publikasikan…" |
| Form field | `UI.field()` | id, label, type, value, hint, error, required, options, rows, min, max | empty, focus, filled, error (`aria-invalid` + pesan merah `!`) | Masuk, Tambah Tugas, Kelola | Field H01, H04, H05 |
| Status badge | `UI.badge()` · `.badge--pengganti/--selesai/--rutin` | jenis | pengganti, selesai, rutin — selalu berisi teks | Kalender, Detail, Kelola | US-02 badge "⇄ PENGGANTI" |
| Class card | `UI.classCard()` / `UI.slotKosong()` | kelas, override, href, selected | normal, selected (bingkai tebal + `aria-current`), pengganti (garis putus), unavailable ("slot semula kosong") | Kalender, Kelola (pratinjau), konfirmasi | US-01, US-02 |
| Task item | `UI.taskItem()` · `.task` | tugas, fungsi format tanggal | belum selesai, selesai (coret + redup) | Kalender (panel tugas) | US-04 |
| Navbar | `UI.navbar()` | halaman aktif, peran | aktif (`aria-current`), nonaktif (menu belum tersedia), menu Kelola hanya Komti | semua halaman kecuali Masuk | Sitemap P3 |
| Alert | `UI.alert()` · `.alert--warning/--success` | jenis, isi HTML | warning (konfirmasi), success (konfirmasi tersimpan) | Tambah Tugas, Kelola | AC US-03, US-06 |

## Kriteria pemeriksaan (dari modul)
| Komponen | Kriteria | Hasil |
|---|---|---|
| Button | Label berupa kata kerja dan mudah ditemukan | Ya ("Simpan Tugas", "Publikasikan Kuliah Pengganti", "Kembali ke Kalender") |
| Form field | Label, hint, dan pesan error jelas | Ya, error muncul tepat di bawah field |
| Card | Info utama dan aksi tidak membingungkan | Ya, seluruh kartu adalah tautan ke detail |
| Status badge | Warna bukan satu-satunya pembeda | Ya, selalu ada teks |

## Pengurangan duplikasi
Komponen yang paling banyak mengurangi pengulangan: `UI.field()` (dipakai 14 kali di 3 form) dan `UI.classCard()` (dipakai di kalender, pratinjau Kelola, dan konfirmasi). Perubahan gaya cukup di satu tempat.

## Halaman uji komponen
`pages/komponen.html` (tautan "Halaman uji komponen" di footer semua halaman) menampilkan seluruh komponen dengan state-nya: Button (default, hover, focus, disabled, loading), Form field (empty, focus, filled, error), Card (normal, selected, unavailable, pengganti), Status badge, Task item, Alert, dan swatch token warna. Halaman ini dipakai sebagai dokumentasi dan bahan perbandingan dengan prototipe (modul langkah 18–19). Screenshot ada di `03-ui-screenshots.pdf` halaman 12.
