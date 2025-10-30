import React, { useState, useEffect, useRef } from "react";

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const gifRef = useRef(null);
  const animationTimerRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Clean up timer on unmount
    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    
    // Clear any existing timer
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }
    
    // Open chatbot window after 7 seconds (when animation ends)
    animationTimerRef.current = setTimeout(() => {
      setShowBubble(true);
      setIsOpen(true);
      // Add initial greeting when opening for the first time
      if (messages.length === 0) {
        setMessages([
          {
            id: 1,
            text: "Hi! How can I help you?",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
      }
    }, 7000);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setShowBubble(false);
    
    // Clear timer if user leaves before 7 seconds
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "This feature is not available yet",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-end z-50"
      style={{ pointerEvents: "auto" }}
    >
      {/* Chat window - replaces the icon area */}
      {isOpen ? (
        <div className="w-80 bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col" style={{ height: "450px" }}>
          {/* Header */}
          <div className="bg-[#5C4033] text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold text-lg">Chat Support</h3>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200 transition-colors text-xl leading-none"
            >
              ✕
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-[#5C4033] text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#5C4033] text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#5C4033] text-white px-5 py-2 rounded-full hover:bg-[#4a332a] transition-colors font-medium text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Quick bubble hint */}
          {showBubble && (
            <div className="mb-3 w-72 bg-white shadow-xl rounded-2xl p-4 border border-gray-200 animate-fadeIn">
              <p className="text-gray-800 text-sm font-medium">
                💬 Hi! How can I help you?
              </p>
            </div>
          )}

          {/* Chatbot icon with circle */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative cursor-pointer"
            style={{ width: "180px", height: "180px" }}
          >
            {/* Tiny light tan circle - adjustable position and size */}
            <div
              className="absolute rounded-full"
              style={{
                width: "120px",        // Change this to adjust size
                height: "60px",       // Change this to adjust size
                backgroundColor: "#D2B48C",
                bottom: "0px",       // Change this to move up/down
                right: "20px",        // Change this to move left/right (increase = more left)
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                zIndex: 1,
              }}
            />

            {/* Chatbot image */}
            <img
              ref={gifRef}
              src={isHovering ? "src/assets/icon-chatbot.gif" : "src/assets/icon-chatbot-static.png"}
              alt="Chatbot Icon"
              className="absolute pointer-events-none transition-transform duration-300 hover:scale-105"
              style={{
                width: "170px",
                height: "170px",
                bottom: "0",
                right: "0",
                zIndex: 2,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBotWidget;