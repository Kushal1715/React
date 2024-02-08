import React, { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  let nepalTime = time.toLocaleString();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p className="fw-bold">This is the current time: {nepalTime}</p>
    </div>
  );
}

export default Time;
