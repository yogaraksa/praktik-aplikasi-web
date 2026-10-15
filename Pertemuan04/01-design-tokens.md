# 01 – Design Tokens EduSync

Nama: Muhammad Raihandhika Yogaraksa · NIM: 24051130045 · Kelas: TI-J 2024
Sumber nilai: prototipe klik dan wireframe Pertemuan 3 (aksen biru tunggal, badge "⇄ PENGGANTI", garis putus untuk kuliah pengganti).
Berkas rujukan kode: `styles/tokens.css` (CSS variables). Semua komponen hanya memakai token ini; tidak ada nilai hex di luar berkas tersebut.

## Warna
| Token | Nilai | Contoh penggunaan | Kontras (WCAG) |
|---|---|---|---|
| `--color-primary` | #1F4FD8 | Tombol utama, tautan, badge pengganti, garis putus kartu pengganti | 6,63 : 1 di atas putih |
| `--color-primary-soft` | #E6EDFF | Latar kartu kuliah pengganti | teks primary 5,66 : 1 |
| `--color-on-primary` | #FFFFFF | Teks pada tombol/badge primary | 6,63 : 1 |
| `--color-text` | #1C2230 | Judul dan isi | 15,9 : 1 (surface) |
| `--color-muted` | #5D6678 | Teks bantu, caption | 5,39 : 1 (bg) |
| `--color-bg` / `--color-surface` | #F6F7FB / #FFFFFF | Latar halaman / kartu dan panel | – |
| `--color-border` | #D5D9E4 | Garis kartu, field | – |
| `--color-success` / `-bg` | #1E7E34 / #E6F4EA | Pesan sukses, badge selesai | 4,52 : 1 |
| `--color-warning` / `-bg` | #B54708 / #FFF7E6 | Konfirmasi tanggal lewat/libur | 5,09 : 1 |
| `--color-danger` / `-bg` | #B42318 / #FDECEA | Error validasi | 6,57 : 1 |

## Tipografi
Font: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` (tanpa unduhan font agar cepat dan tidak ada berkas aset).
| Token | Ukuran | Penggunaan |
|---|---|---|
| `--fs-h1` | 1,75 rem (1,4 rem di ≤640 px) | Judul halaman |
| `--fs-h2` | 1,25 rem | Judul panel/kartu besar |
| `--fs-h3` | 1 rem | Judul hari pada kalender |
| `--fs-body` | 0,9375 rem | Isi |
| `--fs-label` | 0,8125 rem (tebal 700) | Label field, teks kartu |
| `--fs-caption` | 0,75 rem | Teks bantu, keterangan |

## Jarak, radius, bayangan, ukuran
| Token | Nilai | Penggunaan |
|---|---|---|
| `--sp-1` … `--sp-8` | 4, 8, 12, 16, 24, 32 px | Padding, gap, margin |
| `--radius-sm/md/lg/pill` | 6 / 8 / 12 px / 999 px | Badge kecil / tombol dan field / panel / pill |
| `--shadow-card` | 0 1px 2px rgba(20,30,60,.08) | Kartu kelas |
| `--tap` | 44 px | Tinggi minimum tombol, field, dan baris tugas (target sentuh) |
| `--container` | 1180 px | Lebar maksimum konten |

## Breakpoint
| Lebar | Perilaku |
|---|---|
| > 820 px | Kalender 6 kolom + panel tugas di kanan |
| ≤ 820 px | Grid menjadi satu kolom, navigasi turun ke baris kedua, form satu kolom |
| ≤ 640 px | Ukuran judul diperkecil |

## Aturan pakai
1. Nilai warna, jarak, radius, dan ukuran teks hanya boleh ditulis lewat `var(--token)`.
2. Warna tidak pernah menjadi satu-satunya pembeda: kuliah pengganti memakai badge teks + garis putus + info "semula"; tugas selesai memakai centang + coret.
3. Menambah token baru dicatat pada berkas ini terlebih dahulu.
