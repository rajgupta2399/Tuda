// Individual chat message component
function ChatMessage({ message }) {
  return (
    <div className={`chat ${message.sender === 'user' ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-bubble">
        {message.text}
      </div>
      <div className="chat-footer opacity-50 text-xs">
        {new Date(message.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
}

export default ChatMessage;