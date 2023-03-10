import React, { Component } from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import ListNews from "./ListNews/ListNews";


//https://api.nytimes.com/svc/topstories/v2/Health.json?api-key={process.env.REACT_APP_API_KEY_NEWS}

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      
      newsData: []
        
      
    }
  }

  handleFormData = (formNews) => {

    this.setState({newsData:[...this.state.newsData, formNews]})
  }

  getNews = async () => {
    const topic = 'Health';
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${process.env.REACT_APP_API_KEY_NEWS}`);
    const data = await response.json();
  
    const dataResults = data.results;
    const news = dataResults.slice(1,6);//quito la primera porque trae datos de admin o plantilla
  
    this.setState({newsData: news});
  
  }


  deleteNews = (i) => {
    const remainingNews = this.state.newsData.filter((news,j)=> j!==i);
    this.setState({newsData:remainingNews})
  }

  componentDidMount() { 
    this.getNews();
    
  }

  componentDidUpdate(prevProps, prevState) { 

  } 

  
  
  render() {
    return <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form onSubmitForm={this.handleFormData}/>}/>
        <Route path="/list" element={<ListNews data={this.state.newsData} delete={this.deleteNews}/>}/>
      </Routes>
    </main>;
  }
}

export default Main;
