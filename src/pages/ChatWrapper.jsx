import React, { useState } from "react";
import ChatToggleButton from "../components/ui/chatToggleButton";
import ChatWidget from "../components/chatWidget";
import TextUsForm from "../components/textUsForm";

const ChatWrapper = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleToggleChat = () => {
    if (isFormOpen || isChatOpen) {
      setIsFormOpen(false);
      setIsChatOpen(false);
    } else {
      setIsFormOpen(true);
    }
  };

  const handleFormSubmit = () => {
    setIsFormOpen(false);
    setIsChatOpen(true);
  };

  const handleMinimizeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div>
      {isFormOpen && <TextUsForm onSubmit={handleFormSubmit} />}
      {isChatOpen && <ChatWidget onMinimize={handleMinimizeChat} />}

      <ChatToggleButton
        isOpen={isFormOpen || isChatOpen}
        handleToggle={handleToggleChat}
      />
    </div>
  );
};

export default ChatWrapper;
