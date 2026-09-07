# 首页设计系统接入

Issue #32 在已批准的 Hero 和分类作品区上提取共用规则。视觉事实以最终 `DESIGN.md` 为准；本页说明代码职责与下一页面如何接入。

## 单一来源

| 文件 | 职责与当前使用者 |
| --- | --- |
| `assets/yarn-design-tokens.css` | 字体加载、共享颜色与语义角色、间距、容器、圆角、触控与焦点尺寸；在旧 `yarn-prototype.css` 前全局加载 |
| `assets/yarn-foundation.css` | 导航、页脚、首页 Hero/作品/帮助的焦点与选区；导航与页脚共用字段、语言选择、下拉选项状态；不控制页面构图 |
| `assets/yarn-header.css` | 共享桌面导航、手机菜单、搜索面板与品牌标识 |
| `assets/yarn-footer.css` | 共享页脚品牌、订阅、运营 block、语言与政策的布局 |
| `assets/yarn-hero-b.css` / `assets/yarn-project-rows.css` | 保留已批准的首页专属构图，只消费共享视觉角色 |
| `sections/yarn-line-contact.liquid` | 紧凑帮助条消费容器/色彩/圆角角色，保留非紧凑历史变体 |

`--yarn-action` 用于可点击文字，`--yarn-thread` 用于插画连线和轮廓；装饰色不可直接当小字颜色。`--yarn-butter` 是 Hero 主按钮，`--yarn-action-soft` 是导航选中、帮助和页脚的浅色纸面。焦点为 `--yarn-focus`，与 hover 分开。

旧 `--yarn-paper`、`--yarn-red` 等名称和值保留兼容，避免商品、购物车和作品详情被全局换肤；不把这批旧颜色都推荐给新页面。现有 Project 详情、购买表单、非紧凑帮助和 Rise 组件还含历史局部值，尚未完成全站迁移。

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

`npm run verify` 包含一个系统边界检查：核心消费者不能重新硬编码颜色、引用必须在 token 文件中定义，且 token 必须先于旧原型样式加载。它防止单一来源再次分叉，不替代浏览器视觉复核。

导航与页脚在其他页面共享生效；本次对作品详情和联系页做路径与无横向溢出的抽查，不宣称其他页面正文已完成视觉统一。回滚采用撤回本 PR 或重新选择原未变更主题；未发布预览不等于生产发布授权。
