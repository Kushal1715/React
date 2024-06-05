import React from "react";
import styles from "./Leftbar.module.css";
import { MdOutlineRssFeed } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { MdGroups2 } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { FaCalendar } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import profile from "../../assets/person/2.jpeg";

function Leftbar() {
  return (
    <div className={styles.leftbar}>
      <div className={styles.leftContent}>
        <ul className={styles.ListContent}>
          <li className={styles.lists}>
            <MdOutlineRssFeed />
            <span className={styles.listName}>Feed</span>
          </li>
          <li className={styles.lists}>
            <BsChatSquareTextFill />
            <span className={styles.listName}>Chats</span>
          </li>
          <li className={styles.lists}>
            <BiSolidVideos />
            <span className={styles.listName}>Videos</span>
          </li>
          <li className={styles.lists}>
            <MdGroups2 />
            <span className={styles.listName}>Groups</span>
          </li>
          <li className={styles.lists}>
            <IoBookmarkSharp />
            <span className={styles.listName}>Bookmarks</span>
          </li>
          <li className={styles.lists}>
            <BsFillQuestionSquareFill />
            <span className={styles.listName}>Questions</span>
          </li>
          <li className={styles.lists}>
            <FiShoppingBag />
            <span className={styles.listName}>Jobs</span>
          </li>
          <li className={styles.lists}>
            <FaCalendar />
            <span className={styles.listName}>Events</span>
          </li>
          <li className={styles.lists}>
            <FaGraduationCap />
            <span className={styles.listName}>Feed</span>
          </li>
        </ul>
        <button className={styles.showMore}>Show More</button>
        <hr className={styles.border}></hr>
        <div className={styles.moreFriends}>
          <div className={styles.morePeoples}>
            <img src={profile} alt="" className={styles.profileImg} />
            <span className={styles.profileName}>John Doe</span>
          </div>
          <div className={styles.morePeoples}>
            <img src={profile} alt="" className={styles.profileImg} />
            <span className={styles.profileName}>John Doe</span>
          </div>
          <div className={styles.morePeoples}>
            <img src={profile} alt="" className={styles.profileImg} />
            <span className={styles.profileName}>John Doe</span>
          </div>
          <div className={styles.morePeoples}>
            <img src={profile} alt="" className={styles.profileImg} />
            <span className={styles.profileName}>John Doe</span>
          </div>
          <div className={styles.morePeoples}>
            <img src={profile} alt="" className={styles.profileImg} />
            <span className={styles.profileName}>John Doe</span>
          </div>
          <div className={styles.morePeoples}>
            <img src={profile} alt="" className={styles.profileImg} />
            <span className={styles.profileName}>John Doe</span>
          </div>
          <div className={styles.morePeoples}>
            <img src={profile} alt="" className={styles.profileImg} />
            <span className={styles.profileName}>John Doe</span>
          </div>
          <div className={styles.morePeoples}>
            <img src={profile} alt="" className={styles.profileImg} />
            <span className={styles.profileName}>John Doe</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
