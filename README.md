# Yarn Commerce Platform

以精选毛线、编织项目和 Project Kit 为核心的 Shopify 商店与未来手作平台。

正式品牌名尚未确定；`yarn-commerce-platform` 是稳定的内部仓库名。

## 当前架构

- Shopify Theme + Liquid 负责公开店面、商品发现与购物路径。
- Shopify 是商品、SKU、价格、库存、购物车、支付、订单与退款的事实来源。
- 将来的自有 Platform Service 只负责 My Project、进度、UGC、收藏、社区与创作者能力。
- 当前不做全量 Headless；架构保留未来通过 Storefront API 迁移的边界。

详细说明见 [PRODUCT.md](./PRODUCT.md)、[CONTEXT.md](./CONTEXT.md) 和 [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)。

## 开发

```bash
npm ci
./init.sh
```

启动 Shopify 主题预览：

```bash
npm run dev -- --store <store>.myshopify.com
```

运行必要检查：

```bash
npm run verify
```

## 协作

持久任务和决策以 GitHub Issue / PR 为准。Slack 用于讨论和提出需求，Codex 用于实现、验证和准备 PR。详见 [docs/harness/workflow.md](./docs/harness/workflow.md)。

## 仓库结构

Shopify 原生 GitHub 主题集成要求 `assets/`、`layout/`、`sections/` 等目录位于分支根目录。`docs/` 和 Harness 文件保留在同一仓库中，Shopify 同步时会忽略它们。
