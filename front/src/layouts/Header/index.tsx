import React from "react";
import "./_Header.scss";

import menu from "../../assets/icons/menu-burger.png";
import Nav from "../../components/Nav";

const Header = () => {
  return (
    <div className="main-header">
      <div className="header-left">
        <p className="logo">Finsweet</p>
      </div>

      <div className="header-right">
        <Nav component="header" />

        <div className="contact-us">
          <p>Contact us</p>
        </div>

        <div className="menu">
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
