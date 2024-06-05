import ItemList from "./ItemList.jsx";
import menus from "./data.js";
export default function TreeView() {
  return (
    <div>
      <ItemList list={menus} />
    </div>
  );
}
