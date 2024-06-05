import Items from "./Items.jsx";
export default function ItemList({ list }) {
  return (
    <div>
      <ul>
        {list &&
          list.length &&
          list.map((items) => (
            <div key={items.label}>
              <Items items={items} />
            </div>
          ))}
      </ul>
    </div>
  );
}
