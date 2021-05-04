import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import check from "check-types";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import { socket } from "../../utils";

function Main(props) {
  const [votes, setVotes] = useState([]);
  const votesRef = useRef(votes);
  const [loading, setLoading] = useState(true);

  function randomEmoji() {
    const emojis = ["💚", "💜", "💙", "❤️"];
    return emojis[Math.floor(Math.random() * (emojis.length - 1))];
  }

  async function updateVote() {
    try {
      const emoji = randomEmoji();
      const data = {
        parent_id: props.parent_id,
        emote: emoji,
        notify: {
          owner_id: props.owner_id,
          link: `${routes.OwnerPostSingle}/${props.parent_id}`,
          body: `Somebody liked your howl! ${emoji}`
        }
      };
      const response = await axios.post(`${process.env.REACT_APP_API}${api.owner_post_vote.create}`, data);
      if (response.data.error) {
        throw new Error(response.data.error.detail);
      }
      socket.emit(`${api.socket.notify.alert}`, { owner_id: data.notify.owner_id });
      await loadProfile();
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  async function loadProfile() {
    // load votes
    const responseOne = await axios.get(
      `${process.env.REACT_APP_API}${api.owner_post_vote.readParent}/${props.parent_id}/0/32`
    );
    if (responseOne.data.error) {
      throw new Error(responseOne.data.error.detail);
    }
    console.log(responseOne.data.data);
    setVotes(responseOne.data.data);
    votesRef.current = responseOne.data.data;
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
    <div style={{ width: "100%", height: "50px", overflow: "hidden" }}>
      <button style={{ align: "right" }} onClick={updateVote}>
        💙
      </button>
      <span>
        {votes.map(d => {
          return d.emote;
        })}
      </span>
    </div>
  );
}

export default connect(Main);
