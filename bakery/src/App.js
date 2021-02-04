import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import "./App.css";

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
    this.checkTab = this.checkTab.bind(this);
    this.add = this.add.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  selectAdd(e) {
    this.setState({
      activeTab: "add"
    })
  }

  selectList(e) {
    this.setState({
      activeTab: "list"
    })
  }

  selectPay(e) {
    this.setState({
      activeTab: "pay"
    })
  }

  checkTab(tabToCheck) {
    if (this.state.activeTab === tabToCheck) {
      return true
    } else {
      return false
    }
  }

  add(name, price) {
    console.log("[APP] name", name);
    console.log("[APP] price", price);
    const obj = {
      name: name,
      price: price
    }
    const newList = this.state.items;
    newList.push(obj)

    this.setState({
      items: newList
    })
  }

  renderContent() {
    if (this.state.activeTab === "add") {
      return <Add addItem={this.add}></Add>
    } else if (this.state.activeTab === "list") {
      return <List listItems={this.state.items}></List>
    } else if (this.state.activeTab === "pay") {
      return <Pay></Pay>
    }
  }

  // Méthode avec switch

  // renderContent() {
  //   switch (this.state.activeTab) {
  //     case "add":
  //       <Add></Add>;
  //       break;
  //     case "list":
  //       <List></List>;
  //       break;
  //     case "pay":
  //       <Pay></Pay>;
  //       break;
  //     default:
  //       return
  //   }
  // }

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


// <Button onClick={this.selectAdd} isSelected={this.checkTab}>Add<Button>
// <Button onClick={this.selectList} isSelected={this.checkTab}>List</Button>
// <Button onClick={this.selectPay} isSelected={this.checkTab}>Pay</Button>


// la props children ne sera utilisée que pour le bouton

// 03 -
// onClick est une props, il faut faire une remontée de données
// aller voir correction du form, autre méthode

// dans Add on a des state
// dans List on a des props

// 06 -
// 