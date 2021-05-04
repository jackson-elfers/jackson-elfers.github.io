import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../config";

function Main(props) {
  return (
    <div>
      <select type="select" name={props.name}>
        <option value="Canine">Canine</option>
        <option value="Feline">Feline</option>
      </select>
    </div>
  );
}
export default Main;
