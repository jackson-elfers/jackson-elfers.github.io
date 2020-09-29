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
        I build applications with React and cloud based services with AWS,
        I'm part of GitHub the world's largest open source community and
        I'm always looking for where I can help, I'd love to chat on LinkedIn.
        </p>
      </div>
      <a target = "_blank" href = "https://jackson-elfers.github.io/services">
       <button style = {{ width: "100%" }}>My Services</button>
      </a>
       <a target = "_blank" href = "https://www.linkedin.com/in/jackson-elfers/">
       <button style = {{ width: "100%" }}>My LinkedIn</button>
      </a>
      <a target = "_blank" href = "/jackson-elfers-resume-tech-2020.pdf">
       <button style = {{ width: "100%" }}>My Resume</button>
      </a>
      
      <img src = "./bonfire.gif" alt = "A bonfire."/>
      </div>
  );
}

export default App;
