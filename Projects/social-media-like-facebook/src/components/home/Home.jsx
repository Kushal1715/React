import React from "react";
import Topbar from "../topbar/Topbar";
import styles from "./Home.module.css";
import Leftbar from "../leftbar/Leftbar";
import Feed from "../feed/Feed";
import Rightbar from "../rightbar/Rightbar";

function Home() {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
