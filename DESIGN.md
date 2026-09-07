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
typography:
  shared-section:
    fontFamily: "'Yarn Display', 'Noto Sans SC', sans-serif"
    fontSize: "clamp(2.5rem, 2.5vw, 3.2rem)"
    fontWeight: 600
    lineHeight: 1.4
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
    rounded: "{rounded.shared-field}"
    padding: "12px 58px 12px 22px"
    height: "56px"
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

## Overview

**Creative North Star: "编织图解图谱"**

暖白纸面承接真实织物，柔粉、粉蓝、薄荷和浅奶油色组成轻柔的分类层；炭黑文字给出清楚的阅读重心。实体手作插画、既有针目图解、细线图标与线团花枝保留手作温度，文字与操作保持克制。奶油黄承接当前 Hero 主动作，陶土色承接可点击文字，浅奶油纸面连接导航选中态、帮助和页脚。浅粉选中态属于保留的历史 B 筛选与套件标签，不再描述当前导航。

Issue #32（2026-09-07）从成品提取共享角色并统一导航、帮助与页脚，继承当前 Hero 和四分类作品构图。documenter 已打开本轮[中文桌面](.impeccable/review/32-home-system/desktop.png)、[中文手机](.impeccable/review/32-home-system/mobile.png)、[英文桌面](.impeccable/review/32-home-system/en-desktop.png)、[英文手机](.impeccable/review/32-home-system/en-mobile.png)、[日文桌面](.impeccable/review/32-home-system/ja-desktop.png)、[日文手机](.impeccable/review/32-home-system/ja-mobile.png)，与 token、foundation、导航、页脚、Hero、分类行和紧凑帮助代码核对。独立 [finish review](.impeccable/review/32-home-system/finish-review.md) 的剩余项为本次文档持久化，关闭以限定文档 verdict 为准。截图验证范围为三语 1440 / 390 px 的未发布 Theme `189759848761`；不据此宣称后台编辑、订阅发送、全站本地化或生产发布通过。 上述六张为导航翻译修复后重新捕获的最终版，本角色已重新打开全部六张，并打开[中文展开菜单](.impeccable/review/32-home-system/mobile-menu.png)、[英文展开菜单](.impeccable/review/32-home-system/en-mobile-menu.png)、[日文展开菜单](.impeccable/review/32-home-system/ja-mobile-menu.png)：三语桌面导航和手机菜单均与对应 Section 的页面语言一致，关键文案完整可读。修复前中文 / 日文页仍显示英文菜单的旧图不作为最终语言证据；菜单资源保存与后台重载由主代理验证，不由截图推定。

本文件合并保留已确认的视觉世界与共享购买骨架规范。2026-09-05 首页 B 的提取是历史基线；2026-09-07 首页已采用串联 Hero 与分类 Project 行，下文标为历史 B 的组件不再描述当前发现区。B 的帮助图标、套件标签、暖白纸面和移动可读性已通过独立局部整改复核；整页 Comp-first 流程仍未闭合，本文不授予 ship，也不代表商品详情、购物车或整个网站完成同等深度的视觉验收。首页三主区域与次序由 [surface brief](.impeccable/surfaces/templates-index-json.md) 管理，不推广为其他页面的固定模板。

Issue #23 在这个既有世界内新增 Project 库与详情：列表继续以织物作品图为入口，详情采用用户已批准的 `paper_flow`，把作品事实、制作准备、同页 Tutorial 与购买分流放在顺读纸面中。较早的详情 / 购物车两项修复已获局部 `ship`；本次部分配件销售扩展另有独立 [finish review](.impeccable/review/23-project-components/finish-review.md) 与 [verdict](.impeccable/review/23-project-components/finish-verdict.md)。三语移动首屏修复已为 `resolved`，本文完成其第 2 项设计事实同步，文档 finding 的关闭状态以同一 reviewer 的 verdict 为准；这不改变旧首页 gate 或生产状态。

本次提取覆盖完整作品图与标题并排的移动首段、部分供给清单、商品来源提示、非同款成品说明与购物车回链。代码依据为 `assets/yarn-project.css`、配件 snippet、作品购买脚本、商品来源脚本 / 样式与购物车 Project snippet；documenter 已打开本目录三语 390 px 首屏与全页、中文 1440 px 详情及商品 / 成品 / 购物车代表截图。三语关键操作、后台编辑及 `npm run verify` 50/50 通过来自主代理的 [本轮 QA 输入](.impeccable/review/23-project-components/review-input.md)，不是 documenter 独立浏览器验证。范围只到受保护内部原型，不认证实际跟做、材料适配与用量、真实供货、素材公开权利或队友试用。

Issue #28 的作品详情后续在同一 `paper_flow` 世界中落实“主毛线单层纸面 + 工具辅助清单”：制作准备先以一张暖白编辑纸面呈现主毛线图、名称、供给状态、规格与可用的单项采购，再以无嵌套卡片的细线清单承接工具和其他材料。独立 [finish review](.impeccable/review/28-project-yarn-first/finish-review.md) 为 `disposition: ship`，仅批准合入受密码保护的未发布 Theme / 内部原型；不等于 production 发布、材料适配、真实供货或生成示意公开权利获批。

当前规范只覆盖受密码保护的内部模板；发布与回滚状态以本轮 Issue / PR 为准，文档不替代发布记录。店铺保护未解除；参考 Product 图片及其中的品牌字样、色数文字没有因此获得公开发布授权。MewoolMew 的名称和猫抱毛线球标识为原创 Theme 资产，但不改变参考商品图片的公开授权边界。

提取依据为 `templates/index.json`、首屏与 B 样式覆盖、一体化作品发现 Section / CSS / JS、作品卡片 snippet、紧凑帮助 Section 和 `assets/yarn-prototype.css`。视觉依据为 `.impeccable/review/desktop.png`、`mobile.png`、`user-756.png` 及三张同名 `-filter-open.png`；方向为 `.impeccable/mocks/discovery-b-zh.png`。独立 [finish review](.impeccable/review/discovery-b-finish-review.md) 与 [verdict](.impeccable/review/discovery-b-finish-verdict.md) 仍记录 `plates=open`、`gate.ok=false`、后续 phases pending；真实 Tutu Product 照片适配不能被写成机械 gate 已通过。文档提取完成不自动关闭这些状态。

2026-09-07 Issue #13 的本轮提取只覆盖 Hero 下方分类作品行：Shopify `yarn_project` 提供作品，图片和名称进入 Project 详情；各分类独立排列，溢出时在图片与名称下方提供箭头，并可原行展开。数据源、分组、真实数量和最新用户反馈见 [本轮 surface brief](.impeccable/home-surface-brief.md)。布局与类型依据 `sections/yarn-project-library.liquid`、`snippets/yarn-project-row.liquid`、`snippets/yarn-project-card.liquid` 和 `assets/yarn-project-rows.css`；本轮主代理的三语操作、后台编辑与测试证据见 [verification](.impeccable/review/13-category-rows/verification.md)，独立结论见 [finish review](.impeccable/review/13-category-rows/finish-review.md)。文档刷新不把 detector 的 advisory 自动变成通过：新增值按真实角色记录，局部字号和禁用态不扩充全站尺度。

历史 discovery B 的 `plates=open`、`gate.ok=false` 等机械状态保留；本轮初次 scoped comp-diff 为 54.53%、`contradicted`，受真实 9 件与示意 16 件、用户移动箭头和删除卡片 CTA 等差异影响，不能称为像素还原通过。盖毯样例封面与标题不一致仍是既有内容缺陷；照片由 Shopify 管理，不能从页面完成推导出内容正确或公开商用权利。

**Key Characteristics:**

- 暖白底、浅色分类面与炭黑正文形成稳定层级。
- Shopify 作品图片与有来源的手作插画表达材料与作品；针目图解保留在其适用的历史组件中。
- 展示标题有重量，流程标签较轻，手机主说明与主要操作保持可读。
- 当前首页以连线和波浪串联，分类作品行平铺，帮助与页脚使用浅奶油纸面，导航使用陶土动作色；叠压流程纸面属于保留的历史 B 组件。
- 简体中文、日文、英文文案保持可编辑，图像承担材质与图解。
- 当前 Project 详情以名称、宽幅作品图和购买意图组织首段；制作入口随教程预览顺读可达，生成示意保留披露。历史 sticky 首屏合同不再约束双模式页面。
- 部分供给清单以细线顺读，商品与购物车保留来源作品和必要参考说明。
- 当前 Project 材料与可选工具共用细线清单，采购规格随后展示，自备其他材料以文字保留；视觉权重不改变 Shopify 商品真值或自愿购买边界。

Issue #34（2026-09-07）在现有首页视觉世界内采用用户指定的第二轮方案 2，替代详情的历史 `paper_flow` 构图。当前详情使用名称、宽幅作品图、按实际能力显示的「买成品 / 自己做」入口、采购控件和同页教程；首页增加同源购买能力标签与筛选。本次文档依据 `sections/yarn-project-detail.liquid`、`assets/yarn-project-modes.css`、`assets/yarn-header.css`、`sections/yarn-project-library.liquid`、`assets/yarn-project-rows.css` 与对应 capability、材料和购买 snippet。documenter 已打开本轮[桌面](.impeccable/review/34-project-modes/desktop.jpg)、[手机](.impeccable/review/34-project-modes/mobile.jpg)、[comp 尺寸](.impeccable/review/34-project-modes/comp-size.jpg)截图；最后一张是较早的布局对照，旧外跳字形不作最终图标依据，最新桌面 / 手机图与源码显示同页教程入口已移除该箭头。

本次记录是实现事实，不是 gate 通过证明。方向与范围见[当前 surface brief](.impeccable/surfaces/sections-yarn-project-detail-liquid.md)，最终状态以独立 [finish review](.impeccable/review/34-project-modes/finish-review.md) 及本轮 verdict 为准；静态 hero gate 的解析 / 测量限制不能由文档关闭。真实 SKU 数量、教程图文入口和随内容增长的位置适配不被改写成逐像素匹配。本文不认证三语、后台编辑、真实供货、人工验收或生产发布已经完成；演示图文仍属于受保护内部原型。

## Colors

色彩以接近纸面的中性底为主，柔色面区分内容角色，深色文字承载阅读；数值以前言令牌为准。当前新页面优先复用 `surface`、`ink`、`muted`、`line`、`butter`、`project-row-action`、`action-soft` 与灰蓝焦点；它们分别对应代码中的同名或语义 `--yarn-*` 角色。`paper`、`coral`、`butter-action`、旧柔色分类面与选中粉色保留兼容其已有组件，不是新页面默认调色板。局部插画描边、禁用态与滚动条值保留在 token 源码及组件说明，不为消除 detector 提示全部升级为全站色阶。

`.impeccable/design.json` 补充组件展示片段、阴影、动效和断点。其色阶条按已提取颜色合成，仅供面板比较，不是新增的发布色板。

### Primary

- **奶油黄**（`butter`）：当前串联 Hero 胶囊主按钮与底部波浪；`primary-hover` 和 `primary-line` 为其悬停与边线。**动作浅黄**（`butter-action`）仅保留旧独立套件动作。
- **珊瑚色**（`coral`）：尚未迁移的历史购买骨架焦点与已有动作强调来源；本轮共享导航、页脚及首页已使用灰蓝焦点。
- **行动陶土色**（`project-row-action`，代码 `--yarn-action`）：作品行链接 / 箭头、导航交互、帮助动作、页脚链接与表单按钮共同采用；`action-hover` 为轻量按钮的浅底悬停。
- **Mew 陶土橘**（`mew-terra`）：MewoolMew 猫标、字标、Hero 连线与作品箭头轮廓使用的深暖橘（代码 `--yarn-thread`）；装饰轮廓色不直接用作小字号动作文字，也不表示价格、库存或促销。
- **选中暖墨**（`selected-ink`）：历史 B 发现类型与搜索光标；当前首页和共享导航 / 页脚输入光标使用行动陶土色。

### Secondary

- **浅奶油动作纸面**（`action-soft`）：Hero 标签、导航选中 / hover、紧凑帮助与页脚共同采用的连续浅面。
- **选中浅粉纸面**（`selected-paper`）：历史 B 展开 / 已选筛选与材料套件标签的底色。
- **粉蓝纸面**（`blue-surface`）：保留旧帮助与图谱组件色系，不再是当前紧凑帮助底色。
- **柔粉、薄荷与浅奶油纸面**（`blush-surface`、`mint-surface`、`cream-surface`）：保留旧图谱组件的已确认色系。各版分类插图按对应 surface 使用局部色面，不能将旧色值或旧大分类卡当作当前外观。
- **灰蓝墨色**（`indigo`，共享焦点 `--yarn-focus`）：当前导航、页脚、Hero、作品行与紧凑帮助的键盘焦点；不混同陶土 hover。历史购买骨架仍有自身强调与焦点覆盖。

### Neutral

- **暖纸**（`paper`）：共享页面底层。B 主区域使用暖白表面；首屏格纸由图像叠加，不能只凭底色判断最终纸感。
- **暖白表面**（`surface`）：导航、发现区、搜索、筛选和帮助区外层的连续底色。流程纸面使用近白半透明层。
- **炭黑**（`ink`）与 **发现炭黑**（`discovery-ink`）：分别用于共享正文 / 首屏和发现区内容；**柔灰**（`muted`）为辅助说明及当前共享字段边线；`copy` 是 Hero 说明文字。
- **暖灰细线**（`line`）：共享导航、购买骨架和控件边界。B 筛选与标签另有低对比暖灰或浅珊瑚边线。

**The 颜色说明角色 Rule.** 浅色面与暖色强调用于分类、选中和动作层级；它们不构成价格、热度、难度或库存的事实证明。

## Typography

**Display Font:** `Yarn Display`，为自托管 Noto Sans SC 当前字符子集，文件实际提供 400 / 600 字重，后备为 Noto Sans SC / sans-serif。

**Body Font:** Theme 配置为 Murecho 400；中文通过语言规则改用前言所列系统中文字体栈。历史 B 首屏、当前发现标题与作品标题使用展示字体；导航、紧凑帮助与页脚标题也使用展示字体；正文继续继承 Theme / 中文字体栈，不能宣称整站已切换同一自托管字体。

**Character:** 主标题使用较重黑体感，流程与卡片标题更轻；字号随用途调整，没有固定倍率的全站阶梯，也没有独立等宽标签字体。源码中的 500 字重是请求值，不表示仓库另有一份 500 字重字体文件。

### Hierarchy

- **Display**：`display` 与 `display-mobile` 保留历史 B 首屏角色；当前串联 Hero 的流式标题及三语上限见 Layout 和对应首屏 brief，不把旧值描述成当前标题。
- **Headline**：`headline-discovery` 保留历史 B 的居中发现标题。当前分类行区域标题左对齐，桌面使用 clamp(2.5rem, 2.5vw, 3.2rem) / 1.4，749 px 以下为 2.5rem；当前通过 `shared-section` / `--yarn-type-section` 表达可复用的 Section 标题角色，手机覆盖仍属于当前页面。
- **Title**：`title-work` 保留历史 Product 卡角色；当前首页 Project 名称同样请求 1.65rem / 500，但行高为 1.5，749 px 以下为 1.5rem，允许完整换行。分类行标题桌面为 2.2rem / 1.5，手机为 2rem；图名层级不新增全站字号阶梯。
- **历史 Project Title（Issue #23）**：详情桌面使用响应式展示标题；749 px 以下使用 `title-project-mobile`，与完整作品图并排，完整换行显示 Project 名称。简介为 1.3rem / 1.4，内部演示披露为 1.2rem / 1.5，均保留全文；这些是该手机首段的局部阅读层级，不推广为全站正文尺度。源码 rem 依宿主根字号缩放，不把当前浏览器换算值写成固定像素规范。
- **历史 Project Preparation（Issue #28）**：主毛线名称在桌面使用 `project-yarn-title`（2.1rem / 1.35），749 px 以下使用 `project-yarn-title-mobile`（1.75rem / 1.35）；辅助区标题为 1.7rem，辅助条目名称为 1.55rem。四项只服务作品详情的“主毛线 / 辅助清单”信息差，不建立新的全站字号阶梯。
- **Body**：`body-zh` 保留原有帮助 / 内容组件正文角色。B 首屏说明使用流式字号，手机为 `body-hero-mobile`；首页搜索桌面为 1.5rem、749 px 以下为 16px；导航搜索和页脚邮件输入明确为 `shell-input`（16px），不把它误写成全站正文。
- **Shared Control / Meta**：`shared-control` 为导航与紧凑帮助动作的 1.5rem；`shared-meta` 为语言选择及页脚辅助信息的 1.3rem。页脚标题桌面 2.2rem、手机 2rem，帮助标题桌面 2rem、手机 1.6rem；这些组件覆盖保持各自阅读密度，不添加一个新全站字号阶梯。
- **Label**：流程桌面为 `label-flow`，手机为 1.4rem；历史 B 手机分类、筛选、查看材料和联系动作同为 1.4rem，商品类型入口为 1.6rem。当前首页分类标签桌面为 1.55rem，手机为 1.4rem；日文手机标签单独为 1.25rem，以保留短分类完整词语，不能将其推广为通用正文。浏览全部和行内展开桌面为 1.4rem、手机为 1.3rem。计数、内部演示说明与套件身份标签保留辅助文字尺度，不升级为全站正文标准。

Issue #34 的局部字体覆盖来自 `yarn-project-modes.css`，只属于该 surface，不新增全站字号阶梯：标题为 clamp(2.7rem, 5.9vw, 4rem) / 1.25，749 px 以下为 2.7rem；段标题默认 2.2rem / 1.4，手机 1.9rem，750–989 px 为 2.6rem / 1.25。意图卡标题默认 1.8rem / 600，手机 1.7rem，中间宽度为 2.2rem；材料条目标题默认 1.7rem / 1.5，中间宽度 2.1rem；规格标签为 1.3rem、所选合计 2rem / 500、开始制作 2.1rem / 600。辅助小字按现行代码记录，不能把 1.1rem 演示说明或标签视为未来正文的推荐尺度。

Theme 的 `--font-body-scale` 为 1.0，但源码 `rem` 仍取决于宿主根字号。本轮用户 Chrome 实测 `document.documentElement` 根字号为 12.5 px；这只是当前预览环境证据，不是全站默认。新增文案仍须检查三语断行，不能把源码 rem 在未知根字号的环境中直接当作固定 px。

字体授权见 [Noto Sans SC OFL](docs/qa/noto-sans-sc-OFL.txt)。当前子集不承诺覆盖未来新字、全部日文或任意输入；新增文案须检查 fallback。

**The 标题与正文分工 Rule.** 自托管展示字服务标题识别，正文优先语言覆盖与阅读；字体来源、声明字重和实际覆盖范围分别核实。

## Layout

2026-09-07 首页采用用户批准的毛线串联构图，替换历史 B 的首屏照片与三步叠压纸面。首屏画布最大 1340 px、桌面宽高比 1.2；文案居左，中央作品节点最大，右上毛线、右侧工具、右下教程书按相对位置形成连续路径。四张对象插画使用 `contain`，作品中小猫与打开的书必须完整可辨。手机在同一画布中交错布置文案和节点，保留三语正文与标签的净空。具体位置只适用于首页，不作为其他页面模板。

本次实物复核为三语 1440 / 390 px、英文 320 px 与中文 768 px，独立 [局部 finish verdict](.impeccable/review/13-connected-landing/layout-finish-review.md) 为 ship。新增首屏颜色为正文 `#4a4b48`、圆框 `#e9bd51`、标签 `#fff9e9`，沿用暖白 `#fffefa`、奶油黄 `#f8e5a9` 和连线赭色 `#bf5a38`。圆面使用 1 px 轮廓与 6 px 半透明奶油黄外圈，标签为胶囊；无叠压纸卡阴影。标题按画布宽度流式缩放并为日英调整上限，手机日文工具标签和 320 px 英文标签保留完整短语。这些是首屏局部尺寸，不扩充全站字号规范。资产来源见 [生成记录](.impeccable/review/13-connected-landing/asset-provenance.md)。

复用的空间语言是居中内容、图文之间的清楚净空与按内容角色分配密度。当前作品行、紧凑帮助与页脚共用最大内容宽度 1320 px，两侧 gutter 在 990 px 以上为 48 px、750–989 px 为 24 px、749 px 以下为 16 px。导航使用同一 gutter 与内容上限，外层最大宽度包含两侧内距。历史 B 发现区仍为最大 1160 px、历史流程纸面为 1080 px；其余购买骨架保留 Theme 当前 1300 px page-width，不全局覆盖 `.page-width`。首页 Hero 艺术画布的 1340 px 与独立定位不纳入共享容器。

共享 spacing 使用 4 / 8 / 12 / 16 / 24 / 32 / 48 px 角色，已由导航、帮助与页脚消费；不据此改写旧 Project detail 的所有局部间距。新页面接入与加载顺序见 [首页设计系统接入](docs/design/home-system.md)：`yarn-design-tokens.css` 在旧 `yarn-prototype.css` 前加载，导航样式随后，`yarn-foundation.css` 统一限定范围内的交互，页脚与页面 CSS 各自掌管构图。字体与共享值只在 tokens 定义，foundation 不全局改写所有按钮、输入或页面容器。`work-media` / `--yarn-radius-media` 当前供作品卡封面和详情封面使用；制作准备纸面的 14 px 仍是局部面板值，没有因同值而完成媒体角色迁移。

当前首页在全局导航与页脚之间保留首屏四节点路径、一体化作品发现、紧凑购买前帮助三个主区域。旧分类大卡、独立一团套件、季节大卡与旧目录 Section 的设置保留但已禁用；它们不是当前首页的中间段。首页合同不推广为全站必须三段的规则。

当前首页分类入口保持四项一行，桌面与搜索左右排列，749 px 以下先搜索再分类。作品行在 990 px 及以上为四槽、750–989 px 为三槽、749 px 以下为两槽，横向间距分别为 24 / 20 / 16 px；这同时约束滚动轨道和展开网格。分类行之间桌面留 44 px，手机留 30 px。短行按真实内容自然留白，不用复制作品填满槽位。

手机保住主说明、主要操作与四节点标签净空；对象插画完整显示，不得覆盖正文。装饰定位和当前标题断行留在 surface brief 与代码，不作为其他页面的绝对定位模板。

首页 Project 库当前采用上述分类行合同；作品媒体宽高比为 1.12，14 px 圆角，封面通过 cover 填充，不宣称每张图片完整展示。以下两段保留 Issue #23 / #28 的历史详情布局，已由 Issue #34 替代：详情桌面首段为约 1.05:1 的作品图 / 文字双栏，之后回到最大 760 px 的单列阅读流。749 px 以下的 `paper_flow` 首段先以 112 px 作品图与完整标题并排，列间距 14 px，图像 `contain` 保住完整作品；简介、事实和演示披露随后各自跨满两列，后续保持单列顺读。事实按最小 84 px 自适应分列，以 8 px 间距和上下留白收紧排列，披露只合并换行、不隐藏内容。三语 390×844 首屏中，完整标题、简介、必要事实、演示披露以及“制作准备”标题与首条有意义的信息均在 sticky CTA 上方可见。这个首屏合同只属于作品详情，不推广成其他页面的高度公式。

主毛线纸面同样限制在详情的 760 px 单列阅读流。桌面内距 28 px，主毛线图在 104–128 px 轨道中按 128 px 显示，图文间距 24 px；749 px 以下纸面内距改为 20 px / 18 px，主毛线图固定 104 px，与名称和供给状态以 14 px 列距并排，规格、商品、数量、操作和说明随后跨满可用宽度。辅助区在桌面 / 手机分别距主纸面 34 / 28 px，56 px 配图仅作可选线索，每条以 18 px 上下留白和细分隔线顺读。本轮 1440×900 与 390×844 的中、英、日路径均无横向溢出；这些数值是 Project detail 的已实现响应式事实，不是全站容器或媒体尺寸令牌。

Issue #34 详情共用 1320 px 内容上限与响应式 gutter。990 px 以上，作品图 / 操作列比例为 1.15:1，列距 48 px；简介留在左侧图片下方，右侧按能力展示模式、采购与教程预览。989 px 以下改为单列，顺序为作品图、模式内容、简介，最终行距为 16 px；390 px 两侧留 16 px。标题始终在布局之前，作品封面宽高比 1.87、cover 填充；教程预览为 3.12，不承诺全图无裁切。制作说明与完整教程在后续最大 840 px 阅读区内顺读，不把样例 SKU 数、全文长度或教程在第几屏出现写成固定高度合同。

移动购物车条目使用两列三行网格：8rem 商品图贯穿三行，列间距为 1.2rem，右列依次承载标题事实、数量与删除、行总价。数量步进器固定为 14rem 的 flex basis / min-width / width，不能因长标题或抽屉宽度退化为缺少当前数量的残缺控件；在本轮实测 12.5 px 根字号下分别呈现为 100 px、15 px 和 175 px，但这些换算值不升级为规范。第二条目必须能在抽屉滚动区到达，固定 footer 不得永久遮住它。

## Elevation & Depth

当前首页作品行平铺且无外框阴影，帮助与页脚以浅奶油面及细边线区分，串联 Hero 不使用叠压纸卡阴影。历史 B 仍保留柔纸叠层：流程纸面使用轻扩散阴影，自定义筛选展开面板因覆盖结果区而使用更清楚的扩散阴影；这些不是当前原生 details 筛选的默认深度。历史 Project 主毛线纸面不用新增阴影，只靠暖白表面、14 px 局部圆角、细边线和内距建立一层焦点；辅助清单回到无卡片的分隔线。共享焦点外圈是交互状态，不是卡片深度。

Issue #34 的意图卡、材料清单、成品与旧数据购买面板同样不增加阴影；暖白底、16 px 面板圆角和细线建立分组，选中卡以陶土色边线和浅奶油面表示状态。

### Shadow Vocabulary

- **历史 B 流程纸面**：`0 8px 20px rgba(127, 103, 82, 0.05)`。
- **历史 B 筛选展开面板**：`0 12px 28px rgba(103, 81, 68, 0.14)`。
- **保留的旧内容纸卡**：`0 20px 54px rgba(112, 94, 73, 0.08)`；适用于原有独立套件组件，当前首页未显示。
- 旧图谱、分类抬升与旧搜索阴影仍留在对应组件实现中，不作为当前分类作品行的默认状态。

**The 柔纸叠层 Rule.** 深度来自浅面差与低透明度扩散阴影；按实际角色区分平铺内容和覆盖面板，不把旧大卡阴影施加到所有新内容上。

## Shapes

当前首页以柔圆角搜索框、作品照片与自然插画轮廓组织形状。四分类图标为带原图柔色圆面的一体 raster，外部容器透明、无额外圆角裁切，图像以 contain 完整容纳，100% 填入容器并使用 normal 混合；桌面图位上限 128 px，手机上限 96 px，随四等分可用宽度收缩。历史 B 小圆针目 plate 不再是当前首页图标。帮助条保持中等柔圆角，保留的套件标签仍为小圆角粉色标签，不是按钮。

共享 Rise 购买控件保留小圆角，旧暖黄动作保留胶囊及较宽圆角形态；这些既有形状没有被全站禁止。历史 B 筛选为圆角矩形触发器；当前 Project 高级筛选使用原生 details / select，按实际角色描述。

Project 详情的主毛线图使用 `project-yarn-image`（10 px），辅助清单可选缩图使用 `project-supporting-image`（8 px），外层主毛线纸面沿用 14 px 圆角。这些局部圆角配合 128 / 104 / 56 px 的不同图像权重，不替代 `work-media`、搜索框或全站卡片的既有形状。

细线图标保持线性轮廓，当前搜索、箭头和展开提示使用内联 SVG path。四分类手作插画、既有针目与线团问号是有来源的 raster；分类标题、作品 / 商品名称及操作文字保持 HTML。完整图解轮廓与下方文字净空优先于填满容器。

## Components

### Buttons

当前分类行用图片与名称组成一个 Project 详情链接，不再重复逐卡“查看作品”CTA。浏览全部为页内链接；各行“查看全部 / 收起”为原行展开按钮。双箭头放在该行图片与名称下方、右对齐，44×44 px 圆形触控区，陶土描边与动作色；只有溢出时出现，端点禁用，展开后隐藏箭头。禁用态采用 token 源码中的 #8c8880 文字与 #d3cfc7 描边，不提升为推荐内容色；hover 复用 `action-hover`。轨道支持原生横向滚动，减少动态偏好下按钮滚动不使用平滑动画。历史 B 的查看材料、类型按钮组和对应选中线保留在旧组件中。

当前 Hero 主动作使用 `button-hero`：奶油黄胶囊、桌面至少 48 px 高、手机至少 44 px，高亮仅改变背景，无抬升。

旧 `button-primary` 与 `button-pill` 令牌保留已确认的暖黄动作形态及 hover 变体，当前首页不显示旧宽幅浏览按钮与独立套件按钮。不能从这些保留令牌推导出 B 需要新增一个宽幅 CTA。

当前首页、导航与页脚的共享键盘焦点为灰蓝色 2 px 轮廓、4 px 外偏移且无额外阴影；44 px 是已接入图标、语言选择和动作的最小触控角色。尚未迁移的购买 / 历史区域保留原焦点，不声称整个 Theme 已完成迁移。联系链接 hover 使用下划线，不新增抬升动画。

### Chips / Tags

材料套件身份标签使用 `kit-label`：柔粉底、浅珊瑚细边和深暖文字，只在实际商品标签识别为套件时显示。它不表示难度、推荐度或促销。类别导航的圆面与套件身份标签职责不同，不混用。

Issue #34 的首页能力筛选采用可换行胶囊按钮，44 px 最小触控高度、1.4rem 字号；`aria-pressed` 选中态用行动陶土色边线与浅奶油底。作品卡标签使用同一语义，成品 / 材料可同时出现；两种能力均无显示灵感。标签不是库存或齐套证明，售罄商品仍可保留对应能力。卡片标签的 1.1rem 是当前局部元信息值，不作为全站字号令牌。

### Cards / Containers

当前首页作品卡以 Shopify `yarn_project.cover` 与完整名称为主体，媒体宽高比为 1.12，cover 填充，下面保留名称；Issue #34 再附同源购买能力标签。分类、难度、摘要与重复 CTA 不占首页卡片空间，事实继续在详情展示。Hover 为名称下划线，无外卡框、阴影或抬升。历史 B Product 卡的 0.93 媒体比例、contain 与“查看材料”仍留在旧组件，不能作为当前分类行的卡片合同。

紧凑帮助条由线团问号、短标题和联系入口组成，浅奶油底、浅黄细边、16 px 圆角且无阴影，桌面横排；599 px 以下图标与标题并排，联系动作落在标题下方，保留自然换行。当前未配置 LINE 主链接，实际显示联系页入口，不能据此声称在线聊天或 LINE 服务已接通。

### Inputs / Fields

当前首页搜索为暖白底、柔灰 1 px 边线，桌面和手机均为 24 px 圆角、最小高度 56 px，内距为 12px 58px 12px 22px；最终级联覆盖旧 54 / 50 px 高度与 16 / 14 px 圆角。右端为有可访问名称的 SVG 搜索提交按钮。搜索留在首页，筛选同一完整 `yarn_project` 作品库；分类快捷入口清除条件并定位对应作品行，不再作为历史 Product 类型按钮。

高级筛选使用原生 details / summary 与带标签的 select；当前可按作品类别、难度、教程类型及可用扩展事实缩小结果。清除恢复作品库；无结果明确给出说明，分页加载失败提供重试，不能在全库未加载时暗示已搜索完整内容。这里不继承历史 B 自定义浮层的方向键 / Home / End 合同，也不建立未实现的全站表单规范。

### Navigation

导航在 Issue #20 中沿用首页视觉世界调整：暖白底、暖灰底线，桌面最小高度 84 px，1339 px 以下折叠为菜单、字标、搜索与购物袋，599 px 以下最小高度 68 px。较早折叠为三语长文案和浏览器放大字体留出空间。作品入口与当前页使用浅奶油胶囊和行动陶土色，hover 延续同一浅面与文字色；桌面导航和手机菜单使用 Yarn Display，桌面为 `shared-control`，其他入口保持文字链接。图标统一为 24 px 轮廓和 44 px 触控区，购物袋继续打开原有购物车抽屉；页内导航会关闭手机菜单、解锁滚动并把焦点交给目标区域。

Issue #34 的详情在 989 px 以下使用局部紧凑导航：最小高 56 px、返回触控区 44 px、居中 1.6rem 页名，右侧保留搜索和购物车；此范围内隐藏公告、字标与菜单，并隐藏重复的页内返回链接。990 px 以上继续采用标准共享页眉及其既有 1339 px 折叠行为。返回使用已有 SVG 箭头，选中勾选与工具展开也使用已有 SVG，不以 Unicode 字形代替图标。

MewoolMew 的导航 Logo 直接继承用户选择的第一款橘色猫抱毛线球图稿：歪头闭眼、橘色斑块、环抱线团和回环线尾，配合同一张图中的圆润小写 `mewoolmew` 字标。正式名称与无障碍名称仍为 `MewoolMew`，三语共用。桌面图像显示区为 252×57.27 px，390 px 手机为 184×41.81 px；保持图片比例，以 `object-fit: cover` / `object-position: 50% 42%` 取出原始图像的有效内容，窄手机按可用空间收缩。暖白背景通过 multiply 混合融入现有页眉；这不是通用深色背景资产。页眉仍为桌面 84 px、手机 68 px，Logo 链接保留至少 44 px 高的触控区。Shopify 上传 Logo 仍优先。源码为 `assets/mewoolmew-logo-reference.png`、`snippets/yarn-wordmark.liquid`、`assets/yarn-header.css`；Shopify CDN 提供 600 / 900 px 图片，来源和生成过程见 `docs/brand/logo-reference.md`。此事实已由本轮三语桌面 / 手机截图复核。

桌面导航、手机菜单与页面 Section 必须使用同一整页语言。菜单项原文及译文以 Shopify Navigation 菜单资源与 Translate & Adapt 为唯一来源，链接目标继续来自同一菜单；不得在 Liquid 写死英文，或另建一份硬编码菜单覆盖缺失翻译。中文页出现 `Home / Catalog / Contact` 等英文回退属于待修内容，不能作为三语验证通过的状态。当前 Main menu 的中文原文为“首页 / 商品目录 / 联系我们”，日文译文为“ホーム / 商品一覧 / お問い合わせ”（首页 / 商品目录 / 联系我们），英文译文为“Home / Catalog / Contact”；这三项是可编辑菜单内容，不是全站固定栏目数量。

语言菜单继续使用已有本地化链接和 Shopify 的可用语言集合。Issue #23 英文已按用户当次授权开放；本版中文、日文、英文的作品叙述、材料清单、教程锚点及购买关键操作已按主代理 QA 记录验证。语言开放和关键路径可用不等于整个目录已本地化：运营 Product 标题与部分既有 Theme Editor 文案仍为日文，购物车公开属性标签仍包含 `Project` / `Component` / `Reference`。这些边界须在运营翻译中逐项维护，不能由控件语言推定商品内容已经翻译。

### Footer

共享页脚以浅奶油纸面和暖灰分隔线收尾。桌面品牌图与订阅区各占一列，749 px 以下改为品牌、订阅、语言和政策的单列顺序；内容与作品 / 帮助容器对齐。Logo 复用同一获批原图，桌面宽 252 px、手机宽 200 px，不以文字近似或新绘图替换。

邮件字段与导航搜索继承暖白底、24 px 圆角、56 px 最小输入高度、16px 输入文字；语言选择至少 44 px 高，展开面板为暖白底、暖灰线与 16 px 圆角。政策和菜单链接使用行动陶土色及至少 44 px 高的可达区域，表单成功 / 错误文案保留 Shopify 语义。

页脚继续使用 Shopify `customer` 表单、`contact[email]` 与 `newsletter` tag；标题、显示开关、运营 block、语言 / 国家、政策与支付图标来自原设置及 Shopify 数据。当前截图的内容数量不是固定模板；禁用订阅时不显示输入表单。本轮仅确认视觉与既有表单边界，不宣称真实订阅发送或后台编辑已验证。

### Project Library / Detail

当前 Issue #34 的卡片仍进入统一 Project 详情；首页购买能力筛选由同一 capability snippet 驱动，成品 / 材料筛选可将选择传入详情。两种方式均存在时才显示两张并列意图卡，默认自己做；仅一种时直接显示对应内容，没有购买能力则显示灵感与已有说明 / 教程，不制造空切换器。模式切换保留同页已选规格，不表示已购买或创建制作进度。

意图卡继承暖白、浅奶油、陶土色与 Yarn Display；默认 1 px 边线、选中 2 px 边线并减去对应内距，避免状态切换改变外框尺寸。选中同时显示已有 SVG 勾选与 `aria-selected`。390 px 仍为两张并列卡，最小高 78 px；默认最小高 98 px，中间宽度 750–989 px 为 126 px。作品与线团插画只解释选择，文案是可本地化 HTML，插画来源不等同商品供货证明。

自己做模式把材料与工具放在同一细线清单；材料图名可链接至来源商品，工具以原生 details 按需展开采购，其他自备材料在清单后用文字保留。规格少于等于 8 个且多于 1 个时使用带可见选中态的 radio 胶囊，超过 8 个使用带标签的 select，只有 1 个时不显示多余选择。数量与合计同行，金额、数量约束和可售状态来自 Shopify Variant；不复制一套作品价格或库存。材料加购用浅奶油面，成品加购用陶土实底，禁用态用纸灰面及文字说明；操作反馈保留可读状态区。

教程预览与奶油黄「开始制作」按钮均锚定同页 Tutorial，处于正常文档流，不再采用旧版深暖红 sticky 按钮。已有材料可直接进入，不以购买为门槛；页内教程不附外跳箭头。外部教程 / 视频来源仍使用真实链接并提供来源说明，不伪装成页内播放器。原生链接、按钮、输入与 summary 延续共享灰蓝焦点轮廓；实际样例内容长度不转化为固定屏数规则。

### Project Materials / Purchase Context

以下制作准备段落为 Issue #28 的历史主毛线布局合同；Issue #34 当前清单与采购控件以上节为准。商品真值、自备说明和商品 / 购物车来源边界仍沿用。

制作准备按 `yarn_material.component_type` 形成两个语义层级：只有精确值为 `毛线` 的条目进入单层主毛线纸面；`工具`、`其他材料` 以及没有类型的旧条目都留在辅助清单，绝不按标题猜测身份。没有主毛线时不渲染空纸面，辅助区恢复通用配件标题；旧 `materials` / `tools` fallback 继续保留。这个分类只控制信息呈现，不复制 Product 价格、库存或可售状态。

主毛线纸面先列图像、名称和供给状态，再列规格、商品事实、采购表单与备注；配件自身图片优先，缺失时才回退到精确 Variant / Product 图片。工具与其他材料下沉为无阴影、无嵌套卡片的紧凑细线清单，名称、状态、规格、可售商品与备注仍完整保留；缺图时保持纯文字路径。准备概述继续说明本店只提供其中一部分，自备和信息待补项不能因视觉降级而隐藏，也不能把页面称为完整材料包。教程区的文字回链定位同一作品的材料与工具清单，查看教程不要求购买。

只有“本店提供”且引用有效 Shopify Variant 的项目显示真实商品规格、Shopify 价格和“查看原始商品与其他规格”。可售时再显示采购数量与深珊瑚单项加购按钮，售罄显示文字状态并省略加购，自备 / 待补项不显示购买入口。采购数量与实际制作物理用量分别说明；每次只提交顾客明确选择的一项，工具不会自动加入。数量遵从该 Variant 的最小值、增量和上限。加购中按钮禁用并显示等待文案；成功提供购物车入口，失败显示说明；结果不确定时保留购物车核对入口并禁用重复提交，不自动重试。

生成毛线图只有在相邻内容明确披露其为内部示意时使用；图像加载、视觉突出或 `component_type=毛线` 都不能证明成分、线径、克重、色号、用量、替代适配、真实供货或公开素材权利。当前 9 个 Active 内部作品各有一条已分类主毛线与可加载图片，是本轮原型数据状态，不是未来作品必须恰好一条主毛线的模型限制。

原始商品页在商品标题上方以两条细线夹住来源区，使用 1.4rem 文字、12 px 上下内距及自然换行链接，延续暖纸与灰蓝焦点。只有有效同源作品路径提示且商品身份对应时才显示；普通无来源参数访问不显示。来源是可修改的导航提示，不证明材料适配、库存或商业关系；文字通过 `textContent` 写入，规格切换保留来源参数，实际价格、库存和所购 Variant 仍由 Shopify 决定。非同款成品在来源区紧接显示“仅作成品参考，并非本教程同款”的说明，不能用回链暗示同款供货。

材料加购与来源商品页加购均把作品、适用的配件名称及非同款参考说明留在购物车条目中。购物车抽屉和整页根据保存的 Project handle 重新读取 Shopify 中可见的作品，生成返回对应作品的链接；不直接信任顾客可改的 URL，不把文字属性当适配认证。来源与参考说明保持完整阅读和滚动可达，不能让其挤掉数量或删除控件。当前英文首页作品 → 同名详情 → 成品商品 → 购物车的连续性，以及材料规格切换后的来源保留，均以本轮主代理 QA 记录为行为依据。

### Mobile Cart Drawer

390 px 抽屉中的每个条目使用同一两列三行结构。标题最多三行但保留 Shopify 链接原文；第二行完整容纳 `− / 当前数量 / +` 的 14rem 数量步进器与删除操作，第三行右对齐行总价。长标题可以换行或视觉 clamp，但不能挤压数量、删除或价格；抽屉内容区可滚动，最后一项保留 2.4rem 底部余量。上述尺寸依宿主根字号缩放，不固定换算为 px。

### 手作插画、图解与作品图像

当前首页四分类分别使用花朵包袋、绿色围巾、靠垫与盆栽、兔子玩偶插画，资产为 `assets/yarn-category-{bag,scarf,home,toy}-approved.png`。它们直接从本轮已批准 `approved-home.png` 裁取，未重新 AI 生成或重绘；来源坐标与原稿提示词见 [图标来源](.impeccable/review/13-category-rows/icon-provenance.md)。用户“不用再生成图片”与随后“手作 icon 和原图对齐”的明确指令在同一范围内执行，不按默认 plate 流程重新生成。Shopify block image picker 可替换插图，分类标签继续由 locales / heading 输出，不烘焙进图像。

Documenter 已打开新版中文 1440 px 与日文 390 px 全页截图：四种对象与 HTML 标签清楚可辨，日文玩偶标签完整单行；已作废截图中的黑色 Shopify preview bar 是平台预览界面，不是 Theme 设计组件。其余三语截图及操作验证依本轮 verification 记录，不称为本角色独立浏览器亲测。旧针目图像保留在历史资产中，不能再写成本轮“复用 plate”的最终事实。

流程插画解释选择、购买与制作，线团问号说明购买前帮助；它们不是已交付 Tutorial 或真实供货证明。作品照片继续由 Shopify 管理。其他页面可以继承材料温度、细线语言和真实图片，不必复制四分类或其固定位置。

本次串联首屏为静态插画和 SVG 连线，已移除旧三步入场与箭头动画。当前分类链接 hover 只为标签加下划线；原生轨道保持直接滚动，行按钮翻页在减少动态偏好下取消平滑动画。其他页面的历史动画不因本次复核而取得全站认证。

## Do's and Don'ts

### Do:

- **Do** 以暖白纸面、柔色分类面、炭黑文字和细线语言延续已批准的视觉世界。
- **Do** 让手作插画与针目图解在各自使用场景完整可辨、标签独立可读，并让装饰避开正文。
- **Do** 保留 Shopify 管理的 Project / Product 图片与标题、装饰图解和可编辑三语 HTML 文案各自的职责。
- **Do** 在新增文案后检查字体覆盖、三语断行、手机可读性、焦点和触控路径。
- **Do** 让桌面导航、手机菜单、Section 与页脚遵从整页语言；在 Shopify 菜单资源维护原文及译文，逐语检查可见文本，不以英文回退替代缺失翻译。
- **Do** 从对应 surface brief 决定构图，从本规范复用已实现的材料、字体角色和组件语言；代码按 [接入指南](docs/design/home-system.md) 消费共享角色，保持 tokens 的单一来源。
- **Do** 在当前 Project 详情保留完整标题、演示披露和按真实能力显示的模式入口，教程动作位于正常阅读流；不复用旧版 sticky 首屏高度合同。
- **Do** 让移动购物车每个条目的减号、当前数量、加号、删除与行总价完整可见且可滚动到达。
- **Do** 保留自备和待补配件，区分采购数量与制作所需用量，并在商品和购物车中延续来源作品与非同款参考说明。
- **Do** 依据明确的材料类型组织当前清单、可选工具与自备文字；单模式直接呈现内容，无购买能力的灵感仍保留已有教程。

### Don't:

- **Don't** 将普通商品网格主导的电商首屏或 Hoshiami 仿站作为本首页的视觉方向。
- **Don't** 把临时字标、参考商品图、图上品牌或色数文字当作已授权正式品牌资产。
- **Don't** 为匹配 comp 的数量或颜色复制作品、生成假商品照片或修改真实名称；当前内部样例也不能被写成已验证可执行的正式教程。
- **Don't** 将字形箭头、遗留 eyebrow 样式、单处定位补偿、辅助极小文字或未复核的购买页面状态升级为全站规范。
- **Don't** 将首页三主区域、四个分类、Hero 绝对定位或两列移动图库强推为其他 surface 的固定模板，也不要将兼容旧颜色视为新页面推荐色板。
- **Don't** 把局部整改复核、本文档或面板组件片段当作 Comp-first 全部 gate、免密码访客分享、素材授权或正式发布已通过的凭据。
- **Don't** 将本轮局部 verdict、三语操作验证或英文开放扩大解释为全站完整本地化、实际跟做与适配认证、真实供货、咨询发送、旧首页 build gate 或生产发布通过。
- **Don't** 将购物车最终复拍中的第三方店铺参考素材当作发布资产；它只用于本地视觉核对，不上传或提交。
- **Don't** 把当前双模式详情的局部字号、图像比例和卡片尺寸，或历史 Project 详情的 2.1 / 1.75 / 1.7 / 1.55rem 字号、10 / 8 px 图片圆角或 128 / 104 / 56 px 媒体尺寸推广为全站令牌，也不要让主毛线的视觉优先级冒充 Kit、齐套或适配认证。
