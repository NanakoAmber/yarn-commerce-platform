# AGENTS.md

本项目是一个面向日本市场的毛线电商与手作平台，当前使用 Shopify Theme 实现 MVP。

## Startup Workflow

写代码前：

1. 阅读本文件。
2. 阅读 `PRODUCT.md` 了解产品边界和当前阶段。
3. 阅读 `CONTEXT.md` 并使用其中的统一领域语言。
4. 阅读当前 GitHub Issue 及其验收标准；如无 Issue，先建立或要求建立。
5. UI / UX 工作还必须阅读 `.github/skills/impeccable/SKILL.md`；如 `DESIGN.md` 和对应 surface brief 已存在，同时读取它们，并在当前会话只运行一次 `impeccable context`。
6. 架构或数据边界相关工作，阅读 `docs/ARCHITECTURE.md` 和相关 ADR。
7. 运行 `./init.sh`，确认工作树和基线检查。

## Source of Truth

- GitHub Issue：任务目标、范围、验收标准和当前状态。
- Pull Request：实现、审查、验证证据和可追溯变更。
- `PRODUCT.md`：产品目标、范围和已知上线边界。
- `CONTEXT.md`：领域词汇与关系，不放实现细节。
- `DESIGN.md`：已经在真实页面实现并通过复核的全局视觉系统；replacement redesign 完成前不得用意向稿提前填充。
- Impeccable surface brief：单个页面已经人工批准的方向合同和首屏构图，不复制全局产品或设计令牌。
- `docs/ARCHITECTURE.md` 与 ADR：架构边界及难以逆转的决策。
- Slack：讨论和需求入口，不是长期事实来源。

不创建与 GitHub Issue 重复的本地 feature tracker 或 progress tracker。

任务范围以当前 Issue 为准。范围内的视觉权威顺序为：用户在当前任务中明确批准的方向 / surface brief > `DESIGN.md` > 当前实现 > 历史 QA、参考站与过往原型。`docs/qa/design-direction.md` 只记录历史审计，不是当前视觉规范。

## Collaboration Language

- GitHub Issue、PR、评审意见、Slack 决策摘要和长期文档默认使用中文。
- 代码标识符、API 字段、终端命令和需要精确引用的平台名称保留英文。
- 中文说明中首次出现的重要技术术语可保留英文原词，避免翻译造成歧义。
- 不在同一份 Issue 或 PR 中无规律地中英文切换。
- 所有 AI 生成的方向卡、构图稿、视觉稿、示意图、带标注截图及其他评审图片，其画面内可读文案一律使用简体中文；不得因为目标市场是日本而在评审图片中使用日文。
- 不可翻译的品牌名、正式产品名或代码标识符，只有在用户明确要求原文时才可保留；面向日本市场的日文文案在视觉方向获批后进入 Shopify 可编辑的本地化内容层，不烘焙进评审 raster。

## Architecture Guardrails

- Shopify 是 Product、Variant、价格、库存、Cart、Checkout、Order 和 Refund 的唯一事实来源。
- 公开的 Project 内容初期优先放在 Shopify Metaobjects / Metafields。
- My Project、UGC、收藏、点赞、社区和创作者状态属于未来的 Platform Service。
- Platform Service 只保存 Shopify 实体 ID，不复制价格、库存和订单真值。
- 当前使用 Hybrid Storefront；不得在没有新 ADR 和人工批准时全量迁移 Headless。
- 重要首屏商品内容用 Liquid/HTML 服务端渲染，不在 Theme 里用 Storefront API 重复获取。
- 浏览器中不得包含 Shopify Admin token、数据库密码或其他服务端凭证。

## Design Workflow

- Rise 只提供 Shopify Section、Theme Editor、商品与购买流程骨架，不构成前台视觉上限；允许重写 Liquid 结构和 CSS，但内容仍须可由 Shopify 管理和编辑。
- 新视觉世界或 replacement redesign 必须先确认 `PRODUCT.md`，完成人工方向选择；默认采用 `.impeccable/config.json` 中的 Comp-first 流程，在任何 Theme UI 代码之前批准视觉稿。
- 局部 polish 必须继承现有 `DESIGN.md`。Impeccable 用来 critique、detect、harden 和 polish，不得自行推翻已批准的视觉世界。
- 新增首页内容必须映射到明确的 Section setting、Block、Metaobject、Metafield 或 Shopify Product 事实；不得为了视觉稿写死运营内容或虚构评价、销量、折扣和品牌证明。
- 每个生成或引用的发布用 raster 必须记录生成提示词或来源；未授权参考素材只可用于受保护的内部原型。
- 生成评审图片前，提示词必须逐条列出需要出现的准确简体中文文案，并明确禁止日文、乱码和额外文案；生成后必须打开原图逐项核对。出现日文、不可读文字、错字或模型自造标签的图片视为无效，不得提交给用户审批。
- replacement redesign 的 `DESIGN.md` 在实现、截图复核和独立 finish review 之后，从真实成品提取；不得用实现前的意向替代成品规范。

## Working Rules

- WIP 上限为 1：一次只实现一个 Issue。
- 分支默认使用 `codex/<issue>-<slug>`。
- 先确认验收标准，再改动代码。
- 采用渐进式设计：只解决当前用户路径和当前 Issue 必需的问题，不因为未来可能出现的场景提前展开完整模型。
- 新字段、状态、角色或服务必须能对应已经确认的近期需求；未经验证的想法留在 backlog，不进入当前实现。
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

视觉变更还必须：

- 对本次改动目标运行 `.github/skills/impeccable/scripts/impeccable detect <changed-ui-files>`。
- 将 1440 px Desktop 与 390 px Mobile 截图保存在 `.impeccable/review/`，并打开确认截图内容有效。
- 评审任何生成图片前，核对画面内所有可读文案均为准确简体中文；发现日文、乱码、错字或额外标签必须重新生成。
- 回归日文 `/`、简体中文 `/zh`、英文 `/en` 的文字扩展、水平溢出和关键操作。
- Comp-first 工作以已批准 comp 为构图合同；未完成 finish review、verdict 和最终 `DESIGN.md` 不得宣称完成。

## Definition of Done

- [ ] Issue 范围和验收标准全部满足。
- [ ] `npm run verify` 通过，或已记录非本变更导致的基线问题。
- [ ] 手工验证证据写入 PR。
- [ ] 视觉任务已满足批准的 surface brief / comp，并记录 Impeccable detector 与 finish review 结果。
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
