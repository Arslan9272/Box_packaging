const CustomSelect = ({ options = [], className = "", ...props }) => (
    <select className={`flex-1 p-2 border border-gray-300 rounded ${className}`} {...props}>
      {options.map((opt, idx) => (
        <option key={idx} value={opt === "Select Color" ? "" : opt}>
          {opt}
        </option>
      ))}
    </select>
  );

  export default CustomSelect;