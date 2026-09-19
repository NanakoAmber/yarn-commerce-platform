# 导航与编织 Logo 复核

范围：Issue #20。用户要求导航与首页一致，随后明确要求重做 Logo；继承已接受的首页 B 色板与细线手作风格，不重做首页构图。

## 成品与来源

- 原创 `assets/yarn-stitch-mark.svg`：四个针目环、珊瑚结心和线尾，人工编写 SVG path，无生成 raster 或外部素材。
- 字标继续用当前工作名和已有自托管 Yarn Display 400；中文文案为准确的“毛线工作室”，日文 / 英文使用既有 YARN STUDIO。文字保持 HTML，Shopify 自定义 Logo 优先。
- `assets/yarn-header.css` 统一头部尺寸、菜单状态、图标和语言面板；删除旧的放大购物车与手机字标位移规则。
- 购物袋两种状态使用同一 24px / 1.4px SVG 轮廓，数量仍由 Shopify Cart 提供。

## 验证

- 本地 Shopify 开发主题 189686808889，非 live；当前 live 189706404153 未更改。
- 1440 与 390 CSS px 实际页面截图已打开，保存在 `.impeccable/review/20-navigation/desktop.png`、`mobile.png`；另有 `logo.png`、`navigation-detail.png`、`mobile-menu.png`。这些视觉文件保留本地，不提交含参考商品素材的截图。
- 中文、日文、英文路径均渲染相应语言，检查无水平溢出；英文长导航与工具区分离，较窄桌面使用折叠菜单。
- 搜索弹层正常打开并可用 Escape 关闭；购物袋打开空购物车抽屉；菜单语言切换至日文成功。
- 修复手机同页锚点点击不关闭菜单的问题。实测点击“按作品挑选”后 hash 为 `#shop-by-project`、drawerOpen=false、滚动锁移除、焦点进入目标 Section。
- `npm run verify`：0 error、8 个既有 warning，6 个测试通过。
- 初次目标 Impeccable detector：0 anti-pattern，22 条 advisory；Logo 追加范围终检：0 anti-pattern，13 条 advisory，涉及已有色板细分、字标 / 辅助文字尺寸与圆角。字标尺寸已在 DESIGN.md 导航段记录，不把 advisory 写成阻断失败。

## 结论与边界

导航与 Logo 已达到可评审预览状态，交互修复通过；最终审美接受由用户在实际页面确认。本次没有重开首页 B 的机械 gate，也没有将其旧未关闭状态改写为通过。

英文 URL 可直接访问，但当前语言菜单只有日文和简体中文；保留现有 Shopify 可用语言集合，未修改发布设置。设计 sidecar 比 DESIGN.md 旧的提示已记录，未扩展任务去刷新整套设计面板。

回滚：撤回本 PR 的主题代码即可恢复原字标与导航；不涉及商品、价格、库存或订单迁移。
