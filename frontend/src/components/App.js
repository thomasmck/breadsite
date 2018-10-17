import React from "react";
import ReactDOM from "react-dom";
import { LineChart, Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DataProvider from "./DataProvider";
import { Sticky, StickyContainer } from "react-sticky";

function Graph(props) {
    const temp_data = props.data;
    return (
        <ResponsiveContainer width='50%' height={300}>
            <LineChart cx="50%" cy="50%" outerRadius="80%" data={temp_data}>
                <XAxis dataKey="id" tickLine={false} tick={false}/>
                <YAxis/>
                <Line name="Temperature, °C" connectNulls={true} dataKey="temp" stroke="black"/>
                <Legend verticalAlign="top" height={36}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

function Image(props) {
    var blog = props.data[0].image;
    var image_id = blog.substring(blog.indexOf('.jpg') - 1);
    var image_location = "/static/blogs/" + image_id;
    return (
        <StickyContainer>
            <Sticky>{() => <img src={image_location} height="400" width="500"/>}</Sticky>
        </StickyContainer>
    );
}

function CrumbImage(props) {
    var blog = props.data[0].crumb_image;
    var image_id = blog.substring(blog.indexOf('.jpg') - 7);
    var image_location = "/static/blogs/" + image_id;
    return (
        <img src={image_location} height="400" width="500"/>
    );
}

const App = () => (
  <div>
      <p>Welcome to the Breadsite! A website dedicated to the making of bread and its interaction with technology</p>
      <p>The main feature is of course the bread</p>
      <DataProvider endpoint="api/blog/" render={data => <Image data={data}/>}/>
      <p>(Obligatory crumb shot)</p>
      <DataProvider endpoint="api/blog/" render={data => <CrumbImage data={data}/>}/>
      <p>but is is also a place to track temperature control stats..</p>
      <DataProvider endpoint="api/temp/" render={data => <Graph data={data}/>}/>
      <p>Data provided courtesy of my ghetto proving box</p>
      <img></img>
  </div>

);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;