# 毛线项目视觉实施与评审

UI / UX 工作读取本文件。范围、数据归属与生产授权以根目录 `AGENTS.md` 为准。

## 方向与工具

- 会话首次使用 Impeccable 时，在项目目录运行 `.github/skills/impeccable/scripts/impeccable context` 一次；只读取本次模式需要的 reference。
- 新视觉世界或 replacement redesign 先确认 `PRODUCT.md`，按 `.impeccable/config.json` 的 Comp-first 流程完成人工方向选择和视觉稿批准，再修改 Theme UI。
- 承接已批准 comp 时直接继续实施，不重复选方向。局部 polish 继承当前 `DESIGN.md`；缺失该文件不代表可以推翻已有设计。
- 批准的 surface brief / comp 是构图合同。Impeccable 是本项目设计流程入口；其他设计 skill 仅在任务明确需要时使用，并服从同一批准方向。

## 评审图片

- AI 生成的方向卡、构图稿、视觉稿、示意图和带标注截图，画面内可读文案一律使用简体中文，不因面向日本市场改用日文。
- 不可翻译品牌名、正式产品名或代码标识符，仅在用户明确要求原文时保留。
- 生成前，在提示词中逐条列出准确简体中文文案，并禁止日文、乱码和额外文案。日文市场内容在方向获批后进入 Shopify 可编辑的本地化层，不烘焙进评审 raster。
- 生成后打开原图逐项核对文字、标签与内容。出现日文、不可读文字、错字或模型自造标签的图片无效，重新生成后再提交审批。
- 生成或引用的发布用 raster 记录提示词或来源。未授权参考图仅用于受保护的内部原型，不进入公开 diff。

## 实现验收

- Theme 代码运行 `npm run verify`。视觉改动运行 `.github/skills/impeccable/scripts/impeccable detect <changed-ui-files>`，只针对本次文件。
- 在未发布 Shopify Theme 验证受影响的桌面与移动端路径。视觉截图用 1440 px Desktop 和 390 px Mobile，保存在 `.impeccable/review/` 并打开确认内容有效；公开提交前检查素材授权。
- 回归日文 `/`、简体中文 `/zh`、英文 `/en` 的文字扩展、水平溢出和关键操作。实际语言未开放时记录未验证项，不能以翻译已保存代替真实预览。
- 批量检查桌面与移动端，集中修复后确认。检查通过后停止润色；未通过项按影响修复或明确报告，不以检查轮数耗尽宣称完成。
- Comp-first 工作完成独立 finish review 和 verdict 后，才从真实实现与截图复核结果提取最终 `DESIGN.md`。未完成这些步骤不得宣称改版完成。
- 在 PR 留下批准方向、detector / 手工验证 / finish review 证据及未解决项；不得用历史截图替代本次验证。
