import React from "react";
import { render } from "react-dom";
import App from "./componentes/App";
import "./index.css";
//  with  webpack its not neccesary use React.createElement()....
render(<App />, document.getElementById("app"));
