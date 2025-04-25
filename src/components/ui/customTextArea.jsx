const CustomTextarea = ({ className = "", ...props }) => (
    <textarea
      className={`w-full p-2 border border-gray-300 rounded ${className}`}
      {...props}
    />
  );
export default CustomTextarea;  