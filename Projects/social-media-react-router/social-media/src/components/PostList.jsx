import React, { useContext } from "react";
import Post from "./Post";
import { PostListStore } from "../store/post-list-store";
import EmptyList from "./EmptyList";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postlist, loading } = useContext(PostListStore);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && <EmptyList />}
      {!loading && postlist.map((list) => <Post key={list.id} list={list} />)}
    </>
  );
}

export default PostList;
