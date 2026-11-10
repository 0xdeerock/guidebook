<script setup>
import { computed } from "vue";
import { useData, withBase } from "vitepress";

const { frontmatter } = useData();
const names = { instagram: "Instagram", tiktok: "TikTok", youtube: "YouTube" };
const links = computed(() => Object.entries(frontmatter.value.links ?? {}).filter(([, url]) => url));
// YAML reads an unquoted 2026-11-08 as a date, which reaches the page as an ISO timestamp.
const date = (d) => (d ? new Date(`${String(d instanceof Date ? d.toISOString() : d).slice(0, 10)}T12:00:00Z`).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "");
</script>

<template>
  <div v-if="frontmatter.video" class="guide-meta">
    <p class="guide-tag">
      <span>video {{ frontmatter.video }}</span>
      <span v-if="frontmatter.tool">{{ frontmatter.tool }}</span>
      <span v-if="frontmatter.dicek">dicek {{ date(frontmatter.dicek) }}</span>
    </p>
    <div v-if="links.length || frontmatter.pdf" class="guide-actions">
      <a v-for="[platform, url] in links" :key="platform" :href="url" target="_blank" rel="noopener">Tonton di {{ names[platform] ?? platform }}</a>
      <a v-if="frontmatter.pdf" :href="withBase(frontmatter.pdf)" download>Unduh PDF</a>
    </div>
  </div>
</template>
