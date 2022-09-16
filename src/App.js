
// import './App.css';
import React from "react";
import videoBG from './Assest/videoplayback.mp4';

const Main = () =>{
    return(

        <div className="main">
             <div className="overlay"></div>
        <video src={videoBG} autoPlay loop muted />
        <div className="content">
        <h1>LET THE <br></br>GAME BEGIN </h1>
        <p>hello</p>
        </div>
        </div>
    )
}

export default Main
