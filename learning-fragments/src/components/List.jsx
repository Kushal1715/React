import React from "react";

function List(props) {
  return (
    <div>
      <li key={props.item} className="list-group-item">
        {props.item}
        <button
          type="button"
          class="btn btn-primary"
          onClick={props.handleOnClick}
        >
          shoot
        </button>
      </li>
    </div>
  );
}

export default List;
