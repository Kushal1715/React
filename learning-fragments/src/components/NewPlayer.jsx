import React from "react";

function NewPlayer({ handleOnChange, para }) {
  return (
    <>
      <input
        type="text"
        placeholder="Add a new player"
        onChange={handleOnChange}
      />
      <p>{para}</p>
    </>
  );
}

export default NewPlayer;
