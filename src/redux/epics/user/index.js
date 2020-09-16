import { loginEpic } from "./login";
import { registerEpic } from "./register";
import { getInfoEpic } from "./getInfo";
import { changePasswordEpic } from "./changePassword";

export default [loginEpic, registerEpic, getInfoEpic, changePasswordEpic];
