# 编织作品内部原型操作指南

本指南帮助队友在 Shopify 中新增和维护内部 Project，并把它连接到未发布 Theme 的首页与菜单。领域边界沿用[作品体验与内容编辑合同](project-experience-contract.md)，固定字段、后台入口与当前样例见[编织作品内容模型](project-content-model.md)。它不是发布清单或任务跟踪表。

## 安全前提

- 只在密码保护的店铺和未发布 Theme 中演示 `release_scope = 仅内部原型` 的作品。
- Metaobject 的 Active 只是 Shopify 平台展示状态，不代表材料、教程、版权、语言或商品已经达到公开标准。
- 未发布 Theme `189727637817` 的内部作品开关当前已开启；定制咨询发送保持关闭。接收位置与通知方式尚未验证，不要发送测试咨询。
- 不发布 Theme、不提交订单、不修改真实价格或库存。不要把秘密、凭证或私人资料放入 Metaobject、Product、Theme 或 File CDN。

## 新建 Project

1. 打开 Shopify Admin 的[编织作品 Entry 列表](https://admin.shopify.com/store/tutaka-54/content/metaobjects/entries/yarn_project)，选择新增 Entry。
2. 先使用 ASCII 临时标题保存一次，让 Shopify 生成合法 Handle。直接用中文标题首次保存可能因 Handle 只允许 ASCII 而失败。
3. 保存成功后，把 `title` 改为中文名称；保留已有 ASCII Handle，再次保存。
4. 按[内容模型的 19 个固定字段](project-content-model.md#固定字段)填写已知事实。未知时间、用量、工具或适配关系留空，不推测。
5. 内部样例将 `release_scope` 设为 `仅内部原型`。需要让未发布 Theme 读取时，可将 Shopify 平台状态设为 Active；不要因此写成“已核实可公开”。

## 填写教程

- 在 `tutorial` Rich text 中，用段落下拉菜单选择“标题 3”录入一个步骤标题，按 Enter 后切回正文。作品页会把 Heading 3 作为可折叠小节。
- 不要粘贴 HTML；标签会成为字面文字，而不是结构化内容。
- 外部教程填写 `tutorial_url` 或 `video_url`，并在 `source_credit` 写明作者或来源。公开可看不等于允许下载、翻译、复制图片、转载图解或嵌入。
- 首期不新建独立 Tutorial 实体。教程不完整时如实保留缺口，不用基础针法页面冒充完整作品教程。

## 关联材料、工具与成品

- `materials`、`tools` 与 `finished_products` 都从 Shopify 中选择真实 Product；不要在 Project 中复制价格、库存或 Variant 真值。
- Product 引用不包含采购数量，也不等于 Project Kit。未知用量不得换算成团数或自动加购工具。
- 关联成品若与教程不是同一设计，只能标为“成品参考（非教程同款）”；不要暗示为教程样品、跟做结果或已经验证的同款。
- 新增 Product 先保持 Draft，由人工审核图片权利、商品说明、Variant、价格、库存、供货和关联方式。审核决定不由本指南代替。

商品编辑验证样例：[作品原型编辑验证｜内部草稿](https://admin.shopify.com/store/tutaka-54/products/10331691090233)。该新 Product 未发布到任何销售渠道、库存 0，只验证标题和描述由后台进入指定未发布 Theme 的原生商品页。不要把 Shopify 自动保存的默认 `¥0` 当作真实报价。编辑后重新点击后台“预览”生成新快照，再选择 Theme `189727637817`；旧 Draft 预览链接可能继续显示旧内容。不要公开分享带 preview key 的后台预览 URL。

## 首页精选与排序

1. 打开 Shopify **Themes**，进入未发布 Theme `189727637817` 的 Theme Editor。
2. 找到首页作品库 Section 的“新手精选及顺序” `metaobject_list`。
3. 从现有 Project 中选择条目，并通过列表顺序控制首页展示顺序。当前选择是“方形篮 → 花片双拼小袋｜内部示例”。排序手柄也支持键盘：空格拿起、上下方向键移动、空格放下；保存后到预览刷新确认。该操作已实际验证并恢复此顺序。
4. 保存前确认没有把 Draft Product、未核实作品或无权使用的素材描述成公开商品。保存 Theme Editor 配置不等于英文发布或其他尚未执行的验收完成。

## 未发布 Theme 菜单

- 菜单 ID `318482252089`、handle `issue-23` 只绑定未发布 Theme `189727637817`。编辑时确认目标仍是这份菜单，不要替换线上 Theme 的主菜单。
- 菜单项指向作品路径时使用保存后的 ASCII Handle，例如 `/pages/projects/demo-square-basket`。先在受保护预览中检查目标；路径能保存不表示页面已经通过前台验收。
- 新增、删除或重排菜单不会自动证明桌面、移动端和三语标签一致，相关浏览器复核仍需单独执行。

## 当前不能代为确认的事项

前台语言切换已经实际验证日文根路径 `/`（`html lang="ja"`）和简体中文 `/zh` 正常；后台中文 primary 不改变根路径的日文结果。英文仍未发布，须待用户授权；其余 locale 的英文 fallback 也不代表相应语言已发布。

材料与成品的桌面购买路径已分别验证：读取真实 Variant、加入购物车、数量增加 1，并进入 Shop Pay 结账入口；没有下单或支付。验证后只移除了本次自行加入的条目，保留了原有购物车内容。这项结果不等于材料适配、教程跟做、成品同款关系、商品内容编辑或移动端路径已经核实。定制咨询收件仍待授权与验证，默认保持发送关闭。
