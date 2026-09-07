# Issue #25：第一款 Logo 还原复核

范围：按用户指定的第一款橘色猫抱毛线球原稿还原页眉，沿用已确定的 MewoolMew 名称；不评审原有首页、商品内容或整站设计。

## 视觉来源与证据

- Source visual truth：`docs/brand/approved-first-concept.png` 第一列；1536×1024 三案原图。
- 正式资产：`assets/mewoolmew-logo-reference.png`，1881×836。
- 本轮实施：未发布 Theme 189734420793，真实 Live 副本加 7 个品牌文件。
- 公开聚焦截图：`.impeccable/review/25-logo-reference/preview-header-desktop.png`、`preview-header-mobile.png`，仅保留原创 Logo 和页眉。
- 完整视图证据（本地、不公开提交）：同目录 `preview-{zh,ja,en}-{desktop,mobile}.png`，附 `preview-metrics.json`。
- 状态：各语言首页、页面顶部、菜单关闭；另测试手机菜单打开和目录页返回首页。
- CSS 视口：1440×900 和 390×844。Chrome 原有缩放使 DPR 为 1.25，视口工具采用 1800×1125 和 488×1055 后实测 CSS 宽度为 1440 / 390。截图工具去除滚动条并产生 1431×894、382×826 的内容图；以实际 DOM 尺寸和原稿局部的等比例光学尺寸比较，不将截图密度差异视为设计偏差。
- 原稿是品牌概念板，成品是实际导航。比较目标为同一猫姿、斑块、线纹、线尾、字形与局部比例；不要求概念板布局、色卡或说明文字出现在网站。

## 对照结果

- 字体：保留原稿圆润字形为图像内容，不依赖系统字体。`mewool` → `mewoolmew` 为 Issue #25 已确认名称带来的预期变化；可访问名称为 `MewoolMew`。
- 间距：Logo 桌面显示区 252×57.27 px，手机 184×41.81 px；图片等比例取景，耳朵和线尾完整。页眉 84 / 68 px，Logo 链接至少 44 px 高。
- 色彩：保留陶土橘和奶油色，暖白底融入现有页眉，无棋盘背景或明显矩形白边。
- 图像：原稿歪头闭眼、橘色斑块、两爪抱球、弧形线纹、回环线尾均可辨认；通过真实 PNG 资产实现，非代码近似图形。
- 内容：三语共用 MewoolMew 品牌，不影响 Shopify 原有菜单与本地化路径。页脚、页面标题与结构化名称同步。

## 修复历史

1. 初始线上候选使用另画的 SVG 与系统字体，构图和字形偏离第一款原稿，属于 P1。本次用原稿衍生图像替换，两者在同一资产中交付。
2. 第一轮实际预览的桌面页眉为 100 px、手机为 81.81 px，Logo 新尺寸与原有双重 padding 叠加，属于 P2。修正链接及标题容器 padding 后重新截图，桌面恢复 84 px、手机恢复 68 px。
3. 最终三语双端截图与原稿/正式资产共同对照，无剩余 P0/P1/P2；独立结论见同目录 `finish-review.md` 与 `finish-verdict.md`。

## 功能与检查

- 三语双端：Logo loaded，标题 MewoolMew，无横向溢出。
- 手机菜单 → Catalog → Logo 返回 `/zh` 通过。
- 控制台未发现本次 Logo 相关错误；可见既有 Shopify web pixel sandbox 警告。
- `npm run verify`：51 tests passed，Theme Check 0 errors / 12 既有 warnings。
- Impeccable detector：0 anti-patterns / 8 既有导航 advisory。

## 边界

- 本轮只验证当前暖白页眉；图片并非通用透明/深色背景资产。
- 全页截图含既有商品参考素材，留本地作为评审证据；公开仓库只提交原创 Logo 的页眉截图与指标。
- Live 发布是后续单独的受用户明确授权的 7 文件定向上传，完成证据写入 Issue / PR，不把预览通过等同于已发布。

final result: passed
