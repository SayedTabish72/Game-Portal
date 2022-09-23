// import { FooterContainer } from "./HomePage/containers/footer";
// import app from './App';
// import './App.css';
// import ReactDOM  from "react-dom";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Learn from "./Pages/Learn";

const Main = () => {
  return (
    <div className="main">
      <BrowserRouter>
      <Router>
        <Routes>
          <switch>
        <Route exact path="/" element={<Home/>} />
        <Route path="./Pages/Home.js" element={<Home/>} />
          <Route exact path="./Pages/Learn.js" element={<Learn/>} />
          <Route exact path="./Pages/About.js" element={<About/>} />
          </switch>
        </Routes>
      </Router>
      </BrowserRouter>
      </div> 
  );
};

export default Main;
