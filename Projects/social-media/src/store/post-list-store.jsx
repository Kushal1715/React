import { createContext, useReducer, useEffect } from "react";

export const PostListStore = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListParent = ({ children }) => {
  const reducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === "delete_post") {
      newPostList = currentPostList.filter((post) => post.key != action.id);
    } else if (action.type === "add_initial_post") {
      newPostList = action.posts;
    } else if (action.type === "add_post") {
      newPostList = [action.post, ...currentPostList];
    }
    return newPostList;
  };
  const [postlist, postlistDispatcher] = useReducer(reducer, []);

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

  const addInitialPost = (posts) => {
    postlistDispatcher({
      type: "add_initial_post",
      posts: posts,
    });
  };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((resObj) => addInitialPost(resObj.posts));
  }, []);
  return (
    <PostListStore.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostListStore.Provider>
  );
};

export default PostListParent;
