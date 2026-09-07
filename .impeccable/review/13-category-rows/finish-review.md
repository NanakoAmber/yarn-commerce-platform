disposition: fix

历史初轮记录：本文件的 fix 与针目 plate 适配判断属于图标纠正前的中间版本，不能作为终稿事实。用户随后明确要求四图标与原稿对齐；终稿已改为从 approved-home.png 提取的包袋、围巾、靠垫盆栽与兔子。原两项修复及新增图标纠正的最终裁定见同目录 `finish-verdict.md`。

本次由独立子代理执行；使用仓库 shipped reviewer 的 degraded 合同正文作为角色合同，并未以内联自审代替独立评审。本轮没有新的五块 direction contract、seed、QUALITY BAR card 或 measured spec；依据已批准的局部扩展范围评审，旧 build state 不作为本轮通过证明。已读批准稿、六张完整页面截图、scoped diff 的全部分数与 7 个 missing/contradicted paired crops、PRODUCT.md、相关实现和 DESIGN.md；不审查范围外导航、Hero 与帮助区的重设计。

## persistence

**fail — 完成交付文档尚未与本轮实现对齐。**

- `PRODUCT.md` 存在；`issue-scope.md` 记录批准稿、后续覆盖反馈、真实 Project 数据、范围及发布授权。原始 `approved-home-prompt.md` 仍写“待确认”，应在保留原始生成正文的同时准确记录已批准状态。
- 六张必需截图均有效，document top、完整内容和页脚可见，没有黑块、空白捕获或错误页面：中文 1440×4038 / 390×3007；英文 1440×4162 / 390×3192；日文 1440×4162 / 390×3222。图像查看器缩放不改变捕获尺寸。
- `.impeccable/build/state.json` 属于 2026-09-05 的旧 discovery-b：plates 仍 open、hero pending，不能宣称这些 gate 已通过。本轮 scoped diff 没有 measured spec，使用 stretch 与默认 bands；overall 0.5453、verdict contradicted 是原始工具结果，保留失败原貌，不把人工语义复核改称机械门槛通过。
- 本轮是已批准页面世界中的下方发现区扩展，不是新世界选择；未提供新 seed/card 不成为重新选世界或生成图片的要求。批准稿的左右并排搜索与分类、独立作品行、暖白底以及后续箭头/CTA 反馈构成本轮方向合同。
- `DESIGN.md` 的当前发现区描述仍含 Shopify Product 结果、989px 以下两列等旧事实，与当前 Project 行和 750–989px 三列不符；对应 surface brief 仍为历史版。需要从本轮实际成品补充准确记录，旧门槛失败可以保留为历史事实。
- 主代理报告 61 tests、ThemeCheck 0 error / 9 baseline warnings，以及三语搜索、分类、滚动端点、展开收起、详情与 draft Theme Editor 保存/恢复验证；本评审检查了实现，但未独立操作浏览器或重复 detector，不将这些报告表述为本代理亲测。

## fidelity

独立图稿要素清单：浅黄色波浪承接；左侧大标题和横向搜索；右侧四个物件插画圆形分类；四个依次排列的分类标题与紧凑图片行；图片下名称；每行查看全部及双箭头；暖白地色、炭黑字、陶土色动作；下方浅蓝帮助条。用户后续明确把箭头移到名称下方、删除逐卡 CTA，并要求不再生成图片。

| 要素 / diff 区域 | 判断 | 证据与理由 |
| --- | --- | --- |
| 搜索与四分类的桌面左右结构 | match | 三语桌面均为左搜索、右四分类；四项顺序为包袋／围巾／家居／玩偶。 |
| 手机发现区重排 | adaptation | 搜索上方、分类独立一行，符合 390px 可读性需要；英文标题两行自然，没有裁切。 |
| 四个独立分类作品行 | match | 四行各自标题、图片、名称；不再混成一个通用网格。 |
| 作品密度与图片内容 | adaptation | Shopify 真实 2/1/5/1 件替代示意稿每类 4 件；遵循 issue-scope 不复制作品凑数量。围巾、玩偶行右侧留白是数据事实，不要求造作品。 |
| Compact cards | match | 图片与名称组成同一个详情链接，无外卡框或重复逐卡“查看作品”文字。桌面四槽、手机两槽保持媒体比例。 |
| 下方双箭头 | adaptation | 用户明确要求从标题旁移至图片／名称下方；CSS 为 44×44px，有端点 disabled 状态，仅有溢出的行显示。无溢出行隐藏无效控件符合实际内容。 |
| 查看全部 | adaptation | 按 scope 在原行展开；无溢出不显示无意义展开。全局浏览全部仍有入口。 |
| TYPE | adaptation | 继承已实现的 Yarn Display 与现有三语字体，保持深色、明确标题层级；图稿文字的手绘感更强，实装不是逐字形复制。此次继承现有视觉系统，不扩大为字体世界替换。 |
| MATERIAL（初轮，已被后续用户纠正覆盖） | adaptation | 此处原指中间版本针目图谱 plate，不能描述终稿。用户随后要求 icon 与原图对齐；终稿直接提取原稿四个实体插画，最终匹配结论见 finish-verdict.md。作品媒体仍为 Shopify cover，未用 CSS 仿实物。 |
| GROUND | match | 批准 prompt 指定 #fffefa。直接读取两图左边净空 x=1、y=300/700/1000：comp RGB 为 253/252/248、253/252/249、254/252/249；build 为 254/253/250、255/255/252、254/254/253。实装略亮，仍是同一近白暖纸场，无材料性温度漂移。diff 全图 color 0.8224 仅是含媒体的总体近似指标，不代替地色判断。 |
| 日文移动分类标签 | contradicted | `ja-mobile.png` 的「あみぐるみ」末字「み」独占第二行，打断四个短分类的扫读；需局部排版修复。其他三语作品长标题自然换行，无可见横向溢出。 |
| band-1：工具 missing | adaptation | paired crop 的 build 没有波浪，因为 scoped discovery 截图从该 Section 开始；完整 desktop 截图能看到保留的黄色 Hero 波浪。此处不是页面漏做。 |
| band-2：初轮工具 contradicted | adaptation | 初轮 paired crop 显示搜索与分类均存在；当时差异含针目 plate、比例重排及用户移走标题旁的箭头。针目图标现已被批准稿提取图替换，此初轮 band 不能作为终稿图标证据。 |
| band-3：工具 contradicted | adaptation | paired crop 为 2 个真实包袋对示意 4 个；不补假作品。 |
| band-5：工具 missing | adaptation | paired crop 为 1 条真实围巾对示意 4 条，围巾行本身没有缺失。 |
| band-7：工具 contradicted | adaptation | 同为家居媒体行，但实际 Project 与示意对象不同；使用后台事实。盖毯样例封面实际为第三方花束是既有内容错误，见下方内容边界。 |
| band-9：工具 missing | adaptation | band 高度对应已受真实内容数量、文字和下方箭头影响；完整图有玩偶行，不能从错位 band 判作整行缺失。 |
| band-10：工具 contradicted | adaptation | paired crop 从玩偶/帮助条变成单个真实玩偶照片；scope 不含帮助区重做，完整截图中既有帮助条仍在。 |

内容与功能边界：样例标题在三语均披露内部样例；没有新增价格、销量、评论或供货承诺。盖毯样例名称与花束 cover 不符，属于已知运营内容缺陷，本轮保持 password protection 且没有改该内容；此评审仅覆盖受保护内部模板，不能成为素材或样例公开商用认证。代码中 Project 来源、canonical 类别、去重归组、未归组行、加载失败/重试、动态筛选、行内展开和减少动态偏好均可定位；未发现需要阻塞本轮的功能实现缺陷。

## ceiling

没有本轮新 QUALITY BAR card，不能宣称达到未提供的图卡上限。初轮实装保留暖白纸面、真实作品照片、针目 raster、细线 SVG 和紧凑无边框卡片；未发现新增 kicker、虚假指标、假物理 CSS 或嵌套卡片。初轮关于实体分类插画未兑现的判断现已过时：终稿遵照用户纠正直接提取批准稿四插画，并没有再生成图片。真实数据导致照片密度差异仍成立。44px 滚动控件、可聚焦横向轨道、reduced-motion 分支与普通 HTML 文本维持可操作性。

## material_fixes

1. **Floor / 响应式可读性：** 修复日文 390px 分类标签「あみぐるみ」的末字孤行，保留四分类一行且不产生横向溢出；重新捕获并打开同路径 `ja-mobile.png` 供 verdict。
2. **Persistence / 事实一致：** 按真实成品更新当前 `DESIGN.md` 与本轮 surface brief 的 Project 行、断点、箭头、CTA、已有 plate 复用和样例边界；更正 approved prompt 的状态，并明确 scoped diff 及历史 build gates 尚未机械通过。无需新图或伪造 gate。

## keep

保留最新导航/Hero、桌面左右搜索与四分类、真实 2/1/5/1 Project 数据、紧凑图片名称链接、名称下方 44px 箭头，以及 password protection 和既有运营数据边界。
