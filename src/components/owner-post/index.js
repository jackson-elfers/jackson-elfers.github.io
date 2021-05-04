import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import { Vote } from "../index";
import { socket } from "../../utils";
import uuid from "uuid/v1";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import css from "./index.css";

function Main(props) {
  const [owner, setOwner] = useState({});
  const [profile, setProfile] = useState(props.data);
  const profileRef = useRef(profile);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProfile() {
    // load files
    const responseTwo = await axios.get(
      `${process.env.REACT_APP_API}${api.file.readByParentId}/${profileRef.current._id}`
    );
    if (responseTwo.data.error) {
      throw new Error(responseTwo.data.error.detail);
    }
    setFiles(responseTwo.data.data);
    console.log(responseTwo.data.data);

    // load owner
    const responseThree = await axios.get(
      `${process.env.REACT_APP_API}${api.owner_profile.resolveOwnerById}/${profileRef.current.owner_id}`
    );
    if (responseThree.data.error) {
      throw new Error(responseThree.data.error.detail);
    } else if (responseThree.data.data.length === 0) {
      throw new Error("This profile doesn't exist...");
    }
    setOwner(responseThree.data.data[0]);
    console.log(responseThree.data.data[0]);
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

  if (loading) {
    return (
      <img
        style={{ width: "50%", "margin-left": "25%" }}
        src={`${process.env.REACT_APP_API}/images/animals/spinner_${Math.floor(Math.random() * 14) + 1}.gif`}
      />
    );
  }

  return (
    <div className="box">
      <Link to={`${routes.OwnerPostSingle}/${profile.url_title}`}>
        <button>{`🔍`}</button>
      </Link>

      <Carousel
        renderThumbs={() => {
          return [];
        }}
      >
        {files.map((d, i) => {
          return d.content_type !== "video/mp4" ? (
            <img src={`${process.env.REACT_APP_API}/api/file/read/${d.storage_name}`} />
          ) : (
            <video
              style={{ width: "100%" }}
              className="peddapVideo"
              controls
              src={`${process.env.REACT_APP_API}/api/file/read/${d.storage_name}`}
            />
          );
        })}
        <img src={`${process.env.REACT_APP_API}/images/landing/favicon.png`} />
      </Carousel>

      <div className="box peddapPostDesc">
        <p>{profile.description}</p>
      </div>

      <Vote parent_id={profile._id} owner_id={profile.owner_id} />
    </div>
  );
}
export default connect(Main);
