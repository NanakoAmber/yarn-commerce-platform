# MewoolMew 第一款 Logo 原稿与正式资产

2026-09-06，用户指出另一版手工 SVG 猫标与本对话第一款设计不同，明确要求按第一款图像修正并更新当前 Live 网站。品牌名称沿用 Issue #25 已确认的 MewoolMew。

## 视觉来源与使用

- 用户选择的原创图稿：[`approved-first-concept.png`](approved-first-concept.png) 的第一列橘色猫咪。
- 正式资产：[`../../assets/mewoolmew-logo-reference.png`](../../assets/mewoolmew-logo-reference.png)，1881×836 PNG。由内置 imagegen 以第一列图稿为输入生成，未使用外部品牌、字体文件或素材。
- 保留歪头闭眼、橘色斑块、双爪环抱线团、圆弧线纹与回环线尾。原稿 `mewool` 按已确认名称扩展为小写 `mewoolmew`；图片替代文本、页面标题、页脚、结构化数据使用 `MewoolMew`。
- 猫标与专门绘制的字形保存在同一图片中，不使用手工 SVG、系统圆体或额外 HTML 字标近似。
- 原始生成文件保留全部画布。Theme 使用稳定尺寸容器、等比例 cover 和 42% 垂直位置展示有效内容；不拉伸。Shopify CDN 提供 600 / 900 px 响应式图片。
- 第一次资产整理生成了不是真正透明的棋盘背景，已废弃；正式资产是暖白背景，以 multiply 混合融入当前暖白页眉。没有宣称 PNG 具备 alpha 透明通道，也未验证通用深色背景；将来若新增深色页眉，应另行制作相应资产。
- 用户上传的 Shopify Logo 设置仍优先，本次不改该设置。

## 生成提示词

使用内置 imagegen，两次资产整理；原始三案图亦由同一对话内置 imagegen 生成。以下保留正式资产整理的实际英文提示词，以便精确复现；它们是图像生产指令，不是消费者文案。

第一步，输入原始三案图：

```text
Use case: logo-brand, faithful asset extraction/edit.
The attached image is the approved source. Extract and faithfully reproduce ONLY THE FIRST LEFT ORANGE MEWOOL CONCEPT as one production-ready horizontal logo on a genuinely transparent alpha background. Do not make a new design. Preserve the exact identity of the first kitten: tilted sleeping face on the left, closed curved eyes, triangular ears, orange head patch and orange patches around its curled circular body behind the large orange yarn ball, its two white paws embracing the ball, curved fine cream yarn arcs, and the loose long looping orange strand at lower right. This must be the same kitten and pose as the FIRST LEFT COLUMN, not the center or right kittens. Keep the solid terracotta orange silhouettes and delicate cream cutouts of the original. Clean away presentation-paper texture while preserving the original contours. Keep cream or off-white fills INSIDE the cat and yarn; the outside background must have true transparency, not white and not a checkerboard painted into the image.
Use the first column's small HORIZONTAL WEBSITE HEADER LOCKUP near the bottom as the layout reference: cat on the left and rounded bold custom soft lettering on the right, vertically centered. Preserve the first concept's typography, but update the wordmark to the project's confirmed name, exactly 'mewoolmew' all lowercase, m-e-w-o-o-l-m-e-w. This is the ONLY text in the output. Use terracotta #BF5A38 for the main ink, cream #FFF9EF for internal light fill, minimal soft peach where original requires it. No labels, no slogan, no borders, no palette, no card, no extra decoration. Do not change the kitten into a generic thin-line drawing. Wide transparent canvas approximately 3:1 with the logo filling it, even modest margin around artwork, the cat about 26 percent of total width and the text about 68 percent, a comfortable clear gap. Output one crisp high-resolution logo asset suitable for a website header at 240 by 80 CSS pixels. Keep original proportions; no shadows, no gradients, no 3D.
```

第二步，输入第一步结果并纠正背景；最终画布仍保留生成工具输出的尺寸，紧凑展示由 Theme 完成：

```text
Edit this exact logo asset. Keep the cat illustration, its pose and contours, terracotta orange color, and every letter of 'mewoolmew' unchanged. REMOVE THE ENTIRE GRAY AND WHITE CHECKERBOARD background. Replace it with one absolutely uniform solid warm-white color RGB(255,254,250), hex #FFFEFA. This background must be perfectly flat all the way to all edges, with NO gray checkerboard, NO texture, NO paper texture, NO shadows, NO transparency pattern. Preserve cream-colored fills inside the cat. Tightly frame the exact horizontal lockup with only 12 px margin at the top, bottom and sides of the artwork; no large empty area above or below. Landscape horizontal output. Do not redesign or redraw the kitten. Do not alter the lettering. No additional content or text. Production website logo extraction, not a design presentation.
```

## 验证与发布范围

- 独立未发布 Theme：189734420793；基于实际 Live 189727637817 的完整副本，只更改 [`logo-release-manifest.json`](logo-release-manifest.json) 中的 7 个品牌文件。
- 桌面 1440×900、手机 390×844：日文 `/`、中文 `/zh`、英文 `/en` 的 Logo 加载、品牌名称与页眉尺寸一致；桌面 84 px、手机 68 px，无横向溢出。
- 手机菜单、目录导航、目录页 Logo 返回中文首页通过；不操作商品、库存、价格、订单或账户设置。
- 公开证据仅提交本次原创 Logo 的页眉截图；含原有第三方商品图片的全页截图仅留在本地评审目录，不加入公开仓库 diff。
- 本次是品牌定向更新，不合并 PR #26 继承的其他待合并项目改动。发布结果、commit 与回滚步骤在 Issue #25 / PR #26 记录。
