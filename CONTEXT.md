# Yarn Commerce Domain

该上下文描述毛线、编织项目和材料套件之间的统一产品语言，避免在商品、教程和平台功能之间混用概念。

## Language

**Product**:
面向顾客提供的一类可售商品。
_Avoid_: Item, Listing

**Variant**:
由颜色、材质、规格或其他选项确定的可购买 Product 配置。
_Avoid_: SKU（除非明确指库存编码）

**Project**:
包含目标作品、难度、预计时间、所需材料与制作指导的编织目标。
_Avoid_: Kit, Product

**Draft Project**:
团队正在准备、但材料清单或主要 Tutorial 尚未达到公开标准的 Project。它不会对 Visitor 或 Member 公开。
_Avoid_: Inspiration, Published Project

**Inspiration**:
由品牌或编辑团队策划，通过成品图片、生活场景或推荐材料激发制作与购买兴趣的展示内容；它不提供足以独立完成作品的制作指导。
_Avoid_: Project, Tutorial

**Project Kit**:
为完成某个 Project 而组合销售的毛线、工具和可选配件，是 Product 的一种。
_Avoid_: Project, Tutorial

**Material Requirement**:
完成某个 Project 所需材料或工具的通用规格与物理用量，例如线材材质、粗细、所需重量、所需长度或针号；它独立于当前可售商品，不以“几团某商品”表达。
_Avoid_: Product, Variant, Kit Component

**Product Recommendation**:
将 Material Requirement 关联到当前适用 Product 或 Variant 的可替换推荐，不代表该商品是完成 Project 的唯一选择。
_Avoid_: Material Requirement, Kit Component

**Kit Component**:
某个 Project Kit 配置所需的一项既有 Variant 及其数量。它引用同一份实际商品库存，不建立重复库存。
_Avoid_: Variant, Copied Product

**Tutorial**:
用于帮助 Visitor 或 Member 完成 Project 的图解、视频或步骤内容；可以是 Project 专属指南，也可以是跨 Project 复用的通用技巧。
_Avoid_: Project

**Visitor**:
尚未登录平台的访问者。
_Avoid_: User, Customer

**Member**:
已注册并登录平台的参与者。Member 无需购买即可收藏 Project、使用 My Project 和记录制作进度。
_Avoid_: User, Customer, Buyer

**Shopify Customer**:
Shopify 中用于承载商业身份的客户记录；它可能在首次订单产生之前就已存在。
_Avoid_: Member, Buyer

**Buyer**:
至少完成过一次购买的 Member。Buyer 是同一个人的商业角色，不是独立账号。
_Avoid_: Customer

**Creator**:
创作 Project、Tutorial 或相关内容的 Member。
_Avoid_: Seller

**Seller**:
未来获准通过平台销售 Product 或 Project Kit 的 Member。
_Avoid_: Creator

**My Project**:
Member 管理个人 Making 并记录制作进度的空间，不要求先购买对应 Product 或 Project Kit。
_Avoid_: Order History, Purchased Projects

**Favorite**:
Member 对公开 Project 表达兴趣的收藏关系，不代表已经计划或开始制作，也不会创建 Making。
_Avoid_: My Project, Making

**Making**:
Member 明确选择“开始制作”后，根据某个 Project 发起的一次实际制作，独立记录所用颜色、尺寸、材料和进度。同一个 Project 可以被同一 Member 制作多次。
_Avoid_: Project, Tutorial, Order

**Member Work**:
Member 通过编织或钩织完成并选择分享的作品；它按会员创作来源定义，不要求附带 Tutorial，可以使用购买的 Project Kit、单独购买的材料或自有材料。
_Avoid_: Project, Product

## Relationships

- 一个 **Product** 有一个或多个 **Variants**。
- **Draft Project** 达到可执行标准后才能成为公开 **Project**。
- 公开 **Project** 至少包含一个或多个 **Material Requirement** 和一个主要 **Tutorial**；不满足可执行条件的展示内容称为 **Inspiration**。
- 一个 **Material Requirement** 可以有零个或多个 **Product Recommendation**；推荐商品缺货、停售或替换不改变 Project 本身。
- 毛线 **Material Requirement** 使用重量和／或长度表达所需用量；需要购买几团由具体 **Product Recommendation** 的每团规格换算。
- **Project Kit** 是满足 Project Material Requirements 的一种固定可购买配置，但不是完成 Project 的唯一方式。
- **Inspiration** 可以推荐 **Product** 或关联可执行 **Project**，但不承诺 Visitor 或 Member 能仅凭该内容完成作品。
- 一个自然人可以先以 **Visitor** 身份访问，注册后成为 **Member**，并在完成购买后同时拥有 **Buyer** 角色。
- **Member** 可以关联一个 **Shopify Customer** 记录，但两者不是同一个领域概念。
- **Creator**、**Seller** 和 **Buyer** 是 **Member** 可以同时拥有的角色。
- **Member** 无需成为 **Buyer** 即可使用 **My Project**。
- **Member** 可以收藏一个 **Project**；**Favorite** 不属于 **My Project**，也不会自动创建 **Making**。
- **My Project** 包含该 Member 的一个或多个 **Makings**。
- 每个 **Making** 引用一个公开 **Project**；同一 Member 可以为同一 Project 建立多个 Makings。
- 一个 **Project** 可以对应零个、一个或多个 **Project Kits**。
- **Project** 的公开可见性独立于 **Project Kit** 库存；对应 Kit 售罄时，Project 仍保持可发现。
- 每个 **Project Kit** 都是一个可售 **Product**，可以通过 **Variants** 表达少量明确配置。
- 一个 **Project Kit** 的 **Variant** 由一个或多个 **Kit Components** 构成；其可售数量受所有组件 Variant 的共享库存约束。
- 任一 **Kit Component** 缺货时，受影响的 **Project Kit** Variant 不可购买；材料不得被系统自动替换。
- 一个 **Project** 可以关联多个 **Tutorial**，并指定主要制作教程。
- 一个通用 **Tutorial** 可以被多个 **Project** 复用。
- 一个 **Member Work** 可以由一个 **Making** 产生，但不要求购买其 **Project Kit**，也不自动成为可售 **Product**。
- **Member Work** 可以被品牌或编辑团队精选到 **Inspiration** 或 **Project** 页面中，但仍保持 Member Work 身份。

## Example dialogue

> **Dev:** “用户打开一个 **Project** 时，是否直接购买它？”
> **Domain expert:** “不是。**Project** 表达想完成的作品；顾客购买的是对应 **Project Kit**，或者单独选择其中的 **Variants**。”

## Flagged ambiguities

- 过去“Project”有时同时指教程和套件；现已拆分为 **Project**、**Tutorial** 和 **Project Kit**。
- **Inspiration** 不是 **Draft Project** 的发布状态；前者有意提供非指导型展示内容，后者正在准备成为可执行 Project。
- “用户”不是正式领域术语；涉及身份或权限时必须明确使用 **Visitor**、**Member**、**Buyer**、**Creator** 或 **Seller**。
- Shopify API 中的 `Customer` 必须写作 **Shopify Customer**；不得用它指代已经购买的人，后者统一称为 **Buyer**。
