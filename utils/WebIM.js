import EM_SDK from 'easemob-websdk/uniApp/Easemob-chat';
const deviceInfo = uni.getDeviceInfo();
console.log('deviceInfo', deviceInfo);
let EMClient = new EM_SDK.connection({
  appKey: 'easemob-demo#support',
  apiUrl: 'https://a1.easemob.com',
  url: 'wss://im-api-wechat.easemob.com/websocket',
  deviceId: deviceInfo.deviceId,
});

export default EMClient;
