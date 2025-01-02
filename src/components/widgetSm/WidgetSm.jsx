import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import ImageUser from "../../assets/images/profile.jpg";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={ImageUser} alt="profileImage" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Heba Syijari</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={ImageUser} alt="profileImage" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Heba Syijari</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={ImageUser} alt="profileImage" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Heba Syijari</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={ImageUser} alt="profileImage" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Heba Syijari</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={ImageUser} alt="profileImage" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Heba Syijari</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
