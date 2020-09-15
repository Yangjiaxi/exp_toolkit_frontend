import * as actions from "../actions";

const storedToken = localStorage.getItem("token");
const payload = storedToken && storedToken.split(".")[1];
const time = payload && JSON.parse(atob(payload)).exp;
const verifiedToken =
  storedToken !== null && time > Date.now() / 1000 ? storedToken : "";

const init = {
  token: verifiedToken,
  info: null,
};

console.log("Init: ");
console.log(init);

export const userReducer = (state = init, action) => {
  switch (action.type) {
    // case actions.GET_USER_INFO_FINISH:
    //   const { info } = action;
    //   return { ...state, info };
    case actions.LOGIN:
      const { token } = action;
      localStorage.setItem("token", token);
      return { ...state, token };
    case actions.LOGOUT:
      localStorage.removeItem("token");
      return { info: null, token: "" };
    default:
      return state;
  }
};

export default userReducer;
