
import './App.css';
import { useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { userContext } from "./context/userContext";

function App() {
  const [user, setUser] = useState(""); 

  const login = (name) => setUser(name); 
  const logout = () => setUser(""); 

  const data = {
    user,
    login,
    logout
  }

  return (
    <>
    <BrowserRouter>
    <userContext.Provider value={data}>
    <Header />
    <Main/>
    </userContext.Provider>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
