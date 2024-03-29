import "./App.css";
import AppName from "./components/AppName";
import NoItem from "./components/NoItem";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleOnClick = (toAddItem, dueDate) => {
    // console.log(`${toAddItem} and ${dueDate}`);
    // let newItems = [...items, { item: toAddItem, date: dueDate }]; //Spread operator
    setItems((currentItems) => [
      //updating state from previous state
      ...currentItems,
      { item: toAddItem, date: dueDate },
    ]);
  };

  const toDelete = (ditem) => {
    let deletingItem = items.filter((item) => item.item != ditem);
    //filter filters the item into new array if the contition is true
    setItems(deletingItem);
  };
  return (
    <div>
      <AppName />
      <div className="container" style={{ width: "40%" }}>
        <TodoList handleOnClick={handleOnClick} />
        {items.length === 0 && <NoItem />}
        <TodoItems items={items} toDelete={toDelete} />
      </div>
    </div>
  );
}

export default App;
