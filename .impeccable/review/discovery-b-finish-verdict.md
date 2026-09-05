## verdict

已重新打开本轮覆盖后的 `desktop.png`、`mobile.png`、`user-756.png`、三张对应 `filter-open` 截图、`hero-repro.png`，以及 `diff/discovery-b-fix1/regions/page-paper.png`。所需截图有效，视口和展开状态与文件名一致，未见空白、黑块或页面截错。仅评分原六项整改；未使用浏览器、重跑 detector 或增加新的审美检查。

1. **unresolved — Persistence / FINISH：** state 仍为 plates=open、gate.ok=false，Tutu 实际 Product 图片约 38% 的原始失败记录保留，hero 与后续 phases 仍 pending；没有 forced，真实照片适配没有被冒充为自动 gate 通过。截图证明页面已实现，不能替代此项流程闭环。
2. **resolved — Fidelity / help-icon：** 三宽度完整截图的帮助条均已显示线团加问号的细线 raster；通用聊天气泡已替换，图形完整可辨，没有额外可读文案，帮助条保持紧凑。
3. **resolved — Fidelity / 套件身份：** 四张实际套件卡均显示柔粉底、浅珊瑚边框与深暖文字的小标签；真实照片和长标题保留，“查看材料 →”仍清楚，390 下标签与动作未相互挤压或截断。
4. **resolved — Fidelity / GROUND：** 新 page-paper paired crop 显示旧版明显奶油黄和格线已减弱，实际纸面恢复接近批准稿的淡暖白；三宽度首屏保持织物与纸面的层次。报告该区域为 match、0.928，与目视结论一致；此分数只支持该区域，不用于关闭整个 build gate。
5. **resolved — Floor / 移动可读性：** 新 mobile / mobile-filter-open 显示主说明、三步、分类、筛选与材料动作放大后仍完整可读；源码对应值均为 1.4rem（本 Theme 为 14 px）。四分类一行、两列作品和季节面板保持有效，未见重叠或新增横向挤压；主线程测得首作品由约 y=858.6 前移至 y=845.48，截图与发现区收紧一致。读取本批 verify 日志确认 6 tests 通过，未宣称独立重做运行时三语测试。
6. **partial — Persistence / 文档：** PRODUCT 已将当前决策路径、首页验收与模块顺序同步为三主区域，并明确普通外部 preview 仍需店铺密码；与新截图相符。DESIGN 尚未提取本轮成品，原项未全关。现在可依据本 verdict 已解决的视觉项与真实源码更新 DESIGN，同时明确 #1 仍未闭合，不能写成整页 Comp-first 已完成。

本次整改批次在所复核截图中未见新增回归。

## remaining

- **#1**：真实商品媒体适配与自动 phase gate 的可追溯处理，以及 hero / 后续 phases 的完成记录仍未闭合；保持 unfinished，不生成假商品、不强制伪造通过。
- **#6**：从已复核实物提取 DESIGN，并准确保留内部预览、素材与 gate 边界后，才能关闭文档项。
- 原 **#2–#5** 视觉整改已解决，本次不要求继续改动这四项，也未授予整页完成或公开发布的 ship。

disposition: fix
