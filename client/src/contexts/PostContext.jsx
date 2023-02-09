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


  return (
    <PostContext.Provider value={{ timelinePosts onCreatePost }}>
      {children}
    </PostContext.Provider>
  );
};
