import "./Post.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const Post = () => {
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
            <span className="post__username">Borko</span>
            <span className="post__date">10 mins ago</span>
          </div>
          <div className="post__top__right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">My first post</span>
          <img
            className="post__img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
          />
        </div>
        <div className="post__bottom">
          <div className="post__bottom__left">
            <img
              className="like__icon"
              src="https://png.pngtree.com/element_our/sm/20180313/sm_5aa7b9f6636d2.jpg"
              alt=""
            />
            <img
              className="like__icon"
              src="https://png.pngtree.com/element_our/sm/20180313/sm_5aa7b9f6636d2.jpg"
              alt=""
            />
            <span className="post__like__counter">50 people like it</span>
          </div>
          <div className="post__bottom__right">
            <span className="post__comment__text">10 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
