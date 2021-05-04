import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import { Profile, Confetti } from "../../components";
import { socket } from "../../utils";
import uuid from "uuid/v1";

function Main(props) {
  return (
    <div>
      <div className="box peddapPanelDesc">
        <p>{props.profile.description}</p>
      </div>
    </div>
  );
}
export default connect(Main);
