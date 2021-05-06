import React, { useState, useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";

function Main(props) {
  const [style, setStyle] = useState({
    width: props.width,
    margin: "0%",
    padding: "0%",
    height: "auto",
    position: "absolute",
    top: "0px",
    left: "0px",
    transform: "scaleX(1)"
  });
  const step = 1;
  const id = uuid();
  var top = useRef(0);
  var left = useRef(0);
  var vectors = useRef([0, 0]);
  var initialized = useRef(false);
  var directionTimer = null;
  var adjustVectorTimer = null;

  var windowWidth = 0;
  var windowHeight = 0;
  var imageWidth = 0;
  var imageHeight = 0;

  function rotate() {
    if (vectors.current[0] === 1) {
      setStyle(style => {
        return {
          ...style,
          transform: vectors.current[1] === 1 ? "rotate(20deg) scaleX(1)" : "rotate(-20deg) scaleX(-1)"
        };
      });
    } else if (vectors.current[0] === -1) {
      setStyle(style => {
        return {
          ...style,
          transform: vectors.current[1] === 1 ? "rotate(-20deg) scaleX(1)" : "rotate(20deg) scaleX(-1)"
        };
      });
    }
  }

  async function upStep() {
    top.current -= step;
    setStyle(style => {
      return { ...style, top: `${top.current}px` };
    });
    rotate();
  }

  async function downStep() {
    top.current += step;
    setStyle(style => {
      return { ...style, top: `${top.current}px` };
    });
    rotate();
  }

  async function leftStep() {
    left.current -= step;
    setStyle(style => {
      return { ...style, left: `${left.current}px`, transform: "scaleX(1)" };
    });
  }

  async function rightStep() {
    left.current += step;
    setStyle(style => {
      return { ...style, left: `${left.current}px`, transform: "scaleX(-1)" };
    });
  }

  function collision(data) {
    if (data === "up" && top.current === 0) {
      return true;
    } else if (data === "down" && top.current + imageHeight === windowHeight) {
      return true;
    } else if (data === "left" && left.current === 0) {
      return true;
    } else if (data === "right" && left.current + imageWidth === windowWidth) {
      return true;
    }
    return false;
  }

  async function direction() {
    if (vectors.current[0] === 1 && !collision("up")) {
      upStep();
    }
    if (vectors.current[0] === -1 && !collision("down")) {
      downStep();
    }
    if (vectors.current[1] === 1 && !collision("left")) {
      leftStep();
    }
    if (vectors.current[1] === -1 && !collision("right")) {
      rightStep();
    }
  }

  async function randomStart() {
    if (!initialized.current) {
      top.current = Math.floor(Math.random() * (windowHeight - imageHeight));
      left.current = Math.floor(Math.random() * (windowWidth - imageWidth));
      setStyle(style => {
        return { ...style, top: `${top.current}px`, left: `${left.current}px` };
      });
    }
  }

  async function adjustVector() {
    const index = Math.floor(Math.random() * vectors.current.length);
    const vector = Math.floor(Math.random() * 3);
    vectors.current[index] = vector === 2 ? -1 : vector === 0 ? 0 : 1;
  }

  async function motion() {
    directionTimer = setInterval(() => {
      direction();
    }, 25);
    adjustVectorTimer = setInterval(() => {
      adjustVector();
    }, 500);
  }

  async function initialize() {
    setTimeout(() => {
      const image = document.getElementById(id);
      windowWidth = image.parentElement.clientWidth;
      windowHeight = image.parentElement.clientHeight;
      imageWidth = image.clientWidth;
      imageHeight = image.clientHeight;
      randomStart();
      initialized.current = true;
    }, 100);
  }

  useEffect(() => {
    initialize();
    motion();
    return () => {
      clearInterval(directionTimer);
      clearInterval(adjustVectorTimer);
    };
  }, []);

  return <img id={`${id}`} style={style} src={props.src} />;
}

export default Main;
