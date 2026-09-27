# 商品详情桌面获批方向与来源

- 用户在本会话明确选择「可以，按这张实现」，批准范围为左图右购买，以及下方完整正文、图文内容物与三步说明。
- 工具：内置 ImageGen。获批图片本地保存为 `docs/design/approved/73-pdp-desktop.png`，SHA-256：`647ae508129349ca44d7fa450f71b68bc7950b514bee50ef8d34050ee046625b`。
- 适用范围与数据边界见 [商品详情 surface brief](../product-detail-surface.md)。此稿沿用现有文楷、暖纸底、陶土价格与奶油购买按钮。
- 图片含内部参考商品形象，按仓库素材边界只在本地/受保护预览保留，未上传公开仓库；发布资产须另行授权或替换。

## 实际输入

以下五张图片均实际传给 ImageGen：

1. 已确认手机实现首屏：`.impeccable/73-pdp/mobile-approved-build-top.png`。
2. 已确认手机实现内容物明细：`.impeccable/73-pdp/mobile-approved-build-contents.png`。
3. 改版前桌面首屏：`.impeccable/73-pdp/desktop-before.png`。
4. [Woobles 企鹅编织包](https://thewoobles.com/products/penguin-crochet-kit) 内容物截图：历史只读参考包 `pdp-full-reference/desktop-03.png`。
5. 同一来源的制作步骤截图：`pdp-full-reference/desktop-07.png`。

源站图片仅用于结构参考。源站服务、评价、销量等不成为本站事实；实现保留 Shopify 现有完整描述及来源说明，不把视觉稿的短文案覆盖回商品数据。既有相关商品入口仍保留，在桌面购买区降为紧凑信息卡。

## 生成提示词

Use case: ui-mockup.
Create ONE desktop web product-detail composition for MewoolMew, a warm yarn shop. A continuous full-width desktop page at approximately 1440 x 2400 logical proportions, NOT phone screen, no outside annotations. This is an internal composition reference, not a commercial asset.
Reference 1 is the user-approved real mobile purchase screen. Reference 2 is its approved full-content list. Reference 3 is the current desktop page. These own the real product, typography and palette. References 4 and 5 are Woobles desktop information-rhythm references ONLY, never copy their teal branding, testimonials, video footage, reviews, ratings, promises or badges.
Preserve the current site's Chinese WenKai / Klee-style humanist handwritten serif typography, both headings and regular body. DO NOT replace it with geometric sans-serif. Warm white #fffefa, dark navy #13202d headings, charcoal #2f302f text, clay #b93b20 price, pale butter #f8e5a9 primary pill CTA, fine #dedbd5 rules, no shadows. Same cat/yarn logo and outline icons. Product photographs are the existing blue crochet penguin and actual contents flatlay only, never invent another photo, material icon or video.
Composition: 1200px centered content axis. Compact existing navigation. Hero two columns approx 552px gallery + 504px purchase with 48px gap. Complete square product image, four compact thumbnail buttons. Right: title, real price, existing shipping note, quantity, cream add-to-cart, outlined buy-now; no promo cards between these. Keep hero compact enough the About section begins near bottom of first 900px viewport. BELOW hero: About heading and real prose, small side-view product photo floated on the right; Contents full-width heading then image left and all TEN material/service entries right as a plain aligned numbered list. Do not compress contents into labels only: include body descriptions. Then three horizontal numbered steps with full sentences, two equal facts panels with explanatory body, then SIX single-column FAQ disclosure rows. Do not omit prose. No product reviews, discounts, sales claims, badges, fake trust marks, sticky CTA or new services.
All readable text must be accurate Simplified Chinese except brand/product proper names, PDF, numbers, cm, mm. Exact permitted UI text:
MewoolMew
首页  编织包  毛线  成品  商品目录  联系我们  简体中文
demo·皮埃尔企鹅 编织包
¥4,500 JPY
含税价格 · 日本全国配送 · 满 9,900 日元免运费
数量  −  1  +
添加到购物车
立即购买
关于皮埃尔
也许是因为企鹅本身就有种说不出的吸引力，也许是因为皮埃尔恰好把 Woobles 那份摇摇摆摆的可爱都表现出来了。
编织包里有什么
01 分步骤视频教程：跟着画面逐步完成整只企鹅。
02 The Woobles Easy Peasy Yarn™：专为新手定制的线材。
03 预先起好的织片：可以直接进入主要钩织针法的练习。
04 邮件协助与线上钩织答疑：此为来源站服务，非本店服务承诺。
05 塑料眼睛：用于完成企鹅的双眼。
06 填充棉：用于填充玩偶。
07 毛线针：用于缝合和收尾。
08 记号扣：帮助标记钩织位置。
09 企鹅钩织图解 PDF：可下载，便于对照步骤。
10 4 mm 人体工学钩针：套件配备的钩织工具。
怎么开始
1 打开编织包，确认制作所需内容物。
2 扫描二维码，打开配套教程。
3 跟着步骤开始钩织，就这样上手。
尺寸
完成后高约 11.4 cm。手工作品的实际尺寸会因钩织者而略有差异。
适合谁
适合新手，建议 12 岁及以上；预先起针和分步骤教程帮助第一次钩织的人循序练习。
常见问题
完全没有手作经验，也能完成吗？
分步骤教程怎么使用？
建议几岁开始？
完成一件通常需要多久？
织错了怎么办？
左撇子也能学吗？
Only use this accurate text, no Japanese glyphs or extra text. Product packaging should be presented as faithful photo reference, not generated new packaging labels. This layout is a structural contract; implementation will retain every original Shopify field and full description, including source disclosures.
