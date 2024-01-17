import React from "react";

function NoItems({ items }) {
  return <div>{items.length === 0 && "I am not hungry"}</div>;
}

export default NoItems;
