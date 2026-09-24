# 首页设计系统接入

Issue #32 提取共享规则；Issue #55 将当前首页改为毛线主线与商品卡片家族。视觉事实以最终 `DESIGN.md` 为准；本页说明代码职责与下一页面如何接入。

## 单一来源

| 文件 | 职责与当前使用者 |
| --- | --- |
| `assets/yarn-design-tokens.css` | 字体加载、共享颜色与语义角色、间距、容器、圆角、触控与焦点尺寸；在旧 `yarn-prototype.css` 前全局加载 |
| `assets/yarn-foundation.css` | 导航、页脚、首页 Hero/作品/帮助的焦点与选区；导航与页脚共用字段、语言选择、下拉选项状态；不控制页面构图 |
| `assets/yarn-header.css` | 共享桌面导航、手机菜单、搜索面板与品牌标识 |
| `assets/yarn-footer.css` | 共享页脚品牌、订阅、运营 block、语言与政策的布局 |
| `assets/yarn-hero-b.css` | 三节点首页构图与三语文字扩展 |
| `assets/yarn-cards.css` / `assets/yarn-collection.css` | 商品、内容和出口卡家族；1200px 目录轴与筛选布局 |
| `assets/yarn-product-context.css` / `assets/yarn-project-reading.css` | 原生购买区、商品独立规格区与单列内容阅读 |
| `sections/yarn-line-contact.liquid` | 紧凑帮助条消费容器/色彩/圆角角色，保留非紧凑历史变体 |

颜色的唯一来源是 `design/tokens/colors.json`，`npm run tokens` 生成 `yarn-design-tokens.css` 的颜色段（`BEGIN/END generated colors` 之间，勿手改）、`settings_data.json` 配色方案和 `DESIGN.md` 前言 `colors`。页面只引用语义角色，角色表与规则见 `DESIGN.md` Colors。`--yarn-action` 用于可点击文字，`--yarn-decor-thread` 只用于插画连线；`--yarn-cta-bg` 是奶油主按钮，`--yarn-action-subtle-bg` 是导航选中、帮助和页脚的浅色面；焦点为 `--yarn-focus`，与 hover 分开。

Issue #65 删除了无模板使用的 `yarn-purpose-grid` / `yarn-seasonal-feature` / `yarn-shopping-paths`；保留的 `yarn-project-library` / `yarn-project-discovery` / `yarn-starter-project`（作品库等近期范围）已改用角色，启用前仍需核对三语文案与构图。

## 下一页面的用法

1. 先确定页面职责和对应 surface brief，选择所需的现有角色；不复制首页串联插画或四分类构图。
2. 页面容器按 `width: min(var(--yarn-content-max), calc(100% - 2 * var(--yarn-gutter)))` 对齐，内容阅读宽度可另行收窄。Hero 艺术画布的定位与宽度仍属于首页。
3. 页面样式直接消费 token；只有同一交互意图真实重复时才扩展 `yarn-foundation.css` 的作用范围，不在全局覆盖全部 `.button`、`input` 或 `.page-width`。
4. 沿用 Shopify 原生表单语义、标签、错误与成功状态。新输入框在手机至少保持 16px，交互目标至少 44px，键盘焦点不得被容器截断。
5. 新增共享 token 前检查现有角色；只能在 token 文件定义。更新实际使用说明和适用截图，不能只修改规范而未接入组件。

## Shopify 编辑边界

导航文字与目标继续来自 Navigation 菜单，菜单标题与每个菜单项的日/中/英译文在 Shopify Translate & Adapt 对应菜单资源维护；桌面、手机菜单和页面 section 必须显示同一整页语言，不能在 Liquid 写死英文或用另一份硬编码菜单遮住未翻译内容。Logo 沿用全局上传设置，未上传时使用已批准 MewoolMew 原图。帮助文案/链接来自原 Section setting。页脚订阅标题、显示开关、Block、语言/国家、政策与付款图标仍由原设置及 Shopify 数据决定。

页脚订阅仍使用 `form 'customer'`、`contact[email]` 和 `newsletter` tag；不增加营销承诺，不替换后端处理。本轮复核输入、验证和焦点，不发送真实订阅。隐藏订阅时不应渲染输入表单；未来添加运营 block 时仍使用原有 schema。

## 验证与回滚

`npm run verify` 包含两组系统边界检查：token 必须先于旧原型样式加载；`tests/yarn-color-system.test.cjs` 覆盖所有 yarn 样式与引用 `--yarn-*` 的模板，检查颜色字面量、未定义引用、生成物同步、对比度、未使用角色与近似色。它防止单一来源再次分叉，不替代浏览器视觉复核。

导航与页脚在其他页面共享生效；本次对作品详情和联系页做路径与无横向溢出的抽查，不宣称其他页面正文已完成视觉统一。回滚采用撤回本 PR 或重新选择原未变更主题；未发布预览不等于生产发布授权。

## Issue #55 当前接入

商品家族消费 `text-heading`、`accent`、`border-card`、10px card radius 与 1200px commerce max；卡片标题/规格/价格为 16/14/21px。构图与数据回退见 [当前 surface brief](approved/55-visual-fidelity.md)。

首页出口卡未选择图片时使用当前集合第一件商品主图；内容卡链接指向 `yarn_project` 时可使用其封面，运营选择的图片优先。作品正文缺失时只读取已有关联 Kit 的介绍和步骤，不创建另一份内容真值。三语运营文案仍由 Section setting 与 Shopify 对应资源维护。
