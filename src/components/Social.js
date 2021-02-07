import React from "react";
//IMPORT IMAGES
import Info from "../resources/Social/Info.svg";
import Video from "../resources/Social/Video.svg";
import Profile1 from "../resources/Social/ProfilePic/Profile1.svg";
import Profile2 from "../resources/Social/ProfilePic/Profile2.svg";
import Profile3 from "../resources/Social/ProfilePic/Profile3.svg";
import Profile4 from "../resources/Social/ProfilePic/Profile4.svg";
/////////////////////////////////////////////
//FUNCTIONAL SOCIAL COMPONENT
const Social = () => {
  return (
    <div className="inner-div-4 inner-div">
      <div className="forth-left-col">
        <div className="flc-1">
          <div className="flc-1-box">
            {/* <img src={Profile1} /> */}
            <p className="flc-1-box-text">Ashish Kumar</p>
          </div>
          <div className="flc-1-box">
            {/* <img src={Profile2} /> */}
            <p className="flc-1-box-text">Prakriti Jain</p>
          </div>
          <div className="flc-1-box">
            {/* <img src={Profile3} /> */}
            <p className="flc-1-box-text">Samridhi</p>
          </div>
          <div className="flc-1-box">
            {/* <img src={Profile4} /> */}
            <p className="flc-1-box-text">Piyush</p>
          </div>
        </div>
        <div className="flc-2"></div>
        <div className="flc-3">
          <div className="flc-3-inner-col">
            <div className="flc-3-inner-row-1">
              <div className="flc-3-profile">
                <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <span>Conference Room</span>
              </div>
              <div className="flc-3-extra">
                <img src={Info} />
                <img src={Video} />
              </div>
            </div>
            <div className="flc-3-inner-row-2">
              <p className="flc-3-chat-1">Here is the marketing document</p>
              <p className="flc-3-chat-2">Thanks Marks</p>
              <p className="flc-3-chat-1">Here is the marketing document</p>
              <p className="flc-3-chat-1">Here is the marketing document</p>
              <p className="flc-3-chat-2">Thanks Marks</p>
              <p className="flc-3-chat-1">Here is the marketing document</p>
            </div>
            <div className="flc-3-inner-row-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
////////////////////////////////////////////////
export default Social;
