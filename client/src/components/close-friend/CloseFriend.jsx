import "./CloseFriend.scss";

export const CloseFriend = () => {
  return (
    <li className="sidebar__friend">
      <img
        className="sidebar__friend__img"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt=""
      />
      <span className="sidebar__friend__name">Jane Doe</span>
    </li>
  );
};
