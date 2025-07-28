#!/usr/bin/env node

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = 8080;
const DIST_DIR = path.join(__dirname, "docs", ".vuepress", "dist");

// 简单的静态文件服务器
const server = http.createServer((req, res) => {
  let filePath = url.parse(req.url).pathname;

  // 处理根路径
  if (filePath === "/") {
    filePath = "/index.html";
  }

  // 移除 /vuepress-blogs 前缀以匹配本地文件结构
  if (filePath.startsWith("/vuepress-blogs/")) {
    filePath = filePath.replace("/vuepress-blogs/", "/");
  }

  const fullPath = path.join(DIST_DIR, filePath);

  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("File not found");
    return;
  }

  // 获取文件扩展名
  const ext = path.extname(fullPath);
  const contentType =
    {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".ico": "image/x-icon",
    }[ext] || "text/plain";

  // 读取并返回文件
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading file");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 本地预览服务器已启动！`);
  console.log(`📁 构建目录: ${DIST_DIR}`);
  console.log(`🌐 访问地址: http://localhost:${PORT}`);
  console.log(`📝 提示: 按 Ctrl+C 停止服务器`);
});

// 优雅关闭
process.on("SIGINT", () => {
  console.log("\n👋 服务器已停止");
  process.exit(0);
});
