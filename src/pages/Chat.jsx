import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import { saveMessages, loadMessages, fetchPreviousChats } from '../services/chatService';

function Chat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load saved messages on component mount
  useEffect(() => {
    if (user?.id) {
      const savedMessages = loadMessages(user.id);
      setMessages(savedMessages);
    }
  }, [user?.id]);

  // Save messages whenever they change
  useEffect(() => {
    if (user?.id) {
      saveMessages(user.id, messages);
    }
  }, [messages, user?.id]);

  const handleSend = (text) => {
    const message = {
      id: Date.now(),
      text,
      timestamp: new Date().toISOString(),
      sender: 'user'
    };

    setMessages(prev => [...prev, message]);
  };

  const loadPreviousChats = async () => {
    setLoading(true);
    try {
      const previousMessages = await fetchPreviousChats();
      setMessages(prev => [...previousMessages, ...prev]);
      toast.success('Previous chats loaded successfully');
    } catch (error) {
      toast.error('Failed to load previous chats');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Chat</h1>
        <button 
          onClick={loadPreviousChats} 
          className={`btn btn-secondary ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          Load Previous Chats
        </button>
      </div>

      <div className="chat-container bg-base-200 rounded-lg p-4 h-[60vh] overflow-y-auto mb-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
}

export default Chat;