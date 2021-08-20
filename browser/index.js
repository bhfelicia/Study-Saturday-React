import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
render(<Main />, document.getElementById("app"));
console.log("Hello Webpack!");
