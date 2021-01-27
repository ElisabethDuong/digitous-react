import React from "react";

class Box extends React.Component {
    render() {
        const { icon, color, value, unit } = this.props;
        // if (unit == ! "L") {
        //     <input type="range" min="0" max="50000" value={this.props.steps} onInput="this.setState" />
        //     <input type="range" value={this.props.value} min={this.props.min} max={this.props.max} onInput="this.setState" />
        // }
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ fontSize: 100, color: color }}>
                    {icon}
                </span>
                <p>{value} {unit}</p>

            </div>
            // peut aussi s'écrire comme ça, sans la ligne const { icon, color, value, unit } = this.props;
            // <div className="box col-sm-3 col-6">
            // <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
            //     {this.props.icon}
            // </span>
            // <p>{this.props.value} {this.props.unit}</p>

            // </div>
        )
    };
}

export default Box;