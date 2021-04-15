import { signature } from "@api/wechat";
import wx from "weixin-js-sdk";
import { Toast } from "vant";
// 微信公众号api列表
const WxApiList = [
  "chooseImage",
  "uploadImage",
  "downloadImage",
  "previewImage",
  "openLocation",
  "getLocation",
  "scanQRCode",
  "checkJsApi",
];

// 使用Promise简化微信调用代码
const wxPromise = (method, options = {}) => {
  return new Promise((resolve, reject) => {
    // 将options对象赋值 然后再传给下面调用的方法中
    options.success = resolve;
    options.fail = (err) => {
      reject(err);
    };
    wx[method](options);
  });
};
// 获取微信签名配置
export const getSignature = (signUrl, originalId, callback) => {
  let params = { url: signUrl, originalId: originalId };
  signature(params)
    .then((res) => {
      // console.log('res=====>', res)
      if (res.timestamp) {
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: res.appId, // 必填，公众号的唯一标识
          timestamp: res.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.nonceStr, // 必填，生成签名的随机串
          signature: res.signature, // 必填，签名
          jsApiList: WxApiList, // 必填，需要使用的JS接口列表
        });
        if (callback) callback();
      } else {
        Toast.fail("签名失败");
      }
    })
    .catch(() => {
      Toast.fail("连接异常");
    });
};
// 检查接口是否有效
export const checkJsApi = () =>
  wxPromise("checkJsApi", { jsApiList: WxApiList });
// 微信扫码
export const scanQRCode = (options) => wxPromise("scanQRCode", options);

// 获取位置信息经纬度
export const getLocation = () => {
  let type = "wgs84";
  return wxPromise("getLocation", { type: type });
};
// 打开微信内置地图查看经纬度位置信息
export const openLocation = (data) => wxPromise("openLocation", data);
// 校验微信js接口是否就绪
export const checkIsReady = () => {
  return new Promise((resolve, reject) => {
    wx.ready(() => resolve());
    wx.error((err) => reject(err));
  });
};
