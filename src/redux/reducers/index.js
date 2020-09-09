import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";
import { componentReducer } from "./component";

import { ProjReducer } from "./proj";

export const rootReducers = (history) =>
  combineReducers({
    component: componentReducer,
    proj: ProjReducer,
    router: connectRouter(history),
  });
