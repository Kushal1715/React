import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostListStore } from "../store/post-list-store";

function Post({ list }) {
  const { deletePost } = useContext(PostListStore);
  return (
    <div>
      <div className="card post" style={{ width: "60%" }}>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(list.key)}
        >
          <TiDelete />
          <span className="visually-hidden">unread messages</span>
        </span>
        <div className="card-body">
          <h5 className="card-title">{list.title}</h5>
          <p className="card-text">{list.body}</p>
          <a href="#" className="btn btn-primary">
            {list.hashtags.map((tags) => tags + " ")}
          </a>
          <div className="alert alert-success my-3" role="alert">
            Reacted by {list.reactions} peoples.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
