import { createContext, useContext, useEffect, useState } from "react";
import { getAllUserPosts, getTimelinePosts } from "../api";
import { AuthContext } from "./AuthContext";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [searchTimelinePosts, setSearchTimelinePosts] = useState("");
  const [searchUserPosts, setSearchUserPosts] = useState("");
  const [timelinePosts, setTimelinePosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { loggedUser } = useContext(AuthContext);

  useEffect(() => {
    if (loggedUser.email) {
      getTimelinePosts(loggedUser._id)
        .then((res) => {
          setTimelinePosts(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
          setLoading(true);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [searchTimelinePosts, loggedUser]);

  useEffect(() => {
    if (loggedUser.username) {
      getAllUserPosts(loggedUser.username)
        .then((res) => {
          setUserPosts(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
          setLoading(true);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [searchUserPosts, loggedUser]);

  const searchedTimelinePosts = timelinePosts.filter(
    (post) =>
      post.desc?.toLowerCase().includes(searchTimelinePosts?.toLowerCase()) ||
      post.username?.toLowerCase().includes(searchTimelinePosts?.toLowerCase())
  );

  const searchedUserPosts = userPosts.filter(
    (post) =>
      post.desc?.toLowerCase().includes(searchUserPosts?.toLowerCase()) ||
      post.username?.toLowerCase().includes(searchUserPosts?.toLowerCase())
  );

  const onCreatePost = (post) => {
    setTimelinePosts((oldState) => {
      const newState = [...oldState, post];
      return newState.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      });
    });
    setUserPosts((oldState) => {
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
    <PostContext.Provider
      value={{
        timelinePosts,
        userPosts,
        searchedTimelinePosts,
        searchedUserPosts,
        onCreatePost,
        onLikePost,
        searchTimelinePosts,
        setSearchTimelinePosts,
        searchUserPosts,
        setSearchUserPosts,
        loading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
