import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailValid: false,
      passwordValid: false,
      email: "",
      password: "",
      rememberMe: false,
      submitClick: false
    }
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChangeEmail(event) {
    const newEmail = event.target.value;
    const reg = /^\S+@\S+\.\S+$/g;
    const isEmail = reg.test(newEmail)

    this.setState({
      email: newEmail,
      emailValid: isEmail
    })
  }

  onChangePassword(event) {
    let newPasswordValid = false;
    if (event.target.value.length >= 6) {
      newPasswordValid = true;
    } else {
      newPasswordValid = false
    }

    this.setState({
      password: event.target.value,
      passwordValid: newPasswordValid
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitClick: true
    })
  }

  render() {

    if (this.state.submitClick === true) {
      return (<div className="submit-msg col-10-sm col-8-lg ">Congratulations! Form has been submitted</div>)
    }

    return (
      <form className="container-fluid needs-validation col-8">
        <h1>Login</h1>
        <div className="input-block">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email..."
            className={this.state.emailValid ? "form-control is-valid" : "form-control is-invalid"}
            onChange={this.onChangeEmail}
          />
        </div>
        <div className="input-block">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password..."
            className={this.state.passwordValid ? "form-control is-valid" : "form-control is-invalid"}
            onChange={this.onChangePassword}
          />
        </div>
        <div className="input-block form-check">
          <input
            type="checkbox"
            id="check"
            className="form-check-input"
          />
          <label htmlFor="check" className="form-check-label">Remember me</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.state.emailValid || !this.state.passwordValid}
          onClick={this.handleSubmit}>Submit
        </button>
      </form>
    );
  }
}

export default App;
