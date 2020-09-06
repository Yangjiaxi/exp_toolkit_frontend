import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";
import { componentReducer } from "./component";

export const rootReducers = (history) =>
  combineReducers({
    component: componentReducer,
    router: connectRouter(history),
  });
