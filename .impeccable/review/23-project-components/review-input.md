# Issue #23 部分配件销售返工复核输入

> 修复证据更新：初次 finish review 给出手机首屏空间与 DESIGN 同步两项 fix。现已仅修改移动 CSS：112 px 完整封面与完整标题并排，简介仍全文，事实与披露紧凑排列。三语 `project-*-mobile-390.png` 已覆盖为修后全页，新增 `project-*-mobile-390-top.png` 为精确 390×844 初始视口。初始 h2 / 准备正文 / CTA top：英文 647 / 698 / 761，日文 602 / 653 / 761，中文 523 / 574 / 761；三语无水平溢出。桌面及819规则未改，原证据仍适用；商品与购物车未改。请 verdict 只评分列出的修复及其直接回归，不宣称全站重审。DESIGN 的事实提取另交 documenter。

## 请求与权威

用户反馈：成品购买与首页灵感作品衔接差；应在作品准备中循序说明需要哪些线材、原料，在哪里购买，教程应指向同一原始商品清单。调研后明确确认作品优先，不等待全部配件备齐；本店可只卖一部分，其他自备或信息待补，允许受保护内部原型使用可替换的演示内容。不是全站重新设计，也不是可公开跟做内容认证。

权威顺序：AGENTS.md Issue #23 本轮例外 > 本 surface brief > DESIGN.md。构图 3 paper_flow 沿用，免逐页新 comp；不能冒充旧首页 build gate 通过。方向合同 `.impeccable/surfaces/sections-yarn-project-detail-liquid.md`；获批构图 `.impeccable/mocks/23-project-paper_flow.png`（移动首屏参考，准备区内容本轮增加）；craft floor `.agents/skills/impeccable/reference/craft-floor.md`。QUALITY BAR 以该方向合同和上述范围为准，未新增方向卡。旧 `.impeccable/build/state.json`、spec 和首页 diff 属于旧世界，不是本轮测量证据。

## 产物与截图

根目录 `/Users/jinchen/.codex/worktrees/0a2c/毛线`。主要代码：`sections/yarn-project-detail.liquid`、`snippets/yarn-project-components.liquid`、`assets/yarn-project-detail.js`、`assets/yarn-project.css`、`snippets/yarn-project-product-url.liquid`、`snippets/yarn-project-products.liquid`、`sections/main-product.liquid`、`assets/product-info.js`、`assets/yarn-product-context.js`、`assets/yarn-product-context.css`、`snippets/yarn-cart-project.liquid`、两个购物车 Liquid 和 locales。

必须打开检查的证据都在本目录：

- `project-zh-desktop-1440.png`、`project-zh-mobile-390.png`
- `project-en-desktop-1440.png`、`project-en-mobile-390.png`
- `project-ja-desktop-1440.png`、`project-ja-mobile-390.png`
- `project-zh-user-819.png`：恢复 viewport override 后实际 innerWidth 819 / innerHeight 783，滚动宽 810，无水平溢出。
- `preparation-zh-mobile-390.png`：补充实际滚动到准备位置的 viewport 图；全页截图中的底部固定按钮仍停留在捕获时视口底部，不能从其覆盖某段全页文字推断该段无法滚动阅读。
- `product-context-ja-desktop-1440.png`、`product-context-ja-mobile-390.png`、`product-context-zh-mobile-390.png`、`product-context-en-desktop-1440.png`、`product-context-en-mobile-390.png`：商品来源区的首屏视口，不是商品全页；现有原始商品长日文标题未经替换。
- `finished-reference-en-desktop-1440.png`：成品来源与非同款说明（内容视口，非整页）。
- `cart-zh-mobile-390.png`、`cart-en-mobile-390.png`、`cart-ja-mobile-390.png`、`cart-reference-en-mobile-390.png`：购物车来源、材料或非同款说明、回链及操作。

截图均来自用户真实 Chrome 已授权会话、未发布 Theme 189727637817；主代理已打开确认。Chrome 125% 时 viewport 1800 / 488 对应 CSS 1440 / 390；全页捕获按该比例校准 clip，未后处理修改截图。含第三方运营商品照片，只作本地受保护复核，不提交公开 diff。

## 已执行的行为验证

- 小袋展示 4 项：Joyful 02 实际 Variant、5/0 钩针自备、缝合针与剪刀自备、可选挂绳待补。只有一项可加购；采购 1 件不宣称足够完成作品。
- 后台新建四项并关联；供给本店→自备后购买按钮消失但作品、其他项、教程保留；替换为 Puni 03 后前台读出其 ¥780，恢复 Joyful 02 ¥2,200；Active→Draft 后仅隐藏该配件；顺序变更前台同步后恢复。没有改运营商品价格或库存，缺货实库未人为制造，由 Liquid 与测试验证判断。
- 中文、英文、日文叙述字段与真实路径均已检查。教程开始制作与回清单锚点可用。英文/中文逐项加购；英文数量 1→2、移除；中文和日文商品页加购保留作品/材料。日文选中 02 后键盘改 03，URL 来源保留，实际购物车为 03。
- 英文首页毯子作品卡→同名作品详情→成品商品→购物车均保留来源和非同款说明；旧 materials 未迁移路径仍存在，不影响教程。
- 普通不带参数的成品商品访问不显示来源；参数为可修改的导航提示，文字用 textContent，不能认证适配；价格、库存、规格仍由 Shopify 负责。
- 所有本轮加入的 Joyful 和成品测试条目已移除，仅保留原有 Puni 01 数量 1。未下单、支付、发邮件、发 Slack 或发布 Theme。定制发送按用户取消测试邮件的决定保持关闭。
- `npm run verify` 最新 50/50 pass，Theme Check 0 errors / 原有 12 warnings；`git diff --check` pass。适用 detector 首批配件 UI 15 advisory（字号、色彩、圆角继承现有方向），新增商品来源 UI 后仅 3 个原商品库存色 advisory，无阻断。不再重复无新增 UI 的 detect。

## 待复核边界

独立评估本次部分供给清单和购买连续性是否满足上述请求；不要把自动测试、已看截图或原有 ship 当成本轮独立通过。三语关键操作可用，不等于运营 Product 标题与全部既有 Theme Editor 文案已有三语翻译。实际用量、适配、跟做结果、真实供货、素材公开权利、队友试用均未认证。

请返回五个合同部分：总体 disposition（recapture / rebuild / fix / ship）、证据与范围、材料性 findings、逐项方向/质量核对、下一步/verdict 范围。请将复核写入本目录 `finish-review.md`，不改 UI、不启动浏览器、不进行新产品设计。
