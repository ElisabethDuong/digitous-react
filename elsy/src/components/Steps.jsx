import React from "react";

class Steps extends React.Component {
    name = "John";

    render() {
        return (
            <div className="box col-sm-3 col-6">
                <h1>Hello {this.name} !</h1>
                <p> Welcome to my amazing blog</p>
            </div>
        )
    };
}

export default Steps;