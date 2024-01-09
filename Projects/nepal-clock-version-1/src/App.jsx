import AppName from "./components/AppName";
import Memo from "./components/Memo";
import Time from "./components/Time";

function App() {
  return (
    <div className="container text-center">
      <div style={{ margin: "250px" }}>
        <AppName />
        <Memo />
        <Time />
      </div>
    </div>
  );
}

export default App;
