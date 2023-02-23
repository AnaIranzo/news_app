import React, { Component } from "react";

class Form extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const abstract = e.target.abstract.value;
    const url = e.target.url.value;
    const author = e.target.author.value;
    const date = e.target.date.value;

    const formNews = {
      title,
      abstract,
      url,
      author,
      date
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
