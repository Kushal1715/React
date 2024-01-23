import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { ItemsFromContext } from "../store/items-store";

function TodoItems() {
  const { items } = useContext(ItemsFromContext);
  return (
    <>
      {items.map((item) => (
        <TodoItem item={item.item} date={item.date} key={item.item} />
      ))}
    </>
  );
}

export default TodoItems;
