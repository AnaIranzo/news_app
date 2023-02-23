import React, { Component } from "react";
import { userContext } from "../../../context/userContext";

class Home extends Component {

  static contextType = userContext; 

  constructor(props) {
    super(props)
  
    this.username = React.createRef();

    this.state = {
      username:""
    }

  }

  sendName = () => {
    const {login} = this.context; 
    
    login(this.state.username);
    
    
    this.username.current.value = "";
    this.setState({ username: "" });
  }
  handleChange = () => {
    const username = this.username.current.value; 
    this.setState({ username });
  }

  render() {
    return <div>
    

      <div>
          <h1>Log in</h1>
          <input type="text" ref={this.username} onChange={this.handleChange} placeholder="Name" />
          {this.state.username ? <button variant="contained" onClick={this.sendName}>Login</button> : ""}
        </div>
    </div>;
  }
}

export default Home;