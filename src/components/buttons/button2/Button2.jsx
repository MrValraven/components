import React from "react";
import "./styles.scss";

const Button2 = ({ buttonText = "Sample text", style }) => {
  return (
    <button style={style} className="button2">
      {buttonText}
    </button>
  );
};

export default Button2;
