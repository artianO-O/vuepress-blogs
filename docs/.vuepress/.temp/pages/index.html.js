import comp from "/Users/atian/Desktop/2025/vuepress-blogs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"欢迎来到我的博客\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1753688387000,\"contributors\":[{\"name\":\"atian\",\"username\":\"atian\",\"email\":\"atian@micous.com\",\"commits\":2,\"url\":\"https://github.com/atian\"}],\"changelog\":[{\"hash\":\"e786a07e7d86ccc871646f50c3453d026f021b04\",\"time\":1753688387000,\"email\":\"atian@micous.com\",\"author\":\"atian\",\"message\":\"feat: 完善博客首页和配置，支持中文内容及导航\"},{\"hash\":\"6cba7a936d780960278364aaddbea27aeed181a7\",\"time\":1753673086000,\"email\":\"atian@micous.com\",\"author\":\"atian\",\"message\":\"feat:初始化博客\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
