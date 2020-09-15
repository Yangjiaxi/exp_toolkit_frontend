import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";
import { componentReducer } from "./component";
import { contentReducer } from "./content";
import { userReducer } from "./user";

export const rootReducers = (history) =>
  combineReducers({
    component: componentReducer,
    content: contentReducer,
    user: userReducer,
    router: connectRouter(history),
  });
