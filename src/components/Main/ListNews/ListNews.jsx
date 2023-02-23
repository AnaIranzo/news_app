import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/Card';

//https://api.nytimes.com/svc/topstories/v2/Health.json?api-key={process.env.REACT_APP_API_KEY_NEWS}

class ListNews extends Component {
  


/* getNewsForm = () => {
  console.log(this.props.data);
  this.setState({newsData:[...this.state.newsData, this.props.data]})
} */

printNews = () => {
  console.log(this.props.data);
  return <>
  {this.props.data.map((news,i) =>  
  <Card data={news} remove={() => this.props.delete(i)}  key={uuidv4()}/>)}
  </>
}







  render() {
    console.log(this.props.data);


    return <section>

    {this.printNews()}
    

    </section>;
  }
}

export default ListNews;
