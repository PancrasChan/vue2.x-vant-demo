import API from "./index";
import { postAction } from "@utils/request";

export const login = (params) => postAction(API.Login, params);
