import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import check from "check-types";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import mime from "mime-types";
import { Masonry } from "../index";

const FileComponent = connect(function(props) {
  async function remove() {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API}${api.file.remove}/${props.data.storage_name}`);
      if (response.data.error) {
        throw new Error(response.data.error.detail);
      }
      props.handlers[0]();
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  return (
    <div className="box">
      <button onClick={remove}>🗑️</button>
      {props.data.content_type !== "video/mp4" ? (
        <img src={`${process.env.REACT_APP_API}/api/file/read/${props.data.storage_name}`} />
      ) : (
        <video
          style={{ width: "100%" }}
          controls
          src={`${process.env.REACT_APP_API}/api/file/read/${props.data.storage_name}`}
        />
      )}
    </div>
  );
});

function Main(props) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProfile() {
    // load files
    const responseTwo = await axios.get(`${process.env.REACT_APP_API}${api.file.readByParentId}/${props.parent_id}`);
    if (responseTwo.data.error) {
      throw new Error(responseTwo.data.error.detail);
    }
    setFiles(responseTwo.data.data);
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
      <Masonry>
        {files.map((d, i) => {
          return <FileComponent handlers={[loadProfile]} data={files[i]} />;
        })}
      </Masonry>
    </div>
  );
}
export default connect(Main);
