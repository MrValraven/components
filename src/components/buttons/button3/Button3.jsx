import React from "react";
import "./styles.scss";

const Button3 = ({ buttonText = "Sample text" }) => {
  return <button className="button3">{buttonText}</button>;
};

export default Button3;
