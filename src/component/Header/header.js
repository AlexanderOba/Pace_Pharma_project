import React, { Component } from "react";
import "./header.css";
import Burger from "./burger";
import logo from "../../images/logo.png";
import mobilelogo from "../../images/mobilelogo.png";
import noti from "../../images/notification.png";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <div className="nav-logo">
            <img src={logo} />
          </div>
          <Burger />
        </div>
        <div className="mobilenav">
          <Burger />
          <div className="mobilenav-logo">
            <img src={mobilelogo} />
          </div>
          <div>
            <img src={noti} className="notification img-fluid" />
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
