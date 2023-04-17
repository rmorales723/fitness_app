import React from 'react'
import Userfront from "@userfront/react";

Userfront.init("demo1234");

const SignupForm = Userfront.build({
  toolId: "nkmbbm"
});

const Signup = () => {
  return (
    <SignupForm />
  )
}

export default Signup