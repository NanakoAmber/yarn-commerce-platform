# 说明页阅读构图（Issue #86）

六个说明页共用单列阅读区：页面标题与细分隔线在上方，正文是暖白底、细边框的字段/内容行。手机宽度 390px 时两列保持可读，长地址在值列换行；桌面宽度 1440px 时阅读区居中、标题左对齐，字段与内容约为 30/70。页脚继续使用 Shopify Navigation 的 `support` 菜单；正文和译文来自 Shopify Page，不写死在 Theme。

用户在本会话确认了[手机构图](86-support-mobile.png)与[桌面构图](86-support-desktop.png)，并确认手机实现截图。图只批准说明页的排版，不批准图中继承的公告运费文案，也不构成日文或法律审核。公告中的免运费承诺与 #84 正式运费待定不一致，已记录于 #86 Issue。

当前实现：`sections/main-page.liquid` 按 `page.template_suffix` 为 `support` / `contact` 加载 `assets/yarn-support-page.css`。现有 Shopify Page 正文采用连续 `h2` 字段名与 `p` 字段值；新字段仍应在后台按相同结构编辑。页面标题由 Page 资源管理，Contact 表单沿用原 section。色彩、字体和间距消费全站 token，未新增共享角色。

来源：手机稿以当时的 Contact 手机截图和 [Hoshiami 配送政策](https://hoshiami.jp/policies/shipping-policy)手机截图作为构图参考；桌面稿以已实现的手机截图、本站原桌面截图和同一参考页桌面截图作为参考（均于 2026-09-26 读取）。两次均用内置 ImageGen 生成一张构图稿，画面正文提示词只允许已核实的公司名称、地址、电话、含税价格以及中文“待提供”，禁止生成额外承诺或评价。Hoshiami 图片仅作内部参考，未复制进仓库。
