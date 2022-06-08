import React from "react";

import "./Button.css";

const Button = ({ childreen, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {childreen}
    </button>
  );
};

export default Button;
