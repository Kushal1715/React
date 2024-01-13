import React from "react";
import css from "./Components.module.css";

function Components(props) {
  const { children } = props;
  return <div className={css.Component}>{children}</div>;
}

export default Components;
