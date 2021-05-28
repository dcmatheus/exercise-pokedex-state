import React from "react";
import './Button.css';

const Button = ({ className, children, disabled, onClick }) => (
  <button
    onClick={ onClick }
    className={ className }
    disabled={ disabled }
  >
    { children }
  </button>
);

export default Button;