import React from "react";
import ReactDOM from "react-dom";

function Square(props) {
  return (
    <button className="square">{props.value}</button>
  );
}

const App = () => (
  <div>
    <p>THIS IS A TEST</p>
  </div>
  <div>
    <Square value="tom_test"/>
  </div>

);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;