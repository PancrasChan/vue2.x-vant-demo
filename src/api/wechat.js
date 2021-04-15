import { getAction } from "@utils/request";

export const oauth2 = (param) => getAction("/yourWechatUrl/auth", param, true);
export const signature = (param) =>
  getAction("/yourWechat/getSignature", param, true);
