import React from "react";

//Import images
import Group_285 from "../resources/Navbar/Group_285.svg";
import Bar from "../resources/Navbar/Bar.svg";
import Calender from "../resources/Navbar/Calender.svg";
import Chat from "../resources/Navbar/Chat.svg";
import Collapse from "../resources/Navbar/Collapse.svg";
import DarkMode from "../resources/Navbar/DarkMode.svg";
import Home from "../resources/Navbar/Home.svg";
import List from "../resources/Navbar/List.svg";
import People from "../resources/Navbar/People.svg";
/////////////////////////////////////////
class SideNavbar extends React.Component {
  //   FIRST SIDE BAR COMPONENT
  render() {
    return (
      <div className="inner-div-1 inner-div">
        <div className="first-left-col">
          <div className="first-left-row-1">
            <img src={Group_285} />
          </div>
          <div className="first-left-row-2">
            <div className="flr-2-icons-col">
              <div className="flr-2-icon">
                <img src={Home} />
              </div>
              <div className="flr-2-icon">
                <img src={List} />
              </div>
              <div className="flr-2-icon">
                <img src={Bar} />
              </div>
              <div className="flr-2-icon">
                <img src={Chat} />
              </div>
              <div className="flr-2-icon">
                <img src={People} />
              </div>
              <div className="flr-2-icon">
                <img src={Calender} />
              </div>
            </div>
          </div>
          <div className="first-left-row-3">
            <div className="flr-3-icons-col">
              <div className="flr-3-icon">
                <img src={DarkMode} />
              </div>
              <div className="flr-3-icon">
                <img src={Collapse} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//////////////////////////////////////////
export default SideNavbar;
