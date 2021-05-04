import React, { useState, useEffect } from "react";
import { routes, api } from "../../config";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Main(props) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>{props.children}</Masonry>
    </ResponsiveMasonry>
  );
}
export default Main;
