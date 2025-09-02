import React from "react";

const CustomTextarea = ({
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
  className = "",
}) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className={`rounded-md focus:outline-none focus:ring-2 focus:ring-accent w-full p-2 border border-gray-300 ${className}`}
    />
  );
};

export default CustomTextarea;
