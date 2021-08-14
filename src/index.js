import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import App from "./app";
import { GameContextProvider } from "./state/gameContext";

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
