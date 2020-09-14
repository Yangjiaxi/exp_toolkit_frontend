import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";
import { componentReducer } from "./component";

import { ContentReducer } from "./content";

export const rootReducers = (history) =>
  combineReducers({
    component: componentReducer,
    content: ContentReducer,
    router: connectRouter(history),
  });
