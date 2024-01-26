import React, { useContext } from "react";
import Post from "./Post";
import { PostListStore } from "../store/post-list-store";
import EmptyList from "./EmptyList";

function PostList() {
  const { postlist } = useContext(PostListStore);

  return (
    <>
      <EmptyList />
      {postlist.map((list) => (
        <Post key={list.key} list={list} />
      ))}
    </>
  );
}

export default PostList;
