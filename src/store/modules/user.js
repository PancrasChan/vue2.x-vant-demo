import { SET_USER_INFO } from "../mutation-types";

// eslint-disable-next-line no-unused-vars
const user = {
  state: {
    userInfo: {
      username: "",
      realName: "",
    },
  },
  mutations: {
    [SET_USER_INFO](state, user) {
      state.user = user;
    },
  },
};

export default user;
