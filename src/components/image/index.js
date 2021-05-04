import React, { useState, useEffect } from "react";
import { routes, api } from "../../config";

function Main(props) {
  const [overlay, setOverlay] = useState(false);

  if (overlay) {
    return (
      <div
        onClick={() => {
          setOverlay(false);
        }}
        className="overlay"
      >
        <img style={{ width: "70%", "margin-left": "15%", "border-radius": "5px" }} src={props.src} />
      </div>
    );
  }

  return (
    <div>
      <img
        onClick={() => {
          setOverlay(true);
        }}
        className="loading"
        style={{ width: "100%", margin: "0%", "border-radius": "5px" }}
        src={props.src}
      />
    </div>
  );
}
export default Main;
