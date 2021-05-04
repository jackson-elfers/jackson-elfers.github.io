import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import axios from "axios";
import { Notes } from "../index";

function Nav(props) {
  if (props.user) {
    return (
      <div>
        <div>
          <Link to={routes.Menu}>
            <button style={{ float: "right", "margin-right": "0px" }}>...</button>
          </Link>
          <Notes />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <Link to={routes.Login}>
          <button style={{ float: "right", "margin-right": "0px" }}>Login</button>
        </Link>
      </div>
    );
  }
}

class Main extends React.Component {
  async componentDidMount() {
    await this.props.actions.user.set();
  }

  render() {
    return (
      <div>
        <Link to={routes.Home}>
          <h1>Chardap</h1>
        </Link>
        <div style={{ height: "50px" }}>
          <Nav user={this.props.globals.user.info} />
        </div>
      </div>
    );
  }
}

export default connect(Main);
