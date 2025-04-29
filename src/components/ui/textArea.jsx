import React from "react";

export const Textarea = ({ placeholder = "", className = "", ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`w-full p-2 border border-gray-300 rounded-md ${className}`}
      {...props}
    />
  );
}

export default Textarea;
