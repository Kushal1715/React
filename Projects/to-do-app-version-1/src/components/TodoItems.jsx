import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ items, toDelete }) {
  return (
    <>
      {items.map((item) => (
        <TodoItem
          item={item.item}
          date={item.date}
          key={item.item}
          toDelete={toDelete}
        />
      ))}
    </>
  );
}

export default TodoItems;
