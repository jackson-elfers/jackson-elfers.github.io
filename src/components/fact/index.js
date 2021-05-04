import React, { useState, useEffect } from "react";
import { routes, api } from "../../config";
import axios from "axios";
import { connect } from "../../redux";

function Main(props) {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);

  async function getFact() {
    const response = await axios.get(`${process.env.REACT_APP_API}/facts.json`);
    setFact(response.data[Math.floor(Math.random() * (response.data.length - 1))]);
  }

  async function load() {
    try {
      await getFact();
      setLoading(false);
    } catch (e) {
      props.actions.notice.message(e.message);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <div className="box">
      <p>Biology Fact</p>
      <hr />
      <p>{fact}</p>
    </div>
  );
}
export default connect(Main);
