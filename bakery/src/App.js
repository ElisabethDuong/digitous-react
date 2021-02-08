import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "./components/Button/Button";
import Add from "./components/Add/Add";
import List from "./components/List/List";
import Pay from "./components/Pay/Pay";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: []
    }
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.add = this.add.bind(this);
  }

  selectAdd(e) {
    console.log(e);
    this.setState({
      activeTab: "add",
    });
  }

  selectList(e) {
    this.setState({
      activeTab: "list",
    });
  }

  selectPay(e) {
    this.setState({
      activeTab: "pay",
    });
  }

  add(name, price) {
    const obj = {
      name: name,
      price: parseInt(price),
    };
    const newList = this.state.items;
    newList.push(obj);
    this.setState({
      items: newList,
    });
  }

  renderContent = () => {
    switch (this.state.activeTab) {
      case "add":
        return <Add addItem={this.add}></Add>;
      case "list":
        return <List listItems={this.state.items}></List>;
      case "pay":
        return <Pay items={this.state.items}></Pay>;
    }
  };

  // renderContent() => {
  //   if (this.state.activeTab === "add") {
  //     return <Add addItem={this.add}></Add>
  //   } else if (this.state.activeTab === "list") {
  //     return <List listItems={this.state.items}></List>
  //   } else if (this.state.activeTab === "pay") {
  //     return <Pay items={this.state.items}></Pay>
  //   }
  // };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Button onClick={this.selectAdd} isSelected={(this.state.activeTab === "add") ? "form-control btn btn-primary" : "form-control btn btn-light"}>Add</Button>
          <Button onClick={this.selectList} isSelected={(this.state.activeTab === "list") ? "form-control btn btn-primary" : "form-control btn btn-light"}>List</Button>
          <Button onClick={this.selectPay} isSelected={(this.state.activeTab === "pay") ? "form-control btn btn-primary" : "form-control btn btn-light"}>Pay</Button>
        </div>
        {this.renderContent()}
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

// 06 -
// 