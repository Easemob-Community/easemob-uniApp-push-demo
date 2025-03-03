<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="input-container">
      <view class="input-style">
        <input v-model="userId" type="text" placeholder="输入环信userId" />
      </view>
      <view class="input-style">
        <input v-model="userPassword" type="text" placeholder="输入登录密码" />
      </view>
    </view>
    <view>
      <button @click="loginIM">登录IM</button>
      <button @click="logoutIM">退出登录</button>
      <button @click="unBindPush">主动解绑push</button>
    </view>
  </view>
</template>

<script>
import EMClient from "@/utils/WebIM.js";
export default {
  data() {
    return {
      title: "Hello",
      userId: "",
      userPassword: "",
      userToken: "",
    };
  },
  onLoad() {
    const res = uni.getDeviceInfo();
    console.log(res);
    EMClient.addEventHandler("loginSuccess", {
      onConnected: () => {
        console.log(">>>>>im connected");
        uni.showToast({
          icon: "none",
          title: "im connnected",
        });
      },
      onDisconnected: () => {
        console.log(">>>>>im disconnected");
        uni.showToast({
          icon: "none",
          title: "im disconnected",
        });
      },
      onError: (e) => {
        console.log(">>>>>im error", e);
        uni.showToast({
          icon: "none",
          title: "im error",
        });
      },
    });
  },
  methods: {
    loginIM() {
      EMClient.open({
        user: this.userId,
        pwd: this.userPassword,
      })
        .then((res) => {
          console.log("1111111", res);
        })
        .catch((err) => {
          console.log(">>>>>error", err);
        });
    },
    logoutIM() {
      EMClient.close();
    },
    unBindPush() {
      EMClient.unbindPushToken();
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.input-style {
  border: 2px solid blue;
  width: 100%;
  height: 50rpx;
  margin: 20rpx auto;
  border-radius: 5rpx;
}
</style>
