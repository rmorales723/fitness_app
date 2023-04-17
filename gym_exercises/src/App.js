// import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
    <Footer />
  </Box>
);






export default App