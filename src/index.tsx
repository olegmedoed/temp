import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import "./index.css";
import App from "./App";
import reducer from "./state/reducers/index";

const store = createStore(
  reducer,
  composeWithDevTools({ maxAge: 20 })(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root") as HTMLElement);
