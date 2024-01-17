import { useState } from "react";
import Container from "./components/Container";
import ListHeading from "./components/ListHeading";
import ListItems from "./components/ListItems";
import NewItem from "./components/NewItem";
import NoItems from "./components/NoItems";

function App() {
  const [active, setActive] = useState([]);
  const [foods, addItem] = useState(["momo", "pizza", "dal bhaat", "icecream"]);
  // const [text, setText] = useState("hello");
  const handleOnClick = (item) => {
    console.log(`You bought ${item}`);
    let newArr = [...active, item];
    setActive(newArr);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newItem = event.target.value;
      let newFoods = [...foods, newItem];
      addItem(newFoods);
    }
    // setText(event.target.value);
  };
  return (
    <>
      <Container>
        <ListHeading />
        <NewItem handleOnKeyDown={handleOnKeyDown} />
        {/* <p>{text}</p> */}
        <NoItems items={foods} />
        <ListItems
          foods={foods}
          handleOnClick={handleOnClick}
          active={active}
        />
      </Container>
    </>
  );
}

export default App;
