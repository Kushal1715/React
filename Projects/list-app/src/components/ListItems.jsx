import React from "react";

function ListItems(props) {
  return (
    <>
      <div>
        <ul class="list-group">
          {props.foods.map((item) => (
            <li
              class={`list-group-item ${props.active.length != 0 && "active"}`}
              key={item}
            >
              {item}
              <button
                type="button"
                class="btn btn-primary"
                style={{ float: "right" }}
                onClick={() => props.handleOnClick(item)}
              >
                Buy
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListItems;
