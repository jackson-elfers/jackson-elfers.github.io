import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import { OwnerPost, Masonry, AnimalProfileThumbnail } from "../index";
import uuid from "uuid/v1";

const Remove = connect(function(props) {
  async function removeBookmark() {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}${api.animal_bookmark.remove}/${props.data._id}`
      );
      if (response.data.error) {
        throw new Error(response.data.error.detail);
      }
      props.handlers[0]();
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  return (
    <div>
      <button onClick={removeBookmark}>🗑️</button>
    </div>
  );
});

function Main(props) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const indexRef = useRef(0);

  async function loadNotes() {
    // load profile
    const responseOne = await axios.get(
      `${process.env.REACT_APP_API}${api.animal_bookmark.readOwner}/${props.owner_id}/${indexRef.current}/5`
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
      <Masonry>
        {notes.map((d, i) => {
          return (
            <div key={d._id}>
              <AnimalProfileThumbnail
                data={{ _id: d.parent_id }}
                options={
                  <div>
                    <Remove
                      data={d}
                      handlers={[
                        () => {
                          setNotes([]);
                          indexRef.current = 0;
                          loadNotes();
                        }
                      ]}
                    />
                  </div>
                }
              />
            </div>
          );
        })}
      </Masonry>
      <div>
        <button onClick={expandList}>🐶 Load More</button>
      </div>
    </div>
  );
}
export default connect(Main);
