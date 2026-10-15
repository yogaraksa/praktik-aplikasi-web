# 06 – Refleksi Individu Pertemuan 4

Nama: Muhammad Raihandhika Yogaraksa · NIM: 24051130045 · Kelas: TI-J 2024

1. **Komponen apa yang paling banyak mengurangi pengulangan kode?**
   `UI.field()`. Tiga form (Masuk, Tambah Tugas, Kelola) memakainya untuk label, input, hint, dan pesan error, sehingga validasi visual cukup ditulis sekali.
2. **Bagian prototipe mana yang berubah setelah diimplementasikan?**
   Detail kelas dari modal menjadi halaman sendiri, dan strip hari di mobile diganti kartu hari bertumpuk. Slot semula yang kosong juga dibuat otomatis dari data.
3. **Masalah responsif apa yang ditemukan dan bagaimana perbaikannya?**
   Di 390 px menu navigasi terpotong sehingga "Kelola Kuliah Pengganti" tidak terlihat, dan badge "⇄ PENGGANTI" terbelah di kolom sempit. Perbaikannya: navigasi turun ke baris kedua yang dapat digeser, dan badge diberi `white-space: nowrap`.
4. **Bagaimana design token membantu?**
   Saat uji ditemukan satu warna yang tertulis langsung (#E6F4EA). Karena semua nilai lain lewat token, cukup menambah `--color-success-bg` dan semua pemakaiannya ikut konsisten. Cara ini juga memudahkan orang lain membaca dan mengubah gaya.
5. **Apa kontribusi Anda dan bukti commit atau artefaknya?**
   Mengerjakan seluruh Pertemuan 4 secara individu: token, struktur proyek, komponen, enam halaman, uji, dan dokumentasi. Bukti: branch `feature/ui-pertemuan-4`, commit-commit pada README, hash commit: hash commit: 5af9c3e (kode) dan e7f0ea6 (dokumentasi)
