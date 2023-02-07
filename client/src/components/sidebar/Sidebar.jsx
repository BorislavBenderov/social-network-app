import "./Sidebar.scss";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { CloseFriend } from "../close-friend/CloseFriend";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__list__item">
            <RssFeedIcon className="sidebar__icon" />
            <span className="sidebar__list__item__text">Feed</span>
          </li>
          <li className="sidebar__list__item">
            <ChatIcon className="sidebar__icon" />
            <span className="sidebar__list__item__text">Chats</span>
          </li>
          <li className="sidebar__list__item">
            <VideoLibraryIcon className="sidebar__icon" />
            <span className="sidebar__list__item__text">Videos</span>
          </li>
          <li className="sidebar__list__item">
            <GroupIcon className="sidebar__icon" />
            <span className="sidebar__list__item__text">Groups</span>
          </li>
          <li className="sidebar__list__item">
            <BookmarkIcon className="sidebar__icon" />
            <span className="sidebar__list__item__text">Bookmarks</span>
          </li>
          <li className="sidebar__list__item">
            <HelpIcon className="sidebar__icon" />
            <span className="sidebar__list__item__text">Questions</span>
          </li>
          <li className="sidebar__list__item">
            <WorkIcon className="sidebar__icon" />
            <span className="sidebar__list__item__text">Jobs</span>
          </li>
          <li className="sidebar__list__item">
            <EventIcon className="sidebar__icon" />
            <span className="sidebar__list__item__text">Events</span>
          </li>
          <li className="sidebar__list__item">
            <SchoolIcon className="sidebar__icon" />
            <span className="sidebar__list__item__text">Courses</span>
          </li>
        </ul>
        <button className="sidebar__button">Show More</button>
        <hr className="sidebar__hr" />
        <ul className="sidebar__friend__list">
          <CloseFriend />
        </ul>
      </div>
    </div>
  );
};
