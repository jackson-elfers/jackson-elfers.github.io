import React, { useState, useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import css from "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Main(props) {
  const [index, setIndex] = useState(0);

  function titleEffect() {
    const typewriter = new Typewriter(document.getElementById("panelTitle"), {
      loop: false,
      delay: 75,
    });
    typewriter
    .typeString(props.panelComponent[index].title)
    .pauseFor(1000)
    .start();
  }

  function bodyEffect() {
    const typewriter = new Typewriter(document.getElementById("panelBody"), {
      loop: false,
      delay: 75,
    });
    typewriter
    .typeString(props.panelComponent[index].body)
    .pauseFor(1000)
    .start();
  }

  function typing() {
    titleEffect();
    bodyEffect();
  }

  useEffect(() => {
    typing();
  }, []);

  useEffect(() => {
    typing();
  }, [index]);

  return (
    <div>
      <div className="box peddapViewer">
        <Carousel
          onChange={function(i) { setIndex(i); }}
          renderThumbs={() => {
            return [];
          }}
        >
          {props.panelComponent.map((d) => { return <img src = {d.media}/> })}
        </Carousel>
      </div>

      <div className="box peddapPanel">
        <h2 id = "panelTitle"></h2>
        <p id = "panelBody"></p>
      </div>
    </div>
  );
}
export default Main;
