import React from "react";
import "../main.scss";

//COMPONENTS IMPORT
import SideNavbar from "./SideNavbar";
import Greet from "./Greet.AI";
import Rooms from "./Rooms";
import Social from "./Social";
/////////////////////////////////////////////
class App extends React.Component {
  render() {
    return (
      <div className="main-div">
        <SideNavbar />
        <Greet />
        <Rooms />
        <Social />
      </div>
    );
  }
}
///////////////////////////////////////////////
export default App;
