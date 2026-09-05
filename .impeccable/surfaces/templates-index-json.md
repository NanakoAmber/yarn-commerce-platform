---
version: 1
slug: "templates-index-json"
primary_target: "templates/index.json"
related_targets: ["sections/yarn-hero.liquid","sections/yarn-purpose-grid.liquid","sections/featured-collection.liquid","sections/yarn-seasonal-feature.liquid","sections/yarn-line-contact.liquid","assets/yarn-prototype.css"]
---

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

批准的视觉世界、主标题、三步顺序和四分类不变。原型当前是 Shopify Product 演示目录，主 CTA 进入套件筛选，不宣称独立 Project 库已建成。去掉未经证实的热门、首作难度和周末完成承诺；使用“一团线，织一条花火披肩。”说明真实套件。完整事实纠正与截图比对规则见 `.impeccable/home-surface-brief.md`。
