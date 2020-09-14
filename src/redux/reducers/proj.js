import * as actions from "../actions";

const init = {
  projs: null,
  info: null,
  expInfo: null,
  projID: null,
  expID: null,
  projectData: null,
};

export const ProjReducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_PROJECT_FINISH:
      const { projs } = action;
      return { ...state, projs };
    case actions.DELELE_PROJECT_FINISH: // useless
      return state;
    case actions.GET_PROJ_INFO_FINISH:
      const { info } = action;
      return { ...state, info };
    case actions.GET_EXP_INFO_FINISH:
      const { expInfo } = action;
      return { ...state, expInfo };
    case actions.CLEAN_UP_PROJECT:
      return { ...state, info: null };
    case actions.CLEAN_UP_EXPERIMENT:
      return { ...state, expInfo: null };
    case actions.GET_PROJECT_CONF_FINISH:
      const { projectData } = action;
      return { ...state, projectData };
    default:
      return state;
  }
};

export default ProjReducer;
