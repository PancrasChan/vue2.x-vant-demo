import { SET_USER_INFO } from "../mutation-types";

const user = {
  state: {
    userInfo: {},
  },
  mutations: {
    [SET_USER_INFO](state, user) {
      state.user = user;
    },
  },
};
