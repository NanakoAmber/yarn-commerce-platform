# AGENTS.md

日本市场毛线电商与手作平台，当前以 Shopify Theme 实现 MVP。当前产品范围见 `PRODUCT.md`。

## 开始任务

- 先确认用户目标、当前 GitHub Issue 的范围与验收标准，并检查 `git status`。实施变更前如无对应 Issue，建立一个；只读咨询无需新建 Issue。
- 首次进入项目读取 `PRODUCT.md` 和 `CONTEXT.md`；会话中已读且未变的内容不重复加载。领域名称以 `CONTEXT.md` 为准。
- 按需追加上下文：UI / UX → `.github/skills/impeccable/SKILL.md`、`docs/agents/visual-review.md`、已有 `DESIGN.md` 和对应 surface brief；架构或数据边界 → `docs/ARCHITECTURE.md` 与相关 ADR。
- 首次修改 Theme 代码、依赖或验证脚本前运行 `./init.sh` 确认基线；纯文档和指令修改检查内容与引用即可。
- 每个工作区一次实现一个 Issue，分支使用 `codex/<issue>-<slug>`。已有无关修改时使用独立工作区，保留用户工作。

## 执行与授权

- 用户提出实施或修复请求后，完成范围内的工作和必要验证。常规、可回滚的实现选择自行判断，沿用当前会话已有授权，不重复请求确认。
- 只有缺失信息会实质改变目标、范围或不可逆决策时才澄清；等待期间继续不依赖该答案的工作。需要批准时先准备可审查的具体结果。
- 用户明确指令优先于 skill 的流程建议。若某条规则导致暂停，指出文件和原文，解释需要用户决定什么。
- 只实现当前用户路径和 Issue 必需的内容。新字段、状态、角色或服务须对应已确认的近期需求；未验证想法留在 backlog。
- 产品或架构发生冲突时停止扩展范围，在 Issue 记录并请求决策。不得重置、覆盖或删除无关工作。

## 事实来源

- GitHub Issue：目标、范围、验收和状态；PR：实现、审查和验证证据。Slack 是讨论入口，决定需归档到 Issue / PR。
- `PRODUCT.md`：产品边界；`CONTEXT.md`：领域词汇与关系；`docs/ARCHITECTURE.md` / ADR：架构边界与难逆转决策。
- `DESIGN.md`：真实实现且复核后的全局视觉系统；surface brief：单页面获批方向与构图。不得把意向稿提前写成成品规范。
- 视觉权威：当前用户明确批准的方向 / surface brief > `DESIGN.md` > 当前实现 > 历史 QA、参考站和原型。`docs/qa/design-direction.md` 仅为历史审计。
- 不另建与 GitHub Issue 重复的 feature / progress tracker。

## Shopify 与内容边界

- Shopify 是 Product、Variant、价格、库存、Cart、Checkout、Order、Refund 的唯一事实来源；公开 Project 内容初期优先用 Metaobjects / Metafields。
- My Project、UGC、收藏、点赞、社区和创作者状态属于未来 Platform Service；该服务只存 Shopify 实体 ID，不复制价格、库存和订单真值。
- 保持 Hybrid Storefront；全量迁移 Headless 需要新 ADR 和人工批准。重要首屏商品内容用 Liquid / HTML 服务端渲染，不用 Storefront API 重复获取。
- Rise 提供 Theme 和购买流程骨架，允许按批准方向重写 Liquid / CSS；运营内容必须映射到 Section setting、Block、Metaobject、Metafield 或 Shopify Product，可在 Shopify 编辑。
- 不虚构评价、销量、折扣或品牌证明。未授权素材只用于受保护的内部原型；发布用 raster 记录生成提示词或来源。
- 浏览器不得包含 Admin token、数据库密码或其他服务端凭证；diff 不得含密钥、个人数据、未授权素材或原始会议记录。

## 语言与视觉方向

- Issue、PR、评审和长期文档默认用简明中文；代码、API 字段、命令及须精确引用的平台名称保留英文。重要术语首次出现可附英文，避免无规律切换语言。
- 所有 AI 生成的评审图片，其画面内可读文案使用准确简体中文。生成前、提交评审前按 `docs/agents/visual-review.md` 核对；日文市场文案在方向获批后进入 Shopify 本地化内容层。
- 新视觉世界或 replacement redesign 按 `.impeccable/config.json` 的 Comp-first 流程，先批准视觉稿，再写 Theme UI。已批准方向可继续实施；只有改变方向或范围才重新决策。
- 局部 polish 继承已有 `DESIGN.md` 与批准方向。Impeccable 用于当前范围的设计和复核，不能自行推翻已批准视觉世界。

## 验证与完成

| 改动 | 必要验证 |
|---|---|
| 纯文档 / AGENTS / skill 指令 | 检查事实、引用、触发条件和规则冲突；运行 `git diff --check`；修改 skill 时校验 frontmatter |
| Theme 代码、依赖或验证脚本 | `npm run verify`，补充与行为风险相关的检查 |
| 视觉或购买流程 | 上述代码检查 + 未发布 Theme 的桌面 / 移动端手工验证；视觉按 `docs/agents/visual-review.md` 执行 |

完成必要检查后，只因新修改、失败或尚未解决的问题扩大或重复验证；不为低风险文案改动添加镜像测试。

- 完成意味着 Issue 验收满足、适用检查通过、文档与实现一致；既有基线问题须注明，不能充当本次回归的豁免。
- PR 记录验证证据、风险、未解决项和回滚方式。Comp-first 必须完成独立 finish review、verdict 和从成品提取的 `DESIGN.md`。
- 结束时更新当前 Issue / PR，使下一步能从 GitHub 恢复；检查 `git status`，明确本次提交与尚未提交的文件。

## 生产安全

- `main` 用于日常集成与未发布 Theme 预览；`production` 仅用于人工验收后的发布。
- 发布主题、真实订单、扣款、退款或运营数据更改需要当次明确人工批准；Slack 消息或普通 Issue 不自动授权线上发布。
