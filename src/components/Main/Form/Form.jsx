import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import TextField from '@mui/material/TextField';

class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      button: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const abstract = e.target.abstract.value;
    const url = e.target.url.value;
    const byline = e.target.author.value;
    const published_date = e.target.date.value;

    const formNews = {
      title,
      abstract,
      url,
      byline,
      published_date
    }
    
    e.target.title.value = ''
    e.target.abstract.value = ''
    e.target.author.value = ''
    e.target.url.value = ''
    e.target.date.value = ''
    
    this.props.onSubmitForm(formNews)
    
  }



  render() {
    return <>
      <h2>Publish your news</h2>
      <form onSubmit={this.handleSubmit} className='container-form'>
        
          <TextField type="text" id="title" name="title" label="Name" required/>
          
          <TextField type="text" id="abstract" name="abstract" label="Abstract" />
          
          <TextField type="text" id="author" name="author" label="Author" required/>

          <TextField type="url" id="url" name="url" label="Url" required/>
          
          <TextField type="text" id="date" name="date" label="Published date" />
          <input type="submit" value="Add" onClick={()=>this.setState({button:true})} id='add-btn'/>
        </form>  
    
    
    {this.state.button?<Navigate to='/list'/>:''}
    </>;
  }
}

export default Form;
