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

  handleForm = (e) => {
    e.preventDefault();
    /* alert('enviado'+ e.target.title.value) */
    const title = e.target.title.value;
    const abstract = e.target.abstract.value;
    const url = e.target.url.value;
    const author = e.target.author.value;
    const date = e.target.date.value;

    const formNew = {
      title,
      abstract,
      url,
      author,
      date
    }

    //this.setState({...this.state, formNew: {title, abstract, url, author, date}})
    this.setState({newsData:[...this.state.newsData, formNew]})
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
    console.log("****DATOS DEL PASADO****");
    console.log('prevProps: ', prevProps, 'prevState: ', prevState)
    
    console.log("****DATOS DEL PRESENTE****");
    console.log("++PROPS++");
   //
    
    console.log("++STATE++");
    console.log(this.state);
  
    
  } 

  render() {
    return <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form onSubmitForm={this.handleForm}/>}/>
        <Route path="/list" element={<ListNews data={this.state.newsData}/>}/>
      </Routes>
    </main>;
  }
}

export default Main;
