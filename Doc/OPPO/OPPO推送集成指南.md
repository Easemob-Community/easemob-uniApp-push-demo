# OPPO 推送集成指南

## 概述

本指南详细说明如何在 uni-app 项目中集成 OPPO 推送服务，确保应用能够在 OPPO 设备上正常接收推送消息。

## 核心集成步骤

### 1. OPPO 推送服务配置

#### 1.1 注册 OPPO 开发者账号

- 访问[OPPO 开放平台](https://open.oppomobile.com/)
- 注册并登录开发者账号
- 创建应用并获取以下关键信息：
  - **AppKey**: OPPO 分配的应用唯一标识
  - **AppSecret**: 应用密钥，用于服务端验证
  - **MasterSecret(appserversecret)**: 主密钥，用于服务端推送

#### 1.2 配置应用信息

在 OPPO 开放平台中配置以下信息：

- 应用包名：必须与 uni-app 打包时的包名完全一致
- 推送权限：申请推送权限并配置推送图标

### 2. 环信后台上传 oppo 推送证书

- 登录环信控制台
- 找到应用，点击应用详情
- 找到即时推送，选择证书管理，点击添加证书
- 上传 oppo 推送证书

### 3. uni-app 项目配置

#### 3.1 原生插件必要配置

- 打开 mainfest.json 文件
- 确保填写 oppo_appkey 以及 oppo_app_serect

### 4. 关键代码集成

#### 4.1 初始化推送服务

```javascript
const pushOption = {
  // @ts-ignore
  emPush: EMPushUniPlugin,
  // 配置需要推送的证书名称
  config: {
    OPPOCertificateName: "xxxxxx", // oppo 推送证书名称
  },
};
//完整代码见README.md中示例。
```

### 5. 常见问题及解决方案

#### 5.1 Token 获取失败

- 检查 OPPO 应用配置是否正确
- 确认设备为 OPPO 品牌且支持推送
- 验证网络连接是否正常

#### 5.2 推送接收失败

- 检查应用权限是否授予
- 确认 OPPO 推送服务已启用
- 验证服务端推送参数是否正确

#### 5.3 通知栏不显示

- 检查通知权限设置
- 确认推送图标配置正确
- 检查系统通知设置
