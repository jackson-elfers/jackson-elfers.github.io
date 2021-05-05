import React, { useState, useEffect, useRef } from "react";
import { Profile } from "./components";
import Typewriter from 'typewriter-effect';
import './styles';
import directives from "./logs/directives";

function App() {

  return (
    <div>
    <h1 style = {{ margin: "0%" }}>Jackson</h1>
    <h1 style = {{ margin: "0%" }}><Typewriter
  options={{
    strings: ['Thomas', 'Doubting'],
    autoStart: true,
    loop: true,
  }}
/></h1>
    <h1 style = {{ margin: "0%" }}>Elfers</h1>
    <div style={{ float: "left", width: "100%" }}>
      <div className="box">
        <h2>The kids used to call me "Doubting Thomas" at catholic school.</h2>
        <p>When she asks me about my future I say I prefer them over stocks and bonds.</p>
      </div>
      <Profile
        panelComponent={directives}
      />
    </div>
    
    </div>
  );
}

export default App;
