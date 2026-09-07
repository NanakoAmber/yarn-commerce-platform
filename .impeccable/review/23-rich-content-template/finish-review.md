# PR #27 Impeccable finish review

- 评审日期：2026-09-06 PDT
- 评审对象：PR #27，提交 `a2c3388`
- 方向：继承现有作品优先视觉世界的窄范围 layout 精修
- 结论：`ship`

## 1. Evidence validity

本评审使用当前轮独立取得的证据，不引用历史截图，也没有把 `review-input.md` 中的主代理结论当作复核结果。

- 本地 `HEAD` 为 `a2c338841c3bc6eacd067a840004a8b75cdf24d3`，分支为 `codex/23-rich-content-template`。相对 `origin/main` 的范围是 `assets/yarn-project.css`、`snippets/yarn-project-card.liquid`、`sections/yarn-project-detail.liquid` 与对应测试，共 65 行新增、13 行删除。
- 当前轮 Chrome 打开的 URL 使用 `preview_theme_id=189737533753` 建立预览 cookie；Shopify Preview Bar 明确显示 `PR-27 Draft` 和 `Password protected`。GitHub 上 PR #27 的 `preview`、`theme-check` 均为成功。
- 1440 physical viewport 实测 `devicePixelRatio=1.25`、CSS `innerWidth=1152`；390 physical viewport 实测 CSS `innerWidth=312`。因此下文的 1440 / 390 均是 physical viewport 结论，不把 CSS 像素与物理像素混写。
- 当前轮在 `/`、`/zh`、`/en` 分别打开桌面和手机预览，并对首页与 `rain-check-tote` 详情作了 DOM/可访问树检查和原始截图目视检查。
- `git diff --check` 通过；`impeccable detect --json --scope layout` 对 3 个 UI 文件返回 `[]`；当前轮重新运行 `npm run verify`，53 / 53 测试通过，Theme Check 仅有 9 个既有 warning。
- 使用当前轮 CUA 原始截图目视复核，未持久化 PNG。截图中的 Shopify Preview Bar 是预览工具 chrome，不是 Theme UI。

有效性结论：证据能确认当前 PR-27 Draft 的真实渲染、响应式结构、三语内容和本次代码边界；唯一未能在真实内容中直接触发的是无封面状态，因为当前 9 个样例都有封面。该分支另有本轮 source、diff 与回归测试证据，见 Findings 的 P3 说明。

## 2. Direction and hierarchy

通过。

- 宽屏作品库以 341 CSS px 的 1:1 作品图片形成 3 × 3 主节奏，图片仍是最先被识别的入口；从原 4 列收为 3 列后，作品本体比说明文字更先建立视觉层级。
- 卡片阅读次序清楚：作品图 → 压在图像下缘的类别织标 → Yarn Display 标题 → muted 简介 → 细线分隔的难度 / 用时。卡片本身没有新增厚重容器、阴影或嵌套卡片。
- 暖纸背景、灰蓝细线和 muted 文字延续现有视觉世界；类别织标的浅纸面与 5 px 小圆角保持克制。珊瑚动作色没有被滥用于纯浏览信息。
- 桌面 `gap: 52px 28px` 建立清楚的纵横节奏。中文卡片同为 601 px 高，日文与英文同为 634 px 高；简介和事实区的 flex 对齐使每行落点稳定，而不是随文案长度无规则漂移。
- 三行简介的实际高度为 92 px、行高约 30.625 px；中文最长样例原内容高度 123 px、英文最长样例原内容高度 245 px，均被真实限制为三行，没有靠删减 Shopify 文案制造整齐。
- Squint test 下，桌面仍先读到 3 列作品图，再读到标题群，最后读到事实细线；手机仍先读到双列图片和粗体标题，事实值退为支持层。

方向结论：这是对既有作品优先世界的 layout 精修，没有建立新视觉语言，也没有让字段标签反客为主。

## 3. Responsive / locales / accessibility

通过。

- 1440 physical：日、中、英三语各 9 项、3 列、3 行；CSS `innerWidth=1152`，文档 `clientWidth=scrollWidth=1143`，每张卡均未出现水平或垂直内容溢出。
- 390 physical：日、中、英三语各 9 项、2 列；CSS `innerWidth=312`，文档 `clientWidth=scrollWidth=303`，每列约 126.6 CSS px。简介的计算样式为 `display:none`、实际高度为 0；事实值保持可见并且当前三语值均未撑破卡片。
- 手机每一视觉行保持同高：日文按内容为 294 / 351 / 324 px 等，中文主要为 264 px，英文为 415 / 384 / 355 px 等。不同语言允许自然增高，同一行仍对齐，后续图片节奏没有被单张长文案打散。
- 日文、中文、英文的最长标题均自然换行；没有标题截断、横向滚动或字段值越界。英文在超窄 CSS 312 下明显更高，但完整信息与双列合同都得到保留。
- 9 张当前封面均有与作品标题一致的非空 `alt`；整卡是单一可聚焦链接。事实使用 9 个 `dl` 与 15 个 `dt`，手机只是用标准 visually-hidden 技法隐藏字段名，语义仍在辅助技术树中。
- 焦点样式由 `.yp-shell :is(a, button, input, select, textarea, summary):focus-visible` 提供 2 px 灰蓝轮廓和 4 px offset；卡片链接没有嵌套交互控件。选择色、caret、数字 tabular 规则也沿用已实现的 browser-surface 规范。
- 当前计算色对比：简介对暖纸约 5.28:1，类别织标约 5.62:1，事实值约 12.35:1，均达到正文 4.5:1 的 craft floor。
- `/zh/pages/projects/rain-check-tote` 在 390 physical 下显示“教程来源”及完整的 MewoolMew / OpenAI 署名；来源区外部链接数为 0，`.yp-small` 外站阅读提示不存在，页面无水平溢出。日文和英文同一路径也分别显示本地化署名、0 个外链、0 条外站提示。

## 4. Findings（P0–P3）

### P0

无。

### P1

无。

### P2

无。

### P3

1. **超窄英文标题的密度是可接受但应保留观察。** 390 physical / CSS 312 下，带 `Internal sample` 的完整英文标题会形成约 5–7 行，首两卡高度达到 415 CSS px。它没有溢出，同行等高，图片仍先出现；在“手机双列、标题不截断”的当前合同下不应为压缩而隐藏真实标题。未来替换内部样例后，如正式标题同样冗长，可再以内容命名或字号微调处理，不阻塞本 PR。
2. **无封面 fallback 缺少真实数据目视态。** 当前 9 个 Project 的 `placeholderCount=0`，所以本轮无法用真实预览截图直接观察毛线球占位。实现证据完整：Liquid 在 `cover == blank` 时输出 `yp-card__image--placeholder` 与 `aria-hidden` 的线描毛线球 SVG，CSS 提供灰蓝占位面，回归测试锁定该分支。该项是证据覆盖限制，不是已发现的渲染缺陷，不阻塞本 PR。

## 5. Disposition

**ship**

本次窄范围 layout 合同已满足：宽屏 3 列、手机 2 列；桌面展示类别、标题、三行简介、难度与用时；手机隐藏简介并紧凑显示事实值；三语各 9 项且无水平溢出；`rain-check-tote` 在无外链时仍显示来源署名。没有需要 recapture、rebuild 或 fix 的 P0–P2 问题。

`ship` 仅表示 PR #27 这组 Theme 模板精修可以进入提交/评审流程，不代表发布 Theme、素材授权、正式教程可执行性、供货适配或生产验收已批准。
