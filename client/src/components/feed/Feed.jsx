import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Feed.scss";
import { useContext  } from "react";
import { PostContext } from "../../contexts/PostContext";

export const Feed = () => {
  const { timelinePosts } = useContext(PostContext);
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <Share />
        {timelinePosts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};
