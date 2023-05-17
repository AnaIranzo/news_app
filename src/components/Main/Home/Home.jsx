import React, { Component } from "react";
import { userContext } from "../../../context/userContext";
import Button from '@mui/material/Button';
import img from '../../../assets/pexels-viktoria-alipatova-2325307.jpg';


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
    return <div className="container-log">
    <h2>Log in</h2>
    <input type="text" ref={this.username} onChange={this.handleChange} placeholder="Name" />
    {this.state.username ? <Button variant="contained" onClick={this.sendName}>Login</Button> : ""}
    <img src={img} alt="" />
    </div>; 
    
    
    
    


  }
}

export default Home;