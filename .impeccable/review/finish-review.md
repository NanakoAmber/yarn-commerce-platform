disposition: fix

缺少已选世界的独立 QUALITY BAR 卡片；本轮以批准 comp 评判承诺，未读取其他 skill reference。功能、键盘与三语 QA 由主线程负责，本报告不声称验证了这些交互。

## persistence

pass（流程持久化）：PRODUCT.md、CONTEXT.md、surface brief、approved comp、spec、state 和 hero-repro.png 均存在；comps / spec / plates / hero 已 closed，forced 均为 null，hero gate 为 0.8309。brief 与 state 的方向 seed 均为 `873712c1`，comp sidecar 为 approved。新世界的 DESIGN.md 应在本次修正和 verdict 后提取，不以当前缺失判失败。desktop.png 为 1440×6273、mobile.png 为 390×5832、comp-size.png 为 853×1844，均已打开，页面顶部完整、内容有效，无空白或黑屏证据问题。

fail（最终测量）：final/report.json 比较的是 1440×6273 全页与 853×1844 comp，固定区域在不同比例页面中落到其他内容；其 0.6209 及大量 missing 不能证明当前同尺寸复现情况。已打开 hero-headline、category-bag-card、project-cta 配对裁片，分别裁到流程卡、下一节、套件卡，证明这部分为区域错位。旧 hero/report 的 0.8309 仅证明旧轮次，不能替代当前 final。

## fidelity

| 元素 | 判定 | 可见证据与合同依据 |
|---|---|---|
| TYPE | contradicted | comp 标题有明显较重、较宽且略带轮廓的印刷字感；同尺寸实图是较轻的常规黑体，流程文字又比 comp 更粗。中文 heading 变量仍是系统字体栈，hero 的 M PLUS 1 未在所给实现中提供自托管字体证据。字量和断行大致保留，但展示字性格未复现。 |
| MATERIAL：真实织物、三个流程图、四类针目图 | match（主体） | 照片仍有真实线材体积，流程与分类使用可见 raster，不是 CSS 假材质；不触发整页 rebuild 条件。 |
| MATERIAL：page-paper、hero-notation-doodles | missing / contradicted | comp 顶部可见方格纸和成段针目、花枝；同尺寸实图几乎为纯色，只有标题旁几片残余装饰。纹理文件自身有可见格线，页面中的可见性未达到该素材；装饰透明图自身亦有裁切残片，应重制干净 plate。 |
| GROUND | match（主场色温） | final palette 的 comp 主场为 #f7f7f5，build 为 #f7f7f6，主场未发生显著奶油化或冷蓝化；纸纹缺失已归 MATERIAL，不用近似底色掩盖。 |
| header-bar / header-menu / header-wordmark / header-search / header-cart | adaptation | 853实图保留菜单、居中字标、搜索、购物车；1440展开实际导航、390压缩间距属于 PRODUCT 桌面与手机可操作性适配。final 的 missing 是对齐误报。 |
| hero-headline / hero-support | match（内容与先后） | 批准中文内容完整，主副标题顺序保持；final missing 为已打开配对裁片所证实的错误区域。事实承诺另见整改1。 |
| hero-textile | adaptation（390避让）；contradicted（853构图） | 390为保住正文作右侧裁切有可读性依据；853照片顶部约239px才出现，comp约122px已出现，织物下移且与左侧形成明显直边分区，削弱原有织物和纸面交织的构图。 |
| flow-panel / flow-select-plate / flow-buy-plate / flow-make-plate / flow-arrow-one / flow-arrow-two / flow-select-label / flow-buy-label / flow-make-label | match（拓扑）；TYPE例外 | 白色流程卡跨越hero底部，三图三步顺序与箭头都可见；final missing及label contradicted源自不同尺寸的固定裁区，不是实际缺项。 |
| category-heading-flourish / category-heading | match | 同尺寸图可见花、虚线、线团与“你想做什么？”。旧hero的flourish missing亦不符合当前可见证据。 |
| category-bag-card / category-scarf-card / category-blanket-card / category-doll-card | adaptation | 同尺寸四栏、390两栏，保留四种目的与粉红/粉蓝/薄荷/奶油黄映射；手机重排有触控与文字可读性依据。final missing是区域错位。 |
| category-bag-plate / category-scarf-plate / category-blanket-plate / category-doll-plate | contradicted（390裁切） | 手机包袋顶部、毯子边缘和玩偶耳朵被裁；玩偶图靠近并侵入下方标签空间。853主体存在，因此不是缺资产。 |
| category-bag-label / category-scarf-label / category-blanket-label / category-doll-label | match（准确文字） | 包袋、围巾与披肩、毯子、玩偶四项准确；手机玩偶标签的视觉净空问题与plate裁切合并整改。 |
| filter-strip / filter-popular / filter-one-ball / filter-gift / filter-season | adaptation | 853横排、390两行，图标与四个文字均存在；季节雪花保留。final missing/contradicted为区域映射误报，热门一词的依据见整改1。 |
| project-cta | match | 奶油黄整条按钮、炭黑文字、珊瑚箭头和圆角保留；已打开final裁片显示其测量了套件区域，应撤销该contradicted。 |
| next-section-flourish / next-section-heading | match | 下一节的虚线线团和“第一次做？从一团完成开始”可见；final missing为区域错位。 |
| 新手套件、季节灵感、商品目录、人工联系 | adaptation | PRODUCT.md明确规定后续路径与20参考商品目录，故不视为未经批准新增普通电商首屏；它们不应把 Product 假称为公开 Project。 |

THESIS 与 OWN-WORLD 的分类图谱和柔和配色已保持；STORY 在“点击作品入口后实际进入商品目录”处中断。FIRST VIEWPORT 保留阅读顺序，但853 hero材质和390图谱完整性仍未履约。FORM seed有记录，图解分类也确实是链接。首屏记忆点仍能概括为“按想做的东西选择”，但后续还不能据此证明已有可执行作品库。

## ceiling

无法对缺失的独立 QUALITY BAR 卡片作 reached 判定。批准 comp 已使用的原生表现包括可见方格纸、轻针目装饰、完整针目轮廓、较有印刷感的展示字；当前尚未充分实现前两项及字形性格。无需增加新的装饰、动效或模块。

## material_fixes

1. [P1 / Truth、STORY] 补齐当前原型的事实边界：作品入口实际筛选20件 Product，不能让“每个作品都标清…教程”成为已交付能力的无条件陈述；保留获批三步与分类，在入口/结果处说明当前是材料与套件演示目录并准确命名商品。热门入口没有热度证据，首作推荐没有难度证据，季节文案的“适合周末完成”没有时长证据；对这些已有文字补可验证依据或将承诺收窄，不能用“一团+图解视频”推导适合新手。
2. [P1 / Fidelity、MATERIAL] 恢复853 hero的可见纸纹、上方针目与花枝，并把织物上沿和主体位置对回批准 comp，移除目前显眼的左右直边分区；produce: 干净完整的 hero-notation-doodles raster plate，现有文件的残片不足以只靠CSS定位修复。390同时保留正文避让，避免小块织物与大面积空白把首屏拆散。
3. [P1 / Fidelity、TYPE、Floor] 提供覆盖简中的自托管展示字体并明确应用，调整主标题和流程标签的字重/字宽，使853的主副标题对比接近comp；不要继续以系统字体栈充当已选世界的展示字。
4. [P1 / Fidelity、手机可读性] 修正390分类plate的容器与缩放，完整显示四个针目轮廓，并为下方标签保留净空；不要通过裁掉包袋顶部、毯子外沿和玩偶耳朵适应卡片。
5. [P1 / Floor、事实可读性] 删除 starter facts li 遗留的 `grid-template-columns:44px 1fr` 空序号列，三个完整事实均使用可用行宽；当前390显示“一团线／完成”“多种配／色”，桌面同样形成窄竖列，明确影响材料信息理解。
6. [P2 / Persistence、Fidelity] 用本轮 comp-size.png 生成与853×1844批准comp一致的 final diff，保留1440/390作为响应式人工证据；把新报告与修后同名截图送回本reviewer做verdict，不能以旧hero分数或错位missing列表收尾。

## keep

保留三步中文顺序、四个真实目的分类、可见针目图、奶油黄主按钮、首屏无价格商品网格，以及 Shopify Product 的实际价格、类型和购买链路；修正不应扩成新一轮视觉方向。
