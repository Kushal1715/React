import css from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={`text-center ${css.calculator}`}>
        <Display />
        <Buttons keys={buttons} />
      </div>
    </>
  );
}

export default App;
