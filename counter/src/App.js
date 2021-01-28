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

  // On peut bind directement dans les button mais ça ne marche que si la fonction n'est utilisée qu'une seule fois !
  // Autrement il vaut mieux les bind dans le constructor. Là elles pourront être réutilisées dans toute l'application.

  decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  // Méthode avec fonction fléchée
  // decrementCount = () => {
  //   this.setState({ count: this.state.count - 1 })
  // }

  // Autre méthode pour que le counter soit toujours > 0
  // decrementCount = () => {
  //   let result = this.state.count;
  //   if (result === 0) {
  //     return;
  //   } else {
  //     result--;
  //     this.setState({ count: result })
  //   }
  // }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  generateAlert = () => {
    alert("You can't do that! Come to the dark side, we have cookies!");
  }

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