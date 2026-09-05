---
version: 1
slug: "templates-index-json"
primary_target: "templates/index.json"
related_targets: ["sections/yarn-hero.liquid","assets/yarn-hero-b.css","sections/yarn-project-discovery.liquid","assets/yarn-project-discovery.css","assets/yarn-project-discovery.js","snippets/yarn-work-card.liquid","sections/yarn-line-contact.liquid","assets/yarn-prototype.css"]
---

# 首页 Surface Brief

- Scope: Shopify 首页，日文、简体中文、英文；Issue #13。
- Mode: Persuade。
- Audience: 围绕想做的作品选材料的新手；当前为合作方内部原型。
- Approved comp: `.impeccable/mocks/discovery-b-zh.png`（756 × 2079）。
- Approval: 2026-09-05 用户回复“B”，选择“作品先行”。取代旧 comp 的首页构图合同，不更换视觉身份。
- Constraints: Shopify Product 与可编辑内容为事实来源；保留语言、商品和购买路径，不接入其他任务的新内容模型。

## Direction contract

THESIS: 一体化作品发现是首页第二主区域，拒绝分类与结果之间插入单品、季节大广告。

OWN-WORLD: 继承暖纸、柔粉柔蓝薄荷、炭黑字、针目图解、细线图标；分类为小圆面，操作克制。

STORY: 看懂选择作品、购买材料、开始制作；从作品图片产生兴趣，以搜索和条件缩小选择，再查看材料。

FIRST VIEWPORT: 简洁导航、左文右织物、叠压三步纸面；下接居中发现标题、搜索、四圆形分类、商品类型及三项筛选；双列作品图紧跟控件。

FORM: “编织图解图谱 / 作品先行 B”，沿用 direction seed `873712c1`。移动端双列，宽屏同一信息次序、较宽图库。

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 事实与交互翻译

- comp 内“内部视觉示意，非实际商品图”只解释生成稿；真实页面使用“内部演示：先看套件，材料与教程以商品页为准。”，可由 Section setting 编辑，不把目录冒充独立 Project 库。
- comp 的四件织物是示意，不替代实际 Product 照片、标题、库存或价格。默认套件排序由 Shopify product_list 编辑；价格与规格在商品页确认。不可按图生成假商品照片。
- 删除重复的宽幅浏览 CTA、独立辅助导航、一团大卡和季节大卡；老 Section 文件 / settings 保留可恢复，不破坏其他页面。
- 小圆分类、搜索、类型和用量 / 季节 / 风格共同作用于同一个 Product 结果列表。成品、礼盒及其他用途仍可从完整目录或已有链接访问。
- 下拉默认关闭，展开态对照 comp；实际选项来自现有目录，不虚构全季可用。保留键盘、选中、清除、无结果、数量与历史返回状态。
- 生成稿过小文字不照搬；实际正文 / 操作保持可读尺寸并检验三语扩展。不在此文件提前改写 DESIGN.md 为未实现状态。

## 本轮复核边界

B 已在独立未发布 Theme 实现，2026-09-05 的 finish verdict 确认帮助图标、套件标签、纸面与手机字号四项整改 resolved。真实商品照片与生成示意有差异，plates gate 仍 open，整页 Comp-first 未完成；详情与后续验收以 Issue #13 和本轮 review 为准，不继承旧版局部 ship。
