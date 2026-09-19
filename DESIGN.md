---
name: 毛线品牌
description: 从已实现首页与作品路径提取的暖纸、柔色手作界面系统；保留受保护内部原型边界
colors:
  paper: "#f7f7f5"
  surface: "#fffefa"
  ink: "#2f302f"
  muted: "#686762"
  line: "#e4dfd7"
  butter: "#f8e5a9"
  butter-action: "#f7e3a5"
  coral: "#e58b7d"
  mew-terra: "#bf5a38"
  project-row-action: "#a6472e"
  action-soft: "#fff9e9"
  action-hover: "#fff3de"
  primary-hover: "#f6dfa0"
  primary-line: "#efd68d"
  copy: "#4a4b48"
  indigo: "#426f82"
  blush-surface: "#faecea"
  blue-surface: "#edf5f7"
  mint-surface: "#edf4ee"
  cream-surface: "#fff6df"
  discovery-ink: "#303330"
  selected-paper: "#fcf0ed"
  selected-ink: "#9e5554"
  capability-blush: "#f4dfdc"
  capability-mint: "#e4eee6"
typography:
  shared-section:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "clamp(2.5rem, 2.5vw, 3.2rem)"
    fontWeight: 600
    lineHeight: 1.4
  discovery-card-title:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "1.8rem"
    fontWeight: 600
    lineHeight: 1.5
  discovery-card-title-mobile:
    fontSize: "1.5rem"
  discovery-price:
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.5
  discovery-price-mobile:
    fontSize: "1.8rem"
  shared-control:
    fontSize: "1.5rem"
  shared-meta:
    fontSize: "1.3rem"
  shell-input:
    fontSize: "16px"
  display:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "clamp(3.4rem, 4.75vw, 5.4rem)"
    fontWeight: 600
    lineHeight: 1.32
    letterSpacing: "0"
  display-mobile:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "2.6rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0"
  headline-discovery:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "clamp(2.4rem, 3.7vw, 3.2rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title-work:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "1.65rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  title-project-mobile:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "1.9rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0"
  project-yarn-title:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "2.1rem"
    fontWeight: 600
    lineHeight: 1.35
  project-yarn-title-mobile:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.35
  project-supporting-heading:
    fontSize: "1.7rem"
  project-supporting-item-title:
    fontSize: "1.55rem"
  body-zh:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0.01em"
  body-hero-mobile:
    fontSize: "1.4rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label-flow:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1.45
  label-control:
    fontSize: "1.4rem"
rounded:
  control: "3px"
  kit-label: "5px"
  filter: "11px"
  field: "12px"
  shared-field: "24px"
  work-media: "14px"
  project-yarn-image: "10px"
  project-supporting-image: "8px"
  action-wide: "15px"
  compact-paper: "16px"
  flow-paper: "18px"
  content-mobile: "20px"
  atlas: "24px"
  content: "28px"
  circle: "50%"
  pill: "999px"
spacing:
  fine: "4px"
  small: "8px"
  compact: "12px"
  control: "16px"
  content: "24px"
  section: "32px"
  wide: "48px"
components:
  button-hero:
    backgroundColor: "{colors.butter}"
    textColor: "#292a28"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-hero-hover:
    backgroundColor: "{colors.primary-hover}"
  nav-selected:
    backgroundColor: "{colors.action-soft}"
    textColor: "{colors.project-row-action}"
    rounded: "{rounded.pill}"
    padding: "10px 11px"
  field-shell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.shared-field}"
    typography: "{typography.shell-input}"
    height: "56px"
  footer-paper:
    backgroundColor: "{colors.action-soft}"
    textColor: "{colors.ink}"
  button-primary:
    backgroundColor: "{colors.butter}"
    textColor: "#2c2e2c"
    rounded: "{rounded.action-wide}"
    padding: "16px clamp(24px, 3.5vw, 52px)"
  button-primary-hover:
    backgroundColor: "#f5dda0"
  button-pill:
    backgroundColor: "{colors.butter-action}"
    textColor: "#292a28"
    rounded: "{rounded.pill}"
    padding: "0 24px"
  button-pill-hover:
    backgroundColor: "#f2d987"
  field-search:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 16px 16px 54px"
    height: "56px"
  button-favorite:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px"
    width: "44px"
    height: "44px"
  button-favorite-selected:
    backgroundColor: "{colors.action-soft}"
    textColor: "{colors.project-row-action}"
  field-filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.discovery-ink}"
    rounded: "{rounded.filter}"
    padding: "10px 13px"
  field-filter-active:
    backgroundColor: "{colors.selected-paper}"
  kit-label:
    backgroundColor: "{colors.selected-paper}"
    textColor: "#94514c"
    rounded: "{rounded.kit-label}"
    padding: "3px 6px"
  card-work-media:
    backgroundColor: "#f5f3ef"
    rounded: "{rounded.work-media}"
  card-help:
    backgroundColor: "{colors.action-soft}"
    rounded: "{rounded.compact-paper}"
    padding: "24px 30px"
  card-content:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.content}"
  card-content-mobile:
    rounded: "{rounded.content-mobile}"
---
# Design System: 毛线品牌

## 这份文档是什么

这里只记录**当前生效的设计规范**和**我们怎么做设计**。逐个 Issue 的实现过程、评审截图和当轮边界声明不再写进本文——它们完整保存在 git 历史与 `.impeccable/review/`、`.impeccable/mocks/` 中,需要考古时去那里。前言 YAML 是全站设计 token 的唯一来源,代码通过 `yarn-design-tokens.css` 消费。

**边界(一次性声明,适用于全文)**:本店仍是受密码保护的内部原型。本文描述的是已实现并复核过的界面事实,不认证生产发布、真实供货、支付配置或素材公开授权;demo 素材(含来源站水印的参考图片)仅限内部预览,发布前必须替换或取得授权。

## 我们怎么做设计:Codex 出图,Claude 写码

新页面或重构一个页面时,走这个循环:

1. **喂参考**:把参照站的整页分段截图和我们网站的现状截图作为 ImageGen 的输入参考图(只在文字里提路径不算传参)。
2. **出手机稿**:Codex(Astra)生成**一张** mobile-first 构图稿,画面文案用准确简体中文;小字视为示意,不作为文案真值。
3. **实现手机端**:Claude 照稿用真实数据实现,自动验收(`npm run verify` + 双端三语截图)。
4. **桌面返工**:Claude 用代码排出桌面草稿并截图,发回 Codex;Codex 对着草稿回**逐区修改指令 + 一张修正稿**,Claude 照单修改。桌面不单独凭空生图。
5. **归档**:构图稿、提示词、指令书存 `.impeccable/mocks/<issue>-*/`;实现后的规范变化蒸馏进本文对应小节。

生成稿是**方向**,不是像素合同:数据模型、状态、响应式、三语由实现负责保真。构图稿里出现但没有真实素材支撑的内容(逐件小图、示意评分等)不实现、不伪造。

## Creative North Star:编织图解图谱

暖白纸面承接真实织物照片,柔色面区分内容角色,炭黑文字给出阅读重心;手作插画、细线图标与线团花枝保留温度,文字与操作保持克制。深度靠浅面差和细线,不靠重阴影。

## Colors

数值以前言 token 为准,新页面默认调色板:

- **底与面**:`paper` 页面底 / `surface` 暖白面(卡片、导航、横幅)/ `line` 暖灰细线分组。
- **文字**:`ink` 标题与关键数字(价格用 `ink` + 600 字重,不设价格强调色)/ `muted` 辅助说明 / `copy` 正文。
- **动作**:`project-row-action`(行动陶土)承担链接、文字按钮、图标勾选、编号徽章文字;`action-soft`/`action-hover` 是它的浅底与悬停面;`butter` 系列承担主 CTA 胶囊(如「开始制作」)。
- **焦点**:`indigo` 灰蓝 2px 轮廓 + 4px 偏移,全站键盘焦点统一。
- 旧柔色分类面、粉色选中态等保留兼容既有组件,不是新页面默认。

**规则**:颜色只表达分类、选中和动作层级,不构成价格、热度、难度或库存的事实证明。禁止把参照站(Woobles 青绿等)的品牌色带进来。

## Typography

- **展示字**:`Yarn Display`(自托管 Noto Sans SC 子集,400/600)用于标题、导航、按钮;**正文**走系统中文字体栈,日英由语言层处理。
- 层级要点:页面一级标题 clamp 流式;分区标题 2.2rem 上下;卡片标题 1.45–1.8rem 两行截断;正文 1.4–1.5rem/1.6–1.7 行高;辅助 1.2–1.3rem。局部 surface 可有自己的字号,但**不新增全站字号阶梯**。
- 新增文案必须检查三语断行与字体回退;菜单、集合描述等运营文案的原文与译文只维护在 Shopify(Navigation / Translate & Adapt),不在 Liquid 写死。

## Layout

- **共享容器** 1320px,gutter 990+ 为 48px、750–989 为 24px、749- 为 16px。**作品详情**在容器内走 `yp-axis` 1200px 统一轴线:首屏两栏约 648/504、列距 48px,内容分区共用同一左右边界,页尾 FAQ/教程 648/504 并排;749px 以下单列顺读,顺序与获批手机稿一致。
- **间距角色** 4/8/12/16/24/32/48px;桌面主要分区间 64px。
- 手机端优先保住:标题、主图、卖点、购买入口的首屏可达,以及正文与操作净空。

## Depth & Shapes

- 无重阴影:平铺内容零阴影,覆盖面板才允许轻扩散阴影。
- 圆角角色见前言 token:控件小圆角、卡片 16–28px、按钮胶囊、媒体 10–14px。
- 图标为细线 SVG;手作插画与商品照片是有来源的 raster,`contain` 保完整、不为填满容器裁掉主体。

## Components(现行规则)

- **导航**:暖白底细线,当前页浅奶油胶囊 + 陶土字;菜单项来自 Shopify Navigation,含集合入口(编织包/毛线/成品);44px 触控、24px 图标。
- **首页**:串联 Hero(奶油黄 CTA)+ 作品发现(精选网格、分类行、能力筛选、收藏)+ 紧凑帮助 + 页脚,构图以对应 surface brief 为准。
- **作品详情(Kit 型)**:难度行 → 数据驱动卖点行(编织包 tag、视频/图文教程字段决定显隐,陶土勾选)→ 购买卡(数量、合计、加购、商品详情次链接)→ `yarn-kit-story` 把商品描述的六个 `<h2>` 小节平铺为顺读分区:关于(图文并排)、编织包里有什么(全家福图 + 01–10 编号清单,徽章浅奶油底陶土字)、怎么开始(陶土圆标三步)、尺寸与适合谁(细线事实条)、常见问题(折叠行);描述不满六节退回折叠形态。教程预览用独立标题键,来源块透明底 + 上缘细线。
- **双模式入口**:成品/材料两种能力并存才显示意图卡,单能力直接展示,无购买能力归灵感;能力标签不表示库存或齐套。
- **集合页**:横幅暖白面 + 集合标题 + 一句引导语(存 Shopify 集合描述);商品卡暖白细线 16px 圆角、两行标题、墨色粗价格、细线上缘的陶土文字动作行(「选择颜色与规格」)。
- **购物车**:条目两列三行,数量步进器、删除与行总价必须完整可见可达;保障条三项(配送/选线支持/放心购物)三语内置。
- **收藏**:图上暖白圆形爱心,表达收藏,不显示人数或评分。
- **表单与字段**:暖白底、24px 圆角、56px 输入高度、16px 输入字号;成功/错误保留 Shopify 语义。

## Do / Don't

**Do**:延续暖纸+细线+炭黑的世界;新增文案查三语断行与手机可读;运营内容一律映射到 Shopify 可编辑层;每轮实现后把规范变化蒸馏回本文。

**Don't**:不虚构评价、销量、折扣或品牌证明;不把参照站配色、构图稿小字或生成素材当真值;不把普通商品网格电商风或 Hoshiami 仿站当首页方向;不把局部字号、比例升级成全站令牌;不把本文当作发布、授权或验收凭据。
