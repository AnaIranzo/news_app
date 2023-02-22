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
getNewsForm = () => {
  
  this.setState({newsData:[...this.state.newsData, this.props.data]})
}

printNews = () => {
  return <>
  {this.state.newsData.map((news,i) =>  
  <Card data={news} remove={() => this.deleteNew(i)}  key={uuidv4()}/>)}
  </>
}

deleteNew = (i) => {
  const remainingNews = this.state.newsData.filter((news,j)=> j!==i);
  this.setState({newsData:remainingNews})
}



componentDidMount() { 
  this.getNews();
}

componentDidUpdate(prevProps, prevState) { 
  console.log("****DATOS DEL PASADO****");
  console.log('prevProps: ', prevProps, 'prevState: ', prevState)
  
  console.log("****DATOS DEL PRESENTE****");
  console.log("++PROPS++");
  console.log(this.props);
  
  console.log("++STATE++");
  console.log(this.state);

   if (prevProps !== this.props) {
    this.getNewsForm();
  } 
  
} 




  render() {
    console.log(this.props.data.title);
    return <section>

    {this.printNews()}

    </section>;
  }
}

export default ListNews;
