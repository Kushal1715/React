import React, { useContext, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { ItemsFromContext } from "../store/items-store";

function TodoList() {
  const { toAddItems } = useContext(ItemsFromContext);
  const updateText = useRef("");
  const updateDate = useRef("");

  const handleAddList = (event) => {
    event.preventDefault();
    let text = updateText.current.value;
    let date = updateDate.current.value;
    toAddItems(text, date);
    updateText.current.value = "";
    updateDate.current.value = "";
  };
  return (
    <div>
      <form className="row container my-2" onSubmit={handleAddList}>
        <div className="col-6">
          <input
            ref={updateText}
            type="text"
            placeholder="Enter Todo here"
            className="py-1"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-4">
          <input
            ref={updateDate}
            type="date"
            className="py-1"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success mx-4"
            style={{ width: "100%" }}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoList;
