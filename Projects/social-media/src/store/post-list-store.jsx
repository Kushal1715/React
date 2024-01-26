import { createContext, useReducer } from "react";

export const PostListStore = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListParent = ({ children }) => {
  const defaultPostList = [
    {
      key: 1,
      title: "Find a job",
      body: "I am a react developer who is searching to find a job in react",
      reactions: 3,
      hashtags: ["job", "react"],
      user: "user-07",
    },
    {
      key: 2,
      title: "Buy a car",
      body: "I am going to buy a car which was always my dream since my childhood",
      reactions: 100,
      hashtags: ["car", "buy"],
      user: "user-1",
    },
  ];

  const reducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === "delete_post") {
      newPostList = currentPostList.filter((post) => post.key != action.id);
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
  const [postlist, postlistDispatcher] = useReducer(reducer, defaultPostList);

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
    <PostListStore.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostListStore.Provider>
  );
};

export default PostListParent;
