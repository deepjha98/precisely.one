import React from "react";
//IMPORT IMAGES
import People1 from "../resources/Rooms/People1.svg";
import People2 from "../resources/Rooms/People2.svg";
import People3 from "../resources/Rooms/People3.svg";
///////////////////////////////////////////////
class Rooms extends React.Component {
  render() {
    return (
      <div className="inner-div-3 inner-div">
        <div className="third-left-col">
          <div className="tlc-boxes tlc-boxes-1">
            <div className="tlc-boxes-icon">
              <img src={People1} alt="" />
            </div>
            <div className="tlc-boxes-icon">
              <img src={People2} alt="" />
            </div>
            <div className="tlc-boxes-inner-text">Conference Room</div>
          </div>
          <div className="tlc-boxes tlc-boxes-2">
            <div className="tlc-boxes-icon">
              <img src={People1} alt="" />
            </div>
            <div className="tlc-boxes-icon">
              <img src={People2} alt="" />
            </div>
            <div className="tlc-boxes-inner-text">Conference Room</div>
          </div>
          <div className="tlc-boxes tlc-boxes-3">
            <div className="tlc-boxes-inner-text">Conference Room</div>
          </div>
          <div className="tlc-boxes tlc-boxes-4">
            <div className="tlc-boxes-icon">
              <img src={People1} alt="" />
            </div>
            <div className="tlc-boxes-icon">
              <img src={People2} alt="" />
            </div>
            <div className="tlc-boxes-inner-text">Conference Room</div>
          </div>
          <div className="tlc-boxes tlc-boxes-5">
            <div className="tlc-boxes-inner-text">Conference Room</div>
          </div>
          <div className="tlc-boxes tlc-boxes-6">
            <div className="tlc-boxes-icon">
              <img src={People1} alt="" />
            </div>
            <div className="tlc-boxes-icon">
              <img src={People2} alt="" />
            </div>
            <div className="tlc-boxes-inner-text">Conference Room</div>
          </div>
        </div>
      </div>
    );
  }
}
///////////////////////////////////////////////////
export default Rooms;
