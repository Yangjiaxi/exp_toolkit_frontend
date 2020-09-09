import { combineEpics, createEpicMiddleware } from "redux-observable";
import { of } from "rxjs";

import { enqueueSnackbar, toggleProgress } from "../actions";
// import { store } from "../../App";

import projEpic from "./proj";

export const customError = (error) => {
  const err = new Error(error.message);
  err.type = error.type;
  return err;
};

// export const checkToken = () => {
//   const { token } = store.getState().user;
//   if (!token) {
//     throw customError({ message: i18nHelper.NO_JWT });
//   }
//   return token;
// };

export const errHandler = ({ message, type }, customAction) => {
  if (customAction) {
    return of(
      toggleProgress(false),
      enqueueSnackbar(message, { variant: type || "error" }),
      customAction,
    );
  }
  return of(
    toggleProgress(false),
    enqueueSnackbar(message, { variant: type || "error" }),
  );
};

// const dependencies = { io, socket$: new BehaviorSubject(), sessionStorage };
const dependencies = { sessionStorage };

export const epicMiddleware = createEpicMiddleware({
  dependencies,
});

export const epics = combineEpics(...projEpic);
