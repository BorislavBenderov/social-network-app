import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Feed.scss";

export const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__wrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};
