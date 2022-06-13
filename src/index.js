import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App";

// styles
import "./styles/index.scss";

// state provider
import StateProvider from "./contexts/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
