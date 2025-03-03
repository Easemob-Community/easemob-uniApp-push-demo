<script>
import EMClient from "@/utils/WebIM.js";
// 引入 EMPushUniPlugin 推送插件
// #ifdef APP-PLUS
const EMPushUniPlugin = uni.requireNativePlugin("EMPushUniPlugin");
// #endif
// 配置推送插件
const initPushOptions = () => {
  const pushOption = {
    // @ts-ignore
    emPush: EMPushUniPlugin,
    // 配置需要推送的证书名称
    config: {
      //👇小米推送证书名称，该段数字为伪小米推送后台生成的证书名称，请使用替换为自己的证书名称
      MICertificateName: "2882303761520334485", // 小米推送证书名称
      // OPPOCertificateName: "xxxxxx", // oppo 推送证书名称
      //👇华为推送证书名称，该段数字为伪华为推送后台生成的证书名称，请使用替换为自己的证书名称
      HMSCertificateName: "111809475", // 华为推送证书名称
      // VIVOCertificateName: "xxxxxx", // vivo 推送证书名称
      // HONORCertificateName: "xxxxxx", // 荣耀推送证书名称
      // MEIZUCertificateName: "xxxxxx", // 魅族推送证书名称
      // APNsCertificateName: "xxxxxx", // APNs推送证书名称
    },
  };
  // 调用 IM SDK 方法，注册推送插件
  EMClient.usePlugin(pushOption, "push");
};
export default {
  // 在 uniapp onLaunch 事件中初始化推送插件
  onLaunch: function () {
    // #ifdef APP-PLUS
    if (EMPushUniPlugin) {
      console.log("EMPushUniPlugin is ready");
      EMPushUniPlugin.initPushModule();
      initPushOptions();
    }

    // #endif
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
