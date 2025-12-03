## 部署到 Cloudflare Pages（推荐方案）

本项目是一个基于 **Vite + React + TypeScript** 的纯前端静态站，最简单稳定的部署方式是使用 **Cloudflare Pages**。

---

## 一、前置条件

- 已有 Cloudflare 账号
- 代码在本地可正常运行：`npm install && npm run dev`
- 代码已托管到 Git 仓库（推荐 GitHub）

> 说明：部署时 **不要把 `.env.local` 等包含密钥的文件提交到 Git**。

---

## 二、准备 Git 仓库

如果你已经有远程仓库（GitHub 等），可以直接跳过本节。

在项目根目录执行（按需替换为自己的仓库地址和分支名）：

```bash
git init
git remote add origin git@github.com:yourname/high-slope-society.git
git add .
git commit -m "init high slope society"
git push -u origin main
```

确认 `.gitignore` 中已经包含：

- `node_modules/`
- `dist/`
- `.env`
- `.env.*`

这样可以避免依赖和私密配置被推送到远程。

---

## 三、在 Cloudflare Pages 创建项目

1. 登录 Cloudflare 控制台。
2. 左侧菜单选择 **“Pages”**。
3. 点击 **“Create a project”**。
4. 选择 **“Connect to Git”**。
5. 选择你刚才的 GitHub 仓库（例如 `high-slope-society`），确认授权。

---

## 四、配置构建参数

在创建 Pages 项目时，按下面设置：

- **Framework preset**：选择 `Vite`（如果没有，选 “None” 也可以）
- **Build command**：`npm run build`
- **Build output directory**：`dist`
- 其他保持默认，点击 **“Save and Deploy”**。

Cloudflare 会自动：

1. 拉取你的 Git 仓库代码
2. 安装依赖（`npm install`）
3. 运行 `npm run build` 生成 `dist`
4. 把 `dist` 部署到 Cloudflare Pages 的全球 CDN

首次构建完成后，会得到一个形如：

- `https://your-project-name.pages.dev`

的访问地址，在中国大陆通常会比 Google Cloud Run 快不少。

---

## 五、配置环境变量（如需 Gemini Key）

当前仓库中：

- `vite.config.ts` 使用 `loadEnv` 读取 `GEMINI_API_KEY`
- 并注入到构建时常量：
  - `process.env.API_KEY`
  - `process.env.GEMINI_API_KEY`

如果你后续需要在代码中真正使用 Gemini API：

1. 打开 Cloudflare Pages 项目。
2. 进入 **Settings → Environment variables**。
3. 添加变量：

   - 名称：`GEMINI_API_KEY`
   - 值：你的真实 Gemini API Key

4. 保存后重新部署（或等待下一次 Git 提交自动触发部署）。

这样密钥只存在于 Cloudflare 的环境配置中，不会出现在代码仓库里。

---

## 六、绑定自定义域名（可选）

如果你有自己的域名（例如 `slope.yourdomain.com`）：

1. 在 Cloudflare 中把该域名接入（添加为站点）。
2. 在 **DNS** 面板中添加一条 **CNAME** 记录：
   - 名称（Name）：`slope`（或你想要的子域名）
   - 目标（Target）：Cloudflare Pages 提供的项目域名（例如 `your-project.pages.dev`）
   - 代理状态：启用（橙色云朵），让 Cloudflare 作为 CDN。
3. 回到 Pages 项目 → **Custom domains**：
   - 添加 `slope.yourdomain.com`
   - 按向导完成验证和绑定。

之后即可通过自己的域名访问站点。

---

## 七、常见检查清单

在正式分享链接前，建议检查：

- [ ] `npm run build` 在本地可以成功通过
- [ ] `.env.local`、`.env.*` 没有被提交到 Git 仓库
- [ ] Cloudflare Pages 构建日志中没有暴露任何敏感信息
- [ ] 页面在 `https://xxx.pages.dev` 或自定义域名上可以正常打开，没有白屏或 404

如需进一步优化中国大陆访问速度，可以考虑：

- 把 Google Fonts、Tailwind CDN 等外链替换为本地构建或国内 CDN
- 把 `timelineData.ts` 中引用的 `storage.googleapis.com` 图片迁移到国内云对象存储 + CDN


