import React from "react";
import { Link } from "react-scroll";

const NavBar = ({onTryNowClick}) => {
  return (
    <div className="navbar flex">
      <h3 className="logo"><img src="https://img.icons8.com/fluent-systems-filled/48/000000/plant-under-sun.png"/> Let's Go Eco!</h3>
      <nav>
        <Link to="about" smooth={true} duration={500}>
        <button className="navbar-link button" >About</button>
        </Link>
        <Link to="newbie" smooth={true} duration={500}>
        <button className="navbar-link button" >Newbie</button>
        </Link>
        <button href="#" className="navbar-link button" onClick={onTryNowClick}>
          Disease Detection
        </button>
        <button href="#" className="navbar-link button" onClick={onTryNowClick}>
          Soil Quality
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
