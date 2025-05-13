import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const DropdownMenu = ({ title, items, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const isFirstDropdown = title === "Boxes by Industry"; // Check if it's the first dropdown

  return (
    <div ref={menuRef} className={`relative flex h-full items-center ${className}`}>
      <button
        onClick={toggleDropdown}
        className={`h-full px-4 flex items-center gap-1 transition-all text-dark ${
          isOpen ? "bg-accent text-white" : "hover:bg-accent hover:text-white"
        } rounded-none border-none focus:outline-none`}
        style={{ borderRadius: 0, border: "none" }}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-white" : "text-accent"}`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute left-0 top-full bg-white shadow-lg z-50 p-6 gap-4 ${
            isFirstDropdown ? "grid grid-cols-2 lg:grid-cols-3 min-w-[600px]" : "flex flex-col min-w-[200px]"
          }`}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={`/category/${item.type}/${item.value}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-sm text-gray-800 hover:text-accent transition"
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
