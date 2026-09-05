---
name: 毛线品牌
description: 从已复核首页提取的暖纸、针目图谱与柔色手作界面系统
colors:
  paper: "#f7f7f5"
  surface: "#fffefa"
  ink: "#2f302f"
  muted: "#686762"
  line: "#e4dfd7"
  butter: "#f8e5a9"
  butter-action: "#f7e3a5"
  coral: "#e58b7d"
  indigo: "#426f82"
  blush-surface: "#faecea"
  blue-surface: "#edf5f7"
  mint-surface: "#edf4ee"
  cream-surface: "#fff6df"
typography:
  display:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "clamp(4.6rem, 4.5vw, 6.3rem)"
    fontWeight: 600
    lineHeight: 1.32
    letterSpacing: "-0.01em"
  display-mobile:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  headline-atlas:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "clamp(3.4rem, 3.8vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body-zh:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0.01em"
  label-flow:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "clamp(1.8rem, 2vw, 2.8rem)"
    fontWeight: 400
    lineHeight: 1.35
rounded:
  control: "3px"
  field: "14px"
  action-wide: "15px"
  category: "16px"
  product-media: "18px"
  content-mobile: "20px"
  atlas: "24px"
  content: "28px"
  pill: "999px"
spacing:
  compact: "12px"
  control: "16px"
  content: "24px"
  section-mobile: "56px"
components:
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
    backgroundColor: "#ffffff"
    textColor: "#2b2925"
    rounded: "{rounded.field}"
    height: "46px"
  field-filter:
    backgroundColor: "{colors.surface}"
    textColor: "#2b2925"
    rounded: "{rounded.pill}"
    padding: "0 34px 0 16px"
  field-filter-active:
    backgroundColor: "{colors.blush-surface}"
    textColor: "#7f4b43"
  card-content:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.content}"
  card-content-mobile:
    rounded: "{rounded.content-mobile}"
---

# Design System: 毛线品牌

## Overview

**Creative North Star: "编织图解图谱"**

暖白纸面承接真实织物，粉红、粉蓝、薄荷和浅奶油色组成轻柔的分类层；炭黑文字给出清楚的阅读重心，奶油黄标记行动。针目轮廓、细线图标与线团花枝让界面有手作温度；柔和色彩与清楚字重共同避免儿童手工网站的观感。

本规范从 2026-09-05 已实现并经独立复核的首页提取。范围是首页定制系统及已存在的共享样式；商品详情、购物车、结账入口仍继承 Rise 骨架，不能据此视为已完成相同深度的改版。首页构图与模块顺序由 [surface brief](.impeccable/surfaces/templates-index-json.md) 管理，不推广为其他页面的固定模板。当前“毛线工作室”是临时字标，不是正式品牌资产。

证据为 `assets/yarn-prototype.css`、首页各定制 Section、`sections/featured-collection.liquid`、`sections/header.liquid`，以及 `.impeccable/review/desktop.png`、`mobile.png`、`comp-size.png`。独立 `finish-review.md` 与三轮 verdict 记录整改；`verdict-3.md` 的 ship 只覆盖已评分的视觉整改，不代表运行时链接或整个商业网站完成上线验收。

**Key Characteristics:**

- 暖纸底、浅色分类面与炭黑正文形成稳定层级。
- 真实织物和完整针目轮廓共同表达材料与作品。
- 展示标题有重量，流程标签保持较轻，正文留足行距。
- 大内容纸卡使用柔圆角与扩散阴影，购物控件保留紧凑尺度。
- 简体中文、日文、英文的文字保持可编辑，图像承担材质与图解。

## Colors

色彩以接近纸面的中性底为主，柔粉柔蓝薄荷承担分类与分区，暖黄承担动作，深色承担可读内容；数值以前言令牌为准。

`.impeccable/design.json` 补充组件展示片段、阴影、动效和断点。其色阶条按已提取颜色合成，仅供面板比较，不是已在页面使用的新增色板；规范颜色仍以前言为准。

### Primary

- **奶油黄**（`butter`）：宽幅主动作；**动作浅黄**（`butter-action`）：套件胶囊按钮、搜索提交和联系按钮。两者均已存在，不强行合并成同一色值。
- **珊瑚色**（`coral`）：主动作箭头及共享焦点色的来源。小面积强调，不作为正文底色。

### Secondary

- **柔粉纸面**（`blush-surface`）：包袋分类与已选筛选背景。
- **粉蓝纸面**（`blue-surface`）：围巾与披肩分类、人工帮助容器。
- **薄荷纸面**（`mint-surface`）：毯子分类。
- **浅奶油纸面**（`cream-surface`）：玩偶分类。分类色是当前首页映射，其他 surface 不必沿用四分类结构。
- **灰蓝墨色**（`indigo`）：已有导航交互与购买骨架中的强调文字。

### Neutral

- **暖纸**（`paper`）：页面底层；可见格纸纹理来自实际图像，并非纯色令牌本身。
- **暖白表面**（`surface`）：内容纸卡、导航、筛选和编辑内容的底色。流程与图谱另使用近白半透明表面，让下层材质保持轻叠压。
- **炭黑**（`ink`）：共享正文与主要阅读内容；**柔灰**（`muted`）用于辅助说明，不能替代主操作文字。
- **暖灰细线**（`line`）：导航、购买骨架和控件边界；内容纸卡另外采用低透明度暖灰描边。

**The 暖黄行动 Rule.** 在已实现首页中，用暖黄建立清楚的动作面，用深色文字保持可读；分类浅色不能被误用为价格、热度或难度的事实证明。

## Typography

**Display Font:** `Yarn Display`，实际为自托管 Noto Sans SC 的当前界面字符子集，提供 400 / 600 两种字重；后备为 Noto Sans SC / sans-serif。

**Body Font:** Theme 配置为 Murecho 400；中文通过 `html[lang^='zh']` 改用前言所列系统中文字体栈。首屏主标题、图谱标题和三步标签明确使用展示字体；套件、季节与目录标题仍继承 Theme / 中文字体栈。不能声称整站均已切换自托管字体。

**Character:** 首屏标题是较重的印刷黑体感，流程标签和图谱标题更轻；后续说明依靠行距和段落宽度保持平静。没有独立的等宽标签字体，也没有统一倍率字体阶梯。

### Hierarchy

- **Display**：前言的 `display` 是宽屏首屏值；在 989 px 以下使用对应流式字号，在 599 px 以下落到 `display-mobile`，保住中文行宽与织物净空。
- **Headline**：`headline-atlas` 对应图谱标题；后续套件、季节、目录标题实际为 500 字重、约 1.22–1.25 行高，依各自容器调整字号，不能套用一个标题尺寸覆盖全部模块。
- **Body**：`body-zh` 记录季节与帮助区反复使用的正文尺寸；套件为 1.55rem / 1.85，首屏说明使用更大的流式字号。正文宽度由实际内容块限制，不建立未实现的全站统一行长。
- **Label**：`label-flow` 为流程标签；手机为 1.35rem。目录筛选与辅助计数采用紧凑文字，是密集操作区的现状，不升级为全站正文尺度。

Theme 当前文字缩放为 100%，根字号以 10 px 为 rem 基准。字号令牌保留源码 rem；新增组件不能在未知根字号下直接把它当作 px。

前言展示标题的字距记录中文实际层叠结果：`html[lang^='zh']` 的标题规则以更高 specificity 将首屏和图谱标题设为 -0.01em。非中文 Section 默认字距分别为首屏 0.02em、图谱 0.025em，手机首屏为 0；不能只读 Section 局部值就认定中文截图采用同一字距。

字体授权见 [Noto Sans SC OFL](docs/qa/noto-sans-sc-OFL.txt)。当前子集没有承诺覆盖未来新字、全部日文或所有输入；新增文案应检查 fallback 和三语断行，必要时重新生成有授权的子集。

**The 标题与正文分工 Rule.** 自托管展示字服务首屏识别，正文优先语言覆盖与阅读；不得把现有中文系统正文误判为展示字体已经覆盖所有区域。

## Layout

复用的空间语言是居中纸卡、图文之间的清楚净空和宽松区段间隔。流程面与分类图谱共享最大宽度（1220 px），宽屏两侧合计保留 96 px；其余内容遵循 Theme 的 page-width（当前配置 1300 px）与分区内边距。间距不是完整的数学阶梯，前言仅保留重复出现的间隔。

首页特定适配：989 px 以下折叠顶部导航并重排发现工具；749 px 以下图文内容卡转单列；599 px 以下分类从四列改为两列，分类外框和流程卡两侧各留 14 px。商品目录在截图中为桌面四列、手机两列。以上是既有首页与导航的断点事实，不规定未来页面必须复制同一布局。

手机保住文字、动作和针目完整轮廓，允许织物在非文字区域裁切。装饰的定位、首屏图片叠压和当前标题断行留在 surface brief 与实现中，不能作为所有页面的绝对定位规则。

## Elevation & Depth

实际界面通过浅色面、低对比细边和柔扩散阴影形成纸卡叠层。它并非完全扁平，也没有硬偏移阴影。首屏图像与流程纸卡有真实叠压；较小的搜索框阴影更轻。共享焦点外圈是交互状态，不是普通卡片阴影。

### Shadow Vocabulary

- **流程纸卡**：`0 18px 46px rgba(127, 103, 82, 0.11)`。
- **图谱纸卡**：`0 18px 50px rgba(127, 103, 82, 0.09)`。
- **内容纸卡**：`0 20px 54px rgba(112, 94, 73, 0.08)`；季节卡保留同结构、更低透明度的变体。
- **分类交互抬升**：`0 15px 34px rgba(99, 82, 66, 0.12)`，与向上位移同时用于 hover / focus-visible。
- **搜索轻层**：`0 8px 22px rgba(112, 94, 73, 0.05)`。

**The 柔纸叠层 Rule.** 延续已有的低透明度扩散阴影与浅面差；不能把这种世界改写为硬偏移投影，也不能规定所有卡片必须无阴影。

## Shapes

圆角随容器角色变化：宽幅流程与图谱是柔纸卡，大型图文及帮助容器更圆，手机内容卡略收紧；分类、搜索与商品媒体各有较小一档圆角。套件与联系动作、筛选下拉使用胶囊，通用 Rise 购买控件保留小圆角。不能把用户方向中的“克制圆角”简化成全站统一的小圆角或禁止胶囊。

细线图标采用无填充、圆端点与圆连接。图谱中的针目插图是有来源的 raster plate；分类标题、操作与流程文字仍为 HTML。完整针目轮廓和下方标签净空比填满卡片更重要。

## Components

### Buttons

宽幅主动作与胶囊次级动作使用暖黄、深色字；它们是当前界面的两个真实形态。宽幅动作按前言 `button-primary`，手机缩至 66 px 最小高度；套件胶囊最小高度为 52 px。Hover 改用已有浅黄变体并轻抬 2 px，方向提示最多向右移动 5 px。

季节入口是深色文字加珊瑚下划线的文字链接，不增加未实现的描边按钮变体。所有控件保留键盘焦点；共享 `focus-visible` 为珊瑚半透明轮廓、3 px 外偏移及暖白内衬，搜索框使用自己的内侧轮廓。

### Cards / Containers

分类是完整针目图加独立文字标签的链接面，hover / focus-visible 抬升 5 px；大型内容纸卡容纳真实图像和可编辑文字。内容卡的图像可裁切，分类针目必须完整。首页目录媒体为 18 px 圆角，商品标题实际截为两行；这些样式并不表示 Product 详情已用同一内容卡重做。

### Inputs / Fields

发现搜索是白底、暖灰边框的圆角输入容器，桌面输入高 46 px；手机高 44 px，提交按钮由文字转为带可访问名称的图标。输入焦点为珊瑚色 2 px 内轮廓。筛选是真实 `select`，最小高度为 44 px，使用胶囊边框；已激活时转柔粉背景、珊瑚描边和深暖文字。它们不是虚构的芯片组件库；现有证据未建立一整套表单错误、成功和禁用状态规范。

### Navigation

桌面顶栏是暖白底、底部细线、紧凑文字链接；hover / focus-visible 文字使用灰蓝强调及有偏移的下划线。989 px 以下为菜单、临时字标、搜索和购物车；移动端账号入口隐藏，但保留菜单中的既有购物流程。手机筛选轨道可横向滚动，页面本身不应横向溢出。

### 针目图谱与材料图像

针目图谱是当前首页的分类导航语言，流程圆形插图解释选择、购买、制作的先后；它们不是已交付 Tutorial。真实织物局部与格纸、花枝叠合的首屏构图属于首页合同。其他页面可继承材料温度和细线语言，不强制照搬三步、四分类、单侧织物或首屏位置。

首屏已使用 620 ms 入场、90 / 170 / 260 ms 错峰；箭头为 520 ms，链接方向变化为 260 ms，缓动为 `cubic-bezier(.16, 1, .3, 1)`。已实现 `prefers-reduced-motion` 下关闭首屏动画与指定方向变化的 transition；不能据此声称所有卡片和商品图片动画都已统一关闭。

## Do's and Don'ts

### Do:

- **Do** 以暖纸、柔色分类面、炭黑文字和奶油黄动作延续已批准的视觉世界。
- **Do** 让针目轮廓完整、标签独立可读，并让装饰避开正文。
- **Do** 保留真实照片、细线图解与可编辑的三语 HTML 文案各自的职责。
- **Do** 在新增文案后检查字体子集覆盖、三语断行与手机焦点和触控路径。
- **Do** 从对应 surface brief 决定页面构图，从本规范复用已经实现的材料、字体角色和组件语言。

### Don't:

- **Don't** 将普通商品网格主导的电商首屏或 Hoshiami 仿站作为本首页的视觉方向。
- **Don't** 把临时彩色字标、参考商品图、图上品牌字样当作已授权正式品牌系统。
- **Don't** 将当前商品演示目录包装为已建成的 Project / Tutorial 库，或虚构热度、难度、销量与完成时长。
- **Don't** 将字形箭头、遗留 eyebrow 样式、单处定位补偿或未复核的购买页面状态升级为可复用视觉规则。
- **Don't** 把视觉整改的 ship、组件展示片段或本文档当作真实交易与正式发布的验收凭据。
