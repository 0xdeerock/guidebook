# Panduan Deerock

Panduan tertulis untuk video @0xdeerock (IG, TikTok, YouTube): prompt yang bisa di-copy, link tool,
versi yang dipakai, dan langkah lengkap. Dibangun dengan VitePress dan diterbitkan ke GitHub Pages
oleh `.github/workflows/deploy.yml` setiap ada push ke `main`.

Folder ini sumbernya ada di repo produksi (`guides/`) dan diterbitkan ke repo publik terpisah, jadi
jangan memakai link relatif ke luar folder ini.

## Menambah panduan

1. Buat satu file Markdown di root folder ini. **Nama filenya adalah alamat pendeknya**: `notulen.md`
   jadi `/notulen`. Pilih satu kata yang gampang diucapkan, karena alamat ini yang disebut di video dan
   dikirim lewat DM.
2. Isi front matter:

   ```yaml
   ---
   title: Judul lengkap panduan
   short: Judul pendek untuk sidebar
   description: Satu kalimat untuk hasil pencarian dan preview link
   video: "005"            # nomor video; halaman tanpa ini tidak masuk daftar
   tool: Nama tool
   dicek: 2026-11-08       # tanggal langkah dan link terakhir dicek
   tayang: 2026-11-09
   pdf: /pdf/<slug>.pdf    # opsional, file di public/pdf/
   links:                  # link posting, diisi setelah tayang
     instagram:
     tiktok:
     youtube:
   ---
   ```

3. Tulis isinya dari `guide.md` di folder produksi video. Prompt ditaruh di blok ` ```text ` supaya
   ada tombol copy. Catatan penting pakai `::: tip` atau `::: warning`.
4. Cek lokal: `npm install`, lalu `npm run dev`.

Kalau tampilan tool berubah, perbarui panduannya dan tanggal `dicek`, bukan videonya.
