import React from "react";
import AboutUs from "../Components/AboutUs"

function About() {

  const users = ["yykoca", "ramazan", "galip16", "ZeynepGultekin"]
  
  return (
    <div className="usersDiv" >
      <AboutUs user={users[0]} />
      <AboutUs user={users[1]} />
      <AboutUs user={users[2]} />
      <AboutUs user={users[3]} />
    </div>
  );
}

export default About;
