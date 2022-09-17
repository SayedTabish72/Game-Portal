// import './App.css';
import React from "react";
import videoBG from "./Assest/videoplayback.mp4";
import tamplate from "./Assest/Blue and Red 72x36 Landscape Campaign Banner.png";
import tamplate2 from "./Assest/imge2.png";
import { FooterContainer } from "./HomePage/containers/footer";

const Main = () => {
  return (
    // Creating view-point for landing pape
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBG} autoPlay loop muted />
      <div className="content">
        <h1>
          LET THE <br></br>GAME BEGIN
        </h1>
        <p>
          An indian digital online games and entertainment site.<br></br> We
          develop, publish and distribute multiplayer games.
        </p>
      </div>

      <div className="aboutsection">
        <img src={tamplate} />
        <div className="sitecontent">
          <h2>
            We're Developing The Site Which alow's the user <br></br>To play
            there fav game online without Dyarownloading{" "}
          </h2>
        </div>

        <div className="aboutsection2">
          <img src={tamplate2} />
          <div className="sitecontent"></div>
        </div>

        {/* for footer */}
        <>
          <FooterContainer />
        </>
      </div>
    </div>
  );
};

export default Main;
