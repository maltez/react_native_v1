import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const store =
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function"
    ? createStore(
        rootReducer,
        compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      )
    : createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
