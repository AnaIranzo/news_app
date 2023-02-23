import React, { Component } from "react";
import { Link } from "react-router-dom";
import {  userContext} from "../../../context/userContext";

class Nav extends Component {
  render() {
    return <nav>

    <Link to='/'>Home</Link>
    <Link to='/form'>Form</Link>
    <Link to='/list'>List</Link>

    <userContext.Consumer>
        {({ logout, user }) => user ?
          <span>Welcome, {user} <button variant="contained" size="small" onClick={logout}>Logout</button></span>
          : ""
        }
      </userContext.Consumer>

    </nav>;
  }
}

export default Nav;
