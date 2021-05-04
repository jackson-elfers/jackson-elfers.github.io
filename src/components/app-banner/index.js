import React from "react";

function Main(props) {
  if (navigator.userAgent.includes("wv")) {
    return <div style={{ display: "none" }}></div>;
  }

  return (
    <div style={{ height: "50px" }}>
      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.jacksonelfersdev.peddap">
        <img
          style={{ padding: "0px", margin: "0px", float: "right", width: "150px", height: "auto" }}
          src={`${process.env.REACT_APP_API}/images/android.png`}
        />
      </a>
    </div>
  );
}
export default Main;
