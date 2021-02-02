import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeTab: "add",
      items: []
    }
  }

  render() {
    return (
      <div className="">

      </div>
    );
  }
}

export default App;

// la props children ne sera utilisée que pour le bouton

// 03 -
// onClick est une props, il faut faire une remontée de données
// aller voir correction du form, autre méthode

// dans Add on a des state
// dans List on a des props