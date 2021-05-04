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
      <h3>{`🐶 Name: ${props.profile.first_name}`}</h3>
      <h3>{`⚥ Gender: ${props.profile.gender}`}</h3>
      <h3>{`📈 Species: ${props.profile.species}`}</h3>
      <h3>{`🐕 Breed: ${props.profile.breed}`}</h3>
      <h3>{`🌎 Location: ${props.profile.city}, ${props.profile.state}`}</h3>
      <div className="box peddapPanelDesc">
        <p>{props.profile.description}</p>
      </div>
    </div>
  );
}
export default connect(Main);
