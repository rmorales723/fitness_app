import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    
    <Box width="400px" sx={{width: { xl: '1488px' }}} m="auto">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/exercise/:id" component={ExerciseDetail} />
        </Switch>
      </Router> 
      <Footer />
    </Box>
   
  )
}

export default App