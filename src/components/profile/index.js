import React, { useState, useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import css from "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { v4 as uuid } from 'uuid';

function Main(props) {
  const [index, setIndex] = useState(0);
  const [id, setId] = useState(uuid());

  function titleEffect() {
    const typewriter = new Typewriter(document.getElementById(`${id}title`), {
      loop: false,
      delay: 75,
    });
    typewriter
    .typeString(props.panelComponent[index].title)
    .pauseFor(1000)
    .start();
  }

  function bodyEffect() {
    const typewriter = new Typewriter(document.getElementById(`${id}body`), {
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
        <h2 id = {`${id}title`}></h2>
        <p id = {`${id}body`}></p>
      </div>
    </div>
  );
}
export default Main;
