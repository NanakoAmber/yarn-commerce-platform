# 首页 Surface Brief

- Scope: Shopify 首页及其 `/`、`/zh`、`/en` 本地化版本。
- Mode: Persuade。
- Audience: 第一次购买毛线或编织套件的新手；当前由合作方评审内部原型。
- Job: 在数秒内理解这是“围绕作品选毛线”的平台，而不是单品店，并找到适合自己的作品入口。
- Action: 浏览公开 Project，再查看 Material Requirements、Product Recommendations 或 Project Kit。
- Proof: 公开 Project 必须包含材料要求和主要 Tutorial；首页分类只使用 `PRODUCT.md` 已确认的目的分类。
- Constraints: 核心内容服务端渲染并可由 Shopify Section / Block 编辑；评审图片只用简体中文；不虚构评价、销量、折扣或承诺。
- Approved comp: `.impeccable/mocks/platform-navigation-zh.webp`。
- Memorable moment: 针目图谱形成作品分类索引，并通过“选择作品 → 购买材料 → 开始制作”把浏览和购买连成一条路径。
- Unresolved: 正式品牌名与日本市场母语文案在合作方对齐后替换。

## Direction contract

THESIS: 首页是一张可浏览的作品图谱；先解决“想做什么”，拒绝新品轮播和单品 Hero 主导。

OWN-WORLD: 暖白纸面、粉蓝粉红薄荷分类区、炭黑字、奶油黄动作色、针目图解、细线图标与克制圆角。

STORY: 新手先看懂价值承诺，再理解选择作品、购买材料、开始制作，最后按真实分类进入 Project。

FIRST VIEWPORT: 顶部简洁导航；大标题配局部织物；三步路径居中；分类图谱占主要面积；奶油黄主按钮收束。

FORM: “编织图解图谱”，候选顺序第 1，direction seed `873712c1`；图解是导航语言，不是假装专业的装饰。

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## 2026-09-05 复核后的事实纠正

保留批准的主标题、三步顺序、四分类和奶油黄 CTA；不重新选择视觉世界。当前实现为 Product 演示目录而非独立 Project 库，因此副文案改为先确认材料用量和教程，发现区明确说明原型边界；“热门作品”改为“作品套件”并进入 kit 筛选；一团作品明确展示花火披肩套件，不声称适合所有新手或保证完成时长。这些是 finish reviewer 的事实修正，不改写原始批准 comp。

853 × 1844 为 comp 等尺寸比对；1440 Desktop 与 390 Mobile 为响应式验收，不能将全页宽屏压到竖版 comp 坐标后据此判断区域缺失。
