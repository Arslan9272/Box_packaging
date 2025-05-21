import React from "react";

const ChatWindow = ({ onClose }) => {
  return (
    <div className="fixed bottom-24 right-6 w-80 bg-white border border-gray-300 rounded-lg shadow-xl z-50">
      <div className="bg-primary text-nav_text px-4 py-2 rounded-t-lg flex justify-between items-center">
        <span className="font-bold">Packaging</span>
        <button onClick={onClose} className="text-xl font-bold">
          ×
        </button>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <div className="text-gray-700 font-medium">Daniel</div>
        <div className="bg-gray-100 p-2 rounded">May I assist you?</div>
        <div className="bg-yellow-100 p-2 rounded self-end text-right">
          i want human to talk
        </div>
        <div className="text-blue-600 underline cursor-pointer">
          Please update your info
        </div>
        <div className="text-gray-500 text-xs">Queue position: 1</div>
        <input
          type="text"
          placeholder="Type a message here..."
          className="w-full border rounded p-2 text-sm mt-2"
        />
      </div>
      <div className="text-xs text-center text-gray-400 pb-2">
        Custom Boxes 360
      </div>
    </div>
  );
};

export default ChatWindow;
