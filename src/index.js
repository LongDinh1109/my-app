import React from "react";
import ReactDOM from "react-dom/client";
import { StoreProvider } from "easy-peasy";
import store from "./store/store";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
