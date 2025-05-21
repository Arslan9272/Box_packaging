import React from "react";
import { BsChatDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io"; // Close icon

const ChatToggleButton = ({ isOpen, handleToggle }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 group">
      {/* Tooltip */}
      {!isOpen && (
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-sm font-medium px-4 py-2 rounded-lg shadow-lg relative">
          Click to send us a message.
          <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>
        </div>
      )}

      {/* Chat or Close button */}
      <button
        onClick={handleToggle}
        className="bg-primary hover:bg-accent text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none border-none"
      >
        {isOpen ? (
          <IoMdClose className="text-2xl" />
        ) : (
          <BsChatDots className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default ChatToggleButton;
