import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/Card';


class ListNews extends Component {


printNews = () => {

  return <>
  {this.props.data.map((news,i) =>  
  <Card data={news} remove={() => this.props.delete(i)}  key={uuidv4()} />)}
  </>
}

  render() {
    return <section className="container-news">

    {this.printNews()}
    

    </section>;
  }
}

export default ListNews;
