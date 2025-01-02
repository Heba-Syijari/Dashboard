import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./user.css";
import userIcon from "../../assets/images/profile.jpg";
export default function User() {
  // const { userId } = useParams();
  // console.log("Current user ID:", userId);
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <Button variant="contained" color="success" size="small">
            Create
          </Button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={userIcon} alt="profile" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Heba Syijari</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity fontSize="small" color="success" />
              <span className="userShowInfoTitle">hebasy99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday fontSize="small" color="success" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid fontSize="small" color="success" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline fontSize="small" color="success" />
              <span className="userShowInfoTitle">hebasyijari@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching fontSize="small" color="success" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="hebasy99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Heba Syijari"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="hebasyijari@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src={userIcon} alt="profile" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              {/* <button className="userUpdateButton">Update</button> */}
              <Button variant="contained" color="success" size="small">
                Edit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
