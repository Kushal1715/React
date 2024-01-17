import React, { useState } from "react";

function TodoList({ handleOnClick }) {
  const [text, setText] = useState();
  const [date, setDate] = useState();

  const handleDoList = (event) => {
    setText(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  return (
    <div>
      <div className="row container my-2">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            className="py-1"
            style={{ width: "100%" }}
            onChange={handleDoList}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="py-1"
            style={{ width: "100%" }}
            onChange={handleDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success mx-4"
            style={{ width: "100%" }}
            onClick={() => handleOnClick(text, date)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
