# 内容队员上手：只用 Shopify 完成一条内容

任务与验收范围：[Issue #15](https://github.com/NanakoAmber/yarn-commerce-platform/issues/15)。本手册不代替任务状态；实测结果与未完成项记录在 Issue / PR。

## 先打开这三个入口

- [中文内容验收页](https://tutaka-54.myshopify.com/zh?preview_theme_id=189701980473&view=onboarding)：独立未发布主题 `Content onboarding - 15`，不是正式网站。
- [灵感作品后台](https://admin.shopify.com/store/tutaka-54/content/metaobjects/entries/inspiration)：编辑文字、图片、关联商品。
- [内容区块编辑器](https://admin.shopify.com/store/tutaka-54/themes/189701980473/editor?previewPath=%2Fzh%3Fview%3Donboarding)：选择内容、顺序和显示开关。

需使用店主分配的 Shopify 账户权限；请勿共享店主密码。权限至少覆盖商品、内容/文件、相应主题和 Translate & Adapt，实际可邀请的账户类型以当前套餐为准。

## 第一课：先改一条现成样例

1. 在「内容 → 元对象 → 灵感作品」打开「淡彩抽绳包｜配色灵感」。
2. 在中文标题末尾加「验收」，保存；刷新中文验收页，标题应同步变化。
3. 把标题恢复原文并保存。无需改代码、表格、重新导入或部署主题。
4. 编辑关联的商品「淡彩抽绳包材料包｜内部演示」，修改商品标题或描述，保存。灵感卡片的商品链接、商品详情和购物车标题均读取 Shopify 商品本身。

样例只展示内容关系，不是已验证教程。不能把「相关商品」当成完整材料清单。

## 第二课：自己新增一条

1. 点击「添加条目」，先用草稿状态。
2. 填中文标题、简介、封面图片、作品类型、可发布范围。这些是必填项。
3. 在「封面图片 → 选择图片」选已有文件，或上传自己有权使用的照片；确认选中后点击完成。推荐正方形主图，主体清楚，避免文字烘焙在图片里。
4. 填来源链接与素材授权说明。未经授权的参考图只选「仅内部原型」，不得改成正式发布。
5. 「推荐商品」选择真实 Shopify 商品，不在简介里手写价格、库存或商品链接。
6. 「名称」是内部标识：用小写英文、数字、短横线，例如 `team-first-bag`。中文标题自动生成的名称可能报错；这不意味着必须把中文标题改成英文。
7. 没有验证过的难度、耗时、用量留空，不猜。仅当已有真实信息时填写。
8. 保存后改为 Active，并把「首页推荐」选真。自动模式下刷新即可看到（最多读取前 12 条有效条目，当前小样本足够）。

图库、手作类型、风格等为可选字段，不必为了保存而填满。新队员完成一条即可，不要求一次收集几十条。

## 第三课：显示、排序、下架

在验收主题的「灵感作品（后台内容）」分区中操作：

- 自动模式：读取「首页推荐 = 真」的有效条目；在内容后台改为假，即从这个自动推荐区移除。
- 自定义顺序：关闭「自动展示勾选了首页推荐的作品」，在「作品与顺序」中选择条目并拖动顺序，保存主题。此时以列表为准，不再使用首页推荐开关。
- 全局下架：把条目改为 Draft；不要删除条目。草稿不应出现在前台，改回 Active 可以恢复。
- 「包含内部原型素材」默认关闭。本验收主题为受保护预览，单独开启；这个开关不是密码或访问控制。对外演示、发布前必须关闭，并逐项核对授权。
- 没有可展示条目时，访客不看到空卡片；编辑器会提示检查选择、封面和状态。

每次改动后确认「更改已保存」或保存按钮恢复不可点击，再刷新前台。若结果未变化，先重开编辑器确认设置确实留存，不要连续重复点击。

## 第四课：中文主内容，日文/英文翻译

1. 中文原文只在商品或灵感作品后台维护。
2. 打开 [Translate & Adapt](https://admin.shopify.com/store/tutaka-54/apps/translate-and-adapt)，选择目标语言。
3. 选择「元对象」翻译灵感的 Title、Summary；选择「产品」翻译商品标题和描述。
4. 如需翻译这个区块的标题/简介，选择「模板 → 选择模板 → Content onboarding - 15 → Index: Onboarding」，分别填写 `Content: Heading` 与 `Content: Text`。不要误改当前线上主题。
5. 保存后重新打开，确认翻译仍在；中文原文改动后要重新复核旧翻译。
6. `Publish scope`、分类选项、来源 URL 等运营控制值本阶段保持中文原值，不在翻译应用另写一套。图片无必要不做语言副本。

语言的「已发布」与主题的「已发布」是两件事。未发布语言无法作为正常访客路径验收；不能因为后台填完了英文就宣称 `/en` 已通过。日文主页路径为 `/`，中文为 `/zh`。本次已保存样例英文，但英语发布与 `/en` 实际预览仍待店主确认；当前结果见 Issue / PR。

## 第五课：从作品走到购物车，不下真实订单

1. 在中文验收页点击抽绳包的相关商品。
2. 选择配色 `02`，数量设为 1，加入购物车。
3. 检查商品标题、配色、单价和数量；把数量改为 2，确认合计跟着变化。
4. 只移除本次测试加的商品，保留测试前已有商品。到这里结束，不提交订单或付款。

验收结束时，队员应能独立完成：**新增中文条目 → 选图 → 关联商品 → 翻译 → 选择/排序/隐藏 → 前台 → Variant → 购物车**。卡在哪一步，就用那一步的截图反馈，不需要维护额外表格。

## 样例内容及素材边界

- [淡彩抽绳包｜配色灵感](https://admin.shopify.com/store/tutaka-54/content/metaobjects/entries/inspiration/279137452345)，标识 `pastel-drawstring-bag`。
- [渐变波纹毯｜居家灵感](https://admin.shopify.com/store/tutaka-54/content/metaobjects/entries/inspiration/279137976633)，标识 `gradient-wave-blanket`。

均复用店内已导入的 Hoshiami 参考图，没有新增大批采集。原始来源分别为 [抽绳包](https://hoshiami.jp/products/mousse-bag-crochet-kit) 和 [波纹毯](https://hoshiami.jp/products/melody-wave-blanket-crochet-kit)。只用于密码保护的内部原型，不能当成正式可用的自有商品图。

## 当前边界，避免误会

- 本任务提供独立内容验收模板和可插入首页的分区，不覆盖另一项任务正在重做的首页构图。新首页合并后，通过 Theme Editor 添加同名分区即可接入同一批后台内容。
- 商品标题/描述已经取消代码内按 handle 写死的翻译；尚未迁移的旧商品会显示 Shopify 原文。这里只做少量样例，不代表全部 20 个旧商品已翻译。
- 「适合作品」「季节」填入元字段后优先驱动现有用途/季节筛选；风格、手作类型可进入关键词搜索。旧首页「渐变/蕾丝」等风格筛选仍是旧分类，不等同于新「清新/自然」字段。删除元字段值会回到旧目录的兼容分类。
- 「毛线用量类别」不能代替某件作品的实际用量，不要求普通毛线都填它。
- 素材授权、真实套件清单、库存配置、教程、配送退换政策及母语校对仍是正式销售前的独立门槛。
- 主题部署不会自动创建店铺内容定义或条目；换店铺需要先建立同名定义，不能只复制 Theme 文件。

## 给开发者的交接

新分区 `yarn-inspiration-gallery` 的唯一内容来源是 `inspiration` Metaobject；价格、可售状态和链接由关联的 Shopify Product 提供，Liquid 服务端渲染。没有新数据库或浏览器 Admin token。

实际字段键：`title`、`summary`、`cover_image`、`gallery`、`craft_type`、`work_type`、`difficulty`、`season`、`visual_style`、`estimated_time`、`source_url`、`license_note`、`recommended_products`、`featured`、`publish_scope`。

仓库中的验收模板保持安全默认值（内部素材关闭），远端验收主题的选择/排序/内部开关由 Theme Editor 维护。后续更新这个主题代码时不要无差别覆盖 `templates/index.onboarding.json`；先拉取/核对运营设置，或使用 `--only` 上传本次代码文件。

回滚：从页面移除或隐藏新分区；必要时将样例条目改 Draft。代码可通过回退本任务提交恢复。不要删除文件库素材、已有商品或其他主题。

平台依据：[Metaobject 内容选择器](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#metaobject_list)、[Shopify 内容翻译](https://shopify.dev/docs/apps/build/markets/manage-translated-content)。
