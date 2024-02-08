import React, { useContext, useEffect, useState } from "react";
import { PostListStore } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";

function EmptyList() {
  const { postlist } = useContext(PostListStore);

  return (
    <>
      {postlist.length === 0 && (
        <div className="text-center my-3">
          <h1>No posts yet!!!</h1>
        </div>
      )}
    </>
  );
}

export default EmptyList;
