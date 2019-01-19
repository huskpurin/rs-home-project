import React from "react";
import ReactDOM from "react-dom";
import PasswordInput from "./PasswordInput";

import "./styles.css";

class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    console.log({
      value: this._passwordRef.getValue(),
      isValid: this._passwordRef.isValid()
    });
  };

  setPasswordRef = ref => {
    this._passwordRef = ref;
  };

  passwordValidation = value => {
    const regex = /^(?!.*^[ ])(?!.*[ ]$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,50}$/g;

    return regex.test(value);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Password:
            <PasswordInput
              name="password"
              ref={this.setPasswordRef}
              validation={this.passwordValidation}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
