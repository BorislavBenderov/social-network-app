import { Online } from "../online/Online";
import "./Rightbar.scss";

export const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday__container">
          <img className="birthday__img" src="" alt="" />
          <span className="birthday__text">
            <b>Borko</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbar__ad" src="" alt="" />
        <h4 className="rightbar__title">Online Friends</h4>
        <ul className="rightbar__friend__list">
          <Online />
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar__title">User information</h4>
        <div className="rightbar__info">
          <div className="rightbar__info__item">
            <span className="rightbar__info__key">City:</span>
            <span className="rightbar__info__value">Sofia</span>
          </div>
          <div className="rightbar__info__item">
            <span className="rightbar__info__key">From:</span>
            <span className="rightbar__info__value">Sofia</span>
          </div>
          <div className="rightbar__info__item">
            <span className="rightbar__info__key">Relationship:</span>
            <span className="rightbar__info__value">Single</span>
          </div>
        </div>
        <h4 className="rightbar__title">User friends</h4>
        <div className="rightbar__followings">
          <div className="rightbar__following">
            <img src="" alt="" className="rightbar__following__img" />
            <span className="rightbar__following__name">Borko</span>
          </div>
          <div className="rightbar__following">
            <img src="" alt="" className="rightbar__following__img" />
            <span className="rightbar__following__name">Borko</span>
          </div>
          <div className="rightbar__following">
            <img src="" alt="" className="rightbar__following__img" />
            <span className="rightbar__following__name">Borko</span>
          </div>
          <div className="rightbar__following">
            <img src="" alt="" className="rightbar__following__img" />
            <span className="rightbar__following__name">Borko</span>
          </div>
          <div className="rightbar__following">
            <img src="" alt="" className="rightbar__following__img" />
            <span className="rightbar__following__name">Borko</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};
