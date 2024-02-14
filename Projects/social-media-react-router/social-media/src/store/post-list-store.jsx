import { createContext, useEffect, useReducer, useState } from "react";

export const PostListStore = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListParent = ({ children }) => {
  const reducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === "delete_post") {
      newPostList = currentPostList.filter((post) => post.id != action.id);
    } else if (action.type === "add_post") {
      newPostList = [action.post, ...currentPostList];
    } else if (action.type === "add_initial_post") {
      newPostList = action.post;
    }
    return newPostList;
  };
  const [postlist, postlistDispatcher] = useReducer(reducer, []);
  const [loading, setLoading] = useState(false);

  const addPost = (post) => {
    postlistDispatcher({
      type: "add_post",
      post: post,
    });
  };

  const deletePost = (id) => {
    postlistDispatcher({
      type: "delete_post",
      id: id,
    });
  };

  const addInitialPost = (post) => {
    postlistDispatcher({
      type: "add_initial_post",
      post: post,
    });
  };

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    setLoading(true);

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((resObj) => {
        addInitialPost(resObj.posts);
        setLoading(false);
      });

    return () => {
      controller.abort(signal);
    };
    setLoading(false);
  }, []);

  return (
    <PostListStore.Provider value={{ postlist, addPost, deletePost, loading }}>
      {children}
    </PostListStore.Provider>
  );
};

export default PostListParent;
