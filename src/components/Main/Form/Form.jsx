import React, { Component } from "react";

class Form extends Component {

  handleSubmit = (e) => {
    this.props.onSubmitForm(e)
    
    e.target.title.value = ''
    e.target.abstract.value = ''
    e.target.author.value = ''
    e.target.url.value = ''
    e.target.date.value = ''
  }



  render() {
    return <>
    
    <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title"/>
          <label htmlFor="abstract">Abstract:</label>
          <input type="text" id="abstract" name="abstract" />
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" />
          <label htmlFor="url">URL:</label>
          <input type="url" id="url" name="url" />
          <label htmlFor="date">Published date:</label>
          <input type="text" id="date" name="date" />
          <input type="submit" value="Add" />
        </form> 
    
    </>;
  }
}

export default Form;
