export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/atian/Desktop/2025/vuepress-blogs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎来到我的博客"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/atian/Desktop/2025/vuepress-blogs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
