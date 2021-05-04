import React from "react";
import css from "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Main(props) {
  return (
    <div>
      <div className="box peddapViewer">
        <Carousel
          renderThumbs={() => {
            return [];
          }}
        >
          {props.viewerComponent}
          <img src="https://g.foolcdn.com/editorial/images/616486/square01.jpg" />
        </Carousel>
      </div>

      <div className="box peddapPanel">{props.panelComponent}</div>
    </div>
  );
}
export default Main;
