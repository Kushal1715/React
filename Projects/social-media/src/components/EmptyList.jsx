import React, { useContext } from "react";
import { PostListStore } from "../store/post-list-store";

function EmptyList() {
  const { postlist } = useContext(PostListStore);
  return (
    <>
      {postlist.length === 0 && (
        <h1 className="text-center">No posts yet!!!</h1>
      )}
    </>
  );
}

export default EmptyList;
