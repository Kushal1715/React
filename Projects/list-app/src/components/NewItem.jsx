import React from "react";

function NewItem(props) {
  return (
    <input
      type="text"
      placeholder="Add new food"
      onKeyDown={props.handleOnKeyDown}
    />
  );
}

export default NewItem;
