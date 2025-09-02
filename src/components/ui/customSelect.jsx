// const CustomSelect = ({ options = [], className = "", ...props }) => (
//   <select
//     className={`flex-1 p-2 border border-gray-300 rounded rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
//     {...props}
//   >
//     {options.map((opt, idx) => (
//       <option key={idx} value={opt === "Select Color" ? "" : opt}>
//         {opt}
//       </option>
//     ))}
//   </select>
// );

// export default CustomSelect;

// components/ui/CustomSelect.jsx
import React from "react";

const CustomSelect = ({
  name,
  value,
  onChange,
  options = [],
  required = false,
  className = "",
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`rounded-md focus:outline-none focus:ring-2 focus:ring-accent w-full p-2 border border-gray-300 ${className}`}
    >
      {options.map((opt, index) => (
        <option key={index} value={opt === "Select Color" ? "" : opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
