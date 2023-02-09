import { createContext, useContext, useEffect, useState } from "react";
import { getTimelinePosts } from "../api";
import { AuthContext } from "./AuthContext";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [timelinePosts, setTimelinePosts] = useState([]);
  const { loggedUser } = useContext(AuthContext);

  useEffect(() => {
    getTimelinePosts(loggedUser._id).then((res) => {
      setTimelinePosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    });
  }, []);

  const onCreatePost = (post) => {
    setTimelinePosts((oldState) => {
      const newState = [...oldState, post];
      return newState.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      });
    });
  };

  const onLikePost = (userId, postId) => {
    setTimelinePosts((state) => {
      const post = state.find((x) => x._id === postId);
      const likes = post.likes || [];

      if (post.likes.includes(userId)) {
        const i = post.likes.indexOf(userId);
        likes.splice(i, 1);
      } else {
        likes.push(userId);
      }

      const newState = [
        ...state.filter((x) => x._id !== postId),
        { ...post, likes },
      ];

      return newState.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      });
    });
  };

  return (
    <PostContext.Provider value={{ timelinePosts, onLikePost, onCreatePost }}>
      {children}
    </PostContext.Provider>
  );
};
