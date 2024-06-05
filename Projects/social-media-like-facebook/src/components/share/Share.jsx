import React from "react";
import styles from "./Share.module.css";
import image from "../../assets/person/1.jpeg";
import { IoImages } from "react-icons/io5";
import { BiSolidTagAlt } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";

function Share() {
  return (
    <div className={styles.share}>
      <div className={styles.topContainer}>
        <img src={image} alt="" className={styles.profileImg} />
        <input
          placeholder="What's in your mind Kushal?"
          className={styles.status}
        />
      </div>
      <hr className={styles.lineBreak} />
      <div className={styles.bottomContainer}>
        <div className={styles.contents}>
          <div className={styles.content}>
            <IoImages className={styles.photo} />
            <span className={styles.iconText}>Photo or Video</span>
          </div>
          <div className={styles.content}>
            <BiSolidTagAlt className={styles.tag} />
            <span className={styles.iconText}>Tag</span>
          </div>
          <div className={styles.content}>
            <FaLocationDot className={styles.location} />
            <span className={styles.iconText}>Location</span>
          </div>
          <div className={styles.content}>
            <MdEmojiEmotions className={styles.emoji} />
            <span className={styles.iconText}>Feelings</span>
          </div>
          <button className={styles.shareBtn}>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
