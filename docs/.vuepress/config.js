import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  bundler: viteBundler(),
  lang: "zh-CN",
  title: "我的博客",
  description: "VuePress博客",

  // 如果您的仓库名不是 vuepress-blogs，请修改这里的base路径
  // 例如：如果仓库名是 my-blog，则设置为 '/my-blog/'
  base: "/vuepress-blogs/",

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
