import "./global.scss";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { getStore } from "./store";
import TasksList from "components/List";

ReactDOM.render(
  <Provider store={getStore()}>
    <TasksList />
  </Provider>,
  document.getElementById("root")
);
