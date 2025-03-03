const EMUniPushPlugin = uni.requireNativePlugin('WFUniPlugin');

const _getNativeDeviceToken = () => {
  return new Promise((resolve, reject) => {
    if (EMUniPushPlugin) {
      EMUniPushPlugin.getDeviceToken((res) => {
        if (res.code == 0) {
          resolve(res);
        } else {
          console.error('get deviceToekn fail from plugin!');
          reject(res);
        }
      });
    }
  });
};
const _handleRequestPushApi = (EMClient, notifierName, deviceToken = '') => {
  const { apiUrl, orgName, appName, user, clientResource, token } = EMClient;
  const requestUrl = `${apiUrl}/${orgName}/${appName}/users/${user}`;
  console.log('>>>>>>>>clientResource', clientResource);
  const data = {
    device_id: clientResource,
    notifier_name: notifierName,
  };
  //解绑push deviceToken 传空字符串
  deviceToken && (data.device_token = deviceToken);
  console.log('>>>>>开始请求接口', requestUrl, data);
  return new Promise((resolve, reject) => {
    uni.request({
      method: 'PUT',
      url: requestUrl, //仅为示例，并非真实接口地址。
      data: data,
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      success: (res) => {
        console.log('request push success', res);
        resolve(res);
      },
      fail: (res) => {
        console.log('request push fail', res);
        reject(res);
      },
    });
  });
};
const useEMUniPush = (EMClient) => {
  if (!EMClient) return console.error('useEMUniPush need EMClient!');
  if (EMClient.logOut) return console.error('first login im client!');

  const bindOfflinePushDeviceToken = async (notifierName) => {
    if (!notifierName && typeof notifierName !== 'string') {
      console.error('bindDeviceToken need notifierName!');
      return Promise.reject('bindDeviceToken need notifierName!');
    }

    try {
      const nativePluginRes = await _getNativeDeviceToken();
      if (nativePluginRes && nativePluginRes.code == 0) {
        const deviceToken = nativePluginRes.data;
        const requestPushRes = await _handleRequestPushApi(
          EMClient,
          notifierName,
          deviceToken
        );
        if (requestPushRes) return Promise.resolve(requestPushRes);
      }
    } catch (error) {
      console.error('bind push fail', error);
      return Promise.reject(error);
    }
  };
  const unbindOfflinePushDeviceToken = async (notifierName) => {
    if (!notifierName && typeof notifierName !== 'string') {
      console.error(
        'bindDeviceToken need notifierName or notifierName TypeError!'
      );
      return Promise.reject(
        'bindDeviceToken need notifierName or notifierName TypeError!'
      );
    }
    try {
      const requestPushRes = await _handleRequestPushApi(
        EMClient,
        notifierName
      );
      return Promise.resolve(requestPushRes);
    } catch (error) {
      console.error('unbind push fail', error);
      return Promise.reject(error);
    }
  };
  return {
    bindOfflinePushDeviceToken,
    unbindOfflinePushDeviceToken,
  };
};

export default useEMUniPush;
