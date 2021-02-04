import React from "react";

class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            price: 1
        }
    }

    updateProductName = (e) => {
        this.setState({ productName: e.target.value });
        console.log(this.state.productName)
    }
    // pas besoin de bind avec une fonction fléchée car on fait directement appel au parent dans la fonction

    updatePrice = (e) => {
        this.setState({ price: e.target.value });
        console.log(this.state.price)
    }

    click = () => {
        console.log("click add");
        // this.props.addItem({ name: this.state.productName, price: this.state.price })
        this.props.addItem(this.state.productName, this.state.price)
    }

    render() {
        return (
            <div className="container">
                <input type="text" onChange={this.updateProductName} />
                <input
                    type="range"
                    min={1}
                    max={10}
                    onChange={this.updatePrice}
                    value={this.state.price} />
                <p>{this.state.price}€</p>
                <button type="submit" className="btn btn-primary" onClick={this.click}>Add</button>
            </div>
        )
    }
}

export default Add;