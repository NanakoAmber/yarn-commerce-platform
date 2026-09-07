---
name: 毛线品牌
description: 从作品先行 B 实物提取的暖纸、针目图谱与柔色手作界面系统；仅受保护内部预览
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
  indigo: "#426f82"
  blush-surface: "#faecea"
  blue-surface: "#edf5f7"
  mint-surface: "#edf4ee"
  cream-surface: "#fff6df"
  discovery-ink: "#303330"
  selected-paper: "#fcf0ed"
  selected-ink: "#9e5554"
typography:
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
  wordmark-desktop:
    fontFamily: "ui-rounded, 'Arial Rounded MT Bold', 'Nunito', var(--yarn-display)"
    fontSize: "2.15rem"
    fontWeight: 700
    letterSpacing: "-0.045em"
  wordmark-name:
    fontSize: "1.85rem"
    letterSpacing: "-0.055em"
  wordmark-mobile:
    fontSize: "1.45rem"
    letterSpacing: "-0.05em"
rounded:
  control: "3px"
  kit-label: "5px"
  filter: "11px"
  field: "12px"
  work-media: "14px"
  action-wide: "15px"
  compact-paper: "16px"
  flow-paper: "18px"
  content-mobile: "20px"
  atlas: "24px"
  content: "28px"
  circle: "50%"
  pill: "999px"
spacing:
  compact: "12px"
  control: "16px"
  content: "24px"
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
    backgroundColor: "{colors.surface}"
    textColor: "{colors.discovery-ink}"
    rounded: "{rounded.field}"
    padding: "12px 48px 12px 18px"
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
    backgroundColor: "{colors.blue-surface}"
    rounded: "{rounded.compact-paper}"
    padding: "24px 30px"
  card-content:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.content}"
  card-content-mobile:
    rounded: "{rounded.content-mobile}"
---

# Design System: 毛线品牌

## Overview

**Creative North Star: "编织图解图谱"**

暖白纸面承接真实织物，柔粉、粉蓝、薄荷和浅奶油色组成轻柔的分类层；炭黑文字给出清楚的阅读重心。针目轮廓、细线图标与线团花枝保留手作温度，文字与操作保持克制。奶油黄延续为已有动作色；作品先行 B 的主要操作实际采用文字、细线和浅粉选中态，不要求每个入口都铺暖黄按钮。

本次为合并刷新：保留已确认的视觉世界与共享购买骨架规范，从 2026-09-05 已实现的首页 B 和整改后截图提取当前首页事实。B 的帮助图标、套件标签、暖白纸面和移动可读性已通过独立局部整改复核；整页 Comp-first 流程仍未闭合，本文不授予 ship，也不代表商品详情、购物车或整个网站完成同等深度的视觉验收。首页三主区域与次序由 [surface brief](.impeccable/surfaces/templates-index-json.md) 管理，不推广为其他页面的固定模板。

Issue #23 在这个既有世界内新增 Project 库与详情：列表继续以织物作品图为入口，详情采用用户已批准的 `paper_flow`，把作品事实、制作准备、同页 Tutorial 与购买分流放在顺读纸面中。较早的详情 / 购物车两项修复已获局部 `ship`；本次部分配件销售扩展另有独立 [finish review](.impeccable/review/23-project-components/finish-review.md) 与 [verdict](.impeccable/review/23-project-components/finish-verdict.md)。三语移动首屏修复已为 `resolved`，本文完成其第 2 项设计事实同步，文档 finding 的关闭状态以同一 reviewer 的 verdict 为准；这不改变旧首页 gate 或生产状态。

本次提取覆盖完整作品图与标题并排的移动首段、部分供给清单、商品来源提示、非同款成品说明与购物车回链。代码依据为 `assets/yarn-project.css`、配件 snippet、作品购买脚本、商品来源脚本 / 样式与购物车 Project snippet；documenter 已打开本目录三语 390 px 首屏与全页、中文 1440 px 详情及商品 / 成品 / 购物车代表截图。三语关键操作、后台编辑及 `npm run verify` 50/50 通过来自主代理的 [本轮 QA 输入](.impeccable/review/23-project-components/review-input.md)，不是 documenter 独立浏览器验证。范围只到受保护内部原型，不认证实际跟做、材料适配与用量、真实供货、素材公开权利或队友试用。

Issue #28 仅按用户在中文首页截图上的四项批注收紧页眉与首屏：品牌收短为 `mewool`；访客主导航固定为“首页 / 成品 / 原材料 / 联系方式”并提供日英对应文案；主张改为“喜欢的作品，不该卡在选材料。”并明确毛线、用量、工具与教程的准备价值；首屏改用同时出现成品花束、毛线、钩针与织物的真实编辑照片，移除 discovery 首屏的格纸和针目涂鸦。本轮保留已批准的作品优先 B 构图、三步路径、发现区、商品事实边界和购买流程，不构成全站重新设计。

当前仅为受保护内部预览。普通外部 Theme 预览仍进入 `/zh/password`，店铺保护未解除；参考 Product 图片及其中的品牌字样、色数文字没有因此获得公开发布授权。mewool 的名称和猫抱毛线球标识为原创 Theme 资产，但不改变参考商品图片的公开授权边界。

提取依据为 `templates/index.json`、首屏与 B 样式覆盖、一体化作品发现 Section / CSS / JS、作品卡片 snippet、紧凑帮助 Section 和 `assets/yarn-prototype.css`。视觉依据为 `.impeccable/review/desktop.png`、`mobile.png`、`user-756.png` 及三张同名 `-filter-open.png`；方向为 `.impeccable/mocks/discovery-b-zh.png`。独立 [finish review](.impeccable/review/discovery-b-finish-review.md) 与 [verdict](.impeccable/review/discovery-b-finish-verdict.md) 仍记录 `plates=open`、`gate.ok=false`、后续 phases pending；真实 Tutu Product 照片适配不能被写成机械 gate 已通过。文档提取完成不自动关闭这些状态。

**Key Characteristics:**

- 暖白底、浅色分类面与炭黑正文形成稳定层级。
- 真实织物和完整针目轮廓共同表达材料与作品。
- 展示标题有重量，流程标签较轻，手机主说明与主要操作保持可读。
- 流程纸面轻叠压，发现结果平铺，帮助条使用柔蓝浅面。
- 简体中文、日文、英文文案保持可编辑，图像承担材质与图解。
- Project 详情以完整作品图与标题、紧凑事实和可见制作准备兑现移动首屏，底部制作入口持续可达；生成示意明确披露。
- 部分供给清单以细线顺读，商品与购物车保留来源作品和必要参考说明。

## Colors

色彩以接近纸面的中性底为主，柔色面区分内容角色，深色文字承载阅读；数值以前言令牌为准。当前 B 与保留旧 Section 的同色系细微差异按真实实现记录，不把所有柔粉或粉蓝强行合并为一个色值。

`.impeccable/design.json` 补充组件展示片段、阴影、动效和断点。其色阶条按已提取颜色合成，仅供面板比较，不是新增的发布色板。

### Primary

- **奶油黄**（`butter`）与 **动作浅黄**（`butter-action`）：继承的宽幅及胶囊动作色。它们保留在可恢复旧 Section 与共享样式中；B 已移除首页宽幅浏览动作、独立套件与季节大卡，当前紧凑帮助入口为文字链接。
- **珊瑚色**（`coral`）：共享焦点与已有动作强调的来源。
- **Mew 陶土橘**（`mew-terra`）：mewool 猫标、字标与小范围交互的深暖橘；只承担品牌识别，不表示价格、库存或促销。
- **选中暖墨**（`selected-ink`）：发现类型的选中态及搜索光标；分类描边和标签文字沿用同色系的实际局部变体。

### Secondary

- **选中浅粉纸面**（`selected-paper`）：当前展开 / 已选筛选与材料套件标签共同使用的底色。
- **粉蓝纸面**（`blue-surface`）：当前紧凑人工帮助条的底色。
- **柔粉、薄荷与浅奶油纸面**（`blush-surface`、`mint-surface`、`cream-surface`）：保留旧图谱组件的已确认色系。B 的小圆分类使用源码中的较浅局部变体，不能将旧色值或旧大分类卡当作 B 的当前外观。
- **灰蓝墨色**（`indigo`）：已有导航交互与购买骨架中的强调文字。B 发现区使用自己的灰蓝焦点轮廓。

### Neutral

- **暖纸**（`paper`）：共享页面底层。B 主区域使用暖白表面；Issue #28 后 discovery 首屏不再叠加格纸，暖白底只负责承接文案与右侧具体编辑照片。旧版非 discovery 首屏仍保留其原有纸面资产。
- **暖白表面**（`surface`）：导航、发现区、搜索、筛选和帮助区外层的连续底色。流程纸面使用近白半透明层。
- **炭黑**（`ink`）与 **发现炭黑**（`discovery-ink`）：分别用于共享正文 / 首屏和发现区内容；**柔灰**（`muted`）为已有辅助说明色。
- **暖灰细线**（`line`）：共享导航、购买骨架和控件边界。B 筛选与标签另有低对比暖灰或浅珊瑚边线。

**The 颜色说明角色 Rule.** 浅色面与暖色强调用于分类、选中和动作层级；它们不构成价格、热度、难度或库存的事实证明。

## Typography

**Display Font:** `Yarn Display`，为自托管 Noto Sans SC 当前字符子集，文件实际提供 400 / 600 字重，后备为 Noto Sans SC / sans-serif。

**Body Font:** Theme 配置为 Murecho 400；中文通过语言规则改用前言所列系统中文字体栈。B 首屏、发现标题、作品标题和流程标签明确使用展示字体；帮助标题及正文继续继承 Theme / 中文字体栈，不能宣称整站已切换同一自托管字体。

**Character:** 主标题使用较重黑体感，流程与卡片标题更轻；字号随用途调整，没有固定倍率的全站阶梯，也没有独立等宽标签字体。源码中的 500 字重是请求值，不表示仓库另有一份 500 字重字体文件。

### Hierarchy

- **Display**：`display` 对应当前 B 首屏；599 px 以下使用 `display-mobile`。当前 B 覆盖选择器使主标题字距为 0，不再沿用旧首页的中文 -0.01em 结果。
- **Headline**：`headline-discovery` 对应居中发现标题；中文 -0.01em 来自全局语言层叠，其他语言不据此套用中文字距。
- **Title**：`title-work` 对应真实商品名称，手机为 1.5rem；以至少两行的空间预算容纳长标题，允许继续换行，不用旧目录的两行截断掩盖 Product 名称。
- **Project Title**：详情桌面使用响应式展示标题；749 px 以下使用 `title-project-mobile`，与完整作品图并排，完整换行显示 Project 名称。简介为 1.3rem / 1.4，内部演示披露为 1.2rem / 1.5，均保留全文；这些是该手机首段的局部阅读层级，不推广为全站正文尺度。源码 rem 依宿主根字号缩放，不把当前浏览器换算值写成固定像素规范。
- **Body**：`body-zh` 保留原有帮助 / 内容组件正文角色。B 首屏说明使用流式字号，手机为 `body-hero-mobile`；搜索输入为 1.5rem。
- **Label**：流程桌面为 `label-flow`，手机为 1.4rem；手机分类、筛选、查看材料和联系动作同为 1.4rem。商品类型入口为 1.6rem。计数、内部演示说明与套件身份标签保留辅助文字尺度，不升级为全站正文标准。

Theme 的 `--font-body-scale` 为 1.0，但源码 `rem` 仍取决于宿主根字号。本轮用户 Chrome 实测 `document.documentElement` 根字号为 12.5 px；这只是当前预览环境证据，不是全站默认。新增文案仍须检查三语断行，不能把源码 rem 在未知根字号的环境中直接当作固定 px。

字体授权见 [Noto Sans SC OFL](docs/qa/noto-sans-sc-OFL.txt)。当前子集不承诺覆盖未来新字、全部日文或任意输入；新增文案须检查 fallback。

**The 标题与正文分工 Rule.** 自托管展示字服务标题识别，正文优先语言覆盖与阅读；字体来源、声明字重和实际覆盖范围分别核实。

## Layout

复用的空间语言是居中内容、图文之间的清楚净空与按内容角色分配密度。当前 B 发现区与帮助条共享最大宽度 1160 px、宽屏两侧合计 64 px；989 px 以下改为总宽度的 86%，599 px 以下两侧各留 16 px。流程纸面另有最大宽度 1080 px，保持与首屏的叠压关系。其余共享购买骨架继续使用 Theme 当前 1300 px page-width，不强推首页专用宽度。

当前首页在全局导航与页脚之间只有首屏三步路径、一体化作品发现、紧凑购买前帮助三个主区域。旧分类大卡、独立一团套件、季节大卡与旧目录 Section 的设置保留但已禁用；它们不是当前首页的中间段。这是 B surface 的合同，不是全站必须三段的规则。

B 小圆分类在所有已复核宽度均为四列一行；作品结果在宽屏四列，989 px 以下两列。599 px 以下作品间距为横向 16 px、纵向 28 px；三项筛选仍共用一行。展开面板根据左右位置对齐，避免窄屏横向溢出，不依赖横向滚动筛选轨道。

手机保住主说明、主要操作、三步图标与标签净空；右侧编辑照片允许裁切，但至少同时保留一个明确成品、一组毛线和工具线索，且不得覆盖正文。装饰定位、首屏叠压和当前标题断行留在 surface brief 与代码，不作为其他页面的绝对定位模板。

Project 库沿用 1160 px 内容壳：宽屏四列、989 px 以下两列；卡片使用 1:1 作品图。详情桌面首段为约 1.05:1 的作品图 / 文字双栏，之后回到最大 760 px 的单列阅读流。749 px 以下的 `paper_flow` 首段先以 112 px 作品图与完整标题并排，列间距 14 px，图像 `contain` 保住完整作品；简介、事实和演示披露随后各自跨满两列，后续保持单列顺读。事实按最小 84 px 自适应分列，以 8 px 间距和上下留白收紧排列，披露只合并换行、不隐藏内容。三语 390×844 首屏中，完整标题、简介、必要事实、演示披露以及“制作准备”标题与首条有意义的信息均在 sticky CTA 上方可见。这个首屏合同只属于作品详情，不推广成其他页面的高度公式。

移动购物车条目使用两列三行网格：8rem 商品图贯穿三行，列间距为 1.2rem，右列依次承载标题事实、数量与删除、行总价。数量步进器固定为 14rem 的 flex basis / min-width / width，不能因长标题或抽屉宽度退化为缺少当前数量的残缺控件；在本轮实测 12.5 px 根字号下分别呈现为 100 px、15 px 和 175 px，但这些换算值不升级为规范。第二条目必须能在抽屉滚动区到达，固定 footer 不得永久遮住它。

## Elevation & Depth

系统保留柔纸叠层，但 B 降低了连续大卡的存在感：流程纸面使用轻扩散阴影，作品卡平铺且无外框阴影，帮助条以浅蓝面区分。筛选展开面板因覆盖结果区而使用更清楚的扩散阴影。共享焦点外圈是交互状态，不是卡片深度。

### Shadow Vocabulary

- **B 流程纸面**：`0 8px 20px rgba(127, 103, 82, 0.05)`。
- **筛选展开面板**：`0 12px 28px rgba(103, 81, 68, 0.14)`。
- **保留的旧内容纸卡**：`0 20px 54px rgba(112, 94, 73, 0.08)`；适用于原有独立套件组件，当前 B 首页未显示。
- 旧图谱、分类抬升与旧搜索阴影仍留在对应组件实现中，不再作为当前 B 发现区的默认状态。

**The 柔纸叠层 Rule.** 深度来自浅面差与低透明度扩散阴影；按实际角色区分平铺内容和覆盖面板，不把旧大卡阴影施加到所有新内容上。

## Shapes

当前 B 以小圆针目分类、柔圆角输入、照片框和轻纸面组织形状。分类和流程插图为圆形；搜索及手机作品媒体共享较小圆角，流程与帮助条使用中等柔圆角。套件标签是小圆角粉色标签，不是按钮。

共享 Rise 购买控件保留小圆角，旧暖黄动作保留胶囊及较宽圆角形态；这些既有形状没有被全站禁止。当前 B 筛选为圆角矩形触发器，不能再按旧胶囊 select 描述。

细线图标保持线性轮廓，当前搜索、箭头和展开提示使用内联 SVG path。针目和线团问号是有来源的 raster；分类标题、商品名称及操作文字保持 HTML。完整图解轮廓与下方文字净空优先于填满容器。

## Components

### Buttons

B 的查看材料、展开更多、完整目录与联系入口使用文字及 SVG 方向提示。作品整张卡是一个链接，查看材料不是第二个独立嵌套按钮；商品类型则是真实按钮组，当前项用暖墨和底部细线表示。

旧 `button-primary` 与 `button-pill` 令牌保留已确认的暖黄动作形态及 hover 变体，当前首页不显示旧宽幅浏览按钮与独立套件按钮。不能从这些保留令牌推导出 B 需要新增一个宽幅 CTA。

发现区键盘焦点为灰蓝色 2 px 轮廓、4 px 外偏移且无额外阴影；共享区域继续采用珊瑚半透明 3 px 轮廓、3 px 外偏移及暖白内衬。联系链接 hover 使用下划线，不新增抬升动画。

### Chips / Tags

材料套件身份标签使用 `kit-label`：柔粉底、浅珊瑚细边和深暖文字，只在实际商品标签识别为套件时显示。它不表示难度、推荐度或促销。类别导航的圆面与套件身份标签职责不同，不混用。

### Cards / Containers

作品卡以真实 Shopify Product 照片为主体，媒体纵横比为 0.93，图像采用 contain 保留完整商品；标题可继续换行，下面是商品身份与查看材料。Hover 为标题下划线，当前没有卡片抬升或替换商品照片的视觉规则。

紧凑帮助条由线团问号、短标题和联系入口组成，浅蓝底、无阴影，桌面横排；手机保持同一阅读次序并缩小图标与间隔。当前未配置 LINE 主链接，实际显示联系页入口，不能据此声称在线聊天或 LINE 服务已接通。

### Inputs / Fields

发现搜索为暖白底、暖灰细边、12 px 圆角，输入最小高度 48 px，右端搜索图标是有可访问名称的提交按钮。搜索、四个分类、商品类型和用量 / 季节 / 风格共同缩小一个 Shopify Product 结果列表。

筛选正常状态为圆角矩形触发器，最小高度 44 px；默认关闭，展开或选中时转浅粉面与浅珊瑚边。展开面板有真实选项、数量、已选行和勾选；选中后关闭并把焦点交回触发器，支持方向键、Home / End、Escape、清除及历史返回。原生 select 保留为无 JavaScript 回退和状态来源，不能将其误记成正常截图中的唯一界面。

无结果状态使用浅暖面、说明与实际可用的清除 / 相关毛线入口。这里不建立未实现的全站错误、成功或禁用表单规范。

### Navigation

导航在 Issue #20 中沿用首页视觉世界调整：暖白底、暖灰底线，桌面最小高度 84 px，1339 px 以下折叠为菜单、字标、搜索与购物袋，599 px 以下最小高度 68 px。较早折叠为三语长文案和浏览器放大字体留出空间。“按作品挑选”用浅粉纸面与暖墨文字强调，其他入口保持文字链接。图标统一为 24 px 轮廓和 44 px 触控区，购物袋继续打开原有购物车抽屉；页内导航会关闭手机菜单、解锁滚动并把焦点交给目标区域。

mewool 的导航 Logo 直接继承用户选择的第一款橘色猫抱毛线球图稿：歪头闭眼、橘色斑块、环抱线团和回环线尾，配合同一张图中的圆润小写 `mewool` 字标。正式名称与无障碍名称均为 `mewool`，三语共用。桌面图像显示区为 252×57.27 px，390 px 手机为 184×41.81 px；保持图片比例，以 `object-fit: cover` / `object-position: 50% 42%` 取出原始图像的有效内容，窄手机按可用空间收缩。暖白背景通过 multiply 混合融入现有页眉；这不是通用深色背景资产。页眉仍为桌面 84 px、手机 68 px，Logo 链接保留至少 44 px 高的触控区。Shopify 上传 Logo 仍优先。源码为 `assets/mewool-logo-reference.png`、`snippets/yarn-wordmark.liquid`、`assets/yarn-header.css`；Shopify CDN 提供 600 / 900 px 图片，来源和生成过程见 `docs/brand/mewool-refresh.md`。此事实已由 Issue #28 的三语 1440 px / 390 px 页面、中文 2048 px 批注同屏对照与移动抽屉复核。

语言菜单继续使用已有本地化链接和 Shopify 的可用语言集合。Issue #23 英文已按用户当次授权开放；本版中文、日文、英文的作品叙述、材料清单、教程锚点及购买关键操作已按主代理 QA 记录验证。语言开放和关键路径可用不等于整个目录已本地化：运营 Product 标题与部分既有 Theme Editor 文案仍为日文，购物车公开属性标签仍包含 `Project` / `Component` / `Reference`。这些边界须在运营翻译中逐项维护，不能由控件语言推定商品内容已经翻译。

### Project Library / Detail

Project 卡片与 Product 卡片保持不同语义：1:1 作品图下方只呈现 Project 名称和类别 / 难度等事实，整卡链接进入统一详情，不链接到推荐 Product。详情桌面以大图和说明双栏建立作品身份；移动端以完整封面和标题并排开场，再按全文简介、紧凑事实、完整演示披露进入“制作准备”。内部样例使用生成示意时，简介明确其不是原教程成品。材料、工具、成品与 Tutorial 在后续顺读区按 Shopify / Project 事实分流，不把 Product 价格或库存写回 Project 身份。

底部“开始制作”是 sticky 主动作，窄屏与桌面均限制在 380 px 内，使用深暖红底与暖白文字；它锚定同页 Tutorial，不代表购买、结账或已创建 Making。其上方的制作准备不能被 sticky 层完全遮住。

### Project Materials / Purchase Context

配件清单沿同一纸面逐项展开，以暖灰横线和每项 24 px 上下留白分隔，不嵌套卡片。每项先列名称与供给文字，再列规格 / 用途、可售商品信息和备注；名称可完整换行，供给状态在窄屏自然换行。准备概述说明本店只提供其中一部分，自备工具和信息待补项仍在清单中，不把整页称为完整材料包。教程区的文字回链定位同一作品的材料与工具清单，查看教程不要求购买。

只有“本店提供”且引用有效 Shopify Variant 的项目显示商品信息；图为 64 px 的完整商品缩图，旁边列当前规格、Shopify 价格和“查看原始商品与其他规格”。可售时再显示采购数量与深珊瑚单项加购按钮，售罄显示文字状态并省略加购，自备 / 待补项不显示购买入口。采购数量与实际制作物理用量分别说明；每次只提交顾客明确选择的一项，工具不会自动加入。数量遵从该 Variant 的最小值、增量和上限。加购中按钮禁用并显示等待文案；成功提供购物车入口，失败显示说明；结果不确定时保留购物车核对入口并禁用重复提交，不自动重试。

原始商品页在商品标题上方以两条细线夹住来源区，使用 1.4rem 文字、12 px 上下内距及自然换行链接，延续暖纸与灰蓝焦点。只有有效同源作品路径提示且商品身份对应时才显示；普通无来源参数访问不显示。来源是可修改的导航提示，不证明材料适配、库存或商业关系；文字通过 `textContent` 写入，规格切换保留来源参数，实际价格、库存和所购 Variant 仍由 Shopify 决定。非同款成品在来源区紧接显示“仅作成品参考，并非本教程同款”的说明，不能用回链暗示同款供货。

材料加购与来源商品页加购均把作品、适用的配件名称及非同款参考说明留在购物车条目中。购物车抽屉和整页根据保存的 Project handle 重新读取 Shopify 中可见的作品，生成返回对应作品的链接；不直接信任顾客可改的 URL，不把文字属性当适配认证。来源与参考说明保持完整阅读和滚动可达，不能让其挤掉数量或删除控件。当前英文首页作品 → 同名详情 → 成品商品 → 购物车的连续性，以及材料规格切换后的来源保留，均以本轮主代理 QA 记录为行为依据。

### Mobile Cart Drawer

390 px 抽屉中的每个条目使用同一两列三行结构。标题最多三行但保留 Shopify 链接原文；第二行完整容纳 `− / 当前数量 / +` 的 14rem 数量步进器与删除操作，第三行右对齐行总价。长标题可以换行或视觉 clamp，但不能挤压数量、删除或价格；抽屉内容区可滚动，最后一项保留 2.4rem 底部余量。上述尺寸依宿主根字号缩放，不固定换算为 px。

### 针目图解与材料图像

针目小圆面是当前首页的轻量分类入口，流程圆形插图解释选择、购买与制作；它们不是已交付 Tutorial。线团问号说明购买前帮助。其他页面可以继承材料温度、细线语言和真实照片，不必复制三步、四分类、单侧织物或其固定位置。

首屏继续使用 620 ms 入场，说明 / 流程分别延后 90 / 170 ms；两支方向箭头为 520 ms 动画，缓动为 `cubic-bezier(.16, 1, .3, 1)`。筛选箭头为 160 ms ease-out，展开时旋转。已实现的减少动态规则关闭这些首屏动画和筛选箭头 transition；旧图谱的错峰规则仍在源码中但 B 不显示旧图谱，不能推导全站动画已统一验收。

## Do's and Don'ts

### Do:

- **Do** 以暖白纸面、柔色分类面、炭黑文字和细线语言延续已批准的视觉世界。
- **Do** 让针目轮廓完整、标签独立可读，并让装饰避开正文。
- **Do** 保留真实 Product 照片与标题、装饰图解和可编辑三语 HTML 文案各自的职责。
- **Do** 在新增文案后检查字体覆盖、三语断行、手机可读性、焦点和触控路径。
- **Do** 从对应 surface brief 决定构图，从本规范复用已实现的材料、字体角色和组件语言。
- **Do** 在 390 px Project 详情首屏保留完整标题、事实、演示披露，并让制作准备的标题与首条信息出现在 sticky 制作动作上方。
- **Do** 让移动购物车每个条目的减号、当前数量、加号、删除与行总价完整可见且可滚动到达。
- **Do** 保留自备和待补配件，区分采购数量与制作所需用量，并在商品和购物车中延续来源作品与非同款参考说明。

### Don't:

- **Don't** 将普通商品网格主导的电商首屏或 Hoshiami 仿站作为本首页的视觉方向。
- **Don't** 把临时字标、参考商品图、图上品牌或色数文字当作已授权正式品牌资产。
- **Don't** 为匹配 comp 颜色生成假商品照片、修改商品名称，或将演示目录冒充独立 Project / Tutorial 库。
- **Don't** 将字形箭头、遗留 eyebrow 样式、单处定位补偿、辅助极小文字或未复核的购买页面状态升级为全站规范。
- **Don't** 将首页三主区域、四个分类或两列移动图库强推为其他 surface 的固定模板。
- **Don't** 把局部整改复核、本文档或面板组件片段当作 Comp-first 全部 gate、免密码访客分享、素材授权或正式发布已通过的凭据。
- **Don't** 将本轮局部 verdict、三语操作验证或英文开放扩大解释为全站完整本地化、实际跟做与适配认证、真实供货、咨询发送、旧首页 build gate 或生产发布通过。
- **Don't** 将购物车最终复拍中的第三方店铺参考素材当作发布资产；它只用于本地视觉核对，不上传或提交。
