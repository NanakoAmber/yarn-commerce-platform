# Issue #34 Shopify 演示数据交接

更新日期：2026-09-07

## 范围与隔离

本轮只在 `tutaka-54.myshopify.com` 新增或修改带 `issue34-demo` / `issue-34-demo` 前缀的内部演示数据，并扩展 `yarn_project` 定义。未发布 Theme，未创建订单，未触发付款，也未修改生产订单或退款数据。新增 Project 均使用 `仅内部原型` 发布范围；删除下列演示条目即可回滚数据。

## 定义变更

`yarn_project` 新增两个运营可编辑字段：

- `purchase_modes`（后台标签：购买方式标签）：可多选单行文本列表，允许值 `finished`、`materials`、`inspiration`。
- `tutorial_cover`（后台标签：教程预览图）：单个 Shopify 文件图片引用。

## 主案例：交叉针收纳篮

- Metaobject ID：`279602889017`
- handle：`issue-34-demo-cross-stitch-basket`
- 后台：`https://admin.shopify.com/store/tutaka-54/content/metaobjects/entries/yarn_project/279602889017`
- 未发布 Theme 预览：`https://tutaka-54.myshopify.com/zh/pages/projects/issue-34-demo-cross-stitch-basket?preview_theme_id=189762732345`
- 状态：Active；发布范围：仅内部原型。
- 购买方式：`finished`、`materials`。主案例不含 `inspiration`，以免触发仅灵感保护逻辑。
- 规格：7.0 mm 钩针；雪尼尔毛线建议 2 团。
- 内容：中文简介、简短制作准备及四步图文教程可在上述后台条目编辑；教程作者与来源为“本次内部演示”，视频链接留空。
- 逐项配件顺序：雪尼尔毛线 → 7.0 毫米钩针 → 剪刀与缝合针。
- 作品封面：Shopify Files 中的 `project-blue-basket-cover.webp`。
- 教程预览图：Shopify Files 中的独立素材 `project-blue-basket-tutorial.webp`，不复用作品封面。

## 单模式案例

| 用户路径 | 显示名 | Metaobject ID | handle | 购买方式 |
|---|---|---:|---|---|
| 只买成品 | 蓝色收纳篮成品 | `279603413305` | `issue-34-demo-finished-basket` | `finished` |
| 只买材料 | 雪尼尔篮子手作 | `279603708217` | `issue-34-demo-materials-basket` | `materials` |
| 只看灵感 | 窗边蓝篮子的灵感 | `279603937593` | `issue-34-demo-inspiration-window-basket` | `inspiration` |

三个条目均为 Active、发布范围为“仅内部原型”，并使用独立教程预览图。材料案例的主封面已与教程图分离，分别使用 `project-blue-basket-cover.webp` 和 `project-blue-basket-tutorial.webp`。加上主案例后，可分别覆盖成品＋材料、只成品、只材料和只灵感四种组合。

finished-only 与 inspiration-only 的 `tutorial` 源字段为空，日语、英语也不保留教程翻译；店面不会对这两种模式承诺不存在的完整制作教程。主案例与 materials-only 保留真实制作教程。

## 配件条目

| 显示名 | Metaobject ID | handle | 供给方式 | 关联 |
|---|---:|---|---|---|
| 雪尼尔毛线 | `279602626873` | `issue-34-demo-basket-yarn` | 本店提供 | 雾蓝 variant `54446911979833`，数量 2；“参考用量约 200 克 · 毛线 2 团” |
| 7.0 毫米钩针 | `279602692409` | `issue-34-demo-basket-hook` | 本店提供 | 演示钩针商品默认 variant，数量 1；“需自备或另购” |
| 剪刀与缝合针 | `279602823481` | `issue-34-demo-basket-finishing` | 需自行准备 | 类型 `其他材料`；无商品、无采购数量；“家中已有即可” |

机器 handle 用于隔离和回滚，面向顾客的配件名称不带 `issue34-demo`。

## 演示商品

| 商品 | Product ID | 价格 | 库存 | 备注 |
|---|---:|---:|---:|---|
| 交叉针收纳篮成品 | `10332848193849` | JPY 3,680 | 12 | SKU `issue34-demo-finished-basket`；主 Project 的成品购买入口 |
| 云绒雪尼尔毛线 100g | `10332848554297` | JPY 1,280 | 雾蓝 30 / 粉霞 15 / 米白 12 | 雾蓝 variant ID `54446911979833` |
| 木柄钩针 7.0 mm | `10332848619833` | JPY 980 | 18 | SKU `issue34-demo-hook-7mm`；商品、Project 与配件规格统一为 7.0 mm |

## 运营编辑路径

- Project：Shopify Admin → 内容 → 元对象 → 编织作品。
- 配件：Shopify Admin → 内容 → 元对象 → 作品配件。
- 商品、价格、库存与变体：Shopify Admin → 产品。
- 图片：Shopify Admin → 内容 → 文件。
- 翻译：Shopify Admin → Translate & Adapt。四个 Project、三个配件和三件演示商品已生成并保存英语、日语的面向用户内容；简体中文继续作为源内容。控制分支的 `purchase_modes`、`release_scope`、`category`、`difficulty`、配件 `supply`与 `component_type` 在日语、英语中均保持与源数据完全相同的机器值，不做语义翻译。
- 英语店面复验：主案例显示 `Internal sample`、`Beginner`、`Buy finished`、`Make it`；配件显示 `Chenille yarn`、`7.0 mm crochet hook`、`Scissors and tapestry needle`；毛线变体显示 `Mist blue`、`Blush pink`、`Off-white`。毛线备注明确写为不包工具，不得翻译成“不需要工具”。

## 回滚

删除 Project `279602889017`、`279603413305`、`279603708217`、`279603937593`，三个 `yarn_project_component` 条目及三个演示商品即可撤回演示数据。若不再需要字段，可在确认没有其他条目依赖后，从 `yarn_project` 定义删除 `purchase_modes` 与 `tutorial_cover`；字段删除会丢失对应值，执行前需人工确认。
