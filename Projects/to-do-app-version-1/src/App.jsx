import "./App.css";
import AppName from "./components/AppName";
import NoItem from "./components/NoItem";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { item: "Buy Milk", date: "4/10/2023" },
    { item: "Go to College", date: "4/10/2023" },
    { item: "Complete your project", date: "4/01/2024" },
  ]);

  const handleOnClick = (toAddItem, dueDate) => {
    // console.log(`${toAddItem} and ${dueDate}`);
    let newItems = [...items, { item: toAddItem, date: dueDate }];
    setItems(newItems);
  };

  const toDelete = (ditem) => {
    let deletingItem = items.filter((item) => item.item != ditem);
    setItems(deletingItem);
    console.log(ditem);
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
