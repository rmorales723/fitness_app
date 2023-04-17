import { Stack } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import Profile from '../assets/images/profile.jpg';



const Navbar = () => {
  return (
   <Stack 
   direction="row"
        justifyContent="space-around" sx={{gap:{
            sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
    <Link to="/">
        <img src={Profile} alt="profile" style={{
        width: '80px', height: '100px',
        margin: '0 10px'
        }} />
    </Link>
    <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        >
        <Link to="/login" style={{ textDecoration: 'none', color: "#3A1212",
        borderBottom: '3px solid #FF2625'}}>Login</Link>
        <a href="/signup" style={
            {textDecoration: 'none', color:'#3A1212',
            borderBottom: '3px solid #FF2625'}}>Signup</a>
        <a href="#exercises" style={
            {textDecoration: 'none', color:'#3A1212',
            borderBottom: '3px solid #FF2625'}}>Exercises</a>
        <a href="/logout" style={
            {textDecoration: 'none', color:'#3A1212',
            borderBottom: '3px solid #FF2625'}}>Logout</a>

        {/* <Link to="/login" style={{ textDecoration: 'none', color: "#3A1212",
        borderBottom: '3px solid #FF2625'}}>Login</Link> */}
    </Stack>
   </Stack>
  )
}

export default Navbar