import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/logo/logo.png";
import Button from "./ui/button";

const ChatWidget = ({ onMinimize }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "agent", text: "May I assist you?" },
  ]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "" && !file) return;

    const newMessages = [];

    if (input.trim()) {
      newMessages.push({
        id: messages.length + 1,
        sender: "user",
        text: input,
      });
    }

    if (file) {
      newMessages.push({
        id: messages.length + 2,
        sender: "user",
        text: `📎 File uploaded: ${file.name}`,
      });
    }

    setMessages([...messages, ...newMessages]);
    setInput("");
    setFile(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 rounded-xl shadow-xl border border-gray-200 bg-white flex flex-col z-50 overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-nav_text px-4 py-3 flex justify-between items-center">
        <h3 className="font-semibold">Packaging</h3>
        <button
          title="Minimize"
          onClick={onMinimize}
          className="text-white text-lg focus:outline-none border-none "
        >
          –
        </button>
      </div>

      {/* Agent intro */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex items-start space-x-2">
          <img src={logo} alt="Agent" className="w-6 h-6 rounded-full" />
          <div>
            <p className="font-semibold text-sm">Daniel</p>
            <p className="text-sm text-gray-700">May I assist you?</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-white max-h-80">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "agent" ? "justify-start" : "justify-end"
            }`}
          >
            {msg.sender === "agent" && (
              <img
                src={logo}
                alt="Agent"
                className="w-6 h-6 rounded-full mr-2"
              />
            )}
            <div
              className={`max-w-[75%] px-3 py-2 rounded-lg text-sm break-words whitespace-pre-wrap ${
                msg.sender === "agent"
                  ? "bg-gray-100 text-gray-800"
                  : "bg-yellow-100 text-gray-900"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input & File Upload */}
      <div className="border-t border-gray-200 px-4 py-2 bg-white flex items-center space-x-2">
        {/* File upload */}
        <label className="cursor-pointer text-gray-500 hover:text-primary">
          📎
          <input
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        {/* Text input */}
        <input
          type="text"
          placeholder="Type a message here..."
          className="flex-1 text-sm px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Send button */}
        <Button
          onClick={sendMessage}
          className="text-sm bg-primary text-white px-3 py-2 rounded-md focus:outline-none border-none hover:bg-accent"
        >
          Send
        </Button>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 text-right pr-4 pb-2">
        Custom Boxes 360
      </div>
    </div>
  );
};

export default ChatWidget;
