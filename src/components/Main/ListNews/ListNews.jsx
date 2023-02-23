import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/Card';

//https://api.nytimes.com/svc/topstories/v2/Health.json?api-key={process.env.REACT_APP_API_KEY_NEWS}

class ListNews extends Component {
   constructor(props) {
    super(props);
    this.state = {
      newsData : this.props.data
    } 
} 


/* getNewsForm = () => {
  console.log(this.props.data);
  this.setState({newsData:[...this.state.newsData, this.props.data]})
} */

printNews = () => {
  console.log(this.state.newsData);
  return <>
  {this.state.newsData.map((news,i) =>  
  <Card data={news} remove={() => this.deleteNew(i)}  key={uuidv4()}/>)}
  </>
}

deleteNew = (i) => {
  const remainingNews = this.state.newsData.filter((news,j)=> j!==i);
  this.setState({newsData:remainingNews})
}





  render() {
    console.log(this.props.data);
    console.log(this.state.newsData);


    return <section>

    {this.printNews()}
    

    </section>;
  }
}

export default ListNews;
