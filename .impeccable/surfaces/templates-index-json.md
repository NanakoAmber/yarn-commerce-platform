---
version: 1
slug: "templates-index-json"
primary_target: "templates/index.json"
related_targets: ["sections/yarn-hero.liquid","assets/yarn-hero-b.css","sections/yarn-project-discovery.liquid","assets/yarn-project-discovery.css","assets/yarn-project-discovery.js","snippets/yarn-work-card.liquid","sections/yarn-line-contact.liquid","assets/yarn-prototype.css","sections/yarn-project-library.liquid","snippets/yarn-project-row.liquid","snippets/yarn-project-card.liquid","assets/yarn-project-rows.css","assets/yarn-project-row.js","assets/yarn-project-library.js"]
---

# 首页 Surface Brief

## 当前首页下方发现区合同（Issue #13，2026-09-07）

当前合同以 [本轮首页 brief](../home-surface-brief.md) 与 [批准范围](../review/13-category-rows/issue-scope.md) 为准，覆盖下面历史记录中的发现区；串联 Hero 与导航保持上一轮已批准实现。Mode：Persuade。

- 桌面标题 / 搜索在左，四个分类入口在右；手机先搜索再四分类。分类分别定位独立作品行，清除既有筛选，不把导航入口误记为筛选状态按钮。
- 四分类使用从已批准稿直接裁取的花朵包袋、绿色围巾、靠垫与盆栽、兔子玩偶插画；未重新生成，覆盖中途针目 plate 复用方案。文件与裁切坐标见 [图标来源](../review/13-category-rows/icon-provenance.md)，后台 image picker 仍可替换；HTML 分类标签与图像分离。
- 作品来自 Shopify `yarn_project`，分类与手选顺序由 Section blocks 编辑，图片 / 名称进入 Project 详情；家居行可同时包含家居与花片类别。当前 2/1/5/1 共 9 件是内容快照，不以生成稿的 16 件约束数据，也不复制作品补位。未归组作品保留入口。
- 行容器最大 1320 px；桌面四槽、750–989 px 三槽、749 px 以下两槽，间距分别 24 / 20 / 16 px。媒体宽高比 1.12、cover、14 px 圆角；名称完整换行，无逐卡重复 CTA。
- 双箭头位于图片 / 名称下方，44×44 px、端点禁用；溢出时显示，展开后隐藏。行内“查看全部 / 收起”改变同一行的布局，搜索页继续延期。
- 搜索、清除、原生高级筛选、无结果、分页失败 / 重试共同作用于完整作品库。日文手机分类标签为局部 1.25rem；其他手机分类为 1.4rem，不把单语断行修复升级成全站字号规则。
- 三语截图与功能 / Theme Editor 验证见 [verification](../review/13-category-rows/verification.md)；独立 disposition 与后续关闭状态见 [finish review](../review/13-category-rows/finish-review.md)。盖毯样例图片与标题不符仍属既有内容缺陷，相关截图仅本地存档。
- 历史 discovery B 的机械 gates 仍未关闭；初次 scoped comp-diff 为 54.53%、contradicted，不是像素还原通过。最终评审只覆盖当前批准范围，不认证全站、公开素材权利或未获批准的交易。

## 已保留的串联 Hero 合同（Issue #13，2026-09-07）

- 用户批准合并方向后要求开始实现；随后明确作品节点必须含小猫、教程必须是书，移动端标题和毛线错落排布，并要求尽可能对齐原图。
- 最新批准参考：`.impeccable/mocks/connected-landing-zh.png`（946 × 1663）。本段覆盖下方历史首屏构图，不改变 Issue #23 的 Project 数据与详情购买边界。
- Mode：Persuade。保留方案 1 的文案与配色、方案 2 的连续毛线、方案 3 的搜索和手绘类别入口。
- 桌面：文案在左，最大的作品圆面在中央偏右；毛线在右上、工具在右侧、打开的教程书在右下。细赭色线串联四节点，底部浅黄波浪衔接作品库。
- 手机：标题位于右上毛线的左下；大作品在左侧中段，工具在右侧错位，下方书继续靠右。所有对象完整显示，不将四节点排成同尺寸卡片。
- 文案与节点标签为可编辑的三语 Section settings。插画只解释准备流程，不表示实际商品、材料适配或教程交付；只有作品入口跳转现有作品库。
- 作品库继续使用真实 `yarn_project` 数据；分类快捷入口与搜索等行为已由上方分类作品行合同更新；该段仅保留串联 Hero 的批准事实。
- 本次布局修复独立 verdict：见 `.impeccable/review/13-connected-landing/layout-finish-review.md`。三语 1440 / 390 px 已复核，补查英文 320 px 与中文 768 px；局部 ship 不关闭历史整页 Comp-first gates。

## 历史：Issue #23 覆盖合同（2026-09-06）

用户已批准以作品为中心的内部原型及自主实现普通布局的例外。保留原首页品牌开场与紧凑帮助；第二主区域改为同一 `yarn_project` 数据源上的新手精选（后台选择排序）和找灵感作品库。作品卡跳作品详情，不再将 Product 套件当作 Project。搜索、类别、难度与教程类型优先，其他筛选按需展开；未知字段不作默认承诺。先完整加载所有分页，失败时明确提示，不假装已搜索全库。继承现有纸面和配色，不继续生成方向卡。以下 Issue #13 的 discovery B 记录保留作为历史，不覆盖本轮明确合同；双端、三语和 finish review 仍必需。

- Scope: Shopify 首页，日文、简体中文、英文；Issue #13。
- Mode: Persuade。
- Audience: 围绕想做的作品选材料的新手；当前为合作方内部原型。
- Approved comp: `.impeccable/mocks/discovery-b-zh.png`（756 × 2079）。
- Approval: 2026-09-05 用户回复“B”，选择“作品先行”。取代旧 comp 的首页构图合同，不更换视觉身份。
- Constraints: Shopify Product 与可编辑内容为事实来源；保留语言、商品和购买路径，不接入其他任务的新内容模型。

## 历史：discovery B direction contract

THESIS: 一体化作品发现是首页第二主区域，拒绝分类与结果之间插入单品、季节大广告。

OWN-WORLD: 继承暖纸、柔粉柔蓝薄荷、炭黑字、针目图解、细线图标；分类为小圆面，操作克制。

STORY: 看懂选择作品、购买材料、开始制作；从作品图片产生兴趣，以搜索和条件缩小选择，再查看材料。

FIRST VIEWPORT: 简洁导航、左文右织物、叠压三步纸面；下接居中发现标题、搜索、四圆形分类、商品类型及三项筛选；双列作品图紧跟控件。

FORM: “编织图解图谱 / 作品先行 B”，沿用 direction seed `873712c1`。移动端双列，宽屏同一信息次序、较宽图库。

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 历史：discovery B 事实与交互翻译

- comp 内“内部视觉示意，非实际商品图”只解释生成稿；真实页面使用“内部演示：先看套件，材料与教程以商品页为准。”，可由 Section setting 编辑，不把目录冒充独立 Project 库。
- comp 的四件织物是示意，不替代实际 Product 照片、标题、库存或价格。默认套件排序由 Shopify product_list 编辑；价格与规格在商品页确认。不可按图生成假商品照片。
- 删除重复的宽幅浏览 CTA、独立辅助导航、一团大卡和季节大卡；老 Section 文件 / settings 保留可恢复，不破坏其他页面。
- 小圆分类、搜索、类型和用量 / 季节 / 风格共同作用于同一个 Product 结果列表。成品、礼盒及其他用途仍可从完整目录或已有链接访问。
- 下拉默认关闭，展开态对照 comp；实际选项来自现有目录，不虚构全季可用。保留键盘、选中、清除、无结果、数量与历史返回状态。
- 生成稿过小文字不照搬；实际正文 / 操作保持可读尺寸并检验三语扩展。不在此文件提前改写 DESIGN.md 为未实现状态。

## 历史：discovery B 复核边界

B 已在独立未发布 Theme 实现，2026-09-05 的 finish verdict 确认帮助图标、套件标签、纸面与手机字号四项整改 resolved。真实商品照片与生成示意有差异，plates gate 仍 open，整页 Comp-first 未完成；详情与后续验收以 Issue #13 和本轮 review 为准，不继承旧版局部 ship。
