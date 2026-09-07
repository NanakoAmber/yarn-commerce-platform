# Issue #28 作品毛线优先 finish review 输入

## 请求与范围

用户要求全量审查作品毛线数据，缺图时补图，并参考 YarnPal 的 Preparation 信息层级重做作品详情：突出主毛线，弱化工具和其他材料，但必须符合本站 Shopify 事实与 paper_flow 设计世界。不是复制 YarnPal，不是建整套 Kit，不认证材料适配。

## 权威与目标

- AGENTS.md 生产安全与 Shopify 交易事实边界。
- `.impeccable/surfaces/sections-yarn-project-detail-liquid.md` version 2 的 Issue #28 补充合同。
- `DESIGN.md` 既有暖纸、细线、灰蓝文字、珊瑚操作色与 Project paper_flow。
- 用户现状截图与 YarnPal 结构截图均只在主代理当次视觉输入中打开，未进入 diff。

## 实现与证据

- 工作树：`/Users/jinchen/Documents/ChatGPT/毛线-issue-28`；未发布 Theme `PR-29` (`189740417337`)。
- 主要实现：`snippets/yarn-project-components.liquid`、`snippets/yarn-project-component.liquid`、`sections/yarn-project-detail.liquid`、`assets/yarn-project.css`、三主语言及 28 份 fallback locale。
- 数据：`yarn_material.component_type` 和 `yarn_material.image`；9 个 Active 作品均有 1 条已分类主毛线及可加载图片。小袋使用真实 Joyful 商品图，其余 8 张为已上传 Shopify 并有披露的 OpenAI ImageGen 内部示意，源文件与提示记录在 `.impeccable/content/28-project-yarns/`。
- 中、英、日三语在 CSS 1440×900 和 390×844 的真实 Chrome 复核：毛线图分别 128 / 104 px，所有路径 `scrollWidth == clientWidth`，无图片失败。9 作品逐项前台复核记录见同目录 `design-qa.md`。
- `npm run verify` 56/56 pass，Theme Check 0 error / 9 既有 warning。未运行加购以免改变用户购物车；原有购买合约测试均通过。

## 请求 reviewer

请独立检查代码、surface brief、DESIGN 与上述 QA 证据，按 Impeccable finish review 返回 `recapture / rebuild / fix / ship`，区分 P0–P3 与运营边界。只评估本轮毛线优先详情与直接回归，不把受保护内部原型提升为公开 / production 发布批准。将结果写入本目录 `finish-review.md`；不修改主题代码。
