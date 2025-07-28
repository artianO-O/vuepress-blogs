# VuePress 博客部署到 GitHub Pages 指南

## 前置条件

1. 确保您有一个 GitHub 账户
2. 确保您的项目已经推送到 GitHub 仓库

## 部署步骤

### 1. 准备 GitHub 仓库

如果您的项目还没有推送到 GitHub，请按以下步骤操作：

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库（请替换为您的 GitHub 用户名和仓库名）
git remote add origin https://github.com/your-username/vuepress-blogs.git

# 推送到 GitHub
git push -u origin main
```

### 2. 配置 GitHub Pages

1. 打开您的 GitHub 仓库页面
2. 点击 "Settings" 标签页
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分，选择 "GitHub Actions"
5. 点击 "Save"

### 3. 修改配置（重要）

在 `docs/.vuepress/config.ts` 文件中，确保 `base` 路径与您的仓库名匹配：

```typescript
export default defineUserConfig({
  // 如果您的仓库名是 vuepress-blogs，保持这个配置
  base: "/vuepress-blogs/",

  // 如果您的仓库名是其他名称，请相应修改
  // 例如：如果仓库名是 my-blog，则设置为 '/my-blog/'
  // base: '/my-blog/',
});
```

### 4. 触发部署

推送代码到 main 分支：

```bash
git add .
git commit -m "Update blog content"
git push origin main
```

### 5. 查看部署状态

1. 在 GitHub 仓库页面，点击 "Actions" 标签页
2. 查看最新的工作流运行状态
3. 等待构建和部署完成

### 6. 访问您的网站

部署成功后，您的网站将可以通过以下地址访问：

```
https://your-username.github.io/vuepress-blogs/
```

## 故障排除

### 常见问题

1. **404 错误**：检查 `base` 路径配置是否正确
2. **构建失败**：检查 GitHub Actions 日志中的错误信息
3. **样式问题**：确保所有依赖都已正确安装

### 手动触发部署

如果需要手动触发部署：

1. 在 GitHub 仓库页面，点击 "Actions" 标签页
2. 选择 "Deploy VuePress site to Pages" 工作流
3. 点击 "Run workflow" 按钮

## 自定义域名（可选）

如果您想使用自定义域名：

1. 在仓库的 "Settings" > "Pages" 中
2. 在 "Custom domain" 部分输入您的域名
3. 在您的域名提供商处配置 DNS 记录
4. 在项目根目录创建 `CNAME` 文件，内容为您的域名

## 更新内容

每次您想要更新博客内容时：

1. 修改 `docs/` 目录下的 Markdown 文件
2. 提交并推送更改
3. GitHub Actions 会自动重新构建和部署

```bash
git add .
git commit -m "Update blog content"
git push origin main
```

## 本地测试

在推送之前，建议先在本地测试：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建测试
npm run docs:build
```

这样您就可以在 `http://localhost:8080` 查看网站效果。
