import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import decode from "jwt-decode";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import "semantic-ui-css/semantic.min.css";

import App from "./App";
import rootReducer from "./reducers/rootReducer";
import { userLoggedIn } from "./actions/auth";

import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// TODO: Expire the token on the server side as well
if (localStorage.percyJWT) {
  const payload = decode(localStorage.percyJWT);
  const user = {
    token: localStorage.percyJWT,
    email: payload.email,
    confirmed: payload.confirmed
  };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
