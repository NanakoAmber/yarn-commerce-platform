disposition: fix

缺少独立 QUALITY BAR 卡、筛选展开态的现成证据与当前 Issue 验收标准副本；未读取非本次提供的参考文件，源码仅抽样本次首页主文件。本轮仅诊断与设计讨论，未运行浏览器、detector、init 或验证命令，未改动 Theme UI。

## persistence

- **证据检查通过。** 已打开用户原始批注图 `/var/folders/18/tkvpdtzs6wn7jhxn86dwc9vw0000gn/T/codex-clipboard-48248011-d23f-4e5f-a31c-ac064b111b26.png`（2124 × 10756），以及 `desktop.png`（1440 × 6192）、`mobile.png`（390 × 5827）、`comp-size.png`（853 × 1844）、`hero-repro.png` 和批准 comp。用户图从页顶拍到商品列表，未声称包含页尾；季节图片区为空而相邻文字正常，是本次页面失败的证据，不能通过要求重截图消除这项反馈。旧桌面、手机截图中季节照片存在，不能覆盖用户的新证据。
- **前置持久化通过，完成状态不通过。** `PRODUCT.md`、两份 surface brief、`DESIGN.md`、state 和 spec 均存在；state 的 comps / spec / plates / hero 均 closed，无 forced，hero gate 为 0.8309。两份 brief 记录批准 comp 和 direction seed `873712c1`，state 可相互印证。responsive 仍 open，review pending，不能把历史局部 ship 当作整页完成。
- **当前权威是用户新反馈。** 批准 comp 只画到“一团完成”的入口，未规定下面必须出现两个大型图文区。旧 `PRODUCT.md` 的顺序是低门槛作品、季节灵感、搜索筛选；用户现在要求发现区前移，下一轮应先将新顺序同步到当前 Issue 与 surface brief。`DESIGN.md` 的暖纸、柔色、针目与奶油黄可以继承，其“已复核首页”的描述不等于整页重新验收通过。
- **商品事实边界明确。** 当前发现区是 Shopify Product 演示目录；公开 Project 需要 Material Requirements 和主要 Tutorial，不能因分类文案使用“作品”就宣称独立 Project 库已存在。一团用量不等于低难度，季节推荐不等于畅销证明。

## fidelity

先独立观察批准 comp：暖白格纸、右侧真实钩织与线团、左侧两行炭黑标题、叠压的三步纸面、粉红粉蓝薄荷浅黄四分类、完整针目轮廓、轻线条辅助条件、宽奶油黄行动面，以及线团花枝过渡。它的记忆点是从想做的东西进入选择，而非某一个商品占据页面。

已读 hero / final / desktop 的 report。hero 为 0.8309，final 为 0.7935；这些是复现测量，不能证明新手路径有效。desktop 将宽屏内容对到竖版 comp 后产生大量 missing，不用于宣称宽屏实际缺失；响应式判断使用实际 desktop / mobile 截图。以下对 final 的所有 missing / contradicted 区域均查看了对应 paired crop。

| 元素 / 承诺 | 判断 | 证据与含义 |
| --- | --- | --- |
| 导航、临时彩色字标、搜索与购物车 | adaptation | comp 的窄屏导航在用户图中存在；1440 截图改为文字导航，符合 brief 的桌面 / 手机适配范围。 |
| TYPE / `hero-headline` | contradicted（相对旧 comp） | paired crop 显示实现更黑、更紧、更接近粗实黑体，comp 的字面较开、笔画较轻；不是 missing。新反馈未否定首屏世界，不能借此重选字体风格；更直接的问题是图谱之后的标题没有延续同一套层级。 |
| GROUND / `page-paper` | contradicted（相对旧 comp） | paired crop 的当前格纸更黄、更密，comp 更接近淡暖白。这个差异确实存在，但用户保留暖纸色系；修复应统一已批准暖纸范围内的层次，不能推翻成冷白或其他色板。 |
| MATERIAL / 真实织物、三步插图、针目图解 | match | 当前截图保留真实织物与 raster 图解，没有用纯 CSS 几何代替主体材料。下半页的材质语气跳变并不构成整页主体材料重建条件。 |
| `hero-support` | adaptation | final 标 contradicted；paired crop 实际是副文案由两行变三行。brief 的事实纠正要求说明确认材料与教程，产品真值允许这次文字变化。 |
| 三步流程与顺序 | match | “选择作品 → 购买材料 → 开始制作”在各截图清楚可见；这条解释路径应保留。 |
| 四分类与针目轮廓 | match | 包袋、围巾与披肩、毯子、玩偶均完整可识别；390 截图改成两列是有依据的响应式适配。 |
| `category-heading-flourish` | match（推翻 missing） | final paired crop 右侧明确有花、线团与虚线；位置和弧线不同，缺失判定错误。 |
| `category-heading` | match（推翻 missing） | paired crop 明确显示“你想做什么？”。纵向位置不同，不代表标题不存在；后续压缩发现区时一并调整其层级即可。 |
| `category-bag-label` | match（推翻 contradicted 的缺失暗示） | paired crop 的“包袋”存在，文字和字形性质一致；盒内基线、比例与底色有漂移，不是内容替换。 |
| `category-scarf-label` | match（推翻 contradicted 的缺失暗示） | paired crop 与完整截图显示“围巾与披肩”；固定 crop 边缘切字，不能据此认定真实卡片文字缺失。 |
| `category-blanket-label` | match（推翻 contradicted 的缺失暗示） | paired crop 的“毯子”明确存在；局部偏移不构成分类缺失。 |
| `category-doll-label` | match（推翻 contradicted 的缺失暗示） | paired crop 的“玩偶”存在；完整截图标签完整，非缺失或语义替换。 |
| 辅助四入口 + 宽 CTA | contradicted（当前用户要求） | 视觉上来源于旧 comp，但用户已明确指出冗余。源码中“作品套件”和宽 CTA 都进入 `discover_type=kit`；“一团完成”又由过渡条及独立大卡重复承接。相同目的被当作多次决策。 |
| `next-section-flourish` 与一团过渡条 | adaptation（旧复现）；contradicted（新结构要求） | paired crop 显示装饰存在，missing 不成立；文案取消“第一次做”的难度暗示由事实纠正支持。但它现在只通向紧邻的一团大卡，用户否定这段空间占用后不应独立保留。 |
| 一团披肩独立大区块 | contradicted | 实际是一个具体 Project Kit 的推荐，却获得接近第二个 Hero 的面积；一张商品图、三条短事实和单个购买入口不足以支撑该层级。推荐内容可以保留，独立大区块没有必要。 |
| 季节独立大区块 | contradicted | 用户图左侧图片未显示，旧截图是偏棕灰的生活场景照片。两个版本都只有一句泛化描述与季节筛选链接，没有呈现多个可比较选择；面积没有转换成新增选择价值。 |
| 搜索筛选与 Product 结果顺序 | contradicted | `templates/index.json` 中它排在 hero、purpose、starter、seasonal 之后，是第 5 个 Section；用户要求前移到 top 2 / 3。现有结果首先展示线团，若只上移网格，仍可能削弱“作品优先”。 |
| 筛选闭合与展开状态 | contradicted（覆盖不全） | 用户图仅显示闭合控件；源码是真实 `select`，有闭合与 active 样式，没有可见的展开选项面板设计证据。不能声称已复核展开态，也不能承诺给现有边框加 CSS 即可覆盖所有平台弹出面板。 |
| THESIS | partial | 上半页回答“想做什么”；下面两个宣传大区块打断了选择，目录开始后又首先让人看商品属性。 |
| OWN-WORLD | partial | 上半页的纸面、柔色、针目成立；下半页从商品海报到棕灰生活照片再到密集小字网格，缺少统一的图片处理、标题角色与内容密度。色板本身不是根因。 |
| STORY | partial | 三步被说明了，但未形成“选分类 → 立刻看到对应结果”的连续操作；同类入口之间增加滚动与重复选择。 |
| FIRST VIEWPORT | adaptation | 批准的首屏识别元素成立，手机允许 reflow；新的讨论应保住这些元素，并调整其后的页面预算，不需要增加一个前置普通商品 Hero。 |
| FORM | partial | seed 已有证据，图解确实作为分类导航；下半页未继续发挥这种导航能力，而重新开始了普通营销区块节奏。 |

## ceiling

没有独立 QUALITY BAR 卡，不能补造参考上限或声称 reached。依据已批准世界及 craft floor，尚未兑现的是：让针目导航与商品结果共享同一条选择路径，让不同来源的照片服从同一媒体比例与留白规则，让标题与密集控件仍具有清楚的层级，让条件的关闭、展开、选中、清除和结果反馈属于同一个系统。

下半页风格割裂有三层可见原因：图片从细腻钩织局部切到带印刷标签 / 水印的供应商商品图，再切到棕灰生活照片；布局连续使用两个大型左右图文卡与宽空档；首屏 / 图谱显式使用 `Yarn Display`，一团 / 季节标题继承 Theme 字体，而目录进入更紧凑的小字操作区。源码的一团图片最低 580px、平板 610px，季节 frame 最低 540px，两段还有各自 72–118px / 72–116px 的上下 padding，与用户看到的冗长一致。这些是源码声明值，不是本轮浏览器 computed style。

craft floor 的重点未过项是内容密度、状态覆盖及真实内容承载：空的季节媒体不能算已交付内容，胶囊闭合框不能代表展开状态，卡片面积不能代替新增决策信息。未重复运行 detector；旧 `[]` 仅说明它未发现当时的机械规则问题。

## material_fixes

1. **结构 / STORY：** 推荐将“hero 与三步 → 四分类、辅助条件、搜索、Product 结果组成的统一发现区 → 紧凑帮助入口”作为讨论方案；发现区成为第 2 个主要区块，四分类后即出现结果，不再插入一团与季节大卡。若技术上保留独立 Section，也应在用户感知上连续。
2. **重复决策 / THESIS：** 删除独立一团过渡条、一团大型图文区及无新增结果的宽 CTA；把作品套件、一团、礼物、季节吸收到发现区条件中，仅保留一套控制来源；具体披肩可成为结果中的正常或适度突出的推荐卡。
3. **产品真值 / STORY：** 发现区前移同时保留“按想做的作品找”的主轴，并让默认可见内容先展示有作品效果的真实 Project Kit；毛线、工具、成品仍可筛选；不得把现有 Product 目录命名为已成立的独立 Project 库，也不得将一团推荐自动标成新手或畅销。
4. **季节内容 / Truth：** 当前季节大区块删除或收为筛选条件；只有确有一组可比较的作品 / 套件、明确选择理由且图片有效时，才在结果后增加紧凑编辑推荐。用户截图图片缺失需在下一轮确认来源、加载与可用性，不能凭旧截图判已修复。
5. **视觉系统 / OWN-WORLD、TYPE、GROUND：** 保留批准的暖纸与粉蓝粉红薄荷奶油黄；统一下一段的标题角色、纸面层次、卡片媒体比例和信息密度，减少商品海报与生活场景的随机切换，优先用成品与材料之间可理解的联系解释选择；这不是重新选择色系或逐像素重做首屏的授权。
6. **交互状态 / Floor：** 对筛选明确设计展开、选中、清除、焦点、无结果与结果数量；移动端应让用户看见当前条件和恢复入口。按最终控件方式准备三语及键盘 / 手机验证，不能把本轮未见的展开态视作已通过。
7. **持久化 / FINISH：** 用户确认结构后再更新当前 Issue 与 surface brief，进行对应 comp / 结构审批和实现；新一轮以用户关注的完整路径重新 finish review，更新 DESIGN 与实际完成状态。本轮到设计讨论为止，旧局部 ship 不保留为整页结论。

## keep

保留作品优先的承诺、真实织物、暖纸与粉蓝粉红薄荷分类、奶油黄行动色、完整针目图解和“选择作品 → 购买材料 → 开始制作”；保留 Shopify 商品事实与可编辑的三语内容，删减的是重复层级和无效空间。
