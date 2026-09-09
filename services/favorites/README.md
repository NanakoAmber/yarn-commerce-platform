# 账号收藏服务

Issue #39 的最小个性化服务。Theme 用 Shopify App Proxy 请求本服务；SQLite 只保存商店、客户 ID、实体类型、作品／商品 ID 和创建时间，不保存姓名、邮箱、商品文案、价格、库存或订单。

当前实现已通过本地 HTTP 与持久化测试，尚未安装 Shopify 应用或部署到外部服务器；不可据此声称真实账号跨设备验收通过。

## 接口与身份

- `GET /favorites`：返回当前账号的 `favorites` 和短期 `csrfToken`。
- `POST /favorites`：JSON `{ action: "add" | "remove", entity: { type: "project" | "product", id: "数字 ID" }, csrfToken }`。重复操作幂等，每个账号最多 200 条。
- `GET /healthz`：仅返回存活状态。
- 所有收藏请求核对 Shopify App Proxy HMAC、固定商店、代理路径及五分钟时间窗；账号只取签名中的 `logged_in_customer_id`，匿名请求返回 401。写入另需绑定账号的短期 CSRF token。所有响应禁止共享缓存。
- 删除或取消公开的实体不会从 Shopify 以外的副本显示内容；收藏列表只匹配当前 Liquid 生成的公开目录。

签名依据：[Shopify App Proxy 身份验证](https://shopify.dev/docs/apps/build/online-store/app-proxies/authenticate-app-proxies)。当前商店使用新版客户账户，部署后仍须验证实际登录回跳及签名中的账号 ID。

## 待批准的接入方案

1. 在现有商店的 Dev Dashboard 创建专用应用 `Yarn Favorites`。配置 App Proxy：前缀 `apps`、子路径 `yarn-favorites`，目标为 `https://<服务域名>/favorites`；仅申请 `write_app_proxy`。不申请商品、订单或客户资料读写权限。
2. 将服务部署到支持 Node 22.13+、HTTPS 和持久化磁盘的主机。服务器位置和费用须先确定；不能用临时开发隧道或临时磁盘充当跨设备存储。
3. 服务端设置 `.env.example` 所列环境变量。应用密钥只进入服务器密钥管理；数据库目录由服务账号独占并纳入主机备份。
4. 安装应用并确认实际授权范围；仅在未发布 Theme 中将“账号收藏服务地址”设为 `/apps/yarn-favorites`。
5. 使用获准的测试账号完成收藏、取消、刷新、退出登录、重新登录、第二浏览器读取及账号隔离验证，确认失败时不会显示保存成功。

App Proxy 配置依据：[Shopify App Proxy](https://shopify.dev/docs/apps/build/online-store/app-proxies/index)。创建授权、外部部署及真实账号测试是剩余的接入步骤，不能用本地测试代替。

## 本地运行与回滚

复制环境变量示例到被忽略的本地环境文件，填入服务端值后运行 `npm run favorites`；服务默认只监听 `127.0.0.1:3001`。正式主机通过 HTTPS 反向代理访问；如容器需要监听全部网卡，显式设置 `HOST=0.0.0.0` 并限制入站流量。

`npm test` 包含签名篡改、过期请求、跨商店／跨账号、CSRF、无效负载、幂等性、删除和服务重启验证。

回滚时清空未发布 Theme 的服务地址并停止服务；保留数据库可恢复已有收藏。停用应用前在 Shopify 核对影响，不删除数据库或安装记录来代替回滚。
