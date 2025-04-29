import React from "react";

export const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
