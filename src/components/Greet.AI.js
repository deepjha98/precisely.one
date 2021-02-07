import React from "react";
//Images Import
import Info from "../resources/Greet/Info.svg";
import Notification from "../resources/Greet/Notification.svg";
import People from "../resources/Greet/People.svg";
////////////////////////////////////////////
class Greet extends React.Component {
  render() {
    return (
      <div className="inner-div-2 inner-div">
        <div className="second-left-col">
          <div className="slr-1">
            <div className="slr-1-title">Greet.AI</div>
            <div className="slr-1-people">
              <img src={People} /> <span>2</span>
            </div>
            <div className="slr-1-info">
              <img src={Notification} />
              <img src={Info} />
            </div>
          </div>
          <div className="slr-2">
            <p className="slr-2-heading">Heading </p>
            <ul>
              <li>Gaurav Singh</li>
              <li>Muskaan Kapoor</li>
              <li>Ananya Goel</li>
              <li>Deepak kumar</li>
            </ul>

            <p className="slr-2-heading">Groups</p>
            <ul>
              <li>Marketing</li>
              <li>Technology</li>
              <li>Break Room</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
/////////////////////////////////////////////
export default Greet;
