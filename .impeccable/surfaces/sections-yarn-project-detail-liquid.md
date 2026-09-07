---
version: 2
slug: "sections-yarn-project-detail-liquid"
primary_target: "sections/yarn-project-detail.liquid"
related_targets: ["assets/yarn-project.css", "templates/metaobject/yarn_project.json", "snippets/yarn-project-components.liquid", "assets/yarn-project-detail.js", "sections/main-product.liquid", "assets/yarn-product-context.js", "assets/yarn-product-context.css", "snippets/yarn-cart-project.liquid"]
---

# 作品详情 Surface Brief

## 当前方向：Issue #34（2026-09-07 用户明确批准）

本节替代下方历史 paper_flow 构图。用户明确选择第二轮方案 2，撤回混入方案 1 的建议，随后要求开始前端实现并由 Sol 子代理补齐 Shopify 演示数据。

- Scope / mode: 作品详情与首页购买能力筛选；Operate / Experience；手机优先。
- Approved comp: `.impeccable/mocks/34-project-dual-mode.png`。名称、大图、双意图卡片、制作准备和教程的顺序与组件样式为当前构图合同。
- Data: 每条作品独立支持成品或材料购买；购买能力都无时按本次决定归为灵感。制作说明与可售范围分别表达；仅一种方式不显示切换器。
- Demo: 用户允许合理演示图文、用量与配置；内容保存在 Shopify 供队友修改，演示标记保持可见。价格库存仍读 Product / Variant；不虚构评价、销量或促销。
- Default: 两种都有时默认自己做；首页按成品或材料筛选后进入详情会保留选择。切换保留同页已选规格，不制造购买或制作进度。

### Direction contract · Issue #34

- THESIS: 一个作品、两条清楚的拥有路径；有成品与能买材料的标签共享详情与首页语义。
- OWN-WORLD: 继承首页暖白、陶土色、奶油黄与 Yarn Display；图像圆角、双卡片选择和采购控件使用既有 token。
- STORY: 被作品吸引，选择买成品或自己做，再选购对应商品或直接查看教程。
- FIRST VIEWPORT: 手机使用同一设计系统的紧凑详情导航（返回、页名、搜索、购物车），名称、宽幅作品图，下接并列意图卡片；桌面保留同一顺序关系并将大图与操作列并排。
- FORM: 用户指定第二轮方案 2，comp 已批准，不重新抽选。单模式和纯灵感继承该构图并去掉不适用入口。
- FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 以下为历史合同

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
