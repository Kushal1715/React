import React, { Component } from "react";
import ItemHeading from "./components/ItemHeading";
import EmptyList from "./components/EmptyList";
import ItemList from "./components/ItemList";
import Components from "./components/Components";
import NewPlayer from "./components/NewPlayer";
function App() {
  let para = "adding new player";

  let items = ["Cristiano Ronaldo", "Modric", "Ramos", "Marcelo"];
  const handleOnChange = (event) => {
    console.log(event.target.value);
    para = event.target.value;
  };
  // let items = [];
  return (
    <>
      <Components>
        <ItemHeading heading="football players" />
        <EmptyList items={items} />
        <NewPlayer handleOnChange={handleOnChange} para={para} />
        <ItemList items={items} />
      </Components>
      <Components>
        <p>This is a list of football players</p>
      </Components>
    </>
  );
}

export default App;
