import React, { useContext } from "react";
import { ItemsFromContext } from "../store/items-store";

function NoItem() {
  const { items } = useContext(ItemsFromContext);
  return items.length == 0 && <center>No items in the list</center>;
}

export default NoItem;
