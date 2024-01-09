import React from "react";

function EmptyList(props) {
  return <div>{props.items.length === 0 && <h3>List items is empty</h3>}</div>;
}

export default EmptyList;
