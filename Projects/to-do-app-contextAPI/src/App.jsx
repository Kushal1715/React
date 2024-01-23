import "./App.css";
import AppName from "./components/AppName";
import NoItem from "./components/NoItem";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { ItemsFromContext } from "./store/items-store";

function App() {
  const [items, setItems] = useState([]);

  const toAddItems = (toAddItem, dueDate) => {
    // console.log(`${toAddItem} and ${dueDate}`);
    // let newItems = [...items, { item: toAddItem, date: dueDate }]; //Spread operator
    setItems((currentItems) => [
      //updating state from previous state
      ...currentItems,
      { item: toAddItem, date: dueDate },
    ]);
  };

  const toDeleteItems = (ditem) => {
    let deletingItem = items.filter((item) => item.item != ditem);
    //filter filters the item into new array if the contition is true
    setItems(deletingItem);
  };

  return (
    <div>
      <ItemsFromContext.Provider value={{ items, toAddItems, toDeleteItems }}>
        <AppName />
        <div className="container" style={{ width: "40%" }}>
          <TodoList />
          <NoItem />
          <TodoItems />
        </div>
      </ItemsFromContext.Provider>
    </div>
  );
}

export default App;
