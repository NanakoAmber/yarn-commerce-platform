# Issue #32 验证记录

日期：2026-09-07。独立工作区 `codex/32-home-design-system`，基于 `origin/main` 的 `f97a915`。原工作区无关修改保留。

## 代码与系统边界

- 实施前 `./init.sh`：61 tests pass；Theme Check 0 errors、9 既有 warnings。
- 完成后 `npm run verify`：62 tests pass；Theme Check 仍为 0 errors、9 warnings。新增检查验证核心消费者颜色单一来源、token引用完整与加载顺序。
- `git diff --check` 通过。
- 对本轮 UI 文件执行一次 Impeccable detect：68 advisory、0 非 advisory，原始结果 `detect.json`。字号 ramp、旧详情/非紧凑帮助的色值提示如实保留；不把旧局部值全部升级为共享规范以消除提示。
- Hero 的定位、四个插画节点、波浪、分类图标、作品卡数量与比例保持现有实现，仅对等 token 接线。新共享导航/页脚在全站生效，正文迁移未扩展。

## 实际 Chrome 验证

未发布 Theme：`189759848761`（Issue 32 - Homepage system）；保留店铺密码。截图的主题 section ID 为 `template--27791429697849`。

| 语言 | 1440 桌面 | 390 手机 |
| --- | --- | --- |
| 中文 | `desktop.png`，4000px 全页 | `mobile.png`，3115px 全页 |
| 英文 | `en-desktop.png`，4124px 全页 | `en-mobile.png`，3291px 全页 |
| 日文 | `ja-desktop.png`，4124px 全页 | `ja-mobile.png`，3376px 全页 |

6 张最终截图均从文档顶部、完成图片加载后捕获并逐一打开。最终图不含 Shopify preview bar，页面没有横向溢出。截图包含既有第三方内部样例图，只保留本地，不提交。

- 首轮发现并修复手机帮助标题受挤、订阅表单默认缩进，以及 Rise 字段伪元素造成的双重边框；最终双端截图已复拍。
- 手机菜单展开/ESC 关闭、搜索面板打开/输入/ESC 关闭；菜单截图 `mobile-menu.png` 已打开。预测搜索输入后曾停留在平台“正在加载”状态，本轮未将预测建议响应认证为通过；随后在导航搜索提交 `yarn`，实际进入英文 Search results 并返回 7 个结果，原生搜索提交路径通过。
- 页脚日文语言菜单展开，选择 English，实际进入 `/en` 且 HTML lang 为 `en`。
- 日文“マフラー”、英文“scarf”、中文“围巾”各搜索到唯一相应围巾 Project；英文无匹配查询显示 0 projects 和清除入口，清除恢复作品行。
- 手机家居“下一组”滚动到 scrollLeft 365.6（可视宽358，总宽906）；原生作品行逻辑和现有回归测试均正常。
- 联系入口实际进入 `/en/pages/contact`，作品卡实际进入 `/zh/pages/projects/demo-granny-pouch`；两页共享页脚存在、无横向溢出，未重设计正文。
- 购物袋打开原有购物车抽屉，已有两项商品及原数量/删除/价格/来源链接可读取；未更改购物车、创建订单或结账。
- 订阅 email 输入无效值，原生 `typeMismatch=true`；Tab 到 Subscribe 后为 2px 灰蓝焦点、4px offset。已清空输入，未发送真实订阅，不宣称邮件投递/后端成功状态已验证。
- 计算 token 对比度：正文/暖白 13.13:1；次要文字/暖白 5.62:1；动作文字/奶油纸面 5.61:1；焦点/暖白 5.44:1；Hero 主按钮文字/奶油黄 11.52:1。

## Shopify 编辑入口

在本主题 Editor 检查：标头 Main menu 与全局 Logo入口、语言开关；紧凑帮助三语标题/动作、联系链接；Footer 订阅标题、显示开关、语言/国家、政策、付款及原 Block入口。订阅开关可切换，随后 Undo 恢复，Save 回到 disabled；没有保存任何运营配置。Editor 内预览 iframe 未提供稳定渲染证据，因此这项仅认证后台配置入口与可撤销编辑，不称为完整保存到前台的往返测试。

## 交付与限制

独立 finish review 见 `finish-review.md`；文档完成后的限定 verdict 另附。`DESIGN.md` 与 `docs/design/home-system.md` 分别记录真实视觉事实和后续接入边界。

导航已按用户后续明确要求补齐三语，见下节。旧 Product 标题、第三方演示封面和未验证教程/材料事实不属于本轮内容修改。未发布预览、当前复核不构成公开素材授权或生产发布。

预览：https://tutaka-54.myshopify.com/zh?preview_theme_id=189759848761
回滚：撤回本 PR 或继续使用原 live Theme 189758439737；本轮未发布，不改变原 live Theme。


## 用户补充后的导航修正与复核

用户明确要求导航与 Section / 整页语言一致，并要求后续开发遵守设计系统、检查完成后合并 PR。

Shopify `Main menu`（318230593849）的简体中文原文原为 Home / Catalog / Contact，日文和英文译文均空。现已在原资源保存为：

| 目标 | 中文 | 日文 | 英文 |
| --- | --- | --- | --- |
| 首页 | 首页 | ホーム | Home |
| `/collections/all` | 商品目录 | 商品一覧 | Catalog |
| `/pages/contact` | 联系我们 | お問い合わせ | Contact |

中文源标签在 Navigation 编辑，日/英译文在 Translate & Adapt 对应三个菜单项保存，未改菜单标题或链接。保存后后台重载仍有值，前台三语桌面/手机 DOM 标签、整页 lang 与语言前缀目标逐项一致；未引入 Liquid 文案覆盖或第二份菜单。菜单是商店共享资源，这项用户授权的语言更正同时影响引用该菜单的主题，不是发布 Theme。

6张全页截图均已在修正后同尺寸复拍覆盖并再次打开，另保存并打开三语手机展开菜单 `mobile-menu.png`、`en-mobile-menu.png`、`ja-mobile-menu.png`。最终独立完整复核见 `final-review.md`；早前评审是历史阶段证据。

后续规则已写入 `AGENTS.md`、`docs/agents/visual-review.md`、`docs/design/home-system.md` 和 PR 模板：复用单一token/共享控件，规则修改同步DESIGN；导航/页脚/section保持同语，英文回退不能算三语通过。自动token边界检查随 `npm run verify` 在现有CI中执行。

回滚代码使用 revert PR；Shopify菜单内容不由Git回滚，若需撤回语言更正须单独恢复原三个英文源标签并移除本轮日英菜单项译文，不改链接或其他菜单。
