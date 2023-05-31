import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

type Props = {
  message: string;
};

const Error = (props: Props) => {
  return (
    <div className="error-page">
      <h2>Oops!</h2>
      <p className="message">{props.message}</p>
      <Link to="/blog">
        <p className="go-back">Go To Home Page </p>
      </Link>
    </div>
  );
};

export default Error;
