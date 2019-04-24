/**
 * @Author: harsha
 * @Date:   2019-03-21T12:32:56+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-25T00:51:39+05:30
 */

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import "./index.css";
import App from "./App";
import "babel-polyfill";
import "semantic-ui-css/semantic.min.css";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
