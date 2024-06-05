import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Display from "./components/Display";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="card text-center">
        <div className="card-header"></div>
        <div className="card-body">
          <Header />
          {privacy ? <Privacy /> : <Display />}
          <Controls />
        </div>
        <div className="card-footer text-body-secondary">React + Redux</div>
      </div>
    </>
  );
}

export default App;
