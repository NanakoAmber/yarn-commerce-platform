# Mokomoko Logo 来源与正式资产

2026-09-23，用户确认网站名称改为 Mokomoko，并同意字标草稿先上网页预览（Issue #63）。猫咪图形沿用 2026-09-06 用户选定的第一款原稿（Issue #25，原名 MewoolMew）。

## 视觉来源与使用

- 用户选择的原创图稿：[`approved-first-concept.png`](approved-first-concept.png) 的第一列橘色猫咪。
- 正式资产：[`../../assets/mokomoko-logo.png`](../../assets/mokomoko-logo.png)，1797×836 PNG。
- 制作方式：以旧资产 `assets/mewoolmew-logo-reference.png`（提交 `38e7847` 中仍可取回）为唯一来源做像素编辑。猫咪、线团与回环线尾原样保留；`m`、`o` 取自原字标；原字标没有 `k`，由原 `l` 的上段竖笔、`m` 首笔的圆脚与两道同粗（37px）圆头斜笔合成，填色为原字标墨色 `#C95D39`。未使用外部字体、品牌或素材。
- 字标为小写 `mokomoko`；图片替代文本、页面标题、页脚、结构化数据使用 `Mokomoko`。
- 猫标与字形保存在同一图片中，不使用手工 SVG、系统圆体或额外 HTML 字标近似。
- Theme 使用稳定尺寸容器、等比例 cover 和 42% 垂直位置展示有效内容；不拉伸。Shopify CDN 提供 600 / 900 px 响应式图片。
- 资产是暖白背景（#FEFDFA），以 multiply 混合融入暖白页眉，不具备 alpha 透明通道；将来若新增深色页眉，应另行制作相应资产。
- 用户上传的 Shopify Logo 设置仍优先，本次不改该设置。

## 猫咪原稿生成提示词

以下是 2026-09-06 生成原 MewoolMew 资产（猫咪图形的来源）时的实际英文提示词，以便追溯。字标部分已被上文的 Mokomoko 编辑取代。

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

- Mokomoko 资产的验证、预览主题与回滚记录在 Issue #63 及其 PR。
- MewoolMew 版的 Live 定向发布记录保留在 [`logo-live-release.md`](logo-live-release.md)，仅作历史回滚参考，不授予未来发布权限。
