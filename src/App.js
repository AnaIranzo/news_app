

import { useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { userContext } from "./context/userContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#061A40"
    },
    secondary: {
      main: "#003559"
    },
    primaryLight: {
      main: "#006DAA",
      contrastText: "#B9D6F2"
    }
  }
});

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
     <ThemeProvider theme={theme}>
     
    
    <BrowserRouter>
    <userContext.Provider value={data}>
    <Header />
    <Main/>
    </userContext.Provider>
    </BrowserRouter>
    <Footer/>
    </ThemeProvider>
    </>
  );
}

export default App;
