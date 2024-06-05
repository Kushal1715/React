import React from "react";
import { useSelector } from "react-redux";
function Display() {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="card-text">Counter current value: {counterVal}</p>;
}

export default Display;
