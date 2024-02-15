import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Provider } from "react-redux";
import { persistor, store } from "./services/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/car_app">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalStyle />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
