import React, { Component } from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import ListNews from "./ListNews/ListNews";

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      
        formNew: {
          title:'',
          abstract:'',
          url:'',
          author:'',
          date:''
        }
        
      
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

    this.setState({...this.state, formNew: {title, abstract, url, author, date}})
  
  }



  render() {
    return <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form onSubmitForm={this.handleForm}/>}/>
        <Route path="/list" element={<ListNews data={this.state.formNew}/>}/>
      </Routes>
    </main>;
  }
}

export default Main;
