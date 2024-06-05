import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import profile1 from "../../assets/person/1.jpeg";
import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.logo}>Kushalsocial</div>
        </div>
        <div className={styles.centerContainer}>
          <div className={styles.searchBar}>
            <div className={styles.search}>
              <FaSearch />
            </div>
            <input
              placeholder="search for friends,posts or videos"
              className={styles.searchInput}
            />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.headings}>
            <h3>Homepage</h3>
            <h3>Timelines</h3>
          </div>
          <div className={styles.rightIcons}>
            <div className={styles.icons}>
              <BsPerson />
              <span className={styles.iconBadge}>1</span>
            </div>
            <div className={styles.icons}>
              <MdOutlineMessage />
              <span className={styles.iconBadge}>5</span>
            </div>
            <div className={styles.icons}>
              <IoIosNotificationsOutline />
              <span className={styles.iconBadge}>2</span>
            </div>
          </div>
          <img
            src={profile1}
            alt="Profile image"
            className={styles.profileImg}
          />
        </div>
      </div>
    </>
  );
}

export default Topbar;
