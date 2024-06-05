import React from "react";
import { useSelector } from "react-redux";
function Display() {
  const counter = useSelector((store) => store.counter);
  return <p className="card-text">Counter current value: {counter}</p>;
}

export default Display;
