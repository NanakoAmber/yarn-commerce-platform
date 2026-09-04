---
status: accepted
date: 2026-09-04
---

# Use a hybrid Shopify storefront before Headless

在 MVP 和早期运营阶段，使用 Shopify Theme 承担商品发现、购物车与 Checkout 主路径，并在第一个真实平台功能出现时增加一个模块化 Platform Service。Shopify 持续拥有商品、价格、库存和交易真值，Platform Service 只拥有个性化、内容和社区状态。该选择优先使用 Shopify 已有的运营与性能能力，同时保留未来通过 Storefront API 切换至 Hydrogen 或自建前端的边界。

## Considered options

- 继续只使用 Theme：上线最快，但个性化和平台状态会被迫进入不合适的存储边界。
- 立即全量 Headless：前端控制力最高，但在需求未验证时提前承担部署、缓存、登录、分析和集成成本。
- Hybrid：保留 Shopify 的交易基础设施，只为经验证的高级能力建设自有服务。

## Consequences

公开首屏优先由 Liquid 渲染；自有平台逻辑不写入 Liquid；对 Headless 的任何正式迁移都需要新 ADR、可比较的性能证据和人工批准。
