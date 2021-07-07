import React from "react";
import Cards from "../Components/Cards";

function Home() {
  return (
    <div className="everything">
      <div className="banner">
        <div className="legend bg-light">
          <img
            className="githubLogo"
            src=" https://logosmarken.com/wp-content/uploads/2020/12/GitHub-Logo.png"
            alt=""
          />
          <h5>This is the best "Github Api App" until we do better..</h5>
        </div>

      
      </div>
      <Cards />
    </div>
  );
}

export default Home;
