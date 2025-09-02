import React from "react";

export const Textarea = ({ placeholder = "", className = "", ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`w-full p-2 border border-gray-300 rounded-md rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
      {...props}
    />
  );
};

export default Textarea;
