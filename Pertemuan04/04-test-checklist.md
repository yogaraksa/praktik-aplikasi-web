# 04 – Checklist Uji Antarmuka

Nama: Muhammad Raihandhika Yogaraksa · NIM: 24051130045 · Kelas: TI-J 2024
Cara uji: otomatis dengan Chromium (Playwright) pada 1280 × 800 dan 390 × 844 piksel, ditambah pemeriksaan manual per halaman. Browser lain belum diuji.

| No. | Pemeriksaan | Hasil | Bukti |
|---|---|---|---|
| 1 | Halaman dapat dijalankan dari instruksi README | Sudah | Buka `index.html` atau `pages/masuk.html` langsung di browser; tanpa instalasi |
| 2 | Tidak ada error pada console browser | Sudah | 0 error console pada semua alur, desktop dan mobile |
| 3 | Warna, tipografi, jarak, radius mengikuti token | Sudah | Pencarian nilai hex di luar `tokens.css` → tidak ada; satu pelanggaran (#E6F4EA) ditemukan dan dipindah ke `--color-success-bg` |
| 4 | Navigasi Kalender → Detail → Kalender, dan Kalender → Tambah Tugas berjalan | Sudah | Klik kartu pengganti membuka detail; semua `href` mengarah ke berkas yang ada (0 tautan rusak) |
| 5 | State kosong, error, dan sukses dapat ditampilkan | Sudah | Kalender kosong; error Masuk/Tugas/Kelola; konfirmasi tersimpan; konfirmasi tanggal lewat dan libur; 403 |
| 6 | Tampilan desktop dan mobile tidak terpotong atau meluber | Sudah | `scrollWidth ≤ innerWidth` pada 7 halaman (termasuk halaman uji komponen) di 390 px dan 1280 px |
| 7 | Tombol dan field memiliki label yang jelas | Sudah | Setiap field memiliki `<label for>`; tombol berupa kata kerja |
| 8 | Kontras teks dan latar dapat dibaca | Sudah | Semua pasangan token ≥ 4,5 : 1 (lihat `01-design-tokens.md`) |
| 9 | Kode komponen tidak diduplikasi tanpa alasan | Sudah | Satu `UI.field`, satu `UI.classCard`; halaman hanya merangkai komponen; seluruh state tampil di `pages/komponen.html` |
| 10 | Perubahan sudah di-commit dan didorong ke repositori | Belum | Isi menjadi "Sudah" setelah `git push` |

## Pemeriksaan acceptance criteria Pertemuan 3
| User story | Kriteria | Hasil |
|---|---|---|
| US-01 | Kalender memuat jadwal rutin, rincian kelas, panduan saat kosong | Sesuai (halaman Detail Kelas menggantikan modal) |
| US-02 | Badge pengganti dan alasan perpindahan | Sesuai; penanda "kelas ditiadakan" belum dibuat |
| US-03 | Blokir simpan bila tenggat kosong; konfirmasi tanggal lewat | Sesuai |
| US-04 | Centang → coret dan redup; ketuk lagi membatalkan | Sesuai; rollback jaringan belum (tidak ada server) |
| US-06 | Slot baru menimpa slot semula; konfirmasi libur; AC-06.3 proteksi non-Komti | Sesuai (non-Komti diarahkan ke halaman 403) |

## Catatan batas
- Data disimpan di `localStorage` (simulasi); proteksi peran hanya di sisi tampilan dan akan diganti otorisasi server setelah ada backend.
- Tampilan "Bulan" dan menu "Tugas Saya"/"Bantuan" belum ada; menu ditandai nonaktif.
