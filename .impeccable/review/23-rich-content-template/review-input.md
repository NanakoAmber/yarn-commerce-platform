# PR #27 模板更新验收输入

## 范围

- 检查时间：2026-09-06 19:58 PDT
- 分支：`codex/23-rich-content-template`
- 预览提交：`a2c3388`
- 未发布 Theme：`PR-27`，Theme ID `189737533753`
- 检查工具：用户真实 Chrome 会话 + Shopify Preview Bar，不是历史截图或线上主题

## 代码检查

- `npm run verify`：通过；Theme Check 仅保留基线 9 个 warning，53 / 53 测试通过。
- `git diff --check`：通过。
- Impeccable detect：0 个阻断项；既有设计令牌 advisory 不阻断。
- GitHub `theme-check` 与 `Shopify PR Preview / preview`：最终提交均通过。

## 真实预览检查

### 宽屏

- CUA 1440 physical viewport 在本机 125% 缩放下为 CSS `1152 × 720`；另外使用 1800 physical 复核 CSS `1440 × 900`。
- CSS 1440 实测：9 张作品卡、3 列、9 条简介可见，`scrollWidth == clientWidth == 1431`，0 张卡片越界。
- 首行三卡的可见宽度均为 368 CSS px，图片请求选择 370 px 资源。
- 目视检查确认：类别织标、标题、三行简介预算、细线事实行与现有暖纸视觉一致；9 张封面均实际触发延迟加载并获得非零 `naturalWidth`。

### 手机

- CUA 390 physical viewport 为 CSS `312 × 675`，用于额外超窄回归；另用 488 physical 复核精确 CSS `390 × 844`。
- CSS 390 实测：9 张作品卡、2 列、简介全部隐藏，`scrollWidth == clientWidth == 381`，0 张卡片越界，9 张封面加载成功。
- 第一轮发现难度 / 用时字段名使数字过度换行；提交 `a2c3388` 将 `dt` 保留在语义树中但视觉隐藏，事实值改为可换行紧凑行。
- 第二轮目视确认：`简单 150 分钟`、`进阶 300 分钟` 等恢复为单行；长标题自然换行，不截断 Shopify 真实文本。

### 三语与交互

- `/`：`lang=ja`，标题“作品を探す”，9 张卡，2 列，无水平溢出。
- `/zh`：`lang=zh-CN`，标题“找灵感”，9 张卡，2 列，无水平溢出。
- `/en`：`lang=en`，标题“Find inspiration”，9 张卡，2 列，无水平溢出。
- 中文搜索“雨色”后计数为 1，只显示“雨色方格托特包｜内部样例”；清除筛选后搜索值为空、计数恢复 9。

### 来源署名

- 检查 `rain-check-tote` 中 / 日 / 英三语详情。
- 三语 `.yp-source` 均可见，内容均为对应本地化的 MewoolMew / OpenAI 内部演示来源署名。
- 来源区的外部链接数为 0，外站阅读提示不再出现，三语均无水平溢出。

## 证据限制

- 本轮 CUA 原始桌面 / 手机截图已在当前验收轮次中逐张打开目视复核，不是历史证据。
- 当前 CUA 只返回截图字节，不提供安全的本地文件路径；`agent-browser` 可执行文件未安装。因此本轮无法将 PNG 持久化到该目录。Shopify Preview Bar 是预览环境 chrome，不属于 Theme UI。
