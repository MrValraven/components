import React from "react";
import "./styles.scss";

const Button1 = ({ buttonText = "Sample Text" }) => {
  return <button className="button1">{buttonText}</button>;
};

export default Button1;
