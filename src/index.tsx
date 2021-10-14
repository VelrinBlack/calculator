import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import Calculator from "components/organisms/Calculator/Calculator";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;

    & body {
      background-image: linear-gradient(to top, #0069c0 0%, #6ec6ff 100%);
    }
  }

  
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Calculator />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
