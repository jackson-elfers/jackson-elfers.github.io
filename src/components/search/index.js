import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import Image from "../image";

function Main(props) {
  return (
    <Link to={`${props.link}`}>
      <Image src={`${process.env.REACT_APP_API}/${api.file.readByStorageName}/${props.profile.thumbnail}`} />
    </Link>
  );
}
export default withRouter(connect(Main));
