# Issue #13 分类作品行验证

- 基线：main `8314209`，独立 worktree `codex/13-category-project-rows`；原工作区未提交内容保留。
- 未发布预览：Theme `189758439737`，Issue 13 - Category rows。
- `./init.sh` 基线通过。最终 `npm run verify`：61 tests passed；Theme Check 0 errors / 9 个既有 warning。
- detect 对变更 UI 文件运行一次：10 advisory，为新增字号/颜色尚未记入 DESIGN；无 hard finding。最终文档从复核实现提取。
- 三语真实路由 `/`、`/zh`、`/en`，每种1440与390 CSS像素，共六张截图均已从顶部捕获、逐张打开。所有类别2/1/5/1；无页面水平溢出。截图只保留本地。
- 中文搜索“小猫”仅1件；不存在的字符串返回0和无结果提示；清除恢复9件。高级“家居”筛出3件实际家居（不含2件花片）。分类锚点清除筛选并跳到对应行；浏览全部、查看全部/收起有效。
- 桌面下一组到末端后禁用，上一组恢复开始；390日文实际滚动365.6px，图片和文字下方44px控件有效。短行不显示无意义滑动/展开操作。
- 英/日原先类别翻译导致归组漂移，已通过 canonical value snippet 修复，现场复核均2/1/5/1；difficulty 同步规范化用于筛选。
- 卡片进入 `/zh/pages/projects/nap-cat-amigurumi`，名称、准备信息及材料匹配；返回首页正常。未提交购物车、交易或运营数据变更。
- Theme Editor：在draft分类块将包袋标题临时改为“包袋 · 编辑验证”，保存后前台确认同步；再清空并保存，前台恢复“包袋”。手选作品/顺序与插图/类别配置控件存在；未修改实际Project记录。
- Header、Hero、全局settings与发布前live快照一致，只有当前范围内容改变。
- 浏览器首轮全页截图发生DPR裁切，已作废并重捕。最终仍在原Chrome会话，显式捕获完整DPR区域后输出1440/390。尝试独立浏览器停在密码页，未解除保护。
- 辅助comp-diff54.53% contradicted，非pass，差异与实际适配见surface brief及独立review。旧build gates未改。
- 发布前完整live快照另存本地，并上传回滚主题 `189758898489`（Rollback before Issue 13 - 20260907）。发布/CI/最终提交信息见 PR 和 Issue 最新状态。

- 最新用户更正：四个手作图标必须与原稿对齐。直接提取approved comp四插画，替换旧针目plate；四个PNG已打开检查并嵌入来源，embed-prompt scan 4 rasters / 0 missing。日文手机分类标签调整为1.25rem避免末字孤行，三语截图重新捕获。

- 原图图标终稿辅助diff：54.56% / contradicted（真实9件与示意16件、删CTA/移箭头等保留差异）；旧54.53%仅初轮。最终范围判定见finish-verdict.md。
