import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import ThemeContext from "./contexts/ThemeContext/context";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { themes } from "./styles/helpers/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={themes}>
      <ThemeContext>
        <App />
      </ThemeContext>
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
