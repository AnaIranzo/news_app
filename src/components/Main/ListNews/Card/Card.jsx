import React, { Component } from "react";
import Button from '@mui/material/Button';

class Card extends Component {

  render() {
    return <article className='card'>
      <a href={this.props.data.url}><h2>{this.props.data.title}</h2></a>
      <p>{this.props.data.abstract}</p>
      <p>{this.props.data.byline}</p>
      <p>{this.props.data.published_date}</p>
      <Button onClick={this.props.remove} >Delete</Button>
    </article>;
  }
}

export default Card;


