import React, { useState } from "react";
import styles from "./Post.module.css";
import img from "../../assets/person/1.jpeg";
import { SlOptionsVertical } from "react-icons/sl";
import img2 from "../../assets/post/1.jpeg";
import img3 from "../../assets/like.png";
import img4 from "../../assets/heart.png";
import { Users } from "../../dummyData";

function Post({ post }) {
  const usern = Users.filter((user) => user.id === post.id);

  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);

  const handleLikeButton = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };
  return (
    <div className={styles.post}>
      <div className={styles.topContainer}>
        <div className={styles.topRight}>
          <img src={img} alt="" className={styles.postImg} />
          <h4 className={styles.username}>
            {usern.map((user) => user.username)}
          </h4>
          <span className={styles.time}>{post.date}</span>
        </div>
        <div className={styles.topLeft}>
          <SlOptionsVertical className={styles.options} />
        </div>
      </div>
      <div className={styles.middleContainer}>
        <p className={styles.postStatus}>{post.desc}</p>
        <img src={post.photo} alt="" className={styles.postImage} />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeft}>
          <img
            src={img3}
            alt=""
            className={styles.reactions}
            onClick={handleLikeButton}
          />
          <img
            src={img4}
            alt=""
            className={styles.reactions}
            onClick={handleLikeButton}
          />
          <p className={styles.like}>{like} people like it</p>
        </div>
        <div className={styles.bottomRight}>
          <p className={styles.comments}>{post.comment} comments</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
