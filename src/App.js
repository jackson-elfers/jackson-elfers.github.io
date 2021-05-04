import React, { useState, useEffect, useRef } from "react";
import { Profile } from "./components";
import './styles';

function App() {

  return (
    <div>
    <h1>Jackson T. Elfers</h1>
    <div style={{ float: "left", width: "100%" }}>
      <div className="box">
        <h2>Goals, Plans and Visions for the Future.</h2>
        <p>A collection of ideas for those who find my behavior curious and for my personal record keeping.</p>
      </div>
      <Profile
        panelComponent={[{ media: "./heart.png", title: "titleOne", body: "bodyOne" }, { media: "https://g.foolcdn.com/editorial/images/616486/square01.jpg", title: "titleTwo", body: "bodyTwo" }]}
      />
    </div>
    
    </div>
  );
}

export default App;
