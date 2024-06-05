import { useState } from "react";
import ItemList from "./ItemList";
export default function Items({ items }) {
  const [toggle, setToggle] = useState(false);
  const [list, setList] = useState({});
  const handleToggle = (currentLabel) => {
    setToggle(!toggle);
    setList({
      ...list,
      [currentLabel]: !list[currentLabel],
    });
  };
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <li>{items.label}</li>
        {items && items.children && items.children.length > 0 && (
          <span onClick={() => handleToggle(items.label)}>
            {toggle ? "-" : "+"}
          </span>
        )}
      </div>
      {items &&
        items.children &&
        items.children.length > 0 &&
        list[items.label] && <ItemList list={items.children} />}
    </>
  );
}
