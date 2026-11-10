import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";

// Every guide is one Markdown file at the root of this folder with `video:` in its front matter;
// its file name is its short address (notulen.md → /notulen), the one said in the video and sent by DM.
const srcDir = fileURLToPath(new URL("..", import.meta.url));
const guides = readdirSync(srcDir)
  .filter((f) => f.endsWith(".md") && !["index.md", "README.md"].includes(f))
  .map((f) => {
    const head = readFileSync(`${srcDir}/${f}`, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
    const field = (k) => head.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, "m"))?.[1];
    return { link: `/${f.replace(/\.md$/, "")}`, text: field("short") ?? field("title"), video: field("video") ?? "" };
  })
  .filter((g) => g.video)
  .sort((a, b) => b.video.localeCompare(a.video));

export default defineConfig({
  lang: "id-ID",
  title: "Panduan Deerock",
  description: "Panduan tertulis video @0xdeerock: prompt yang bisa di-copy, link, dan langkah lengkap.",
  // GitHub Pages serves a project site under /<repo>/; the deploy workflow passes it in.
  base: process.env.BASE ?? "/",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["README.md"],
  head: [
    ["link", { rel: "icon", type: "image/png", href: `${process.env.BASE ?? "/"}favicon.png` }],
    ["meta", { name: "theme-color", content: "#2D1C4D" }],
  ],
  themeConfig: {
    logo: "/favicon.png",
    siteTitle: "Panduan Deerock",
    nav: [{ text: "Semua panduan", link: "/" }],
    sidebar: [{ text: "Panduan", items: guides.map(({ link, text }) => ({ link, text })) }],
    socialLinks: [
      { icon: "instagram", link: "https://www.instagram.com/0xdeerock/" },
      { icon: "tiktok", link: "https://www.tiktok.com/@0xdeerock" },
      { icon: "youtube", link: "https://www.youtube.com/@0xdeerock" },
    ],
    search: { provider: "local", options: { translations: { button: { buttonText: "Cari", buttonAriaLabel: "Cari" } } } },
    outline: { level: [2, 3], label: "Di halaman ini" },
    docFooter: { prev: "Sebelumnya", next: "Berikutnya" },
    lastUpdated: { text: "Diperbarui" },
    darkModeSwitchLabel: "Tema",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Kembali ke atas",
    footer: { message: "From hype to how. Dijelasin dalam Bahasa Indonesia.", copyright: "@0xdeerock" },
  },
});
