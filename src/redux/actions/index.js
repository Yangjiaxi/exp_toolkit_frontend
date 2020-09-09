export const TOGGLE_PROGRESS = "TOGGLE_PROGRESS";
export const toggleProgress = (on = false) => ({
  type: TOGGLE_PROGRESS,
  on,
});

export const ENQUEUE_SNACKBAR = "ENQUEUE_SNACKBAR";
export const enqueueSnackbar = (message, options) => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    key: new Date().getTime() + Math.random(),
    message,
    options,
  },
});

export const REMOVE_SNACKBAR = "REMOVE_SNACKBAR";
export const removeSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  key,
});

export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const closeSnackbar = (key) => ({
  type: CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const CHANGE_THEME_MODE = "CHANGE_THEME_MODE";
export const changeThemeMode = () => ({
  type: CHANGE_THEME_MODE,
});

export const CHANGE_THEME_COLOR = "CHANGE_THEME_COLOR";
export const changeThemeColor = (color) => ({
  type: CHANGE_THEME_COLOR,
  color,
});

export const CHANGE_BROWSER_PATH = "CHANGE_BROWSER_PATH";
export const changeBrowserPath = (pageName) => ({
  type: CHANGE_BROWSER_PATH,
  pageName,
});

export const TOGGLE_SLIDER = "TOGGLE_SLIDER";
export const toggleSlider = (target = null) => ({
  type: TOGGLE_SLIDER,
  target,
});

export const DETECT_WIDTH = "DETECT_WIDTH";
export const detectWidth = (isMobile) => ({
  type: DETECT_WIDTH,
  isMobile,
});

export const SHOULD_UPDATE_RECENT = "SHOULD_UPDATE_RECENT";
export const shouldUpdateRecent = () => ({
  type: SHOULD_UPDATE_RECENT,
});

export const SHOULD_UPDATE_MY = "SHOULD_UPDATE_MY";
export const shouldUpdateMy = () => ({
  type: SHOULD_UPDATE_MY,
});

export const SHOULD_UPDATE_TRASH = "SHOULD_UPDATE_TRASH";
export const shouldUpdateTrash = () => ({
  type: SHOULD_UPDATE_TRASH,
});

export const GET_PROJECT_BEGIN = "GET_PROJECT_BEGIN";
export const getProjBegin = () => ({
  type: GET_PROJECT_BEGIN,
});

export const GET_PROJECT_FINISH = "GET_PROJECT_FINISH";
export const getProjFinish = (projs) => ({
  type: GET_PROJECT_FINISH,
  projs,
});

export const DELELE_PROJECT_BEGIN = "DELETE_PROJECT_BEGIN";
export const deleteProjBegin = (id) => ({
  type: DELELE_PROJECT_BEGIN,
  id,
});

export const DELELE_PROJECT_FINISH = "DELELE_PROJECT_FINISH";
export const deleteProjFinish = () => ({
  type: DELELE_PROJECT_FINISH,
});
