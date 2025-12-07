import React from "react";
import { ButtonProps } from "../../interfaces";

const sizeClasses: Record<ButtonProps["size"], string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick, className }) => {
  const classes = `${sizeClasses[size]} ${shape} bg-blue-600 text-white hover:bg-blue-700 transition ${className ?? ""}`;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
