import React from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";

function Controls() {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleAddition = () => {
    dispatch({
      type: "addition",
      payload: {
        number: Number(inputValue.current.value),
      },
    });
    inputValue.current.value = "";
  };
  const handleSubtraction = () => {
    dispatch({
      type: "subtraction",
      payload: {
        number: Number(inputValue.current.value),
      },
    });
    inputValue.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({
      type: "privacy",
    });
  };
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success mx-1"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1"
          onClick={handlePrivacy}
        >
          change privacy
        </button>
      </div>
      <div
        className="input-group my-3 text-center"
        style={{ width: "22%", margin: "auto" }}
      >
        <input
          type="number"
          className="form-control"
          placeholder="Enter a number"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          ref={inputValue}
        />
        <div className="input-group-append mx-2">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleAddition}
          >
            Add
          </button>
          <button
            className="btn btn-outline-secondary mx-2"
            type="button"
            onClick={handleSubtraction}
          >
            Subtract
          </button>
        </div>
      </div>
    </>
  );
}

export default Controls;
