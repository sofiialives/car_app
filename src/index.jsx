import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Provider } from "react-redux";
import { store } from "./services/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/car_app">
      <Provider store={store}>
          <GlobalStyle />
          <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
