import React, { Component } from "react";

class Card extends Component {

  constructor(props){
    super(props)
  }
  render() {
    return <>
    
    {this.props.data.map(news => <>
    
      <a href={news.url}><h2>{news.title}</h2></a>
      <p>{news.abstract}</p>
      <p>{news.byline}</p>
      <p>{news.published_date}</p>
    
    </>)}
    
    
    </>;
  }
}

export default Card;
