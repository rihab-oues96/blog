import React from "react";
import "./Loading.scss";
import MoonLoader from "react-spinners/MoonLoader";

const Loading = () => {
  return (
    <div className="spinner">
      <MoonLoader color="#282938" loading size={100} speedMultiplier={1} />
    </div>
  );
};

export default Loading;
