# 05 – Keputusan Implementasi

Nama: Muhammad Raihandhika Yogaraksa · NIM: 24051130045 · Kelas: TI-J 2024

## Keterhubungan dengan Pertemuan 3
| Wireframe/Prototipe P3 | Halaman/Komponen P4 | User story · AC |
|---|---|---|
| H01 Masuk | `pages/masuk.html` | US-06 (AC-06.3): kode verifikasi Komti |
| H02 Kalender | `pages/kalender.html`; `UI.classCard`, `UI.taskItem`, `UI.badge` | US-01, US-02, US-04 |
| H03 Detail Kelas (modal) | `pages/detail-kelas.html` | US-01, US-02 |
| H04 Tambah Tugas | `pages/tambah-tugas.html` | US-03 |
| H05 Kelola Kuliah Pengganti | `pages/kelola-pengganti.html` | US-06 (AC-06.1) |
| H06 Akses Ditolak | `pages/akses-ditolak.html` | US-06 (AC-06.3) |

Pemetaan istilah dari modul: Beranda/Cari Ruang → Kalender; Hasil Pencarian → kartu kelas dan tugas; Detail Ruang → Detail Kelas; Form Pengajuan → Tambah Tugas dan Kelola Kuliah Pengganti.

## Keputusan
| Keputusan | Alasan | Alternatif |
|---|---|---|
| HTML + CSS + JavaScript biasa, tanpa framework dan tanpa proses build | Modul memperbolehkan; cukup untuk tahap antarmuka; dapat dibuka langsung dari berkas | Laravel Blade + Vite (dipertimbangkan untuk Pertemuan 5 saat ada basis data) |
| Komponen berupa fungsi JavaScript pada `components/ui.js` | Tanpa build, bekerja di `file://`; satu tempat untuk markup berulang | Berkas HTML parsial (butuh server) |
| Semua nilai visual lewat CSS variables | Konsistensi dan satu titik perubahan | Nilai langsung di tiap komponen |
| Modal P3 menjadi halaman terpisah (Detail Kelas) | Modul meminta tautan antarhalaman dan uji tombol kembali; URL dapat dibagikan | Mempertahankan modal |
| Grid kalender 6 kolom di desktop, satu kolom di mobile | Sesuai wireframe; menghindari kotak bulanan yang padat di 390 px | Strip hari seperti wireframe mobile P3 (ditunda) |
| Navigasi mobile di baris kedua yang dapat digeser | Menu Kelola tetap terjangkau tanpa menu hamburger | Hamburger |
| Data contoh dan status disimpan di `localStorage` lewat `scripts/store.js` | Simulasi sesuai modul; struktur field disiapkan untuk basis data | Variabel di memori (hilang saat refresh) |

## Perubahan terhadap prototipe P3 setelah diimplementasikan
1. Detail kelas berubah dari modal menjadi halaman.
2. Strip hari mobile diganti kartu hari bertumpuk karena lebih sederhana dan tetap terbaca di 390 px.
3. Slot semula yang kosong muncul otomatis sebagai kartu putus-putus (`UI.slotKosong`).
4. Pratinjau Kelola memakai komponen kartu yang sama dengan kalender, jadi tampilannya otomatis konsisten.
5. Tanggal baru kuliah pengganti dibatasi pekan 5–10 Okt 2026 (batas data contoh).

## Dipetakan ke basis data (jembatan Pertemuan 5)
| Form | Field | Calon tabel |
|---|---|---|
| Tambah Tugas | judul, mata kuliah, tanggal, jam, catatan | `tasks` |
| Kelola Kuliah Pengganti | mata kuliah, tanggal baru, jam mulai/selesai, ruang, alasan | `schedule_overrides` |
| Masuk | email, kode kelas, kode verifikasi Komti | `users`, `classes` |
| Jadwal rutin (data contoh) | nama, hari, jam, ruang | `courses` |
