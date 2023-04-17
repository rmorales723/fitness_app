import React from 'react'
import Userfront from "@userfront/react";
import Home from '../pages/Home'

// import LandingPage from './LandingPage';


Userfront.init("demo1234");

const LoginForm = Userfront.build({
  toolId: "alnkkd"
});

const Login = () => {
  return (
    <LoginForm/>
 )
}




  

export default Login