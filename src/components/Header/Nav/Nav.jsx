import React, { Component } from "react";
import { Link } from "react-router-dom";
import {  userContext} from "../../../context/userContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { v4 as uuidv4 } from 'uuid';


class Nav extends Component {



 
  render() {
    return (
    
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Button
                key={uuidv4()}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to='/'>Home</Link></Button>
               <Button
                key={''}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to='/form'>Form</Link></Button>
               <Button
                key={uuidv4()}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to='/list'>List</Link> </Button>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
                key={uuidv4()}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to='/'>Home</Link></Button>
               <Button
                key={''}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to='/form'>Form</Link></Button>
               <Button
                key={uuidv4()}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to='/list'>List</Link> </Button>
          </Box>

          <userContext.Consumer>
        {({ logout, user }) => user ?
          <span>Welcome, {user} <Button variant="contained" size="small" onClick={logout}>Logout</Button></span>
          : ""
        }
      </userContext.Consumer>
        </Toolbar>
      </Container>
    </AppBar>
    
    )
    
    
   /*  <nav>

    <Link to='/'>Home</Link>
    <Link to='/form'>Form</Link>
    <Link to='/list'>List</Link>

    <userContext.Consumer>
        {({ logout, user }) => user ?
          <span>Welcome, {user} <button variant="contained" size="small" onClick={logout}>Logout</button></span>
          : ""
        }
      </userContext.Consumer>

    </nav>; */

    
  }
}

export default Nav;
