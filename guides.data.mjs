import { createContentLoader } from "vitepress";

// The guides for the home page list, newest video first.
export default createContentLoader("*.md", {
  transform: (pages) =>
    pages
      .filter((p) => p.frontmatter.video)
      .sort((a, b) => String(b.frontmatter.video).localeCompare(String(a.frontmatter.video)))
      .map((p) => ({ url: p.url, title: p.frontmatter.title, video: p.frontmatter.video, tool: p.frontmatter.tool ?? "", tayang: p.frontmatter.tayang ?? "" })),
});
