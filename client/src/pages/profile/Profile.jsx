import "./Profile.scss";
import { Topbar, Sidebar, Feed, Rightbar } from "../../components";

export const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profile__right__top">
            <div className="profile__cover">
              <img className="profile__cover__img" src="" alt="" />
              <img className="profile__user__img" src="" alt="" />
            </div>
            <div className="profile__info">
              <h4 className="profile__info__name">Borko</h4>
              <span className="profile__info__desc">Hello friends</span>
            </div>
          </div>
          <div className="profile__right__bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};
