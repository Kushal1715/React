import React from "react";
import List from "./List";

function ItemList(props) {
  let { items } = props;
  const handleOnClick = () => {
    console.log(`${items} scored a goal`);
  };
  return (
    <div>
      <ul className="list-group list-group-flush">
        {items.map((item) => (
          //key is stored only in virtual dom
          <List item={item} key={item} handleOnClick={handleOnClick} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
