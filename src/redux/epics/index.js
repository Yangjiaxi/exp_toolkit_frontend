import { combineEpics, createEpicMiddleware } from "redux-observable";
import { of } from "rxjs";

import { push } from "connected-react-router";

import { enqueueSnackbar, toggleProgress } from "../actions";
import { store } from "../../App";

import contentEpic from "./content";
import userEpic from "./user";

export const customError = (error) => {
  const err = new Error(error.message);
  err.type = error.type;
  return err;
};

export const checkToken = () => {
  const { token } = store.getState().user;
  if (!token) {
    throw customError({ message: "No JWT provided." });
  }
  return token;
};

export const errHandler = ({ message, type }, customAction) => {
  if (customAction) {
    return of(
      push("/404"),
      toggleProgress(false),
      enqueueSnackbar(message, { variant: type || "error" }),
      customAction,
    );
  }
  return of(
    push("/404"),
    toggleProgress(false),
    enqueueSnackbar(message, { variant: type || "error" }),
  );
};

// const dependencies = { io, socket$: new BehaviorSubject(), sessionStorage };
const dependencies = { sessionStorage };

export const epicMiddleware = createEpicMiddleware({
  dependencies,
});

export const epics = combineEpics(...contentEpic, ...userEpic);
