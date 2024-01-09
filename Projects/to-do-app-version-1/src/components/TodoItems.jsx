import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ items }) {
  return (
    <>
      {items.map((item) => (
        <TodoItem item={item.item} date={item.date} />
      ))}
    </>
  );
}

export default TodoItems;
