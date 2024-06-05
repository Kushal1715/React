import React from "react";
import styles from "./Rightbar.module.css";
import gift from "../../assets/gift.png";
import ad from "../../assets/ad.png";
import friend from "../../assets/person/3.jpeg";

function Rightbar() {
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightContainer}>
        <div className={styles.topContainer}>
          <img src={gift} alt="" className={styles.gift} />
          <p className={styles.birthdayText}>
            <b>Kane Williamson</b> and <b>3 other friends</b> have birthday
            today.
          </p>
        </div>
        <img src={ad} alt="" className={styles.ad} />
        <div className={styles.bottomContainer}>
          <h3 className={styles.friends}>Online Friends</h3>
          <div className={styles.onlineFriends}>
            <img src={friend} alt="" className={styles.friend} />
            <span className={styles.online}></span>
            <h4 className={styles.name}>Caroline Sympony</h4>
          </div>
          <div className={styles.onlineFriends}>
            <img src={friend} alt="" className={styles.friend} />
            <span className={styles.online}></span>
            <h4 className={styles.name}>Caroline Sympony</h4>
          </div>
          <div className={styles.onlineFriends}>
            <img src={friend} alt="" className={styles.friend} />
            <span className={styles.online}></span>
            <h4 className={styles.name}>Caroline Sympony</h4>
          </div>
          <div className={styles.onlineFriends}>
            <img src={friend} alt="" className={styles.friend} />
            <span className={styles.online}></span>
            <h4 className={styles.name}>Caroline Sympony</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
