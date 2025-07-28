# 自定义域名配置指南

## 概述

本指南将帮助您为 VuePress 博客配置自定义域名，而不是使用默认的 `artiano-o.github.io` 域名。

## 配置步骤

### 1. 准备域名

首先，您需要拥有一个域名。您可以从以下域名注册商购买：

- 阿里云万网
- 腾讯云
- 华为云
- GoDaddy
- Namecheap
- 等等

### 2. 修改 VuePress 配置

已经为您修改了 `docs/.vuepress/config.ts` 文件：

```typescript
export default defineUserConfig({
  // 自定义域名配置
  base: "/", // 使用根路径，适合自定义域名
  // ...
});
```

### 3. 配置 CNAME 文件

编辑项目根目录下的 `CNAME` 文件，将 `your-domain.com` 替换为您的实际域名：

```
# 示例：
example.com
# 或者
www.example.com
```

### 4. 配置 DNS 记录

在您的域名注册商或 DNS 提供商处，添加以下 DNS 记录：

#### 方法一：使用 A 记录（推荐）

| 类型 | 名称 | 值              |
| ---- | ---- | --------------- |
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

#### 方法二：使用 CNAME 记录

| 类型  | 名称 | 值                  |
| ----- | ---- | ------------------- |
| CNAME | @    | artiano-o.github.io |

### 5. 在 GitHub 中配置

1. 打开您的 GitHub 仓库：`https://github.com/artiano-o/vuepress-blogs`
2. 点击 **Settings** 标签页
3. 在左侧菜单中找到 **Pages**
4. 在 **Custom domain** 部分：
   - 输入您的域名（例如：`example.com`）
   - 勾选 **Enforce HTTPS**（推荐）
   - 点击 **Save**

### 6. 提交更改

```bash
# 添加 CNAME 文件
git add CNAME

# 提交更改
git commit -m "Add custom domain configuration"

# 推送到 GitHub
git push origin main
```

### 7. 等待 DNS 生效

DNS 更改可能需要几分钟到 48 小时才能完全生效。您可以使用以下命令检查：

```bash
# 检查 DNS 解析
nslookup your-domain.com

# 或者使用 dig 命令
dig your-domain.com
```

## 常见问题

### 1. HTTPS 证书

GitHub Pages 会自动为自定义域名提供 SSL 证书。确保在 GitHub 设置中勾选了 **Enforce HTTPS**。

### 2. www 和非 www 域名

如果您想同时支持 `example.com` 和 `www.example.com`：

1. 在 CNAME 文件中添加两个域名：

   ```
   example.com
   www.example.com
   ```

2. 在 DNS 提供商处配置相应的记录

### 3. 子域名

如果您想使用子域名（例如：`blog.example.com`）：

1. 在 CNAME 文件中使用子域名：

   ```
   blog.example.com
   ```

2. 在 DNS 提供商处添加 CNAME 记录：
   | 类型 | 名称 | 值 |
   |------|------|-----|
   | CNAME | blog | artiano-o.github.io |

### 4. 验证配置

您可以使用以下工具验证配置：

- [DNS Checker](https://dnschecker.org/)
- [What's My DNS](https://www.whatsmydns.net/)
- [MXToolbox](https://mxtoolbox.com/)

## 测试

配置完成后，您可以通过以下方式测试：

1. 访问您的自定义域名
2. 检查 HTTPS 是否正常工作
3. 验证所有页面和链接是否正常

## 故障排除

### 问题：域名无法访问

**解决方案：**

1. 检查 DNS 记录是否正确配置
2. 等待 DNS 传播（最多 48 小时）
3. 确认 GitHub Pages 设置中的域名配置

### 问题：HTTPS 不工作

**解决方案：**

1. 在 GitHub Pages 设置中勾选 **Enforce HTTPS**
2. 等待 SSL 证书生成（可能需要几分钟）

### 问题：某些页面 404 错误

**解决方案：**

1. 确认 VuePress 配置中的 `base` 路径设置正确
2. 检查 GitHub Actions 构建是否成功
3. 查看 GitHub Actions 日志中的错误信息

## 示例配置

### 完整示例

假设您的域名是 `myblog.com`：

1. **CNAME 文件内容：**

   ```
   myblog.com
   ```

2. **DNS 记录：**
   | 类型 | 名称 | 值 |
   |------|------|-----|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

3. **GitHub Pages 设置：**
   - Custom domain: `myblog.com`
   - Enforce HTTPS: ✅ 勾选

配置完成后，您的博客将可以通过 `https://myblog.com` 访问。

## 更多资源

- [GitHub Pages 自定义域名文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [VuePress 部署指南](https://v2.vuepress.vuejs.org/guide/deployment.html)
- [DNS 配置最佳实践](https://help.github.com/en/articles/troubleshooting-custom-domains)
