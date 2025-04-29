import React from "react";

const Input = ({ placeholder, type = "text", required = false, className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className={`w-full p-2 border border-gray-300 rounded-md ${className}`}
      {...props}
    />
  );
};

export default Input;
