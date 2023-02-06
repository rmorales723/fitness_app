import React from 'react';
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Switch> 
      <Footer />
    </Box>
  )
}

export default App