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

**Project Kit**:
为完成某个 Project 而组合销售的毛线、工具和可选配件。
_Avoid_: Project, Tutorial

**Tutorial**:
用于指导顾客完成 Project 的图解、视频或步骤内容。
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
Member 用于收藏 Project 并记录个人制作进度的空间，不要求先购买对应 Product 或 Project Kit。
_Avoid_: Order History, Purchased Projects

**Member Work**:
Member 通过编织或钩织完成并选择分享的作品；可以使用购买的 Project Kit、单独购买的材料或自有材料。
_Avoid_: Project, Product

## Relationships

- 一个 **Product** 有一个或多个 **Variants**。
- 一个自然人可以先以 **Visitor** 身份访问，注册后成为 **Member**，并在完成购买后同时拥有 **Buyer** 角色。
- **Member** 可以关联一个 **Shopify Customer** 记录，但两者不是同一个领域概念。
- **Creator**、**Seller** 和 **Buyer** 是 **Member** 可以同时拥有的角色。
- **Member** 无需成为 **Buyer** 即可使用 **My Project**。
- 一个 **Project** 可以对应零个、一个或多个 **Project Kits**。
- **Project** 的公开可见性独立于 **Project Kit** 库存；对应 Kit 售罄时，Project 仍保持可发现。
- 一个 **Project Kit** 包含一个或多个 **Variants**。
- 一个 **Tutorial** 指导一个 **Project**。
- 一个 **Member Work** 可以来源于一个 **Project**，但不要求购买其 **Project Kit**，也不自动成为可售 **Product**。

## Example dialogue

> **Dev:** “用户打开一个 **Project** 时，是否直接购买它？”
> **Domain expert:** “不是。**Project** 表达想完成的作品；顾客购买的是对应 **Project Kit**，或者单独选择其中的 **Variants**。”

## Flagged ambiguities

- 过去“Project”有时同时指教程和套件；现已拆分为 **Project**、**Tutorial** 和 **Project Kit**。
- “用户”不是正式领域术语；涉及身份或权限时必须明确使用 **Visitor**、**Member**、**Buyer**、**Creator** 或 **Seller**。
- Shopify API 中的 `Customer` 必须写作 **Shopify Customer**；不得用它指代已经购买的人，后者统一称为 **Buyer**。
