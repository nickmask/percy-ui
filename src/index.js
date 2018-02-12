import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import "semantic-ui-css/semantic.min.css";

import App from "./App";
import rootReducer from "./reducers/rootReducer";

import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
