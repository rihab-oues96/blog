import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

type NavProps = {
  component: string;
};

const Nav = ({ component }: NavProps) => {
  return (
    <ul className={`navs ${component}`}>
      <li>Home</li>
      <li>About us</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>FAQ</li>
      <Link to="/blog">
        <li>Blog</li>
      </Link>
    </ul>
  );
};

export default Nav;
