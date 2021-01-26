import React from "react";

class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                <input type="range" min="" max="" value="" onInput="" />
            </div>
        )
    };
}

export default Box;