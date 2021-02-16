import React, { Component } from "react";
import User from "../User/User";
import NewUser from "../NewUser/NewUser";
import "./UserList.css";

class UserList extends Component {
  state = {
    users: [],
  };

  createNewUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser],
    });
  };
  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    });
  };
  render() {
    const user = this.state.users.map((user) => (
      <User
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
        id={user.id}
        deleteUser={this.deleteUser}
      />
    ));
    return (
      <div className="userList_wrapper">
        <div className="list_header">
          <h1>Users</h1>
        </div>
        <NewUser newUser={this.createNewUser} />
        <ul>{user}</ul>
      </div>
    );
  }
}

export default UserList;
