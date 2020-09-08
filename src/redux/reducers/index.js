import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";
import { componentReducer } from "./component";

import { docsReducer } from "./docs";

export const rootReducers = (history) =>
  combineReducers({
    component: componentReducer,
    docs: docsReducer,
    router: connectRouter(history),
  });
