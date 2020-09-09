import * as actions from "../actions";

const init = {
  projs: [],
};

export const ProjReducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_PROJECT_FINISH:
      const { projs } = action;
      return { ...state, projs };
    case actions.DELELE_PROJECT_FINISH: // useless
      return state;
    default:
      return state;
  }
};

export default ProjReducer;
