import React from "react";

function Time() {
  let time = new Date();
  let nepalTime = time.toLocaleString();
  return (
    <div>
      <p className="fw-bold">This is the current time: {nepalTime}</p>
    </div>
  );
}

export default Time;
