import "./App.css";
import AppName from "./components/AppName";
import NoItem from "./components/NoItem";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";
import ContextProviderComponent from "./store/items-store";
function App() {
  return (
    <div>
      <ContextProviderComponent>
        <AppName />
        <div className="container" style={{ width: "40%" }}>
          <TodoList />
          <NoItem />
          <TodoItems />
        </div>
      </ContextProviderComponent>
    </div>
  );
}

export default App;
