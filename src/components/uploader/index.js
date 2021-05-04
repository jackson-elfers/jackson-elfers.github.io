import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import check from "check-types";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import mime from "mime-types";

function Main(props) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const count = useRef(0);

  async function upload(e) {
    e.preventDefault();
    const form = document.getElementById("formOne");
    try {
      const file_meta = {
        parent_id: props.parent_id,
        file_name: form.upload.files[count.current].name
      };
      console.log(file_meta);
      if (
        mime.lookup(file_meta.file_name) !== "image/jpeg" &&
        mime.lookup(file_meta.file_name) !== "image/png" &&
        mime.lookup(file_meta.file_name) !== "video/mp4"
      ) {
        throw new Error("file must be of type jpg, png or mp4");
      }
      const headers = { "Content-Type": "application/octet-stream", file_meta: JSON.stringify(file_meta) };
      setLoading(true);
      const response = await axios.post(props.url, form.upload.files.item(count.current), { headers: headers });

      if (response.data.error) {
        throw new Error(response.data.error.detail);
      }
      setLoading(false);

      count.current += 1;

      if (count.current === form.upload.files.length) {
        props.complete();
        return;
      }

      upload({ preventDefault: () => {} });
    } catch (error) {
      props.actions.notice.message(error.message);
      setLoading(false);
    }
  }

  async function load() {
    try {
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
      <form style={{ display: `${loading ? "none" : "block"}` }} id="formOne" onSubmit={upload}>
        <input multiple type="file" name="upload" />
        <input type="submit" value="upload" />
      </form>

      <img
        style={{ width: "50%", "margin-left": "25%" }}
        src={`${process.env.REACT_APP_API}/images/animals/spinner_${Math.floor(Math.random() * 14) + 1}.gif`}
      />
    </div>
  );
}

export default connect(Main);
