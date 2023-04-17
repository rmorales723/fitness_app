import React from "react";
import Userfront from "@userfront/react";
import LandingPage from "./LandingPage";

Userfront.init("demo1234");

const LogoutButton = Userfront.build({
  toolId: "kdbooo"

});


const Logout = () => {
  return (
    <>
   <LogoutButton />
    <div>
        <h2>Discipline = Results!</h2>
    </div>
    <div className="landing-page-container has-text-centered is-size-1"></div>
    
   </>
  )
}

export default Logout