import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Cards from './Cards/Cards';


class ListNews extends Component {


printNews = () => {

  return <>
  
  {this.props.data.map((news,i) =>  
  <Cards data={news} remove={() => this.props.delete(i)}  key={uuidv4()} />)}
  </>
}

  render() {
    return <>
    <h2>NYT News</h2>
    <section className="container-news">

    {this.printNews()}
    

    </section>;
    </>
  }
}

export default ListNews;
