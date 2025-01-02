import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import ImageUser from "../../assets/images/50.png";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Sadiq</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={ImageUser} alt="profileImage" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
