import React from "react";
import css from "./Display.module.css";

function Display(props) {
  return (
    <input className={css.display} type="text" value={props.text} readOnly />
  );
}

export default Display;
