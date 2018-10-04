import React from "react";
import ReactDOM from "react-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DataProvider from "./DataProvider";

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

function Image(props) {
    var blog = props.data[0];
    return (
        <img src={blog.image} height="400" width="500"/>
    );
}

const App = () => (
  <div>
      <p>Welcome to the Breadsite! A website dedicated to the making of bread and its interaction with technology</p>
      <DataProvider endpoint="api/blog/" render={data => <Image data={data}/>}/>
      <DataProvider endpoint="api/temp/" render={data => <Graph data={data}/>}/>
  </div>

);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;