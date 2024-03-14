import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import Store from "./components/Redux/Store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
