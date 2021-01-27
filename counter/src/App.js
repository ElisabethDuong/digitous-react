import React from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.decrementCount = this.decrementCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.generateAlert = this.generateAlert.bind(this);
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  generateAlert = () => {
    alert("You can't do that! Come to the dark side, we have cookies!");
  };

  render() {
    return (
      <div className="container-fluid counter-box">
        <h1>How many cookies do you want?</h1>
        <Counter count={this.state.count} addFunction={this.incrementCount} removeFunction={this.decrementCount} alertFunction={this.generateAlert} />
      </div>
    );
  }

}

export default App;