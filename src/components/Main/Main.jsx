import React, { Component } from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import ListNews from "./ListNews/ListNews";

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      
      newsData: []
        
      
    }
  }

  handleFormData = (formNews) => {
    console.log(formNews);
    //alert('enviado'+ formNews.title) 
    //this.setState({...this.state, formNew: {title, abstract, url, author, date}})
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
        <Route path="/list" element={<ListNews data={this.state.newsData}/>}/>
      </Routes>
    </main>;
  }
}

export default Main;
