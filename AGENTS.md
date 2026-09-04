# AGENTS.md

本项目是一个面向日本市场的毛线电商与手作平台，当前使用 Shopify Theme 实现 MVP。

## Startup Workflow

写代码前：

1. 阅读本文件。
2. 阅读 `PRODUCT.md` 了解产品边界和当前阶段。
3. 阅读 `CONTEXT.md` 并使用其中的统一领域语言。
4. 架构或数据边界相关工作，阅读 `docs/ARCHITECTURE.md` 和相关 ADR。
5. 阅读当前 GitHub Issue 及其验收标准；如无 Issue，先建立或要求建立。
6. 运行 `./init.sh`，确认工作树和基线检查。

## Source of Truth

- GitHub Issue：任务目标、范围、验收标准和当前状态。
- Pull Request：实现、审查、验证证据和可追溯变更。
- `PRODUCT.md`：产品目标、范围和已知上线边界。
- `CONTEXT.md`：领域词汇与关系，不放实现细节。
- `docs/ARCHITECTURE.md` 与 ADR：架构边界及难以逆转的决策。
- Slack：讨论和需求入口，不是长期事实来源。

不创建与 GitHub Issue 重复的本地 feature tracker 或 progress tracker。

## Collaboration Language

- GitHub Issue、PR、评审意见、Slack 决策摘要和长期文档默认使用中文。
- 代码标识符、API 字段、终端命令和需要精确引用的平台名称保留英文。
- 中文说明中首次出现的重要技术术语可保留英文原词，避免翻译造成歧义。
- 不在同一份 Issue 或 PR 中无规律地中英文切换。

## Architecture Guardrails

- Shopify 是 Product、Variant、价格、库存、Cart、Checkout、Order 和 Refund 的唯一事实来源。
- 公开的 Project 内容初期优先放在 Shopify Metaobjects / Metafields。
- My Project、UGC、收藏、点赞、社区和创作者状态属于未来的 Platform Service。
- Platform Service 只保存 Shopify 实体 ID，不复制价格、库存和订单真值。
- 当前使用 Hybrid Storefront；不得在没有新 ADR 和人工批准时全量迁移 Headless。
- 重要首屏商品内容用 Liquid/HTML 服务端渲染，不在 Theme 里用 Storefront API 重复获取。
- 浏览器中不得包含 Shopify Admin token、数据库密码或其他服务端凭证。

## Working Rules

- WIP 上限为 1：一次只实现一个 Issue。
- 分支默认使用 `codex/<issue>-<slug>`。
- 先确认验收标准，再改动代码。
- 保留用户已有修改；不重置、覆盖或删除无关工作。
- 不提交密钥、个人数据、未授权参考素材或原始会议记录。
- 修改应尽量小、可审查、可回滚。
- 发现产品或架构冲突时停止扩展范围，在 Issue 中记录并请求决策。

## Verification

每次主题代码变更至少运行：

```bash
npm run verify
```

视觉或购买流程变更还必须在未发布 Shopify Theme 上手工验证受影响的移动端和桌面端路径。

## Definition of Done

- [ ] Issue 范围和验收标准全部满足。
- [ ] `npm run verify` 通过，或已记录非本变更导致的基线问题。
- [ ] 手工验证证据写入 PR。
- [ ] 文档和代码保持一致。
- [ ] 无密钥、个人数据和未授权素材进入 diff。
- [ ] PR 已说明风险、未解决项和回滚方式。

## Production Safety

- `main` 用于日常集成和未发布 Shopify Theme 预览。
- `production` 仅用于经人工验收的发布。
- 不得在 Slack 指令或普通 Issue 中直接发布到线上。
- 不得在没有当次明确人工批准时发布主题、提交真实订单、扣款、退款或更改运营数据。

## End of Session

1. 在当前 Issue / PR 更新已完成项、验证证据、风险和下一步。
2. 确认下一步可从 GitHub 恢复，不依赖当前对话。
3. 检查 `git status` 并明确说明未提交文件。
