import React from "react";

class Add extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            productName: "",
            price: 1
        }
    }

    updateProductName = (e) => {
        this.setState({productName: e.target.value});
        console.log(this.state.productName)
    }

    updatePrice = (e) => {
        this.setState({price: e.target.value});
        console.log(this.state.price)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateProductName} />
                <input 
                    type="range" 
                    min={1} 
                    max={10} 
                    onChange={this.updatePrice} 
                    value={this.state.p} />
                <p>{this.state.price}€</p>
                <button type="submit" className="btn btn-primary" onClick={}>Add</button>
            </div>
        )
    }
}

export default Add;