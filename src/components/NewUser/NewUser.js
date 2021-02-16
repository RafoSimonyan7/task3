import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./NewUser.css";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      firstNameError: "",
      lastNameError: "",
      ageError: "",
    };
  }

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let ageError = "";

    if (this.state.firstname < 3) {
      firstNameError = "";
    }

    if (!this.state.lastName) {
      lastNameError = "last name can not be blank";
    }

    if (isNaN(this.state.age)) {
      ageError = "please write number";
    }

    if (firstNameError || lastNameError || ageError) {
      this.setState({ firstNameError, lastNameError, ageError });
      return false;
    }

    return true;
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.newUser({ ...this.state, id: uuid() });
      this.setState({
        firstName: "",
        lastName: "",
        age: "",
        firstNameError: "",
        lastNameError: "",
        ageError: "",
      });
    }
  };
  render() {
    return (
      <div className="input_main">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="firstname"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.firstNameError}
          </div>
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.lastNameError}
          </div>
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.ageError}
          </div>
          <button>Add New User</button>
        </form>
      </div>
    );
  }
}

export default NewUser;
