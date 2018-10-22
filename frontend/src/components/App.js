import React from "react";
import ReactDOM from "react-dom";
import { LineChart, Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DataProvider from "./DataProvider";
import { Sticky, StickyContainer } from "react-sticky";

function Graph(props) {
    const temp_data = props.data;
    return (
        <ResponsiveContainer width='60%' height={300}>
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
        <img src={image_location} height="auto" width="60%"/>
    );
}

function CrumbImage(props) {
    var blog = props.data[0].crumb_image;
    var image_id = blog.substring(blog.indexOf('.jpg') - 7);
    var image_location = "/static/blogs/" + image_id;
    return (
        <img src={image_location} height="auto" width="60%"/>
    );
}

const App = () => (
  <div>
      <StickyContainer>
          <h2>Welcome to the 🍞site!</h2>
          <h4>A website dedicated to the making of bread and its interaction with technology</h4>
          <Sticky style={"background-color:white;"}>
          {({ style }) => <p style={style}>The main feature is of course the bread</p>}
          </Sticky>
          <DataProvider endpoint="api/blog/" render={data => <Image data={data}/>}/>
      </StickyContainer>
      <StickyContainer>
          <Sticky style={"background-color:white;"}>
              {({ style }) => <p style={style}>With obligatory crumb shots</p>}
          </Sticky>
          <DataProvider endpoint="api/blog/" render={data => <CrumbImage data={data}/>}/>
          <p>but is is also a place to track temperature control stats..</p>
          <DataProvider endpoint="api/temp/" render={data => <Graph data={data}/>}/>
          <p>Data provided courtesy of my ghetto proving box</p>
      </StickyContainer>
  </div>

);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;