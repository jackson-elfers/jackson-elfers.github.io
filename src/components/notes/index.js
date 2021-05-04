import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import { socket } from "../../utils";
import { Profile } from "../../components";
import uuid from "uuid/v1";

function Main(props) {
  const [unread, setUnread] = useState(false);
  const [loading, setLoading] = useState(true);

  async function loadNotes() {
    // load profile
    const responseOne = await axios.get(`${process.env.REACT_APP_API}${api.notify.readUnread}/0/5`);
    if (responseOne.data.error) {
      throw new Error(responseOne.data.error.detail);
    } else if (responseOne.data.data.length === 0) {
      setUnread(false);
      throw new Error("No more messages! 🐶");
    }
    console.log(responseOne.data.data);
    setUnread(true);
  }

  async function updateRead() {
    try {
      // update read
      await axios.put(`${process.env.REACT_APP_API}${api.notify.update}`);
      await loadNotes();
    } catch (e) {
      //props.actions.notice.message(e.message);
      console.log(e.message);
    }
  }

  async function expandList() {
    try {
      await loadNotes();
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  async function receiveAlert(data) {
    try {
      await loadNotes();
    } catch (e) {}
  }

  async function load() {
    try {
      socket.on(`${api.socket.notify.alert}/${props.globals.user.info._id}`, receiveAlert);
      await loadNotes();
      setLoading(false);
    } catch (e) {
      //props.actions.notice.message(e.message);
      console.log(e.message);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ float: "right" }}>
      <Link onClick={updateRead} to={routes.Notes}>
        {unread ? <button>💖</button> : <button>💙</button>}
      </Link>
    </div>
  );
}
export default connect(Main);
