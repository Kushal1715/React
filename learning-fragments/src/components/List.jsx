import React from "react";

function List(props) {
  return (
    <div>
      <li key={props.item} className="list-group-item">
        {props.item}
      </li>
    </div>
  );
}

export default List;
