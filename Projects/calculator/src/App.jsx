import { useState } from "react";
import css from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [text, setText] = useState("");
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

  const onClickbuttons = (key) => {
    if (key === "C") {
      setText("");
    } else if (key === "=") {
      let values = text;
      let result = eval(values);
      setText(result);
    } else {
      let oldText = text;
      setText(oldText + key);
    }
  };

  // const onClear = (key) => {};
  return (
    <>
      <div className={`text-center ${css.calculator}`}>
        <Display text={text} />
        <Buttons keys={buttons} onClickbuttons={onClickbuttons} />
      </div>
    </>
  );
}

export default App;
