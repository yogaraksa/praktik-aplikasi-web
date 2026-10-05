# Keputusan Desain – EduSync (Pertemuan 3)

Nama: Muhammad Raihandhika Yogaraksa · NIM: 24051130045 · Kelas: TI-J 2024

| Keputusan | Dasar Persona/User Story | Alternatif | Alasan Dipilih | Perlu Diuji Lagi? |
|---|---|---|---|---|
| Kuliah pengganti ditandai badge teks "⇄ PENGGANTI" + garis putus + info "semula", slot lama diberi bingkai kosong | Persona Dhika (takut salah ruangan); US-02 | Hanya warna berbeda | Tidak bergantung pada warna; kesalahan ruangan adalah masalah utama di Problem Statement | Ya – apakah penguji melihat badge dalam 5 detik |
| Mobile memakai strip hari + agenda harian, bukan grid bulanan | Asumsi persona Dhika (ponsel di kampus); US-01 | Grid bulanan penuh | Satu kolom dan target sentuh besar; grid bulanan terlalu padat di 375 px | Ya – asumsi P2 belum tervalidasi |
| Tombol "+ Tambah Tugas" selalu terlihat (header desktop, FAB mobile) | US-03 | Tombol hanya di halaman Tugas Saya | Jalur singkat ke tindakan utama; mengurangi langkah | Tidak |
| Centang tugas langsung di kalender dan panel tugas | US-04; persona Dhika | Halaman daftar tugas terpisah | Sesuai visi produk: pelacakan di atas kalender | Ya – ukuran target sentuh di ponsel |
| Validasi tenggat kosong inline + dialog konfirmasi tanggal lewat | AC US-03 | Mengizinkan tenggat kosong | Mencegah tugas tak terplot di kalender | Tidak |
| Form Kelola Kuliah Pengganti dilengkapi pratinjau penimpaan | Persona Marshal; US-06 (AC-06.1) | Form tanpa pratinjau | Komti melihat dampak sebelum publikasi; mengurangi salah input | Ya |
| Dialog konfirmasi untuk tanggal libur/bentrok | AC US-06 | Menolak langsung | Komti tetap berwenang; hanya diberi peringatan | Tidak |
| Peran Komti ditentukan saat masuk (centang + kode verifikasi); menu Kelola disembunyikan dan URL diproteksi dengan 403 | Persona Marshal (asumsi role authorization); AC-06.3 | Semua mahasiswa dapat mengubah jadwal | Mencegah manipulasi jadwal | Ya – apakah kode dosen/prodi cukup |
| Detail kelas berupa modal (desktop) / bottom sheet (mobile), bukan halaman terpisah | US-01, US-02 | Halaman detail sendiri | Prinsip modul: konten yang dapat berupa state tidak dijadikan halaman | Tidak |
| Rincian tugas berupa teks + tenggat, tanpa unggah berkas | Asumsi refleksi P2 | Unggah berkas panduan | Cakupan pertemuan 3 tetap kecil | Ya |
| Wireframe abu-abu dengan satu warna aksen biru | Aturan wireframe low-fidelity | Warna penuh | Fokus pada struktur dan hierarki | Tidak |
