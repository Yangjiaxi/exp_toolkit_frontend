import * as actions from "../actions";

const init = {
  // 项目列表页面
  projList: null,
  trashList: null,
  // 点击进入一个项目
  projID: null,
  projInfo: null,
  // 编辑项目属性列、名字、附加信息
  projConf: {
    title: "",
    appendix: "",
    fields: [],
  },
  projConfLoaded: false, // 完成fetch
  // 项目中一个实验的信息
  expID: null,
  expInfo: null,
};

export const contentReducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_PROJECT_FINISH:
      const { projList } = action;
      return { ...state, projList };
    case actions.GET_TRASH_FINISH:
      const { trashList } = action;
      return { ...state, trashList };
    case actions.DELELE_PROJECT_FINISH: // useless
      return state;
    case actions.DELETE_EXP_FINISH: // useless
      return state;
    case actions.GET_PROJ_INFO_FINISH:
      const { info } = action;
      return { ...state, projInfo: info };
    case actions.GET_EXP_INFO_FINISH:
      const { expInfo } = action;
      return { ...state, expInfo };
    case actions.CLEAN_UP_PROJECT:
      return { ...state, projInfo: null };
    case actions.CLEAN_UP_EXPERIMENT:
      return { ...state, expInfo: null };
    case actions.GET_PROJECT_CONF_FINISH:
      const { projConf } = action;
      return { ...state, projConf, projConfLoaded: true };
    case actions.CLEAN_UP_CONF:
      return {
        ...state,
        projConf: {
          title: "",
          appendix: "",
          fields: [],
        },
        projConfLoaded: false,
      };
    default:
      return state;
  }
};

export default contentReducer;
