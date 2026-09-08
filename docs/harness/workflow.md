# Codex, GitHub, Slack and Shopify workflow

## Tool boundaries

| Tool | Responsibility |
| --- | --- |
| Slack | 讨论、需求入口、链接和快速反馈 |
| GitHub Issue | 持久的目标、范围、验收标准和 owner |
| Codex | 代码与文档实现、检查、预览准备和 PR |
| GitHub PR | 变更审查、验证证据和发布记录 |
| Shopify unpublished theme | 每个 PR 的代码预览、集成预览和人工验收 |
| Shopify published theme | 线上商店，只接收已批准发布 |

Slack 不保存唯一份决策或验收标准。任何要求 Codex 实现的内容，先转成 GitHub Issue，或在 Codex 任务中明确指向 Issue。

## Delivery flow

```mermaid
flowchart LR
    Slack[Slack 讨论] --> Issue[GitHub Issue]
    Issue --> Branch[codex/* branch]
    Branch --> PR[Pull Request]
    PR --> CI[Theme Check]
    CI --> PRPreview[PR unpublished preview]
    PRPreview --> Review[review + human acceptance]
    Review --> Main[merge to main]
    Main --> Preview[Shopify unpublished preview]
    Preview --> QA[human acceptance]
    QA --> Release[main to production PR]
    Release --> Approval[release owner approval]
    Approval --> Live[merge and publish]
```

## Branches

- `main`：日常集成分支，目标是连接未发布 Shopify Theme。
- `production`：线上发布分支；在正式上线前保持与已发布主题断开。
- `codex/<issue>-<slug>`：每个 Issue 一个短期分支。

如果 `production` 已连接发布主题，合并到该分支就是上线动作，因此人工批准必须发生在合并之前。

## Issue readiness

一个 Issue 只有在以下内容齐备时才进入实现：

- 用户或商业目标。
- 明确的包含范围和排除范围。
- 可观察的验收标准。
- 影响的页面、语言和设备。
- 是否涉及生产数据、真实交易或新权限。

## 交接与保留

资料保留以 `AGENTS.md` 为准。新会话从当前 Issue、目标文件和相关权威文档恢复，不阅读过程目录来重建讨论。决定修改到对应产品 / 领域 / 架构 / 设计文档；Issue 仅维护范围、状态与待解决问题，不建立并行 tracker。

PR 简记对应 Issue、最终行为、实际检查及结果、适用设备 / 语言、独立评审最终结论、未解决项和回滚方式。纯文档变更标明不适用的 UI 检查，无需生成截图或过程报告。

不把聊天、逐轮 QA、候选稿、检测输出与执行日志转存到仓库或 Issue / PR 附件。获批方向链接到 surface brief；必要的批准视觉与素材来源按 `AGENTS.md` 保留。提交前检查暂存 diff，不用 `git add -f` 绕过过程文件忽略规则。现存历史资料仅在追溯特定决定 / 来源时读取，迁出唯一有效结论后再清理。

## Slack activation gate

只在以下流程已经从头到尾成功跑通一次后，再把 Slack `@Codex` 作为日常入口：

1. GitHub Repo 、Issue 模板和 PR 模板可用。
2. Codex 能从 Issue 创建分支并提交 PR。
3. CI 可运行 Theme Check。
4. 每个同仓库 PR 可自动创建或更新独立的未发布 Shopify Theme，并在 PR 中显示预览链接。
5. 人工能根据验收标准通过或拒绝发布。

## PR preview safety

- PR 预览只处理同仓库分支；来自 fork 的 PR 不接收 Theme Access Secret，也不会自动部署。
- 每个 PR 使用固定名称 `PR-<number>` 的未发布主题，后续提交原地更新，避免耗尽 Shopify 主题数量上限。
- PR 关闭后自动删除对应的未发布主题。
- 自动化不使用 `--live`、`--publish` 或 `--allow-live`，不得修改线上主题。
