# 商品详情页

模式：Persuade。帮助顾客识别商品、核对内容与配置，再通过 Shopify 原生表单购买。

## 当前批准范围

- 手机版：用户已确认完整商品信息的实际呈现，批准依据为 [PR #98](https://github.com/hitoami/yarn-commerce-platform/pull/98) 与 [Issue #73 的合并说明](https://github.com/hitoami/yarn-commerce-platform/issues/73#issuecomment-5850722892)。构图与来源记录见 [手机方向](approved/73-pdp-mobile.source.md)。
- 桌面版：本会话确认「可以，按这张实现」，来源与提示词见 [桌面方向](approved/73-pdp-desktop.source.md)。购买区为左右双栏，详情沿 1200px 内容轴展开；关于正文左、附图右，内容物图左、双栏明细右，三步横排、两张规格卡、单列折叠问答。
- 编织包先呈现图库、标题、价格、数量与购买，再顺读关于、内容物、步骤、尺寸、适合谁和 FAQ。手机内容物明细在内容物图片之前；正文不能被图片或简化标签替代。
- 字体沿用现有 `yarn-design-tokens.css`：中文文楷、日文 Klee One / Noto Sans JP、英文现有字体。价格、按钮和边线继续消费已有颜色角色。
- 毛线与成品共用购买结构，保留各自的规格正文；本轮不添加差异化内容与后台字段。

## 实现与内容边界

- `sections/main-product.liquid` 保留 Shopify 图库、Variant、数量规则、库存、加购、动态购买、错误与售罄状态。
- `snippets/yarn-kit-story.liquid` 从 Shopify `product.description` 的六段结构读取完整正文；分段不足时保留描述回退。不得根据视觉稿写死内容物、教程、价格或评价。
- 编织包手机正文样式作用域限定在 `.yarn-product-page .yarn-kit-story-full`。共享作品页不跟随商品页改版。
- 桌面变化限定在 990px 以上：购买区最大宽度 1104px，48px 列距，受视口约束的主图最高 520px；关联商品入口保留并压缩高度。较长内容允许自然增高，不固定材料条目数、不截断正文。
- 主图保留完整商品，缩略图继续可切换。FAQ 保留原生 `details` / `summary` 行为。
- 商品图片和源站说明属于当前内部演示内容。公开仓库只保存必要方向、来源和提示词；未获授权的参考照片、截图与含这些照片的视觉稿只在本地及受保护预览保留，不作为公开发布资产。

## 验收

运行 `npm run proof`，使用 `.proof/report.md` 的实际结论和清单；当前主分支还包含政策/客服页面，截图数以配置为准，不以旧的 42 张固定值漏掉新增覆盖。

商品首屏之外，需补看同视口的关于、完整内容物、步骤/规格和 FAQ 展开状态；验证图库切换、变体（存在时）、数量和加购/删除。下方区块未出现在首屏截图时，不得宣称已由首屏证据自动覆盖。证据包补充需求在 [#71](https://github.com/hitoami/yarn-commerce-platform/issues/71#issuecomment-5850351232) 跟踪。
