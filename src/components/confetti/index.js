import React, { useState, useEffect, useRef } from "react";
import Snowflakes from "magic-heartflakes";

function Main(props) {
  var sf = useRef(null);

  useEffect(() => {
    sf.current = Snowflakes();
    if (!props.enable) {
      sf.current.destroy();
      sf.current = null;
    }
  });

  useEffect(() => {
    return () => {
      if (sf.current !== null) {
        sf.current.destroy();
      }
    };
  }, []);

  return <div style={{ display: "none" }}></div>;
}
export default Main;
