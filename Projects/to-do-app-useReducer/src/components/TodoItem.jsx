import React, { useContext } from "react";
import css from "./TodoItem.module.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { ItemsFromContext } from "../store/items-store";

function TodoItem(props) {
  const { toDeleteItems } = useContext(ItemsFromContext);
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
            onClick={() => toDeleteItems(props.item)}
          >
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
