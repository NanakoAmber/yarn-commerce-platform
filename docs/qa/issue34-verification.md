# Issue #34 验证与预览交接

## 可体验范围

受密码保护的未发布 Theme `189762732345`（Issue 34 - Project modes）。沿用首页视觉系统和用户选定的第二轮方案 2；首页购买标签与详情共用 `yarn-project-capabilities`。单模式直接显示对应内容，两模式才有切换器，无购买能力的作品归为灵感。

主入口：`https://tutaka-54.myshopify.com/zh/pages/projects/issue-34-demo-cross-stitch-basket?preview_theme_id=189762732345`。首页用同一 preview_theme_id 进入 `/zh` 后可筛选。

演示数据、后台链接及回滚 ID 见 [数据交接](issue34-data-handoff.md)。用户授权本轮演示数据；未授权主题发布或真实订单，本轮未执行。

## 已完成验证

- `./init.sh` 基线通过；实现检查 `npm run verify` 通过 66 个测试。Theme Check 0 错误、11 警告：9 个原有警告，2 个因新详情替代旧组件产生的 `OrphanedSnippet`（`yarn-project-components`、`yarn-project-component`），保留旧组件供已有引用迁移。
- 中日英 1440 / 390 详情及中文首页筛选完整截图均从页首拍摄、打开检查，无横向溢出；另有 849×1852 批准 comp 同尺寸对照。图片由 Shopify Files / Theme asset 加载，六类作者图片均实际存在。
- 首页：有成品 2 件、可买材料 3 件、仅灵感 9 件；双模式作品同时属于前两组。筛选后的作品链接携带对应 `project_mode`。搜索、分类与购买方式为交集；空结果、清除及 URL 恢复已验证。
- 中文主案例：成品 ¥3,680 加入购物车成功；粉霞毛线 3 团合计 ¥3,840 加入成功；可选钩针保持关闭且未被顺带加入。日语另行购买钩针 1 支 ¥980 成功；英语从作品选择 Blush pink 跳到商品页后加购 1 团 ¥1,280 成功，商品页和购物车返回链接均保留 materials。
- 加购后购物车显示作品/商品来源，并可回到相应作品与选购方式。只移除本次新建测试行，恢复原有两件商品（Joyful Cake Yarn 02 ×1、Puni Yarn 01 ×1，共 ¥2,980）；没有提交订单或付款。
- 模式切换保留粉霞与数量 3；方向键切换同步选中状态和焦点。颜色变更后毛线商品详情链接指向对应 Variant，金额显示仍由 Shopify 单价计算。
- 只成品、只材料、仅灵感三案例均无双卡切换器；灵感没有购买表单但可读说明。复核发现只成品/灵感误把保养/观察笔记填为教程，已清空这两条的非教程内容与相关翻译；主案例及材料案例保留真实演示制作步骤。库存与是否支持购买方式独立，相关可用性与数量规则由 Shopify 提供。
- 一次 `impeccable detect --json`：仅字号与旧 DESIGN ramp 的 advisory，未报阻断项；独立 documenter 将按实际实现记录局部字体范围。
- 6 个发布 raster 的 `embed-prompt --scan` 全通过，来源/精确生成提示随素材保存。

## 视觉检查限制（未伪装通过）

独立 finish review 已确认照片、双意图卡片和顺序保留，并认可真实 SKU、数量、合计、自备材料与图文教程对静态构图的适配。图标反馈已用现有 SVG 修复，页内教程去掉外跳箭头。

Impeccable 自动 hero gate 仍未关闭。静态扫描与 Liquid / Shopify CDN 的引用存在兼容限制；另有固定区域框把图片位移及真实采购信息误判为 missing/contradicted。实际同尺寸 `comp-diff` 为约 74%（structure 65%、color 87%），该分数不代表 gate 通过。完整双端与成对截图经独立人工式复核可确认图像和制作入口存在；保留工具失败与 reviewer 的 `fix` 状态，不 force、不写假 pass。

本 PR 因此保持草稿，Issue 不关闭，也不发布主题。预览可以用于产品流程评审；关闭 Comp-first 自动 gate 或明确接受已复核适配后再完成最终设计验收。

通用商品页的既有运营购买指南及部分历史商品内容仍为日语，不属于本次新作品界面的完整本地化；新作品主要操作、价格、购物车与返回链接中日英均已验证。

本地证据在 `.impeccable/review/34-project-modes/`；截图/渲染 DOM 含受保护内部内容，未提交 Git。报告、detector JSON 与批准构图资产来源可追溯；原始用户参考截图不进入 PR。

## 回滚

Theme 变更仅在未发布预览；停用/删除 Theme `189762732345` 即撤回预览。当前已发布 Theme 不变。演示数据独立使用 `issue34-demo` 前缀，可按数据交接逐项删除；新增字段仅在确认无其他内容依赖后删除。源代码可撤回本 PR，不重置用户原工作区。
