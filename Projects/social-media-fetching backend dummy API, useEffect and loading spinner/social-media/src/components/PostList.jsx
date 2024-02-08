import React, { useContext, useState, useEffect } from "react";
import Post from "./Post";
import { PostListStore } from "../store/post-list-store";
import EmptyList from "./EmptyList";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postlist, addInitialPost } = useContext(PostListStore);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
      console.log("Dismissed");
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && <EmptyList />}
      {!fetching && postlist.map((list) => <Post key={list.id} list={list} />)}
    </>
  );
}

export default PostList;
