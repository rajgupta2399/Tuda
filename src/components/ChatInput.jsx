// Chat input form component
import { useState } from "react"; 


function ChatInput({ onSend, disabled }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    onSend(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input input-bordered flex-1"
        placeholder="Type your message..."
        disabled={disabled}
      />
      <button type="submit" className="btn btn-primary" disabled={disabled}>
        Send
      </button>
    </form>
  );
}

export default ChatInput;