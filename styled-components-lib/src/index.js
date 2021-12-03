import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MyTheme } from "./theme/customTheme";
import  {ThemeProvider}  from "styled-components";

///
ReactDOM.render(
  <ThemeProvider theme={MyTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
