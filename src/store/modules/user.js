import { SET_USER_INFO, USER_LOGIN } from "../mutation-types";
import { login } from "@api/user";

// eslint-disable-next-line no-unused-vars
const user = {
  state: {
    userInfo: {
      username: "",
      realname: "",
    },
  },
  mutations: {
    [SET_USER_INFO](state, user) {
      console.log("传入的用户信息是: ", user);
      state.userInfo = user;
      console.log("0003用户信息是: ", state.userInfo.username);
    },
  },
  actions: {
    [USER_LOGIN]({ commit }, params) {
      return new Promise((resolve, reject) => {
        login(params)
          .then((response) => {
            if (response.code === 200) {
              let result = response.result;
              console.log("001用户信息是", user.state.userInfo.username);
              commit(SET_USER_INFO, result);
              console.log("002用户信息是", user.state.userInfo.username);
              resolve(response);
            } else {
              reject(response);
            }
          })
          .catch((error) => {
            console.log("报错了啊", error);
            reject(error);
          });
      });
    },
  },
};

export default user;
