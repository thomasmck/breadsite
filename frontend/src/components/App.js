import React from "react";
import ReactDOM from "react-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function Square(props) {
  return (
    <button className="square">{props.value}</button>
  );
}

function Graph() {
    const temp_data = [{"id":1,"rec_date":"2018-01-19T17:55:52Z","temp":20.1},
        {"id":2,"rec_date":"2018-01-19T17:56:01Z","temp":20.0},
        {"id":3,"rec_date":"2018-01-19T17:56:09Z","temp":20.5},
        {"id":4,"rec_date":"2018-01-19T17:56:19Z","temp":20.0},
        {"id":5,"rec_date":"2018-01-19T17:56:34Z","temp":21.0},
        {"id":6,"rec_date":"2018-01-19T17:56:53Z","temp":20.3},
        {"id":7,"rec_date":"2018-01-19T17:57:02Z","temp":19.5},
        {"id":8,"rec_date":"2018-01-19T17:57:11Z","temp":19.0},
        {"id":9,"rec_date":"2018-01-19T17:57:23Z","temp":19.4},
        {"id":10,"rec_date":"2018-01-19T17:57:38Z","temp":20.7}];
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
    <p>THIS IS A TEST</p>
    <Square value="tom_test"/>
    <Graph/>
  </div>

);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;