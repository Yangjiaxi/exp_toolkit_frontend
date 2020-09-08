import * as actions from "../actions";

const init = {
  recent: null,
  shared: null,
  trash: null,
  my: null,
  shouldUpdateRecent: true,
  shouldUpdateShared: true,
  shouldUpdateTrash: true,
  shouldUpdateMy: true,
};

export const docsReducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_RECENT_DOCS_FINISH:
      const { recent } = action;
      return { ...state, recent, shouldUpdateRecent: false };
    case actions.GET_MY_DOCS_FINISH:
      const { my } = action;
      return { ...state, my, shouldUpdateMy: false };
    case actions.GET_TRASH_DOCS_FINISH:
      const { trash } = action;
      return { ...state, trash, shouldUpdateTrash: false };

    case actions.SHOULD_UPDATE_RECENT:
      return { ...state, shouldUpdateRecent: true };
    case actions.SHOULD_UPDATE_MY:
      return { ...state, shouldUpdateMy: true };
    case actions.SHOULD_UPDATE_TRASH:
      return { ...state, shouldUpdateTrash: true };

    // case actions.LOGOUT:
    //   return init;
    default:
      return state;
  }
};

export default docsReducer;
