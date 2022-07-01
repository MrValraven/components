import React from "react";
import "./styles.scss";

const Button6 = ({ buttonText = "Sample text" }) => {
  return (
    <button className="pushable">
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{buttonText}</span>
    </button>
  );
};

export default Button6;
