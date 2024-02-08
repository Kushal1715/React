import { createContext, useReducer } from "react";

export const PostListStore = createContext({
  postlist: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const PostListParent = ({ children }) => {
  const reducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === "delete_post") {
      newPostList = currentPostList.filter((post) => post.id != action.id);
    } else if (action.type === "read_post") {
      newPostList = action.postss;
    } else if (action.type === "add_post") {
      newPostList = [
        ...currentPostList,
        {
          key: action.key,
          title: action.title,
          body: action.body,
          reactions: action.reaction,
          hashtags: [action.hashtags],
          user: action.user,
        },
      ];
    }
    return newPostList;
  };
  const [postlist, postlistDispatcher] = useReducer(reducer, []);

  const addInitialPost = (postss) => {
    postlistDispatcher({
      type: "read_post",
      postss: postss,
    });
  };

  const addPost = (title, body, reaction, hashtags, user) => {
    postlistDispatcher({
      type: "add_post",
      key: Date.now(),
      title: title,
      body: body,
      reaction: reaction,
      hashtags: hashtags,
      user: user,
    });
  };

  const deletePost = (id) => {
    postlistDispatcher({
      type: "delete_post",
      id: id,
    });
  };
  return (
    <PostListStore.Provider
      value={{ postlist, addPost, deletePost, addInitialPost }}
    >
      {children}
    </PostListStore.Provider>
  );
};

export default PostListParent;
