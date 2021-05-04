import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import { OwnerPost, Masonry, Follow } from "../index";
import uuid from "uuid/v1";

function Main(props) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const indexRef = useRef(0);

  async function loadNotes() {
    // load profile
    const responseOne = await axios.get(
      `${process.env.REACT_APP_API}${api.owner_post.readOwner}/${props.owner_id}/${indexRef.current}/5`
    );
    if (responseOne.data.error) {
      throw new Error(responseOne.data.error.detail);
    } else if (responseOne.data.data.length === 0) {
      //throw new Error("No more posts! 🐶");
    }
    indexRef.current += 1;
    setNotes(notes => {
      return [...notes, ...responseOne.data.data];
    });
    console.log(responseOne.data.data);
  }

  async function expandList() {
    try {
      await loadNotes();
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  async function load() {
    try {
      await loadNotes();
      setLoading(false);
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return (
      <img
        style={{ width: "50%", "margin-left": "25%" }}
        src={`${process.env.REACT_APP_API}/images/animals/spinner_${Math.floor(Math.random() * 14) + 1}.gif`}
      />
    );
  }

  if (notes.length === 0) {
    return (
      <div className="box">
        <p>No entries as of yet...</p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ float: "left", width: "100%", height: "50px" }}>
        <Follow followed_id={props.owner_id} />
      </div>

      <Masonry>
        {notes.map((d, i) => {
          return <OwnerPost data={d} />;
        })}
      </Masonry>
      <div>
        <button onClick={expandList}>🐶 Load More</button>
      </div>
      <img
        style={{ width: "50%", "margin-left": "25%" }}
        src={`${process.env.REACT_APP_API}/images/animals/spinner_${Math.floor(Math.random() * 14) + 1}.gif`}
      />
    </div>
  );
}
export default connect(Main);
