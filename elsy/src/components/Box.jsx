import React from "react";

class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                {this.props.unit !== "L" &&
                    <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange} />
                }

                {/* if (this.props.icon !== "local_drink") {
                    return (<input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange} />)
                } */}
            </div >
        )
    };
}

export default Box;