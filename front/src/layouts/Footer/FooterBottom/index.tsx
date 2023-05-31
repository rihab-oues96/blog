import React from "react";
import Nav from "../../../components/Nav";
import "../Footer.scss";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <p className="footer-bottom-left">Copyright 2021, Finsweet.com</p>

      <div className="footer-bottom-right">
        <Nav component="footerB" />
      </div>
    </div>
  );
};

export default FooterBottom;
