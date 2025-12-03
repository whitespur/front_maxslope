## 技术概览

本项目 `High Slope Society` 是一个基于 **Vite + React + TypeScript** 的前端单页应用，用于展示一组「高斜率」人物 / 公司目录，并附带一个文明时间轴子应用。

- **构建工具**: Vite 6（`vite.config.ts`）
- **语言与框架**: React 19 + TypeScript
- **样式方案**: 通过 `index.html` 引入 CDN 版 TailwindCSS，并在 React 组件中直接使用 Tailwind 原子类
- **依赖管理**: npm（`package.json`）

运行方式（见 `README.md`）：
- `npm install`
- 在 `.env.local` 中设置 `GEMINI_API_KEY`（如需调用）
- `npm run dev`，默认端口为 3000，如被占用会自动切换（示例中为 3001）

## 目录结构

- `index.html`：Vite 入口 HTML 文件，挂载点 `#root`，加载 Tailwind 与 React 应用入口脚本
- `index.tsx`：React 应用入口，创建根节点并渲染 `App`
- `App.tsx`：顶层组件，负责在「Slope 列表」与「Timeline 时间轴」两个子应用之间切换，并统一设置 Dark 模式
- `components/`
  - `SlopeApp.tsx`：主列表应用，支持斜率分类筛选与搜索
  - `TimelineApp.tsx`：文明长图时间轴应用，带章节筛选与详情视图
  - `EntityCard.tsx`：每个实体卡片的展示组件
  - `FilterBar.tsx`：顶部斜率标签筛选条组件
- `constants.ts`：实体数据与多语言文案常量（中英双语）
- `timelineData.ts`：文明时间轴的章节数据
- `types.ts`：`Entity`、`TimelineChapter` 等类型定义
- `vite.config.ts`：Vite 配置，包含 React 插件、别名与环境变量注入
- `metadata.json`：给 AI Studio/宿主平台使用的应用元数据

## 运行时架构

### React 入口与挂载

- 在 `index.html` 中定义根节点：
  - `<div id="root"></div>`
- `index.tsx` 中：
  - 通过 `document.getElementById('root')` 获取根元素，若不存在则抛异常
  - 使用 `ReactDOM.createRoot` 创建 React 18/19 并发根并渲染 `<App />`

### 顶层应用切换（`App.tsx`）

- 使用 `useState<'slope' | 'timeline'>` 保存当前子应用类型
- 使用 `useEffect` 在首次渲染时：
  - 强制给 `document.documentElement` 添加 `dark` class
  - 设置 `document.body.style.backgroundColor = '#020617'`
- 通过 `currentApp` 判断渲染：
  - `'slope'`：渲染 `<SlopeApp onSwitchApp={() => setCurrentApp('timeline')} />`
  - `'timeline'`：渲染 `<TimelineApp onSwitchApp={() => setCurrentApp('slope')} />`

### Slope 列表应用（`SlopeApp.tsx`）

- **状态管理**：
  - `selectedSlope: string | null`：当前选中的斜率标签
  - `searchQuery: string`：搜索关键字
  - `lang: 'en' | 'zh'`：当前语言
- **数据源与翻译**：
  - 从 `constants.ts` 中引入：
    - `ENTITIES`：实体列表（人物/公司）
    - `UNIQUE_SLOPES`：从所有实体中提取的去重斜率标签
    - `TRANSLATIONS`：中英双语 UI 文案
- **过滤逻辑**（使用 `useMemo` 优化）：
  - 当 `selectedSlope` 不为空时，仅保留 `entity.slope` 中包含该值的实体
  - 搜索字段会匹配：
    - `name`
    - `intro_zh`
    - `intro_en`
    - `slope` 数组中任意元素
  - 文本统一转为小写后模糊匹配
- **UI 结构**：
  - 顶部右侧：应用切换按钮（切到 Timeline）与语言切换按钮（中/英）
  - Header：标题、子标题、描述，采用渐变背景与噪声纹理
  - 搜索框：中心搜索输入框，绑定 `searchQuery`
  - 斜率筛选条：使用 `FilterBar`，横向滚动的 chips
  - 内容区：
    - 有结果：网格展示 `EntityCard` 列表
    - 无结果：展示空状态说明与重置按钮
  - Footer：当前年份 + 对应语言的版权文案

### 斜率筛选条（`FilterBar.tsx`）

- Props：
  - `slopes: string[]`：全部可选斜率标签
  - `selectedSlope: string | null`：当前选中值
  - `onSelectSlope(slope: string | null)`：选择回调
  - `allLabel: string`：「全部」按钮文案（随语言变化）
- 行为：
  - 左侧「全部」按钮：清空筛选（`onSelectSlope(null)`）
  - 中间每个 `slope` 按钮：
    - 若当前已选中该 `slope`，再点击会清空（实现 toggle）
    - 使用不同样式区分选中/未选中状态
  - 在移动端，当存在选中项时，会在右侧显示一个 `X` 图标，用于快速清空筛选

### 实体卡片（`EntityCard.tsx`）

- Props：
  - `entity: Entity`
  - `onSlopeClick(slope: string)`：点击斜率标签时调用
  - `lang: 'en' | 'zh'`
- 展示内容：
  - 名称与类型（公司会有 `Co` 标记）
  - 简介：根据 `lang` 在 `intro_zh` / `intro_en` 中切换
  - 斜率标签：一排可点击的 chips，点击会调用 `onSlopeClick`，并且阻止事件向上冒泡
  - 底部链接：根据实体是否提供对应字段展示：
    - `blog` → Web
    - `youtube` → YT
    - `github` → Code
    - `podcast` → Pod
    - `rss` → RSS 图标
  - 右上角主动作图标：优先展示 Twitter，其次 Blog

### 文明时间轴应用（`TimelineApp.tsx`）

- **数据来源**：`TIMELINE_CHAPTERS`（`timelineData.ts`）
  - 每个章节包含：
    - `id`：1–40
    - `title`：章标题
    - `description`：分号分句的长描述
    - `imageUrl`：远程长图 URL
    - `category`：`'universe' | 'life' | 'civilization' | 'tech'`
- **状态管理**：
  - `activeChapterId: number | null`：当前打开的章节详情（非空时进入详情页）
  - `selectedCategory: string | null`：当前选中的主题分类
  - 滚动容器 `ref`：用于点击「开始探索」或主题卡时滚动到章节网格
- **视图切换**：
  - 当 `activeChapterId` 不为空时：
    - 显示「章节详情视图」：
      - 顶部固定 Header：返回按钮、当前章节信息、左右章节导航
      - 中间：可横向滚动的长图区域（若无图则显示占位提示）
      - 下方：以 `description.split('；')` 分句，渲染为多段段落文字
  - 当 `activeChapterId` 为空时：
    - 显示「总览仪表盘视图」：
      - Hero 区：大标题「從宇宙到 AI 時代」、CTA 按钮「開始探索」
      - 四个主题卡片（`ThemeCard`）：
        - 宇宙與地球 / 生命演化 / 人類文明 / 現代科技
        - 点击后设置对应 `selectedCategory` 并滚动到章节网格
      - 章节网格：
        - 根据 `selectedCategory` 对 `TIMELINE_CHAPTERS` 进行过滤（使用 `useMemo`）
        - 网格每项点击后设置 `activeChapterId` 进入详情视图

## 类型与数据层

- `types.ts` 中定义：
  - `Entity`：描述人物/公司/团队的结构
  - `TimelineChapter`：描述时间轴章节
  - `SlopeCategory`：斜率类别别名（目前为字符串）
- `constants.ts`：
  - `TRANSLATIONS`：中英双语 UI 文案字典
  - `ENTITIES`：主要业务数据，包含多种斜率标签与外链信息
  - `UNIQUE_SLOPES`：通过 `new Set(ENTITIES.flatMap(e => e.slope))` 生成，供筛选条使用
- `timelineData.ts`：
  - `TIMELINE_CHAPTERS`：线性数组，id 递增，按注释中的范围划分为四大类

## 构建与配置（`vite.config.ts`）

- 使用 `@vitejs/plugin-react` 支持 React JSX 与 Fast Refresh
- `server` 配置：
  - `port: 3000`，如被占用会自动尝试其他端口（示例为 3001）
  - `host: '0.0.0.0'` 方便局域网访问
- 环境变量注入：
  - 通过 `loadEnv` 读取 `.env.local` 中的 `GEMINI_API_KEY`
  - 注入到构建时常量：
    - `process.env.API_KEY`
    - `process.env.GEMINI_API_KEY`
- 路径别名：
  - `@` → 项目根目录

## 白屏问题分析

### 现象

- 终端显示 Vite Dev Server 已在 `http://localhost:3001/` 启动
- 浏览器访问该地址时页面白屏
- 代码中 `index.tsx` 已正确调用 `ReactDOM.createRoot` 渲染 `<App />`

### 根因

- Vite 默认不会自动发现入口 TSX 文件，必须在 `index.html` 中通过 `<script type="module" src="/xxx.tsx">` 显式引入。
- 当前 `index.html` 只定义了根节点 `<div id="root"></div>` 和 Tailwind 配置，但 **没有任何入口脚本标签**。
- 因此浏览器加载到的只是一个空的 HTML + CSS，React 代码从未被执行，导致白屏且控制台无明显错误。

## 白屏修复方案

### 修改点

- 在 `index.html` 的 `<body>` 中添加 React 入口脚本标签，让浏览器加载并执行 `index.tsx`：
  - `<script type="module" src="/index.tsx"></script>`

### 实现步骤

1. 打开 `index.html`
2. 在 `</body>` 关闭标签前增加一行：
   ```html
   <script type="module" src="/index.tsx"></script>
   ```
3. 保存后刷新 `http://localhost:3001/`：
   - 应能看到深色背景的 High Slope Society 列表应用
   - 右上角可切换到 Timeline 文明长图应用

### 风险与兼容性说明

- `index.tsx` 位于项目根目录，Vite 会以根路径 `/index.tsx` 正常解析并热更新。
- 当前 importmap 中的 React CDN 引用主要用于 AI Studio / Edge Runtime 环境，Vite 开发时会优先使用本地依赖，不会与之冲突。
- 该改动仅增加入口脚本标签，不影响 Tailwind、环境变量或其他 Vite 配置。


