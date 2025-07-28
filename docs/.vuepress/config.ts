import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  bundler: viteBundler(),
  lang: "zh-CN",
  title: "我的博客",
  description: "VuePress博客",

  // 自定义域名配置
  // 如果使用自定义域名，设置为 '/'
  // 如果使用 GitHub Pages 默认域名，设置为 '/vuepress-blogs/'
  base: "/interview/",

  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "GitHub",
        link: "https://github.com",
      },
    ],

    // 侧边栏
    sidebar: {
      "/": [
        {
          text: "指南",
          children: ["/README.md"],
        },
      ],
    },
  }),
});
