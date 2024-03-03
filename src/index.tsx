import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

//axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.baseURL =
  "https://bbdhxbid9h.ap-southeast-1.awsapprunner.com/api/";
axios.defaults.withCredentials = true;

const store = configureStore();

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
