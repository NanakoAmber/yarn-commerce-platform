# B 方向装饰素材生产记录

批准参考：`.impeccable/mocks/discovery-b-zh.png`。三张素材均使用内置 `image_gen`，按已裁出的 B 方向参考重新生产，不是放大截图。仅用于首屏装饰与分类图标，不作为真实 Shopify Product 图片。

| 区域 | Plate | Shopify 平铺文件 | 尺寸 | 视觉核对 |
| --- | --- | --- | --- | --- |
| hero-textile | `assets/plates/b-hero-textile.png` | `assets/impeccable-b-hero-textile.png` | 1191 × 1321 | 桃色毛线球位于右上并裁边，白色手柄与金色钩针沿右下斜向，米白淡彩花朵方格织物保持真实摄影纤维；已移除下方矩形面板和所有 UI、文字、线描层。 |
| hero-notation-doodles | `assets/plates/b-hero-notation-doodles.png` | `assets/impeccable-b-hero-notation-doodles.png` | 1283 × 1226 | 仅浅褐针目弧线和两支细线花枝，白底、无摄影主体与 UI。唯一一次纠正移除了容易被看成假名的曲线，改为明确的环、叉与长针符号。 |
| category-blanket-plate | `assets/plates/b-category-blanket-plate.png` | `assets/impeccable-b-category-blanket-plate.png` | 1234 × 1275 | 薄荷圆面与绿色针目方格完整可见，圆外白底，无其他主体或边框。 |

逐张打开原尺寸检查：未发现可读文案、日文、标签、水印、按钮或假棋盘格；针目素材保留的是图形符号，不是文字说明。每个文件的两个维度均超过对应参考的 1.5 倍。素材视觉检查已完成；页面组合与 Impeccable plates gate 由主线程执行，本子任务未伪造自动相似度分数。

提示词与来源：

- 首轮三个准确提示词：`assets/plates/b-assets-prompts.json`。
- 针目图唯一一次纠正的准确提示词及输入图：`assets/plates/b-notation-correction-prompt.json`。
- 六个交付 PNG 均使用 `impeccable embed-prompt` 嵌入生成该版本的准确提示词；首版针目图被纠正版替换，原始工具输出仍保存在 Codex 默认生成目录。
- 首轮生成文件目录：`/Users/jinchen/.codex/generated_images/01a072d9-53f6-75f2-8327-25dc9f634ef5/`。
- hero 源文件：`exec-2a4593ea-c47e-4b15-8d1f-88e50917d561.png`。
- notation 首版源文件：`exec-fe0a8d65-0b7c-4e10-882f-788538514375.png`；最终源文件：`exec-7474ffce-6150-4973-b2da-8a099b4df225.png`。
- blanket 源文件：`exec-91fc50df-fb42-440b-abfa-e0b59a9bff01.png`。

未修改 UI、spec、state、GitHub；未运行浏览器；未提交。

## 帮助区图标补充

- 区域 `help-icon`：批准稿坐标 `x=76,y=1947,w=71,h=72`；通过 `impeccable comp-spec --crop help-icon` 获取 `.impeccable/build/b-help-icon-ref.png` 并打开核对。
- 使用内置 `image_gen` 单次重生：`assets/plates/b-help-icon.png` 与 `assets/impeccable-b-help-icon.png`，均为 1254 × 1254。保留左下线团、右上问号与环形轮廓、下方松线的原构成，炭灰线条与白色干净背景用于 multiply。
- 生成结果已打开核对：线团与问号完整，无可读文案、字母、日文、水印、标签或棋盘格；问号属于批准图标。无需纠正轮次。
- 准确提示词及参考记录在 `assets/plates/b-help-icon-prompt.json`；两个 PNG 均通过 `impeccable embed-prompt` 内嵌同一准确提示词。
- 源文件：`/Users/jinchen/.codex/generated_images/01a072d9-53f6-75f2-8327-25dc9f634ef5/exec-d797debb-95af-4e25-a178-fb17ce196730.png`。
