import React from "react";
import Card from "../Card/Card";

class Pay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.itemCount = this.itemCount.bind(this);
    }

    handleSelect(name, price) {
        console.log(name, price);

        const itemSelected = {
            name: name,
            price: price
        }

        const newBasket = this.state.basket;
        newBasket.push(itemSelected);
        let sum = 0;
        for (let i = 0; i < newBasket.length; i++) {
            sum += newBasket[i].price
        }

        this.setState({
            basket: newBasket,
            total: sum,
            totalEcoTax: newBasket.length * 0.03,
            totalTVA: (sum * 20) / 100,
            totalTTC: sum + newBasket.length * 0.03 + (sum * 20) / 100
            // on ne peut pas mettre totalTTC: sum + totalEcoTax + totalTVA car ils ne sont pas encore définis
        });
    }

    itemCount(itemName) {
        return this.state.basket.filter((item) => {
            return item.name === itemName;
        })
    }

    render() {
        return (
            <div>
                {this.props.items.map((item) => {
                    const itemCount = this.itemCount(item.name).length;
                    if (itemCount > 0) {
                        return <p>{item.name} x {itemCount}</p>
                    } else {
                        return null;
                    }
                }).filter(item => item !== null)}
                <p>Total: {this.state.total}</p>
                <p>Eco tax: {this.state.totalEcoTax}</p>
                <p>TVA: {this.state.totalTVA}</p>
                <p>TTC: {this.state.totalTTC.toFixed(2)}</p>
                {this.props.items.map((item) => {
                    return (
                        <Card itemName={item.name} price={item.price} onClick={this.handleSelect}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Pay;