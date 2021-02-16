import React, { Component } from "react";
import "./User.css"

class User extends Component {
    handleDelete = () => {
        this.props.deleteUser(this.props.id)
    }
  render() {
    return (
      <div className="user_info">
        <li>Name: {this.props.firstName}</li>
        <li>Last Name: {this.props.lastName}</li>
        <li>Age: {this.props.age}</li>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default User;
