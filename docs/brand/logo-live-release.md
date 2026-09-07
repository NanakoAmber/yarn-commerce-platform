# 第一款 Logo 定向上线记录

2026-09-06（America/Los_Angeles），按本次用户明确的 Live 更新指令完成。

- 实现提交：`86286661201f62c5458fe13a9b1746d2fff64b1c`。
- Live Theme：`189727637817`，名称 `Issue 23 - Project prototype`；保留原 Theme ID。
- 预览 Theme：`189734420793`，由 Live 完整副本加本次 7 文件组成。
- 上传清单及前后 SHA-256：[`logo-release-manifest.json`](logo-release-manifest.json)。先上传新 PNG，再定向上传其余 6 个品牌文件，均使用 `--nodelete`；没有发布整个候选 Theme。
- 上传前重拉 Live 的 6 个原有文件，确认与备份 hash 一致；上传后重拉全部 7 个文件，确认与验收版本 hash 一致。未覆盖期间发生的其他工作。
- 本次没有上传 `config/settings_data.json`、商品/内容数据、价格、库存或订单；没有合并 PR #26 继承的 Issue #23 页面变更。

## 发布后验证

在 Chrome 使用 Exit preview 退出草稿后，检查无 `preview_theme_id` 的实际页面：

| 页面 | 手机 390×844 | 桌面 1440×900 |
|---|---|---|
| `/zh`（zh-CN） | 通过 | 通过 |
| `/`（ja） | 通过 | 通过 |
| `/en`（en） | 通过 | 通过 |

六组检查均满足：品牌标题 MewoolMew、新 PNG 已加载、无预览栏、无横向溢出。页眉仍为桌面 84 px / 手机 68 px。Live 的图片来自 `/cdn/shop/t/16/assets/`，预览来自 `/cdn/shop/t/23/assets/`，避免把草稿缓存误认为生产结果。

- Live 实测记录：`../../.impeccable/review/25-logo-reference/live-metrics.json`。
- 公开图像证据：同目录 `live-header-desktop.png` / `live-header-mobile.png`，仅包含本次原创 Logo 的页眉。
- 预览中的手机菜单、Catalog → Logo 返回 `/zh` 已验证；上线仅复制相同品牌文件。发布后控制台无 error。
- `npm run verify`：51/51 tests；Theme Check 0 errors、12 条既有 warnings。
- Detector：0 anti-patterns、8 条既有导航 advisory。独立 finish verdict：ship，局部 P0/P1/P2 为 0。
- 实现提交的 GitHub `theme-check` 和 `preview` 已通过。

## 回滚

发布前的 6 个原有文件均已证明与 Git 提交 `297159f62ad09b9a6ab56d35ca32ae488dc2b966` 完全一致。若需要回滚，先核对当前 Live ID 及是否有后续发布，再在当次授权范围内恢复这 6 个文件；新 PNG 可以保留为未被引用的资产，无需删除。

```bash
rollback_dir=$(mktemp -d /tmp/mewoolmew-logo-rollback.XXXXXX)
git archive 297159f62ad09b9a6ab56d35ca32ae488dc2b966 \
  assets/yarn-header.css snippets/yarn-wordmark.liquid \
  sections/header.liquid sections/footer.liquid \
  layout/theme.liquid layout/password.liquid | tar -x -C "$rollback_dir"
npx shopify theme push --store tutaka-54.myshopify.com \
  --theme 189727637817 --allow-live --nodelete --path "$rollback_dir" \
  --only assets/yarn-header.css --only snippets/yarn-wordmark.liquid \
  --only sections/header.liquid --only sections/footer.liquid \
  --only layout/theme.liquid --only layout/password.liquid
```

另有本机持久备份：`/Users/jinchen/.codex/artifacts/mewoolmew-logo-20260906/live-before`。回滚指令不会更改商品或 Theme 设置。本文件只记录此次已完成发布，不授予未来操作新的生产权限。
