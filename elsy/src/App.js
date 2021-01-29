import React from "react";
import Box from "./components/Box";
import "./styles/global.css";
import "./App.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  water = {
    icon: "local_drink",
    color: "#3A85FF",
    value: 1.5,
    unit: "L"
  };

  steps = {
    icon: "directions_walk",
    color: "black",
    value: 3000,
    unit: "steps",
    min: stepsMin,
    max: stepsMax,
  };

  heart = {
    icon: "favorite",
    color: "red",
    value: 120,
    unit: "bpm",
    min: heartMin,
    max: heartMax
  };

  temperature = {
    icon: "wb_sunny",
    color: "yellow",
    value: -10,
    unit: "°C",
    min: tempMin,
    max: tempMax
  };

  constructor(props) {
    super(props);
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
      onHeartChange: (value) => {
        this.setState({ heart: value.target.value });
        // définit la nouvelle valeur en fonction du curseur
        this.calculateWater()
      },
      onStepsChange: (value) => {
        this.setState({ steps: value.target.value });
        this.calculateWater()
      },
      onTemperatureChange: (value) => {
        this.setState({ temperature: value.target.value });
        this.calculateWater()
      }
    };
  }

  calculateWater = () => {
    let totalWater = 1.5;
    let tempWater = 0;
    let heartWater = 0;
    let stepsWater = 0;
    let totalWaterTHS = 0;
    // quantité d'eau supplémentaire en fonction de temperature, heart, steps

    if (this.state.temperature > 20) {
      tempWater = (this.state.temperature - 20) * 0.02;
      totalWaterTHS += tempWater;
    }
    if (this.state.heart > 120) {
      heartWater = (this.state.heart - 120) * 0.0008;
      totalWaterTHS += heartWater;
    }
    if (this.state.steps > 10000) {
      stepsWater = (this.state.steps - 10000) * 0.00002;
      totalWaterTHS += stepsWater;
    }
    totalWater += totalWaterTHS;
    this.setState({ water: totalWater.toFixed(2) });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/* Water */}
          <Box {...this.water}
            value={this.state.water} />
          {/* on utilise this.state.water car on veut afficher la valeur recalculée de water qui se trouve dans le state */}

          {/* Steps */}
          <Box {...this.steps}
            onChange={this.state.onStepsChange}
            value={this.state.steps} />

          {/* Heart */}
          <Box {...this.heart}
            onChange={this.state.onHeartChange}
            value={this.state.heart} />

          {/* Temperature */}
          <Box {...this.temperature}
            onChange={this.state.onTemperatureChange}
            value={this.state.temperature} />

        </div>
      </div>
    );
  }
}

export default App;