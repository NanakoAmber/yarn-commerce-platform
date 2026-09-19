# 首页 Comp-first 复核证据（2026-09-05）

状态：用户批准的第三轮视觉整改已收口；仍有购买骨架与分享验证边界。关联 Issue #13、PR #14。未发布主题：189690511673；未修改线上主题。

## 本轮范围

继承用户批准的中文平台导航构图、柔和粉蓝绿与奶油黄按钮。首页路径为选择作品 → 购买材料 → 开始制作。作品分类为包袋、围巾与披肩、毯子、玩偶。当前商品目录不是独立 Project 教程库，不承诺热门、新手难度或完成时间。

## 检查结果

- `npm run verify`：通过，192 个文件，8 条既有 warning，涉及 5 个文件。
- `node --check assets/yarn-discovery.js`、`git diff --check`：通过。
- Impeccable detector 本会话仅执行一次，结果为空；没有为修复轮重复执行。
- `impeccable embed-prompt --scan assets`：27 个 raster，0 个缺少来源或提示词。
- 本地 Shopify 代理对应未发布 PR14 主题；最后一批修改后已重跑 `/`、`/zh`、`/en` 的 390 / 1440 宽度检查，六组合均无横向溢出，标题与三步语言正确。
- 最终候选截图：`.impeccable/review/desktop.png`（1440 全页）、`mobile.png`（390 全页）、`comp-size.png`（853×1844）。三张均已打开检查。完整截图包含参考商品图片，仅保留本地，不发布至公开仓库。
- 同尺寸 comp diff 最新约 79%，判为 drift；此前 80.92% 已被覆盖，不得引用为最新结果。数字不等于人工通过。
- 搜索不存在的 `zzzz-no-match-qa`：0 结果、空状态与清除按钮正常出现。

## 独立复核与待确认事项

独立 reviewer 的第一次 verdict：事实文案、中文字体、390 分类图完整性、套件事实行宽及正确尺寸对比证据，五项 resolved；首屏材质 partial。

第二次 verdict（`.impeccable/review/verdict-2.md`）：纸格、针目、花枝及 853 毛线球上沿位置已解决，但本批引入直接回归：

1. 853 图片下沿在约 y=521 硬切，与流程卡之间出现约 73 px 空带。
2. 1440 花枝侵入副文案末尾净空。

用户随后明确批准继续一轮。第三批保持毛线球上沿，增加织物覆盖并右对齐，将下沿延伸至流程卡后；桌面花枝移动至正文右侧。`.impeccable/review/verdict-3.md` 将这两项评为 resolved，未见本批直接回归，disposition 为 `ship`。该结论仅覆盖已评分视觉整改，不是商业网站全量上线验收。最终设计系统由独立 documenter 从实际代码与截图提取到 `DESIGN.md` 和 `.impeccable/design.json`。

## 功能回归

远端 `templates/index.json` 与本地一致，重启代理后仍实际渲染旧 `#discover-products`，因此未把原因简单归为漏同步。Liquid 对“空值或精确旧锚点”迁移为当前语言的 kit 筛选入口，保留其他运营自定义链接；没有修改 Admin 翻译数据。

- 使用独立 Playwright 浏览器真实点击三语主 CTA：均进入 `discover_type=kit`，找到 8 件套件。
- 手机端套件 + 包袋组合：2 件；浏览器返回保留套件筛选并清除包袋条件。
- 无匹配搜索：0 件并显示恢复入口；清除后恢复默认 8 / 20 件。
- 点击披肩入口到正确 Product；默认 A01 加购成功，Cart 为 1 件 / ¥2,860；加一后 API 与小计为 2 件 / ¥5,720。
- 移除本次测试商品成功，隔离测试购物车恢复 0 件；未触碰用户原有购物车。
- 结账按钮指向本地化 `/zh/cart` 的 Shopify checkout 提交入口；未实际进入支付或提交订单。

数量控件存在未解决的既有骨架问题：加一后 HTML `value` 属性为 2、Cart API 为 2，但输入控件的实时值为 0，并触发 `CartDrawerItems.resetQuantityInput` 对空对象读取 `getAttribute`。`assets/cart.js` 使用 `#Quantity-...`，抽屉实际为 `#Drawer-quantity-...`；两个文件与 HEAD 均无差异，最近来源为初始化提交 `56ec901`。未在本次首页视觉整改中顺带修改交易骨架，不能宣称完整购买回归通过。

本地代理控制台另有 Shopify account 菜单 fallback、Shop.app 预认证 / CSP、origin_trials CORS 与 favicon 404，未据此宣称控制台零错误。agent-browser 的鼠标动作曾落在 HTML 根元素，后续点击结论均改用独立 Playwright 验证，不能将工具坐标问题误报为页面点击故障。

## 分享与恢复

Shopify 的标准主题 ID 预览在匿名访问下进入 storefront password 页面。已在主题预览 UI 使用 Copy preview link，UI 提示两天后过期，但浏览器未返回剪贴板字符串，尚未验证免登录分享链接。没有移除店铺密码保护。

下次从 Issue #13 / PR #14 的最新复核摘要与三个 verdict 恢复；继续前保留所有现有用户改动。build state 保留机械 responsive gate 未闭合的事实：不能拿 1440 全页直接压到 853 竖版 comp 来宣称通过；独立响应式截图与等尺寸 diff 分别作为证据，未使用 `--force`。

`build-phase finish --disposition ship` 因 responsive phase 未关闭而拒绝；整体 build state 因此记录 `fix`。独立 reviewer 的视觉整改 `ship` 与机械流程未闭合是两个不同结论，两者均保留，不能把本 PR 或整个 Comp-first 流程标成全部完成。

实际执行 responsive advance：1440 全页对竖版 comp 自动比较为 61%，低于 65% 门槛，多个区域报 missing / contradicted，因此未关闭 phase。报告在本地 `.impeccable/review/diff/desktop/`；未将该报告改写为人工通过，也未为迎合坐标对比再改已批准页面。

## 素材和字体来源

新 raster 提示词已嵌入对应 PNG 元数据。三张既有 hero 图片仅补充原始 Git 提交来源，不伪造未知生成提示词。中文展示字体为自托管 Noto Sans SC 400 / 600 当前界面字符子集，字体许可保留在 `docs/qa/noto-sans-sc-OFL.txt`；新增字符可能回退到系统字体。[字体来源](https://fonts.google.com/noto/specimen/Noto+Sans+SC)。

## 回滚边界

可 revert 本轮首页与 harness 提交，再通过 PR 预览工作流更新未发布主题；不得以回滚为由覆盖 Theme Editor 中后续运营修改。没有修改 Shopify Product、Variant、价格、库存、订单或正式发布主题；测试 Cart 已清空。完整参考素材截图、未选方向稿与本机工具运行产物未纳入公开仓库。
