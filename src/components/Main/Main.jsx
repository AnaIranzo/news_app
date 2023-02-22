import React, { Component } from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import ListNews from "./ListNews/ListNews";

class Main extends Component {
  render() {
    return <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/list" element={<ListNews/>}/>
      </Routes>
    </main>;
  }
}

export default Main;
