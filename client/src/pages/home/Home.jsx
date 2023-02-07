import "./Home.scss";
import { Topbar, Sidebar, Feed, Rightbar } from "../../components";

export const Home = () => {
  return (
    <>
      <Topbar />
      <div className="home__container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};
