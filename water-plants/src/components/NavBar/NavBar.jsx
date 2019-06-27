import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  toggle = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <Link >
          <img src="https://img.icons8.com/office/30/000000/wet.png" />
        </Link>

        <Link to="/profile">Profile</Link>
        <Link to="/signout">Sign out</Link>

        <a
          href="javascript:void(0);"
          className="icon"
          onClick={() => this.toggle()}
        >
          <i className="fa fa-bars" />
        </a>
      </div>
    );
  }
}

export default NavBar;
