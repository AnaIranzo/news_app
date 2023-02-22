import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/Card';

//https://api.nytimes.com/svc/topstories/v2/Health.json?api-key={process.env.REACT_APP_API_KEY_NEWS}

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData : []
    }
}

getNews = async () => {
  const topic = 'Health';
  const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${process.env.REACT_APP_API_KEY_NEWS}`);
  const data = await response.json();

  const dataResults = data.results;
  const news = dataResults.slice(1,6);//quito la primera porque trae datos de admin o plantilla

  this.setState({newsData: news})
  console.log(news);

}


componentDidMount() { 
  this.getNews();
 }

 componentDidUpdate(prevProps, prevState) { 
  
 } 




  render() {
    
    return <section>

    <Card data={this.state.newsData} key={uuidv4()}/>

    </section>;
  }
}

export default ListNews;
