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

**Customer**:
在商店中建立购买关系的个人。
_Avoid_: User, Account

**Customer Work**:
顾客通过编织或钩织完成并选择分享的实体作品。
_Avoid_: Project, Product

## Relationships

- 一个 **Product** 有一个或多个 **Variants**。
- 一个 **Project** 可以对应零个、一个或多个 **Project Kits**。
- 一个 **Project Kit** 包含一个或多个 **Variants**。
- 一个 **Tutorial** 指导一个 **Project**。
- 一个 **Customer Work** 来源于一个 **Project**，但不自动成为可售 **Product**。

## Example dialogue

> **Dev:** “用户打开一个 **Project** 时，是否直接购买它？”
> **Domain expert:** “不是。**Project** 表达想完成的作品；顾客购买的是对应 **Project Kit**，或者单独选择其中的 **Variants**。”

## Flagged ambiguities

- 过去“Project”有时同时指教程和套件；现已拆分为 **Project**、**Tutorial** 和 **Project Kit**。
- “用户”可能指访客、顾客、内容创作者或未来卖家；涉及身份或权限模型时必须先明确具体角色。
