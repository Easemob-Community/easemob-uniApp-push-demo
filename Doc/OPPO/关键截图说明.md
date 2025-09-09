# OPPO 推送关键截图说明

## 1. OPPO 开放平台配置截图

### 1.1 应用列表页面

![OPPO应用列表页面]( /static/demo/oppo/2525e27d-464c-4509-a72f-f3b0e020ca06.png )

**关键信息**:
- 应用名称：必须与 uni-app 项目一致
- 应用包名：格式为 com.xxx.xxx

### 1.2 应用详情页面

![OPPO应用详情页面]( /static/demo/oppo/973d392f-f069-43ad-b045-a85746008ef4.png )

**关键信息**:
- AppKey：32 位字符串，格式如`OP-1234567890abcdef`
- AppSecret：64 位加密字符串
- MasterSecret(appserversecret)：服务端使用的密钥

### 2.1 原生插件必须配置

![OPPO原生插件配置]( /static/demo/oppo/iShot_2025-09-09_13.44.38.png )

**关键信息**:
- EMPushUniPlugin 中 OPPO SDK 集成
- OPPO appKey 填写
- OPPO appSecret 填写(需要特别注意不是 MasterSecret，也不是 appserversecret)

## 3. 设备测试截图

### 3.1 Token 获取成功

![OPPO Token获取成功]( /static/demo/oppo/iShot_2025-09-09_13.58.08.png )

**关键信息**:
- 返回的 OPPO 推送 Token 格式
