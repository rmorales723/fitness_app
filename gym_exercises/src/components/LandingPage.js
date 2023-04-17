import React from 'react'
import {Link} from 'react-router-dom';
import { Stack } from '@mui/material';
import Userfront from "@userfront/react";
import Home from "../pages/Home"

Userfront.init("demo1234");

const LoginForm = Userfront.build({
  toolId: "alnkkd"
});


const LandingPage = () => {
    return(
        <>
        
        <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        padding-left="50px"
        >
        {/* <Link to="/home" style={{ textDecoration: 'none', color: "#3A1212",
        borderBottom: '3px solid #FF2625'}}>Home</Link> */}
        {/* <p>
        <a href="/dashboard" style={
            {textDecoration: 'none', color:'#3A1212',
            borderBottom: '3px solid #FF2625'}}>Home</a>
        </p> */}
        </Stack>
        
        <div>
            <h2>Welcome to my Fitness App!</h2>
        </div>
    <div className="landing-page-container has-text-centered is-size-1">
        <h1><div><Link to="/login"></Link></div></h1>  
    </div>
    </>)
    };
    
    
    




export default LandingPage;