import React, { useState, useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";

function Main(props) {
  var form_data = useRef(props.default);
  const [index, setIndex] = useState(0);
  const _id = uuid();

  function back() {
    setIndex(index => {
      return index - 1;
    });
  }

  async function inputHandler(key) {
    //e.preventDefault();
    const form = document.getElementById(`${_id}`);
    form_data.current[key] = form[key].value;
    props.forms[index].handler(form_data.current);
    if (index === props.forms.length - 1) {
      props.formComplete(form_data.current);
    } else {
      setIndex(index => {
        return index + 1;
      });
    }
  }

  useEffect(() => {
    const form = document.getElementById(`${_id}`);
    form[props.forms[index].name].value = form_data.current[props.forms[index].name];
  }, []);

  useEffect(() => {
    const form = document.getElementById(`${_id}`);
    form[props.forms[index].name].value = form_data.current[props.forms[index].name];
  });

  return (
    <div>
      <div className="box">
        {index === 0 ? <div style={{ display: "none" }}></div> : <button onClick={back}>{"<- Previous"}</button>}
        <p>{props.forms[index].text(form_data.current)}</p>
      </div>
      <form
        id={`${_id}`}
        onSubmit={e => {
          e.preventDefault();
          inputHandler(props.forms[index].name);
        }}
      >
        {props.forms[index].input(form_data.current)}
        <input type="submit" value={index === props.forms.length - 1 ? "Submit 🐶" : "Next ->"} />
      </form>
    </div>
  );
}

export default Main;
