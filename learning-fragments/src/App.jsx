import React from "react";
import ItemHeading from "./components/ItemHeading";
import EmptyList from "./components/EmptyList";
import ItemList from "./components/ItemList";
function App() {
  let items = ["Cristiano Ronaldo", "Modric", "Ramos", "Marcelo"];
  // let items = [];
  return (
    <>
      <ItemHeading heading="football players" />
      <EmptyList items={items} />
      <ItemList items={items} />
    </>
  );
}

export default App;
