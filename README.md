# 环信 uniApp 推送演示项目

基于 uniApp 的跨平台即时通讯消息推送解决方案，集成环信 SDK 实现多端推送功能。

## 特性亮点

- 📱 平台支持（iOS/Android）
- 🔔 原生级推送通知支持（华为/小米/vivo/oppo/荣耀/魅族/APNs）
- 💬 即时通讯与推送服务深度整合
- 🔒 离线消息保障机制
- 📦 开箱即用的推送配置模板

## 技术栈

- 前端框架：uniApp (Vue3)
- 推送服务：环信 IM SDK 4.9.1+
- 依赖插件：[原生推送插件（android/iOS）](./nativeplugins/EMPushUniPlugin/)
- 开发工具：HBuilder X

## 项目核心结构

- `nativeplugins`：原生插件目录
  - `EMPushUniPlugin`：原生推送插件
- `manifest.json`：项目配置文件
- `pages.json`：页面配置文件
- `static`：静态资源目录
- `uni_modules`：uniApp 插件目
- `pages` ：页面目录
  - `index`：首页目录
    - `index.vue`：示例调用代码
- `utils`：工具函数目录
  - `WebIM.js`：环信 IM SDK 初始化代码
- `App.vue`：应用入口组件
- `main.js`：应用入口文件

## 快速开始

- 快速开始的使用建议直接参考环信相关文档，本项目仅作为演示使用。

  [文档入口](https://doc.easemob.com/document/applet/push/uniapp_push.html)

## 特别注意

- 【重要】华为的推送绑定配置与其他厂商配置不同，需要生成`agconnect-services.json`文件，防置在`nativeplugins/EMPushUniPlugin/android/assets`目录下。
- 【重要】由于涉及使用本地原生插件，务必在自定义基座或真机进行调试方可有效。
- 本项目仅作为演示使用，不建议直接用于生产环境。
- 如基于自己项目测试，请确保您已经注册并获取了环信 IM SDK 的 AppKey，且在环信 console 管理后台上传对应平台证书。
- 本项目仅支持 Android 和 iOS 平台，其他平台暂未支持。

```bash
# 克隆项目
git clone https://github.com/Easemob-Community/easemob-uniApp-push-demo

# 安装依赖
npm install

# 运行项目
使用 HBuilder X 打开项目，运行即可，前提必须进行必要的证书配置，以及配置环信 IM SDK 相关信息，且在自定义基座或真机进行调试方可有效。
```
