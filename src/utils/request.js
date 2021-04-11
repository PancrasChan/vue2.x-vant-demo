import axios from "axios";
// eslint-disable-next-line no-unused-vars
import router from "@router";
import { lsGet, lsSet, TOKEN } from "../api/ls";
import { Toast } from "vant";
import { isEmptyString } from "@utils/util";
let axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: process.env.REQUEST_TIMEOUT,
});
// 全局网络请求配置
axiosInstance.interceptors.request.use(
  (config) => {
    // 从本地获取token, 并判断token是否为空
    // 此逻辑需要重新评定
    const token = lsGet(TOKEN);
    if (!isEmptyString(token)) {
      config.headers.common["X-Access-Token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 全局请求响应配置
axiosInstance.interceptors.response.use(
  (response) => {
    /**
     * 在这里做loading 关闭
     */
    Toast.clear();
    // 如果后端有新的token则重新缓存
    let newToken = response.headers["new-token"];
    if (newToken) {
      lsSet(TOKEN, newToken);
    }
    return response.data;
  },
  (error) => {
    let response = error.response;
    // console.log("response--error---->", error);
    // if (response.status === 500) {
    //   router.replace("/user/login");
    // }
    return Promise.reject(response);
  }
);

export const postAction = (url, data) => {
  return axiosInstance({
    method: "post",
    url: url,
    data: data,
  });
};

export function getAction(url, data) {
  return axiosInstance({
    method: "get",
    url: url,
    params: data,
  });
}

export function downFile(url, data) {
  return axiosInstance({
    method: "get",
    url: url,
    data,
    responseType: "blob",
  });
}

export function deleteAction(url, data) {
  return axiosInstance({
    method: "delete",
    url: url,
    data,
  });
}

export function putAction(url, data) {
  return axiosInstance({
    method: "put",
    url: url,
    data: data,
  });
}
