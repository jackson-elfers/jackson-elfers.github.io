import React, { useState, useEffect, useRef } from "react";
import { Profile, Fish } from "./components";
import Typewriter from 'typewriter-effect';
import './styles';
import directives from "./logs/directives";

function App() {

  return (
    <div>
    <h1 style = {{ margin: "0%" }}>Jackson</h1>
    <h1 style = {{ margin: "0%" }}><Typewriter
  options={{
    strings: ['Thomas', 'Doubting', "Introvert", "Psychopath"],
    autoStart: true,
    loop: true,
  }}
/></h1>
    <h1 style = {{ margin: "0%" }}>Elfers</h1>
    <div style={{ float: "left", width: "100%" }}>
      <div className="box">
        <h2>The kids used to call me "Doubting Thomas" at Catholic school.</h2>
        <p>When she asks me about my future I say I prefer them over stocks and bonds.</p>
      </div>
      <Profile
        panelComponent={directives}
      />
    </div>
    
    <div style={{ float: "left", width: "100%" }}>
    <div style={{ height: "500px", position: "relative" }}>
      <Fish width="100px" src="./fish.png" />
      <Fish width="100px" src="./fish.png" />
      <Fish width="100px" src="./fish.png" />
      <Fish width="100px" src="./fish.png" />
      <Fish width="100px" src="./fish.png" />
    </div>
    <div className="box">
        <h2>We are emotionally polyamourus creatures.</h2>
        <p>
          A year ago I programmed these fish to connect deeply with one another.
          They swim in simple fashions but just like you and I, get swept up in 
          grand currents of emotion that is painfully invisible and inexplicable to 
          our friends and family.
        </p>

        <p>Can you recall the first time you felt pain of another creature?</p>
      </div>
    </div>

    </div>
  );
}

export default App;
