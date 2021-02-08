import React from "react";

class Card extends React.Component {

    constructor(props) {
        super(this.props);
        this.state = {
            item: "./images/item.png",
        };
    }

    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.itemName}.png`)
            .then(response => response.blob())
            .then(response => {
                this.setState(
                    {
                        image: URL.createObjectURL(response)
                    }
                )
            })
    }

    render() {
        return (
            <img
                className="bakeryImage"
                onClick={() => {
                    this.props.onClick(this.props.itemName, this.props.price);
                }}
                src={this.state.image}
                alt="patisserie"
            />
        );
    }
}

export default Card;