---
title: Rekaman Rapat 1 Jam Jadi Notulen dalam 2 Menit
short: Rekaman rapat jadi notulen
description: Ubah rekaman rapat atau kuliah jadi notulen dan tabel tugas lengkap dengan kutipan transkrip pakai Gemini Notebook. Prompt copy-paste dan 4 langkahnya.
video: "003"
tool: Gemini Notebook
dicek: 2026-11-08
tayang: 2026-11-09
pdf: /pdf/notulen.pdf
links:
  instagram: https://www.instagram.com/reel/DfgLeXszYsf/
  tiktok: https://www.tiktok.com/@0xdeerock/video/7705982052398599442
  youtube: https://www.youtube.com/watch?v=HHpVlQ9xiM0
---

# Rekaman Rapat 1 Jam Jadi Notulen dalam 2 Menit

Malas dengerin ulang rekaman rapat atau kuliah sejam cuma buat nyari "tadi kesimpulannya apa, dan gue
disuruh ngapain?"

Dengan **Gemini Notebook** (nama baru **NotebookLM** sejak Juli 2026), lo bisa masukin rekaman suara
dari HP bareng slide PDF-nya, lalu minta AI bikinin tabel keputusan dan daftar tugas lengkap dengan
rujukan ke kalimat aslinya.

## Yang lo butuhin

- **Tool:** Gemini Notebook, [notebook.google.com](https://notebook.google.com)
- **Biaya:** gratis. Akun Google biasa dapat jatah sampai 50 sumber per notebook, maksimal 200 MB per file.
  - *Buat mahasiswa:* mahasiswa aktif di Indonesia bisa klaim **Google AI Plus gratis 12 bulan** lewat
    [gemini.google/id/students](https://gemini.google/id/students) (verifikasi pakai email kampus `.ac.id` atau KTM).
- **File sumber:** rekaman suara `.m4a`, `.mp3`, atau `.wav`. Rekaman 1 jam biasanya cuma 30–60 MB,
  jadi aman di bawah batas 200 MB.

## 4 langkah

### 1. Rekam pakai perekam suara bawaan HP

1. Saat rapat atau kuliah mulai, buka perekam suara bawaan HP (Voice Memos di iPhone, Perekam Suara di Android).
2. Taruh HP agak dekat pembicara supaya suaranya jelas.
3. Simpan rekamannya (biasanya otomatis `.m4a` atau `.mp3`).

### 2. Unggah ke Gemini Notebook bareng PDF materinya

1. Buka [notebook.google.com](https://notebook.google.com) di laptop atau HP, lalu klik **New Notebook**.
2. Di jendela **Add sources**, pilih **Upload files** lalu masukkan file rekaman tadi.
3. Kalau ada slide atau dokumen pendukung, unggah juga **PDF** atau **Google Slides**-nya ke notebook yang sama.
4. Tunggu sebentar sampai rekamannya selesai disalin jadi transkrip.

### 3. Minta tabel keputusan dan pembagian tugas

Jangan cuma ketik *"rangkumin dong"*. Pakai prompt ini supaya hasilnya langsung rapi dan siap dibagikan
ke grup kerja atau kelas. Klik ikon copy di pojok kanan kotaknya.

**Untuk rapat kerja atau organisasi:**

```text
Dari rekaman dan dokumen ini, buatkan notulen ringkas dengan format:
1. 3–5 poin kesimpulan atau keputusan terpenting.
2. Tabel Action Items dengan kolom: Nama/PIC, Tugas yang harus dikerjakan, Tenggat Waktu (Deadline), dan Catatan.
3. Daftar pertanyaan atau masalah yang belum terjawab di rapat ini.
Gunakan bahasa Indonesia yang lugas dan sertakan kutipan sumbernya.
```

**Untuk rekaman kuliah:**

```text
Dari rekaman dosen dan slide materi ini:
1. Rangkum konsep inti yang paling sering ditekankan dosen.
2. Buat tabel perbandingan istilah penting beserta contohnya.
3. Buat 5 soal latihan pilihan ganda beserta pembahasan singkatnya untuk persiapan ujian.
```

### 4. Klik nomor kutipan buat cek kalimat aslinya

1. Di setiap poin dan baris tabel ada angka kecil seperti `[1]`, `[2]`, `[3]`.
2. **Klik angkanya**: panel kiri langsung lompat dan menyorot kalimat persis di transkrip atau halaman
   PDF tempat hal itu dibicarakan.
3. Kalau sudah pas, klik **Copy** atau simpan ke **Notes** untuk ditempel ke grup WhatsApp, Notion, atau Google Docs.

::: tip Sebut nama orangnya waktu bagi tugas
Transkripnya nggak tahu siapa yang ngomong. Kolom PIC cuma keisi kalau namanya diucapin di rapat,
misalnya "Rina, tolong kirim laporan Jumat ya".
:::

## Yang wajib diperhatikan

::: warning Izin dulu sebelum merekam
Untuk rapat kantor atau klien, pastikan semua peserta tahu rapatnya direkam. Jangan pernah mengunggah
rekaman rahasia perusahaan (NDA) ke akun pribadi.
:::

- **Suara bising bikin nama dan angka meleset.** Kalau ruangan ramai atau HP terlalu jauh, transkrip bisa
  salah dengar angka ("lima belas juta" jadi "lima puluh juta"). Selalu klik nomor kutipan di bagian
  angka dan tenggat waktu untuk memastikan.
- **Beda dengan ChatGPT biasa:** Gemini Notebook **hanya menjawab dari file yang lo masukkan**
  (*source-grounded*), jadi dia nggak ngarang di luar bahan rapat atau kuliah lo.
