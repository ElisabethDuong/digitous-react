import React from "react";

class Button extends React.Component {
    
    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={this.props.onClick}
                    className={this.props.isSelected}>
                    {this.props.children}
                </button>
            </div>
        )
    }
}

export default Button;


// Autre méthode : on déclare la condition if ici et on a juste à l'appeler dans App.js

// class Button extends React.Component {

//     constructor() {
//         super();
//         this.classSelected = this.classSelected.bind(this)
//     }

//     classSelected() {
//         if (this.props.isSelected === true) {
//             return "btn btn-primary"
//         } else {
//             return "btn btn-light"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <button
//                     type="button"
//                     onClick={this.props.onClick}
//                     className={this.classSelected}>
//                     {this.props.children}
//                 </button>
//             </div>
//         )
//     }
// }
// export default Button;
