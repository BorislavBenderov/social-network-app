import "./Topbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const Topbar = () => {
  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <span className="logo">Social Network</span>
      </div>
      <div className="topbar__center">
        <div className="searchbar">
          <SearchIcon className="search__icon" />
          <input
            placeholder="Search for friend, post or video"
            className="search__input"
          />
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar__links">
          <span className="topbar__link">Homepage</span>
          <span className="topbar__link">Timeline</span>
        </div>
        <div className="topbar__icons">
          <div className="topbar__icon__item">
            <PersonIcon />
            <span className="topbar__icon__badge">1</span>
          </div>
          <div className="topbar__icon__item">
            <ChatIcon />
            <span className="topbar__icon__badge">3</span>
          </div>
          <div className="topbar__icon__item">
            <NotificationsIcon />
            <span className="topbar__icon__badge">1</span>
          </div>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
          className="topbar_img"
        />
      </div>
    </div>
  );
};
