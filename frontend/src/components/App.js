import React from "react";
import ReactDOM from "react-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DataProvider from "./DataProvider";

function Square(props) {
  return (
    <button className="square">{props.value}</button>
  );
}

function Graph(props) {
    const temp_data = props.data;
    return (
        <ResponsiveContainer width='100%' height={300}>
            <LineChart cx="50%" cy="50%" outerRadius="80%" data={temp_data}>
                <XAxis dataKey="id"/>
                <YAxis />
                <Line connectNulls={true} dataKey="temp" stroke="black"/>
            </LineChart>
        </ResponsiveContainer>
    );
}

const App = () => (
  <div>
    <p>THIS IS A TEST.............................................</p>
    <DataProvider endpoint="api/temp/" render={data => <Graph data={data}/>}/>
  </div>

);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;