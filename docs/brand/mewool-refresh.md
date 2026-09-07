# mewool 品牌名收短与 Logo 资产

2026-09-06（America/Los_Angeles），用户在中文首页批注中明确要求将 `mewoolmew` 收短为 `mewool`。本轮仅更新品牌文字与横向组合间距，不重新设计猫咪、毛线球或色彩系统。

## 当前资产

- 获批原稿：[`approved-first-concept.png`](approved-first-concept.png) 第一列橘色 `mewool` 方向。
- 前一版线上资产：[`../../assets/mewoolmew-logo-reference.png`](../../assets/mewoolmew-logo-reference.png)，作为忠实编辑目标与历史回滚资产保留。
- 当前资产：[`../../assets/mewool-logo-reference.png`](../../assets/mewool-logo-reference.png)，1852×849 PNG，SHA-256 `1f552a4174fe5dc359bf7e7d5a4e45a7237ec7a7d3523732bb1c9035695f3a6b`。
- 编辑使用 Codex 内置 imagegen；保留歪头闭眼、橘色斑块、双爪环抱线团、圆弧线纹、回环线尾、陶土橘和暖白底。
- 猫标与专门绘制的 `mewool` 字形仍在同一张图中；不用系统字体、HTML 或手工 SVG 重画。

## 本轮生成提示词

```text
Use case: logo-brand faithful text edit.
Asset type: production website header logo.
Input images: Image 1 is the current production logo and exact edit target; Image 2 is the approved source concept, especially the first left orange mewool design and its small horizontal lockup.
Primary request: Edit Image 1 so the wordmark reads exactly "mewool" all lowercase, m-e-w-o-o-l, and remove only the trailing "mew". Restore the cat-to-word relationship and proportions shown in the first-column horizontal website header lockup in Image 2.
Subject/invariants: Preserve the exact current terracotta kitten illustration from Image 1 unchanged: tilted sleeping face, closed eyes, orange patches, two paws embracing the yarn ball, yarn arcs, and loose looping strand. Preserve the custom rounded soft lowercase lettering style, terracotta #BF5A38 color, warm-white flat background #FFFEFA, internal cream fills, and crisp contours.
Composition/framing: One horizontal logo, cat on the left and "mewool" on the right, vertically centered. Let the looping strand end naturally before the wordmark. Use a wide landscape canvas about 3:1 with tight, even margins and no extra empty space. The complete kitten, ears, yarn ball, looped strand, and every letter must remain visible at small header size.
Text (verbatim): "mewool"
Constraints: Change only the brand text length and resulting horizontal spacing. No slogan, labels, border, palette, card, shadow, texture, transparency checkerboard, extra decoration, or other text. Do not redesign or redraw the kitten. Do not alter the letterforms beyond retaining only m-e-w-o-o-l. No watermark.
```

## 发布边界

本文档只记录 Issue #28 的当前候选资产和复现方式。以前 `MewoolMew` 版本的 Live 发布与回滚事实仍见 [`logo-live-release.md`](logo-live-release.md)；本轮未因为生成新资产而获得更新 production Theme 的授权。
