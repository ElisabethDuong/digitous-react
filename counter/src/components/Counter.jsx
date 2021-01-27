import React from "react";

class Counter extends React.Component {
    render() {
        if (this.props.count === 1) {
            console.log(this.props.count);
            return (
                <div className="container-fluid button-box">
                    <button className="minus" onClick={this.props.alertFunction}></button>
                    <h2>{this.props.count}</h2>
                    <button className="plus" onClick={this.props.addFunction}></button>
                </div>
            )
        } else {
            return (
                <div className="container-fluid button-box">
                    <button className="minus" onClick={this.props.removeFunction}></button>
                    <h2>{this.props.count}</h2>
                    <button className="plus" onClick={this.props.addFunction}></button>
                </div>
            )
        };
    };
}

export default Counter;