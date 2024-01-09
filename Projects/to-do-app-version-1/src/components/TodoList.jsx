import React from "react";

function TodoList() {
  return (
    <div>
      <div className="row container my-2">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            className="py-1"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-4">
          <input type="date" className="py-1" style={{ width: "100%" }} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success mx-4"
            style={{ width: "100%" }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
