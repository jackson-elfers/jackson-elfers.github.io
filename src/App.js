import React, { useState, useEffect, useRef } from "react";
import { Profile } from "./components";
import './styles';
import directives from "./logs/directives";

function App() {

  return (
    <div>
    <h3>Jackson Thomas Elfers</h3>
    <div style={{ float: "left", width: "100%" }}>
      <div className="box">
        <h2>They used to call me "Doubting Thomas" at catholic school.</h2>
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
