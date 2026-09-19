## verdict

本次为独立 reviewer 的修复评分，并追加用户新明确要求的“四图标与原稿对齐”复核。已重新打开同路径 `desktop.png`、`mobile.png`、`en-desktop.png`、`en-mobile.png`、`ja-desktop.png`、`ja-mobile.png`，并与 `approved-home.png` 对照；六张均从 document top 开始、内容完整、无黑色 Shopify preview bar、无黑块或空白捕获。桌面宽 1440px、手机宽 390px；日文手机终稿为 390×3215。旧有预览条截图已作废，不参与本 verdict。

| 原 finding | 评分 | 终稿证据 |
| --- | --- | --- |
| 日文手机分类「あみぐるみ」末字孤行 | resolved | `ja-mobile.png` 中完整词语单行显示，四分类依然横向并列；`assets/yarn-project-rows.css` 对日文手机标签使用局部 1.25rem，未将整体正文缩小。没有引入可见横向溢出。 |
| DESIGN、surface brief、批准稿状态与成品不符 | resolved | `DESIGN.md` 与 `.impeccable/design.json` 已更新；当前 brief、surface sidecar 和批准 prompt 准确记录 Project 数据、990/750/749 断点范围、44px 底部箭头、逐卡 CTA 删除、四图标来源与后台替换入口。旧 preview bar 明确标为已作废截图；历史 gates 与 diff 没有被改写为通过。 |

新增用户纠正范围：**四图标 match。** 六张终稿均使用与批准图相同的花朵包袋及枝叶、绿色围巾、靠垫与盆栽、绿色衣服兔子。轮廓、颜色与插画笔触都保留，不再以针目图谱代替实体对象。源码引用 `assets/yarn-category-{bag,scarf,home,toy}-approved.png`；`icon-provenance.md` 记录从批准图提取的四个裁切框和原始 prompt 来源。名称由 HTML/locales 提供，图像使用 contain、透明外容器与 normal 混合，六张截图中对象完整可辨。桌面与手机缩放属于已批准结构中的响应式适配，不是重绘或新图像生成。

最新辅助证据为 `diff-final/report.json`，createdAt `2026-09-07T20:04:13.182Z`：overall **54.56% / contradicted**，不是机械像素门槛通过。已打开新版 `discovery-desktop.png` 及 `diff-final/regions/band-2.png`，确认右侧已是新四图标；band-2 从前版 contradicted 改为 drift，默认横向 bands 仍受构图位置、真实数据数量和用户移箭头/删 CTA 影响。其余真实 2/1/5/1 件对示意每行 4 件、范围外波浪/帮助条未纳入独立裁切等差异沿用初轮的限定解释，不要求补造作品，也不据此关闭历史 build gates。

本修复批次未发现新增材料性回归：三语作品长标题仍自然换行，搜索与四分类的桌面并排关系保留，图片名称详情链接及有溢出行底部 44px 箭头保留。该判断来自截图与局部代码对照，不冒充浏览器交互亲测或重复 detector。

## remaining

clear — 本次被评分的两项修复与用户追加的四图标纠正已无剩余材料性问题。

本次 ship **仅覆盖被评分的修复与四图标纠正，以及 Issue #13 受保护内部首页发现区的明确范围**；不扩展为全站像素门槛通过、历史 Comp-first gates 关闭或公开商用素材认证。既有盖毯标题/花束 cover 不符仍是运营内容缺陷，保持 password protection 与本地截图边界；发布操作、CI 与远程回滚点由主代理按本次授权完成。

disposition: ship
