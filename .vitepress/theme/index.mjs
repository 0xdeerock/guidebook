import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import GuideMeta from "./GuideMeta.vue";
import "./style.css";

// The default theme, with each guide's video links and check date above its title.
export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { "doc-before": () => h(GuideMeta) }),
};
