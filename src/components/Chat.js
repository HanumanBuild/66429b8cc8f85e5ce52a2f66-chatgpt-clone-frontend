import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Here you would send the message to the backend and get a response
    }
  };

  return (
    <div className="chat-container flex flex-col h-screen p-4 bg-gray-100">
      <div className="messages flex-1 overflow-y-auto p-2 bg-white rounded shadow">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'user' ? 'text-right' : 'text-left'} p-2`}>
            <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l"
        />
        <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded-r">Send</button>
      </div>
    </div>
  );
};

export default Chat;
