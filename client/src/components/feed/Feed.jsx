import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Feed.scss";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

export const Feed = ({ profile }) => {
  const { searchedTimelinePosts, searchedUserPosts, userPosts, loading } =
    useContext(PostContext);

  const HomeFeed = () => {
    return (
      <>
        <Share />
        {loading ? (
          searchedTimelinePosts.length > 0 ? (
            searchedTimelinePosts.map((post) => (
              <Post key={post._id} post={post} />
            ))
          ) : (
            <p className="no__searched__posts">
              No posts found for the search criteria!
            </p>
          )
        ) : (
          <p className="loading">Loading...</p>
        )}
      </>
    );
  };

  const ProfileFeed = () => {
    return (
      <>
        <Share />
        {loading ? (
          userPosts.length > 0 ? (
            searchedUserPosts.map((post) => <Post key={post._id} post={post} />)
          ) : (
            <p className="no__searched__posts">
              No posts found for the search criteria!
            </p>
          )
        ) : (
          <p className="loading">Loading...</p>
        )}
      </>
    );
  };

  return (
    <div className="feed">
      <div className="feed__wrapper">
        {profile ? <ProfileFeed /> : <HomeFeed />}
      </div>
    </div>
  );
};
