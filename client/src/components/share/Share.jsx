import "./Share.scss";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddReactionIcon from "@mui/icons-material/AddReaction";

export const Share = () => {
  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__top">
          <img
            className="share__profile__img"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <input placeholder="What's in your mind?" className="share__input" />
        </div>
        <hr className="share__hr" />
        <div className="share__bottom">
          <div className="share__options">
            <div className="share__option">
              <PermMediaIcon htmlColor="tomato" className="share__icon" />
              <span className="share__option__text">Photo or Video</span>
            </div>
            <div className="share__option">
              <LabelIcon htmlColor="blue" className="share__icon" />
              <span className="share__option__text">Tag</span>
            </div>
            <div className="share__option">
              <LocationOnIcon htmlColor="green" className="share__icon" />
              <span className="share__option__text">Location</span>
            </div>
            <div className="share__option">
              <AddReactionIcon htmlColor="goldenrod" className="share__icon" />
              <span className="share__option__text">Feelings</span>
            </div>
          </div>
          <button className="share__button">Share</button>
        </div>
      </div>
    </div>
  );
};
