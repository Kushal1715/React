import React from "react";
import css from "./ItemHeading.module.css";

function ItemHeading({ heading }) {
  return (
    <div>
      <h1 class={`${css["head"]} text-center`}>List of {heading}</h1>
    </div>
  );
}

export default ItemHeading;
