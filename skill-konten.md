---
title: 13 Skill Claude Gratis buat Konten IG & YouTube
short: 13 skill Claude buat konten
description: Dua paket skill Claude gratis (MIT) yang nulis dan nyiapin konten Instagram dan YouTube. Isinya apa, cara pasang di Claude Code, dan batasnya.
video: "002"
tool: Claude Code
dicek: 2026-11-10
tayang: 2026-11-08
links:
  instagram: https://www.instagram.com/reel/DfdkRxRTRbe/
  tiktok: https://www.tiktok.com/@0xdeerock/video/7705605513303739656
  youtube: https://www.youtube.com/watch?v=nEfBclp6KH4
---

# 13 Skill Claude Gratis buat Konten IG & YouTube

Ada dua paket **Claude Skills** gratis dari Jake Schincariol yang bikin Claude kerja kayak tim konten:
satu buat Instagram (13 skill), satu buat YouTube (11 skill). Skill-nya yang nulis dan nyiapin, lo
tetap yang mutusin dan posting sendiri.

| Repo | Isi | Lisensi |
| --- | --- | --- |
| [instagram-agent-skill](https://github.com/Jakeschincariol/instagram-agent-skill) | 13 skill: reel, caption, carousel, story, profil, komen, DM, plan mingguan | MIT |
| [youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) | 11 skill: naskah, judul + thumbnail, retensi, Shorts, chapter | MIT |

## Yang lo butuhin

- **Claude Code.** Claude Code tidak ada di plan Free; butuh plan berbayar (Pro ke atas). Cek di
  [claude.com/pricing](https://claude.com/pricing).
- **Python 3** buat tool kecil di dalam skill-nya (penilai hook, pengecek caption, dan lain-lain).
  Tanpa library tambahan, dan jalan di laptop lo sendiri tanpa internet. Di Windows perintahnya bisa
  `python` atau `py`, bukan `python3`.
- Skill-nya sendiri **gratis**, tanpa daftar dan tanpa API key.

## Cara pasang

### Cara paling gampang: sebagai plugin

Ketik dua baris ini di Claude Code, satu per satu.

**Instagram:**

```text
/plugin marketplace add Jakeschincariol/instagram-agent-skill
/plugin install instagram-agent
```

**YouTube:**

```text
/plugin marketplace add Jakeschincariol/youtube-agent-skill
/plugin install youtube-agent
```

Habis itu coba `/ig-reel` atau `/yt-script`. Kalau muncul, berarti sudah kepasang.

### Atau minta Claude yang masangin

Tempel ini ke Claude Code:

```text
https://github.com/Jakeschincariol/instagram-agent-skill

Install this skill, then confirm /ig-reel works.
```

### Atau salin manual

Kalau mau pegang filenya sendiri, clone repo-nya lalu salin folder skill-nya ke `~/.claude/skills/`.

Mac / Linux / Git Bash:

```bash
git clone https://github.com/Jakeschincariol/instagram-agent-skill.git
cp -r instagram-agent-skill/skills/ig-* ~/.claude/skills/
```

Windows PowerShell:

```powershell
git clone https://github.com/Jakeschincariol/instagram-agent-skill.git
New-Item -ItemType Directory -Force "$HOME\.claude\skills" | Out-Null
Copy-Item -Recurse instagram-agent-skill\skills\ig-* "$HOME\.claude\skills\"
```

Buat YouTube sama, ganti `instagram` jadi `youtube` dan `ig-*` jadi `yt-*`.

::: tip Isi voice.md dulu (10 menit)
Semua skill membaca file `voice.md` berisi gaya bicara lo. Salin `templates/voice.md` dari repo ke
`~/.claude/instagram/voice.md` (YouTube: `~/.claude/youtube/voice.md`) lalu isi, atau kasih Claude
tiga konten lo sendiri dan bilang "write my voice.md from these". Tanpa ini hasilnya generik.
:::

## Coba pertama: satu ide jadi naskah reel

Skill-nya ditulis dalam bahasa Inggris, jadi minta jawabannya dalam bahasa Indonesia:

```text
/ig-reel Ide: kenapa AI bisa halu. Penonton: pemula yang baru pakai ChatGPT. Tulis dalam bahasa Indonesia santai (gue/lo), durasi 45 detik.
```

`/ig-reel` bikin beberapa pilihan hook dari 26 formula, menilai tiap hook, lalu nulis naskah, teks
layar, dan beat sheet berwaktu. Buat YouTube, pakai `/yt-script` dengan cara yang sama.

## Isi paket Instagram (13 skill)

| Perintah | Gunanya |
| --- | --- |
| `/ig-reel` | satu ide jadi naskah reel: hook dari 26 formula + skornya, naskah, teks layar, beat sheet |
| `/ig-viral` | bedah reel yang lagi jalan di topik lo, diurutkan dari seberapa jauh dia ngalahin rata-rata akunnya sendiri |
| `/ig-caption` | caption + cek: nunjukin ±125 karakter yang kelihatan di feed sebelum "... more" |
| `/ig-carousel` | carousel: cover, teks tiap slide, file 1080×1350 |
| `/ig-story` | urutan story harian dan stiker yang dipakai |
| `/ig-profile` | nilai profil lo dari 100 (12 bagian), lalu tulis ulang yang kurang |
| `/ig-plan` | rencana seminggu: posting apa, format apa, kapan |
| `/ig-human` | merapikan draf yang terasa "AI banget" (karakter tak terlihat, tanda baca, kata klise) |
| `/ig-comment` | komentar di posting orang lain |
| `/ig-reply` | balasan komen di posting lo sendiri |
| `/ig-dm` | DM kiriman keyword, pesan pertama, ajakan kolaborasi |
| `/ig-repurpose` | satu video/podcast jadi seminggu reel dan carousel |
| `/ig-audit` | evaluasi posting yang sudah tayang |

## Isi paket YouTube (11 skill)

| Perintah | Gunanya |
| --- | --- |
| `/yt-script` | satu ide jadi naskah, hook dari 21 formula + skornya |
| `/yt-package` | judul dan thumbnail dicek sebagai satu pasangan |
| `/yt-edit` | transkrip jadi daftar potongan edit (jeda kosong, filler, take ulang) |
| `/yt-retention` | baca file ekspor retensi dari YouTube Studio: detik ke berapa penonton pergi |
| `/yt-shorts` | cari Shorts yang tersembunyi di video panjang |
| `/yt-chapters` | chapter dari transkrip, sesuai aturan YouTube |
| `/yt-seo` | deskripsi dan tag yang masih ada gunanya |
| `/yt-comment` | pilah komen dan tulis balasan, plus saran mana yang di-pin |
| `/yt-plan` | rencana seminggu sesuai jam yang lo punya |
| `/yt-viral` | video yang lagi jalan di niche lo |
| `/yt-audit` | evaluasi channel, ujungnya satu perbaikan |

## Yang wajib diperhatikan

::: warning Bukan bot auto-posting
Skill-nya cuma nulis. Semua hasilnya berupa teks siap copy, dan lo sendiri yang posting. Ini disengaja:
tool yang auto-posting, auto-komen, atau auto-DM lewat browser melanggar aturan Instagram dan bisa
bikin akun kena blokir.
:::

- **Skor hook bukan ramalan viral.** Pembuatnya mengujinya sendiri: penilai hook jago nangkep hook
  yang jelek, tapi buat membedakan konten yang meledak dan yang biasa dari kreator yang sama, hasilnya
  nyaris lempar koin (AUC 0,56; 0,50 = tebakan acak). Pakai buat buang hook yang lemah, sisanya
  percayai data retensi lo sendiri.
- **`/ig-viral` tidak scraping.** Lo yang buka browser dan lihat sekitar sepuluh akun sendiri. Skill-nya
  tidak minta password dan tidak login sebagai lo.
- **Kamus kata klise di `/ig-human` berbahasa Inggris**, jadi buat caption bahasa Indonesia gunanya
  terbatas.
- **Tanpa Claude Code** lo masih bisa tempel satu file `SKILL.md` ke awal chat Claude biasa, tapi
  tool Python-nya hilang, dan itu bagian terpenting dari `/ig-reel`, `/ig-human`, dan `/yt-script`.
- **Repo-nya belum pernah diperbarui** sejak dibuat (September 2026). Kalau ada yang beda dengan
  tampilan Instagram atau YouTube sekarang, ikuti platformnya.
