# 作品购买方式与演示接线

Issue #34 使用用户批准的第二轮方案 2。作品是前台统一内容入口，每条作品可关联成品、手作材料，或只展示灵感。

## 单一能力来源

`yarn_project.purchase_modes` 为 `list.single_line_text_field`，后台名称「购买方式标签」，固定值 `finished`、`materials`、`inspiration`。`finished` 与 `materials` 可以同时选择；`inspiration` 单独使用。不翻译这些机器值，前台标签由 Theme locales 翻译。Translate & Adapt 中若已有控制字段译值，须清除或精确保持源值；自动翻译后逐个语言验证，而不能只检查后台保存成功。`release_scope`、`category`、`difficulty`、配件 `supply` / `component_type` 同样属于控制枚举。

- `finished`：开启关联成品入口，必须有 `finished_products` Product 引用。
- `materials`：开启手作入口与材料采购，必须有 `components` 中本店提供的有效 Variant，或兼容的旧 `materials` Product 引用。
- `inspiration`：仅灵感，不渲染成品或材料购买入口；可保留作品说明与参考来源。
- 旧记录尚未填写标签时从现有材料商品引用推导；内部样例的旧成品引用只是参考，不自动升级为可买同款，需明确填写 finished。原参考链接与说明保留。标签不能将空引用变成可购买商品。
- 库存不决定是否支持该方式；售罄仍显示相应方式及售罄反馈。商品价格、库存、Variant 规则只读 Shopify。

首页「有成品」「可买材料」「仅灵感」与详情使用同一个 Liquid 能力解析器。两种能力同时成立的作品在两个筛选下都出现；无购买能力时归为灵感。作品分类、文字搜索和购买筛选共同生效。

## 最小新增可编辑字段

除 `purchase_modes` 外，`yarn_project.tutorial_cover` 为 `file_reference`（IMAGE），用于教程预览；为空时使用作品封面。其他标题、封面、配件、成品、制作说明、图文步骤与外部链接复用现有字段。

## 演示数据顺序与范围

先完成 Theme 前端，再由用户指定 `gpt-5.6-sol` 子代理维护 Shopify 定义、示例、商品、Variant、配件与中日英译文。至少覆盖双模式、仅成品、仅材料、纯灵感；蓝色交叉针篮子用作批准构图的代表样例。演示图片和内容明确标记内部示例，后续可替换。

不以实物验证、真实用量或真实供货作为本轮演示前置条件；但价格必须来自已保存的 Shopify 商品，不在 Theme 硬编码演示价格。网站保留密码保护，主题使用未发布预览，不提交真实订单或支付。
