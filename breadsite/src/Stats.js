import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from 'victory';
import axios from 'axios';

class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
      }

    componentDidMount() {
        axios.get('http://localhost:8000/temperature/?format=json')
            .then(res =>
                this.setState({data: res.data.results})
            )
    }

    updategraph() {
      axios.get('http://localhost:8000/temperature/?format=json')
            .then(res =>
                this.setState({data: res.data.results})
            )
    }

    render() {
        return (
            <div className="Graph">
              <h1>Latest temperature control stats</h1>
              <div className="graph-image">
                <VictoryChart
                  domainPadding={0}
                  theme={VictoryTheme.material}
                  padding={{top: 10, left: 30, bottom: 30, right: 30}}
                  height={200}
                >
                  <VictoryLine
                    data={this.state.data}
                    x={"rec_date"}
                    y={"temp"}
                    scale={{ x: "time" }}
                  />
                  <VictoryAxis
                    // x
                    tickFormat = {(tick) => {
                      if (typeof tick == "number") {
                        console.log("tick: " + tick)
                        return tick
                      }
                      else {
                        const time = tick.toString().split("T")[1].split("Z")[0];
                        console.log("Time: " + time + ", tick: " + tick);
                        return time
                      }
                      }}
                      style={{
                        tickLabels: {fontSize: 4}
                      }}
                  />
                  <VictoryAxis
                    // y
                    dependentAxis
                    tickFormat = {(tick) => {
                      if (typeof tick == "number") {
                        console.log("tick: " + tick)
                        return tick
                      }
                      else {
                        const time = tick.toString().split("T")[1].split("Z")[0];
                        console.log("Time: " + time + ", tick: " + tick);
                        return time
                      }
                      }}
                      style={{
                        tickLabels: {fontSize: 4}
                      }}
                  />
                </VictoryChart>
              </div>
            </div>
        )
    }

}

export default Stats;