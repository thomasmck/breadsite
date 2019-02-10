import React from "react";
import ReactDOM from "react-dom";
import { LineChart, Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DataProvider from "./DataProvider";
import { Sticky, StickyContainer } from "react-sticky";

function Graph(props) {
    const temp_data = props.data;
    const AxisLabel = ({ axisType, x, y, width, height, stroke, children }) => {
        const isVert = axisType === 'yAxis';
        const cx = isVert ? x : x + (width / 2);
        const cy = isVert ? (height / 2) + y : y + height + 10;
        const rot = isVert ? `270 ${cx} ${cy}` : 0;
        return (
            <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle" stroke={stroke}>
            {children}
            </text>
        );
    };
    return (
        <ResponsiveContainer width='60%' height={300}>
            <LineChart cx="50%" cy="50%" outerRadius="80%" data={temp_data}>
                <XAxis dataKey="id" tickLine={false} tick={false} label="Time"/>
                <YAxis label="Temp"/>
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
          <Sticky>
          {({ style }) => <p style={style}>The main feature is of course the bread...</p>}
          </Sticky>
          <DataProvider endpoint="api/blog/" render={data => <Image data={data}/>}/>
      </StickyContainer>
      <StickyContainer>
          <Sticky>
              {({ style }) => <p style={style}>With obligatory crumb shots</p>}
          </Sticky>
          <DataProvider endpoint="api/blog/" render={data => <CrumbImage data={data}/>}/>
      </StickyContainer>
      <p>And temperature control stats</p>
      <DataProvider endpoint="api/temp/" render={data => <Graph data={data}/>}/>
      <StickyContainer>
          <Sticky>
              {({ style }) => <p style={style}>Data provided courtesy of my ghetto proving box</p>}
          </Sticky>
          <img src="/static/frontend/box.jpg" height="auto" width="60%"/>
          <p></p>
      </StickyContainer>
  </div>

);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;