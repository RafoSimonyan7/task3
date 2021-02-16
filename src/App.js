import React, { Component } from "react";
import UserList from "./components/UserList/UserList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="content-wrap">
          <UserList />
        </div>
      </div>
    );
  }
}

export default App;
