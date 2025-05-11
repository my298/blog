# 个人博客主页

这是一个响应式个人博客主页，包含多个功能模块，特别是一个学习笔记模块，点击盒子可以跳转到相应的学习笔记页面。

## 功能特点

- 响应式设计，适配各种设备屏幕
- 多个功能模块：首页、关于我、学习笔记、项目展示、联系我
- 学习笔记模块包含多个可点击盒子，点击后在新窗口打开相应链接
- 平滑滚动和导航高亮效果
- 联系表单功能

## 文件结构

- `index.html`: 主页面HTML结构
- `styles.css`: 样式表文件
- `script.js`: JavaScript交互脚本
- `README.md`: 项目说明文档

## 使用说明

1. 直接在浏览器中打开 `index.html` 文件即可查看网站
2. 修改 `index.html` 中的内容可自定义个人信息
3. 在学习笔记模块，修改 `onclick="window.open('YOUR_LINK', '_blank')"` 中的链接地址为您的实际学习笔记链接

## 自定义指南

### 添加新的学习笔记盒子

在 `index.html` 文件中，找到学习笔记部分，按照以下格式添加新的盒子：

```html
<div class="learning-box" onclick="window.open('YOUR_LINK', '_blank')">
    <div class="box-icon"><i class="fas fa-ICON_NAME"></i></div>
    <h3>标题</h3>
    <p>描述文字</p>
</div>
```

将 `YOUR_LINK` 替换为您的笔记链接，将 `ICON_NAME` 替换为适合的图标名称（基于Font Awesome图标库）。

### 修改样式

您可以在 `styles.css` 文件中修改颜色、字体等样式：

- 主色调: `#3498db`
- 深色调: `#2c3e50`
- 背景色: `#f8f9fa`和`#f1f1f1`

### 添加新模块

要添加新的功能模块，请在 `index.html` 中添加新的 `<section>` 部分，并在导航菜单中添加对应的链接。

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (原生) 