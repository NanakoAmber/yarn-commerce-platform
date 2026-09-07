# 本轮验证记录

日期：2026-09-07。范围：Issue #13 批准合并方向的首页实现及后续首屏布局修复。基于已合并 PR #29；工作区 `codex/13-connected-landing`，保留原工作区修改。

合入检查发现主分支包含 `c956337`，撤回了上一轮页眉与首屏提交。已合并 `origin/main`（`2607812`），保留主分支现有页眉、导航与品牌设置，仅在本次批准范围内保留新的首屏。三语双端首屏和英文 320 px 截图已重拍；以下正文操作与 768 / 946 px 对照记录来自合并前，首屏构图代码保持一致。静态首屏关闭遗留正文入场动画，已通过浏览器计算样式确认。

- `./init.sh` 基线已通过。
- 最后一次 `npm run verify`：57 / 57 测试通过，Theme Check 0 错误、9 个既有 warning。
- `git diff --check` 通过。
- 适用六个 UI 文件的 detect：0 anti-patterns、42 advisory；主要为首页流式字号与局部颜色不在旧 DESIGN frontmatter 的全站令牌中。局部设计事实已记录在 DESIGN.md 正文，不据此新增全站令牌，也未将 advisory 伪装为消失。
- 未发布 Shopify development theme，localhost 预览；中日英 1440 / 390 px 截图全部打开检查。补查英文 320 px 与中文 768 px；没有可见横向溢出或主图裁切。
- 中文 390 px：作品入口到库、包袋筛选 2 个、搜索“小猫” 1 个、清除恢复 9 个；URL 条件与 aria-pressed 同步。三语实际文字与断行均已查看。
- 独立 finish review 最终局部 verdict：ship。已修复日文工具标签孤字与 320 px 英文文案压图，详见同目录报告。
- 运营数据与购买代码未修改；文案 schema / templates 保留三语编辑字段。本次未重新执行 Shopify 后台编辑或交易验收，不将结构检查当成真实后台操作证明。

本次仅交付受保护预览。参考图的纹理、字形、分类针目图与实际实现仍有差异，旧整页 Comp-first gates 保留 open，Issue #13 不关闭。作品库带参考商品素材的 946 / 768 px 截图仅在本地检查，不进入公开 diff；提交截图只覆盖本次生成的首屏主图。

回滚：撤销本次提交，恢复原 `yarn-hero` Section、CSS 与首页 settings；不涉及数据库、库存、订单或生产主题。
