import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import check from "check-types";
import { routes, api } from "../../config";
import { connect } from "../../redux";

function Main(props) {
  const [follow, setFollow] = useState(false);
  const followRef = useRef(follow);
  const [loading, setLoading] = useState(true);

  async function createFollow() {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}${api.owner_follow.create}`, {
        followed_id: props.followed_id
      });
      if (response.data.error) {
        throw new Error(response.data.error.detail);
      }
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  async function removeFollow() {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}${api.owner_follow.remove}/${props.followed_id}`
      );
      if (response.data.error) {
        throw new Error(response.data.error.detail);
      }
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  async function updateFollow() {
    if (!followRef.current) {
      await createFollow();
    } else {
      await removeFollow();
    }
    await loadProfile();
  }

  async function loadProfile() {
    // load follow
    const responseOne = await axios.get(`${process.env.REACT_APP_API}${api.owner_follow.read}/${props.followed_id}`);
    if (responseOne.data.error) {
      throw new Error(responseOne.data.error.detail);
    } else if (responseOne.data.data.length !== 0) {
      setFollow(true);
      followRef.current = true;
      return;
    }
    setFollow(false);
    followRef.current = false;
  }

  async function load() {
    try {
      await loadProfile();
      setLoading(false);
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <button style={{ float: "right", margin: "0px" }} onClick={updateFollow}>{`${
        follow ? "🐾 Unfollow" : "🐾 Follow"
      }`}</button>
    </div>
  );
}

export default connect(Main);
