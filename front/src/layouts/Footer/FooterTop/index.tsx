import React from "react";
import facebook from "../../../assets/icons/facebook.png";
import instagram from "../../../assets/icons/instagram.png";
import linkedin from "../../../assets/icons/linkedin.png";
import twitter from "../../../assets/icons/twitter.png";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="footer-top-left">
        <p className="logo">Finsweet</p>
        <p className="description">
          We are always open to discuss your project and improve your online
          presence.
        </p>

        <div className="contact">
          <p>
            Email me at <br />
            <span>contact@website.com</span>
          </p>

          <p>
            Call us <br />
            <span>0927 6277 28525</span>
          </p>
        </div>
      </div>

      <div className="footer-top-right">
        <p className="talk">Lets Talk!</p>
        <p>
          We are always open to discuss your project, improve your online
          presence and help with your UX/UI design challenges.
        </p>

        <div className="social-media-icons">
          <img src={facebook} alt="facebook icon" />
          <img src={twitter} alt="twitter icon" />
          <img src={instagram} alt="instagram icon" />
          <img src={linkedin} alt="linkedin icon" />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
