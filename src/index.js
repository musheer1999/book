import React from "react";
// import ReactDOMServer from 'react-dom/server';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import C from "./resource/values";

axios.defaults.baseURL = C.SERVER_CALL;
ReactDOM.render(
  <React.StrictMode>
   <App />
   
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
