import React from "react";
import css from "./TodoItem.module.css";

function TodoItem(props) {
  return (
    <div>
      <div className={`row container ${css.items} my-2`}>
        <div className="col-6">{props.item}</div>
        <div className="col-4">{props.date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger mx-4"
            style={{ width: "100%" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
