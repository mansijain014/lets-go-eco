import React from "react";
import NavBar from "./NavBar";

const Header = ({onTryNowClick}) => {
  return (
    <div className="header">
      <NavBar onTryNowClick={onTryNowClick}/>
      <h1 className="header-text">
      “Show me your garden <br/>and I shall tell you what you are.”
      </h1>
      <p className="header-p">-Alfred Austin</p>
      <img src="banner.png" style={{width:480, height:380, alignSelf: 'center'}}/>
    </div>
  );
};

export default Header;
