import React, { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchChatHistory,
  addLocalMessage,
  initializeWebSocket,
  sendWebSocketMessage,
} from "../store/userChatSlice";
import logo from "../assets/images/logo/logo.png";
import Button from "./ui/button";

const ChatWidget = ({ onMinimize }) => {
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();

  const { userId } = useSelector((state) => state.auth);
  const { messages, error, loading } = useSelector((state) => state.chat);

  // Fetch chat history on mount
  useEffect(() => {
    dispatch(fetchChatHistory());
  }, [dispatch]);

  // WebSocket setup
  useEffect(() => {
    if (userId) {
      dispatch(initializeWebSocket(userId));
    }
  }, [dispatch, userId]);

  // Auto-scroll to bottom
  useEffect(() => {
    const timeout = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timeout);
  }, [messages]);

  const handleSend = useCallback(() => {
    if (!input.trim() && !file) return;

    let content = input.trim();
    if (file) content = `📎 File uploaded: ${file.name}`;

    const newMessage = {
      content,
      sender_id: `user_${userId}`,
      timestamp: new Date().toISOString(),
    };

    dispatch(addLocalMessage(newMessage)); // Optimistic update
    sendWebSocketMessage(content); // Send to server
    setInput("");
    setFile(null);
  }, [input, file, userId, dispatch]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // Prevent newline in textarea
        handleSend();
      }
    },
    [handleSend]
  );

  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleFileChange = useCallback((e) => {
    setFile(e.target.files[0]);
  }, []);

  return (
    <div className="fixed bottom-24 right-6 w-96 rounded-xl shadow-xl border border-gray-200 bg-white flex flex-col z-50 overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-nav_text px-4 py-3 flex justify-between items-center">
        <h3 className="font-semibold">Packaging</h3>
        <button onClick={onMinimize} className="text-white text-lg">
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
        {loading && (
          <div className="text-sm text-gray-500 text-center">
            Loading messages...
          </div>
        )}
        {error && (
          <div className="text-sm text-red-500 text-center">{error}</div>
        )}
        {!loading && messages.length === 0 && (
          <div className="text-sm text-gray-400 text-center">
            No messages yet.
          </div>
        )}
        {messages.map((msg, index) => {
          if (!msg?.content?.trim()) return null;
          const isAdmin =
            typeof msg.sender_id === "string" &&
            msg.sender_id.startsWith("admin");
          return (
            <div
              key={index}
              className={`flex ${isAdmin ? "justify-start" : "justify-end"}`}
            >
              {isAdmin && (
                <img
                  src={logo}
                  alt="Agent"
                  className="w-6 h-6 rounded-full mr-2"
                />
              )}
              <div
                className={`max-w-[75%] px-3 py-2 rounded-lg text-sm break-words whitespace-pre-wrap ${
                  isAdmin
                    ? "bg-yellow-100 text-gray-900"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input & Upload */}
      <div className="border-t border-gray-200 px-4 py-2 bg-white flex items-center space-x-2">
        <label className="cursor-pointer text-gray-500 hover:text-primary">
          📎
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        <input
          type="text"
          placeholder="Type a message here..."
          className="flex-1 text-sm px-3 py-2 border rounded-md focus:outline-none"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Button
          onClick={handleSend}
          className="bg-primary text-white text-sm px-3 py-2 rounded-md"
        >
          Send
        </Button>
      </div>

      <div className="text-xs text-gray-400 text-right pr-4 pb-2">
        Custom Boxes 360
      </div>
    </div>
  );
};

export default ChatWidget;
