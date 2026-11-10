---
title: Semua panduan
aside: false
prev: false
next: false
---

<script setup>
import { withBase } from "vitepress";
import { data as guides } from "./guides.data.mjs";
</script>

# Panduan Deerock

<div class="home-intro">
  <img :src="withBase('/deerock.png')" alt="Deerock">
  <p>From hype to how. Panduan tertulis dari video <a href="https://www.instagram.com/0xdeerock/">@0xdeerock</a>: prompt yang tinggal di-copy, link tool-nya, dan langkah lengkapnya.</p>
</div>

<ul class="guide-list">
  <li v-for="g in guides" :key="g.url">
    <a :href="withBase(g.url)">
      <strong>{{ g.title }}</strong>
      <small>video {{ g.video }}<template v-if="g.tool"> · {{ g.tool }}</template></small>
    </a>
  </li>
</ul>

Panduan diperbarui kalau tampilan tool-nya berubah, jadi isinya bisa lebih baru dari videonya.
