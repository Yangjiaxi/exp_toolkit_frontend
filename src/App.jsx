import React, { memo, useEffect } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import { epicMiddleware, epics } from "./redux/epics";
import { rootReducers } from "./redux/reducers";
import Index from "./pages/Index";

export const history = createBrowserHistory();

const middleware = [epicMiddleware];

export const configureStore = () => {
  const store = createStore(
    rootReducers(history), // root reducer with router state
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        ...middleware,
      ),
    ),
  );
  return store;
};

export const store = configureStore();

epicMiddleware.run(epics);

const App = memo(() => {
  useEffect(() => {
    import("./utils").then(({ logger }) => logger());
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Index />
      </ConnectedRouter>
    </Provider>
  );
});

export default App;
