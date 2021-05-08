import React, { useState, useEffect, useRef } from "react";
import { Profile, Fish } from "./components";
import Typewriter from "typewriter-effect";
import "./styles";
import directives from "./logs/directives";
import innovators from "./logs/innovators";

function App() {
  return (
    <div>
      <h1 style={{ margin: "0%" }}>Jackson</h1>
      <h1 style={{ margin: "0%" }}>
        <Typewriter
          options={{
            strings: ["Thomas", "Doubting", "Introvert", "Psychopath"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h1 style={{ margin: "0%" }}>Elfers</h1>
      <div style={{ float: "left", width: "100%" }}>
        <div className="box">
          <h2>The kids used to call me "Doubting Thomas" at Catholic school.</h2>
          <p>When she asks me about my future I say I prefer them over stocks and bonds.</p>
        </div>
        <Profile panelComponent={directives} />
      </div>

      <div style={{ float: "left", width: "100%" }}>
        <div className="box">
          <h2>The universe in her eyes is a shadow.</h2>
          <p>
            Great innovators don't step on people along the way. Let it not be a vision of chaos labeled as success by a
            fortunate few.
          </p>
        </div>
        <Profile panelComponent={innovators} />
      </div>
    </div>
  );
}

export default App;
