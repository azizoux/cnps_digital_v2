import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./UserContext";
import { store } from "./store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </UserProvider>
);
