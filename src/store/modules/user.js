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
      state.userInfo = user;
    },
  },
  actions: {
    [USER_LOGIN]({ commit }, params) {
      return new Promise((resolve, reject) => {
        login(params)
          .then((response) => {
            if (response.code === 200) {
              let result = response.result;
              commit(SET_USER_INFO, result);
              resolve(response);
            } else {
              reject(response);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default user;
