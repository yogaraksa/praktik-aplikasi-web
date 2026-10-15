# Pertemuan 4 – Design System, Struktur Proyek, Komponen UI, dan Implementasi Antarmuka Awal

**Proyek:** EduSync (jadwal dan tugas kuliah) · **Mata kuliah:** Praktik Aplikasi Web INF60295 · **Kelas:** TI-J 2024
**Pengerjaan:** individu — Muhammad Raihandhika Yogaraksa (24051130045)

## Cara menjalankan
Seluruh kode ada di folder `edusync/`. Tanpa instalasi: buka `edusync/index.html` di browser (atau `edusync/pages/masuk.html`).
Atau jalankan server lokal dari folder `edusync/`: `python3 -m http.server 8000`, lalu buka `http://localhost:8000`.

| Peran | Kode kelas | Kode Komti |
|---|---|---|
| Mahasiswa | `TIJ-2024` | – |
| Komti | `TIJ-2024` | `KOMTI-24` (centang "Saya Komti") |

Data contoh disimpan di `localStorage`; tautan "Reset data demo" di footer mengembalikan data awal.

## Struktur proyek (di dalam folder `edusync/`)
```
index.html              → mengalihkan ke pages/masuk.html
pages/                  → masuk, kalender, detail-kelas, tambah-tugas, kelola-pengganti, akses-ditolak, komponen (halaman uji)
components/ui.js        → Button, FormField, StatusBadge, ClassCard, TaskItem, Navbar, Alert
styles/                 → tokens.css (design token), base.css (layout), components.css
scripts/                → store.js (data contoh), pages.js (logika halaman)
assets/                 → favicon.svg
docs/                   → dokumentasi
../Pertemuan04/         → berkas pengumpulan
```

## Design token (ringkas)
Primary `#1F4FD8` · teks `#1C2230` · surface `#FFFFFF` · bg `#F6F7FB` · success `#1E7E34` · warning `#B54708` · danger `#B42318` · jarak 4/8/12/16/24/32 px · radius 6/8/12 px. Lengkap di `01-design-tokens.md`.

## Isi pengumpulan
| Berkas | Isi |
|---|---|
| 01-design-tokens.md | Tabel token dan aturan pakai |
| 02-component-inventory.md | Inventaris komponen, state, dan kriteria |
| 03-ui-screenshots.pdf | 12 screenshot desktop + mobile (termasuk halaman uji komponen) |
| 04-test-checklist.md | Checklist uji dan bukti |
| 05-keputusan-implementasi.md | Keterhubungan P3 → P4 dan keputusan |
| 06-refleksi-individu.md | Refleksi individu |

## Kontribusi
| Nama | Bagian pekerjaan | Tautan commit |
|---|---|---|
| Muhammad Raihandhika Yogaraksa | Seluruh pekerjaan Pertemuan 4 | <ISI TAUTAN COMMIT> |

## Langkah Git
```
git checkout -b feature/ui-pertemuan-4
git add edusync
git commit -m "feat: add design tokens and reusable UI components"
git add Pertemuan04
git commit -m "docs: add Pertemuan 4 documentation and test evidence"
git push -u origin feature/ui-pertemuan-4
```
