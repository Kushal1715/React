import React from "react";
import css from "./Buttons.module.css";

function Buttons(props) {
  return (
    <div className={css.buttonContainer}>
      {props.keys.map((key) => (
        <button
          className={css.buttons}
          key={key}
          onClick={() => props.onClickbuttons(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
