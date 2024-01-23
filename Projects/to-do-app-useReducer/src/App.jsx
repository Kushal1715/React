import "./App.css";
import AppName from "./components/AppName";
import NoItem from "./components/NoItem";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import { useReducer } from "react";
import { ItemsFromContext } from "./store/items-store";

const reducer = (state, action) => {
  let newItems = state;
  if (action.type === "New_items") {
    newItems = [...state, { item: action.toAddItem, date: action.dueDate }];
  } else if (action.type === "Delete_items") {
    newItems = state.filter((item) => action.ditem != item.item);
  }
  return newItems;
};

function App() {
  // const [items, setItems] = useState([]);
  const [items, itemsDispatch] = useReducer(reducer, []);

  const toAddItems = (toAddItem, dueDate) => {
    // // console.log(`${toAddItem} and ${dueDate}`);
    // // let newItems = [...items, { item: toAddItem, date: dueDate }]; //Spread operator
    // setItems((currentItems) => [
    //   //updating state from previous state
    //   ...currentItems,
    //   { item: toAddItem, date: dueDate },
    // ]);

    itemsDispatch({
      type: "New_items",
      toAddItem: toAddItem,
      dueDate: dueDate,
    });
  };

  const toDeleteItems = (ditem) => {
    // let deletingItem = items.filter((item) => item.item != ditem);
    // //filter filters the item into new array if the contition is true
    // setItems(deletingItem);

    itemsDispatch({
      type: "Delete_items",
      ditem: ditem,
    });
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
