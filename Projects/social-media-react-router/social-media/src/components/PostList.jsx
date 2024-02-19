import React, { useContext } from "react";
import Post from "./Post";
import { PostListStore } from "../store/post-list-store";
import EmptyList from "./EmptyList";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

function PostList() {
  // const { postlist, loading } = useContext(PostListStore);
  const postlist = useLoaderData();

  return (
    <>
      {postlist.map((list) => (
        <Post key={list.id} list={list} />
      ))}
    </>
  );
}

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((resObj) => {
      return resObj.posts;
    });
};
export default PostList;
