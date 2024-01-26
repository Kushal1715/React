import React, { useContext, useRef } from "react";
import { PostListStore } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostListStore);
  const titleElement = useRef("");
  const messageElement = useRef("");
  const reactionElement = useRef("");
  const hashtagsElement = useRef("");
  const userElement = useRef("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    let title = titleElement.current.value;
    let message = messageElement.current.value;
    let reaction = reactionElement.current.value;
    let hashtags = hashtagsElement.current.value;
    let user = userElement.current.value;

    addPost(title, message, reaction, hashtags, user);
    titleElement.current.value = "";
    messageElement.current.value = "";
    reactionElement.current.value = "";
    hashtagsElement.current.value = "";
    userElement.current.value = "";
  };
  return (
    <div>
      <form className="formPost" onSubmit={handleOnSubmit}>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">User</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={userElement}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={titleElement}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Message</label>
          <textarea
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            rows="4"
            cols="50"
            ref={messageElement}
          ></textarea>
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Reaction</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={reactionElement}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Hashtags</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={hashtagsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
