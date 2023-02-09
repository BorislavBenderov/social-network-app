import "./Post.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { likePost } from "../../api";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { PostContext } from "../../contexts/PostContext";
import { format } from "timeago.js";

export const Post = ({ post }) => {
  const { loggedUser } = useContext(AuthContext);
  const { onLikePost } = useContext(PostContext);

  const onLike = (e) => {
    e.preventDefault();

    likePost(post._id, loggedUser._id).then(() => {
      onLikePost(loggedUser._id, post._id);
    });
  };

  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top__left">
            <img
              className="post__profile__img"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <span className="post__username">{post.username}</span>
            <span className="post__date">{format(post.createdAt)}</span>
          </div>
          <div className="post__top__right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{post.desc}</span>
          <img
            className="post__img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
          />
        </div>
        <div className="post__bottom">
          <div className="post__bottom__left">
            <div className="post__like__button" onClick={onLike}>
              {post.likes.includes(loggedUser._id) ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </div>
            <span className="post__like__counter">
              {post.likes.length} people like it
            </span>
          </div>
          <div className="post__bottom__right">
            <span className="post__comment__text">10 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
