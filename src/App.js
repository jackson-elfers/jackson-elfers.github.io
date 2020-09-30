import React from 'react';
import logo from './logo.svg';
import './styles';
import Snowflakes from "magic-heartflakes";

function App() {
  //Snowflakes();
  return (
    <div>
      <div className="box">
        <h2>Hey I'm Jackson</h2>
        <p>
        A full-stack developer whose generally a problem solver, sometimes a 
        problem maker. I like to be pragmatic and point out absurdity. Let me 
        know how I can help you with your junk! -Jackson
        </p>
      </div>
      <a href = "https://jackson-elfers.github.io/services">
       <button style = {{ width: "100%" }}>My Services</button>
      </a>
       <a target = "_blank" href = "https://www.linkedin.com/in/jackson-elfers/">
       <button style = {{ width: "100%" }}>My LinkedIn</button>
      </a>
      <a target = "_blank" href = "/jackson-elfers-resume-tech-2020.pdf">
       <button style = {{ width: "100%" }}>My Resume</button>
      </a>
      
      <img src = "./bonfire.gif" alt = "A bonfire."/>
      
      <iframe style = {{ "margin-left": "5%", width: "90%", height: "600px" }} src="https://jackson-elfers.github.io/tailwind01"/>
      
      <iframe style = {{ "margin-left": "5%", width: "90%", height: "600px" }} src="https://jackson-elfers.github.io/tailwind02"/>
      
      <iframe style = {{ "margin-left": "5%", width: "90%", height: "600px" }} src="https://jackson-elfers.github.io/tailwind03"/>
      
      </div>
  );
}

export default App;
