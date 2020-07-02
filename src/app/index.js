import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import translationMessages from "./i18n/";
import LanguageProvider from "./LanguageProvider";

import "./index.css";
const MOUNT_NODE = document.getElementById("app");
//  with  webpack its not neccesary use React.createElement()....
render(
  <LanguageProvider locale="es" messages={translationMessages}>
    <App />
  </LanguageProvider>,
  MOUNT_NODE
);
