# 首页 B 实现与验证证据

2026-09-05。Issue #13，用户回复 B 批准“作品先行”。分支 `codex/13-home-discovery-integration` 基于合并 PR14 的 main `79681b2`。

实现已保存到草稿 PR #18：https://github.com/NanakoAmber/yarn-commerce-platform/pull/18 。仍未合并或发布。

## 实现范围

- 三个主区域：首屏三步路径 → 一体化作品发现 → 购买前帮助。旧分类大板、单独一团作品、季节广告及旧目录 Section 均 disabled，原配置与文件可恢复。
- 新 Section `yarn-project-discovery`：collection 与 product_list 编辑真实目录和优先顺序；默认先显示 4 个套件，展开为 8 个，按 handle 去重后完整加载 20 个实际 Product。
- 小圆图解分类、搜索、商品类型和三项条件共同筛选一个结果集。默认下拉关闭，展开态继承暖白、柔粉选中、炭黑字与圆角。
- 真实 Product 媒体与链接；不把 comp 的生成作品图用作商品照片，不复制 Shopify 价格与库存。
- 原型说明与标题由 Section settings 编辑；操作文案用 Section schema locales（中、日、英），可由 Shopify 语言编辑器管理。
- Shopify CLI 4.7.1 的 TranslationKeyExists 直接把带 sections.<file> 的完整键与未带前缀的 schema.locales 比较，产生误报。因此仅此 Section 与 work-card scoped disable 该检查，新增合约测试覆盖所有三语静态与动态键，不关闭全局检查。官方说明：https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema#locales

## 实际浏览器验证

测试在未发布主题 `189705093433` 对应本地预览完成，不发布线上，不改另一个任务的主题或运营数据。

- 默认：4 件；展开：8 件，无重复；包袋：2 件。
- 玩偶 + 套件：0 件，显示真实空结果；点击“查看相关毛线”：2 件；返回：恢复玩偶套件空结果。
- 清除：恢复默认套件 4 件。
- 键盘 ArrowDown 打开季节，下拉 End / Enter 选秋冬，结果 1 件且焦点返回触发器；Escape 关闭。
- 搜索“花火”：1 件；无匹配搜索：0 件，可清除恢复。
- 手机季节菜单横向坐标 84.5、宽 210，在 390 viewport 内。
- `/`、`/zh`、`/en` 的标题、操作与帮助文案使用对应语言；390 宽无横向溢出。
- 点击首个作品进入对应中文 Mousse 商品页，Product 标题、实际价格、两个配色、数量与加购控件存在；选择第二配色后 URL 更新 variant。未提交加购或订单；原有购买流程不作整条通过声明。
- 整改后的最终批次：1440 / 390 / 756 宽均无横向溢出；首个作品图距文档顶端约 1050 / 845 / 1051 px。390 的主说明、三步文字、分类、筛选与材料动作均为 14 px。
- 整改后再次验证 1440 / 390 × `/`、`/zh`、`/en`：六组均无横向溢出或缺失翻译，展开的季节菜单均完整位于视口内。第一次脚本误用了不存在的 `.is-enhanced` 检测选择器；改用实际 `.is-ready` 后六组完成，这不是页面加载缺陷。
- 已打开核对 desktop.png、mobile.png、user-756.png 及三张对应 filter-open 截图；hero-repro.png 为 756×2079 的同尺寸展开态比较。截图中的真实 Product 包装字/水印是现有内部原型素材，截图与本地原图不进入公开 Git 仓库。
- 浏览器现有 Shopify 账户组件返回 customer-account-main-menu fallback、Shop app 403 / CSP（本地主机）；不是作品筛选异常。未宣称整个站点控制台零错误。

## Impeccable 状态与风险

- 已生成并逐张核对四张新增装饰素材（织物、针目、毯子分类、线团问号），源文件与发布副本均嵌入准确提示词；无日文、乱码或自造标签。最终扫描 assets/plates 与四张发布副本：20 rasters，0 missing。
- Detector 仅运行一次，59 项均为相对于旧 DESIGN.md 的 advisory，0 非 advisory。报告 discovery-b-detect.json；新规则是否提取到 DESIGN.md 等独立复核。
- Spec 52 区域；加入帮助图标后有 16 个 raster 区域，15 个比较通过，仅实际灰色 Tutu 包照片与粉色生成示意的相似度 38% 未通过（此前 14/15 的原始结果见初审）。未 force、未伪造通过、未生成假商品。按 AGENTS.md 的实际商品事实边界继续 B 实现，保留 plates=open、后续 phases=pending 的未关闭状态，不把此执行顺序描述成按 gate 完整走完。
- 本轮没有按 phase gate 宣称整个 Comp-first 完成。最终独立评审、未解决项与 DESIGN.md 状态必须如实记录。
- `npm run verify` 通过：196 files，0 error，8 项原有 warning；新增 6 个 Node 合约测试均通过。`git diff --check` 通过。
- 首次同尺寸 comp-diff 为 75%（drift）；整改后为 74%（drift），结构 62%、颜色 84%、细节 69%。两次均打开 side-by-side 与最差三处区域图，并另核对 page-paper。实际 Product 照片、长标题、事实说明与恢复入口均按批准 brief 适配；固定坐标差异不代表元素真的缺失，也不能把整体分数等同完整通过。
- 独立初审 disposition=fix；同一 reviewer 的整改 verdict 确认 #2 线团问号、#3 柔粉套件标签、#4 暖白纸面、#5 手机可读性均 resolved。#1 自动 phases 尚未闭合；#6 的 PRODUCT 已同步，DESIGN 从本轮已复核实物提取。完整证据为 discovery-b-finish-review.md 与 discovery-b-finish-verdict.md，不扩大为整页 ship。
- 本轮缺少单独的 QUALITY BAR card，已对 reviewer 披露，未从旧 seed 或旧局部 ship 补造。
- Shipped documenter 已从整改后源码与截图合并更新 DESIGN.md 和 design.json（schema v2）；保留共享规范，记录当前 B 的分类、筛选展开 / 焦点、套件标签、帮助条与手机文字。临时字标、参考素材、三段页面构图与未关闭 gate 未被升级为全站已验收规则。首次 documenter 因模型容量失败，同一 agent 恢复后完成；没有替代独立视觉复核。
- 同一 reviewer 的最终文档 verdict 确认 #6 resolved（discovery-b-document-verdict.md）。原 #2–#6 已解决，仅 #1 unresolved；disposition 仍为 fix。没有再改 UI、重拍或跑 detector。
- 草稿 PR 首个实现提交 `005b1ab` 的远端 theme-check 与 unpublished preview 均 SUCCESS；CI 创建 PR-18 未发布主题 `189706404153`，不改手工验证主题或线上主题。后续仅文档提交的 CI 状态以 PR 为准。
- 使用无 Shopify 会话的新浏览器上下文验证共享地址：重定向到 `/zh/password`。因此该链接是需要店铺访问密码的内部预览，不是“所有人无需任何登录可看”的公开链接。没有擅自解除密码。
- 未发布预览仍依赖现有未授权参考目录照片，只适合受保护内部演示；不得解除 storefront 密码或提交此类照片到公开仓库。

## 安全与其他工作

未改 Product、价格、库存、Cart、Order、Refund 或发布状态。README.md、docs/shopify-admin.md、review/15-content-onboarding 属于其他未提交工作，保留，不随本任务提交。
