---
version: 2
slug: "sections-yarn-project-detail-liquid"
primary_target: "sections/yarn-project-detail.liquid"
related_targets: ["assets/yarn-project.css", "templates/metaobject/yarn_project.json", "snippets/yarn-project-components.liquid", "assets/yarn-project-detail.js", "sections/main-product.liquid", "assets/yarn-product-context.js", "assets/yarn-product-context.css", "snippets/yarn-cart-project.liquid"]
---

# 作品详情 Surface Brief

## Issue #28 毛线优先补充合同（2026-09-07）

用户要求全量审查正式作品，确保每个作品的毛线都作为 Shopify `yarn_material` 条目存在且有图，并将详情中的毛线从通用材料清单提升为第一准备区。YarnPal 只提供“项目后先看主线、规格、颜色和采购”的信息层级参考；本站仍使用已批准的 paper_flow、Shopify Variant 事实与独立购买路径，不复制其视觉系统或整包承诺。

- First yarn: 在准备段落首先显示有语义的 `component_type=毛线` 条目；大图优先读取配件图，次选精确 Variant / Product 图。
- Yarn panel: 单层纸面编辑排版，宽屏为 104–128 px 毛线图与信息 / 采购区，手机先图与名称，再规格、价格、数量和操作。
- Supporting list: `工具` 与 `其他材料` 下沉为紧凑检查清单，保留供给状态和说明，不与毛线抢视觉重心。
- Compatibility: 旧条目缺少 `component_type` 时留在辅助清单；旧 `materials` / `tools` fallback 不变，不伪造毛线身份。
- Boundaries: 图像可以是明确披露的生成示意；载体、用量、替换适配、价格和库存未经证据不补造。

- Scope: Issue #23 受保护内部原型；Read / Operate。
- Authority: 用户批准构图 3（paper_flow）及 AGENTS.md 本轮自主排版例外。
- Comp: `.impeccable/mocks/23-project-paper_flow.png`，只约束移动首屏。
- World: 继承 DESIGN.md 的暖纸、灰蓝细线、珊瑚操作色和现有 Yarn Display；不创造另一套品牌。
- First viewport: 返回作品库、作品图、名称与事实、纸面制作准备；底部开始制作明确定位同页教程，不要求购买。
- Composition: 手机单列顺读，桌面作品图与介绍两列；准备、教程、成品和定制下接。信息以细分隔线与留白组织，不堆叠嵌套卡片。
- Data: 同一 Shopify yarn_project 记录；价格库存与可售配置从真实 Product 读取。没有证据的耗时、用量与适配不补造。
- Behavior: 外部教程明确跳转；图文渐进展开；工具自愿选购；成品与材料路径分开；咨询不下单、不收费。
- Team demo: 当前已发布主题打开演示模式，展示所有有标题的作品；正式上线前关闭该模式，恢复已核实公开作品的完整性检查。
- Finish: 需真实双端、三语、后台修改、购买入口与独立 finish review；本 brief 不是完工证明。

## Direction contract

- THESIS: 同一作品组织制作与购买；先让毛线图、规格和采购路径可信可见，再以辅助清单交代工具与其他材料，不将通用商品列表或齐套门槛当作制作准备。
- OWN-WORLD: 继承暖纸、细线、灰蓝文字与珊瑚操作色；毛线区是一张编辑纸面，辅助清单顺读，不新建品牌或嵌套卡片。
- STORY: 喜欢作品，查看需要什么，按需购买本店提供的部分，再跟随步骤定位对应材料。
- CONTINUITY: 原始商品页携带来源作品；换规格不丢来源，购物车可返回。来源仅作导航提示，不认证适配；非同款成品保留参考说明。
- FIRST VIEWPORT: 保留 paper_flow 的作品图、名称与事实、演示标记；准备与成品入口保持作品身份，制作入口仍到同页教程。
- FORM: 已批准构图 3 的局部扩展；用户确认部分配件销售及 Issue #23 自主排版例外，不运行新方向抽选，无新增 seed key。
- FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
