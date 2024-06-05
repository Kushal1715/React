import { useState } from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars }) {
  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (index) => {
    // console.log(index);
    setClick(index);
  };

  const handleOnMouse = (index) => {
    console.log(index);
    setHover(index);
  };

  const handleOnLeave = (index) => {
    setHover(click);
  };
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || click) ? "active" : "inactive"}
            size={40}
            onClick={() => handleOnClick(index)}
            onMouseEnter={() => handleOnMouse(index)}
            onMouseLeave={() => handleOnLeave(index)}
          />
        );
      })}
    </div>
  );
}
