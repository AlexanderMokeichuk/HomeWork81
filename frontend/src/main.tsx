import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {CssBaseline} from "@mui/material";

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline>
        <App/>
      </CssBaseline>
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(app);
