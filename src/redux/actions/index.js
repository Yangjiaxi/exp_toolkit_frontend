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

export const GET_RECENT_DOCS_BEGIN = "GET_RECENT_DOCS_BEGIN";
export const getRecentDocsBegin = () => ({
  type: GET_RECENT_DOCS_BEGIN,
});

export const GET_RECENT_DOCS_FINISH = "GET_RECENT_DOCS_FINISH";
export const getRecentDocsFinish = (recent) => ({
  type: GET_RECENT_DOCS_FINISH,
  recent,
});

export const GET_MY_DOCS_FINISH = "GET_MY_DOCS_FINISH";
export const getMyDocsFinish = (my) => ({
  type: GET_MY_DOCS_FINISH,
  my,
});

export const GET_TRASH_DOCS_FINISH = "GET_TRASH_DOCS_FINISH";
export const getTrashDocsFinish = (trash) => ({
  type: GET_TRASH_DOCS_FINISH,
  trash,
});

export const CHECKOUT_CONTENT_START = "CHECKOUT_CONTENT_START";
export const checkoutContentStart = (id) => ({
  type: CHECKOUT_CONTENT_START,
  id,
});
