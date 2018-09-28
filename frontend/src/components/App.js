import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <p>THIS IS A TEST</p>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;