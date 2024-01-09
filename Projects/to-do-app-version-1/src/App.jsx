import "./App.css";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";

function App() {
  const items = [
    { item: "Buy Milk", date: "4/10/2023" },
    { item: "Go to College", date: "4/10/2023" },
    { item: "Complete your project", date: "4/01/2024" },
  ];
  return (
    <div>
      <AppName />
      <div className="container" style={{ width: "40%" }}>
        <TodoList />
        <TodoItems items={items} />
      </div>
    </div>
  );
}

export default App;
