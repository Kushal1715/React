import React, { useContext, useRef } from "react";
import { PostListStore } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

function CreatePost() {
  // const { addPost } = useContext(PostListStore);
  // const navigate = useNavigate();
  // const titleElement = useRef("");
  // const messageElement = useRef("");
  // const reactionElement = useRef("");
  // const hashtagsElement = useRef("");
  // const userElement = useRef("");

  // const handleOnSubmit = (event) => {
  //   // event.preventDefault();
  //   // let title = titleElement.current.value;
  //   // let message = messageElement.current.value;
  //   // let reaction = reactionElement.current.value;
  //   // let hashtags = hashtagsElement.current.value;
  //   // let user = userElement.current.value;

  //   // titleElement.current.value = "";
  //   // messageElement.current.value = "";
  //   // reactionElement.current.value = "";
  //   // hashtagsElement.current.value = "";
  //   // userElement.current.value = "";

  //   fetch("https://dummyjson.com/posts/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       title: title,
  //       body: message,
  //       reactions: reaction,
  //       tags: hashtags,
  //       userId: user,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((post) => {
  //       addPost(post);
  //       navigate("/");
  //     });
  // };

  return (
    <div>
      <Form method="post" className="formPost">
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">User</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="userId"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="title"
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
            name="body"
          ></textarea>
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Reaction</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="reactions"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Hashtags</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </div>
  );
}

export async function createPostAction(data) {
  let formData = await data.request.formData();
  let inputData = Object.fromEntries(formData);
  console.log(inputData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      // addPost(post);
    });
  return redirect("/");
}
export default CreatePost;
