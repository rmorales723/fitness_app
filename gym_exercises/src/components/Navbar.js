import { Stack } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import Nationals from '../assets/images/Nationals.jpeg';



const Navbar = () => {
  return (
   <Stack>
    <Link to="/">
        <img src={Nationals} alt="Nationals" style={{
        width: '28px', height: '50px',
        margin: '0 10px'
        }} />
    </Link>
    <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        >
        <Link to="/" style={{ textDecoration: 'none', color: "#3A1212",
        borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href="#exercises" style={
            {textDecoration: 'none', color:'#3A1212'}}>Exercises</a>
    </Stack>
   </Stack>
  )
}

export default Navbar