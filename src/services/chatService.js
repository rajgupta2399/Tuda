// Handle chat operations and persistence
export const saveMessages = (userId, messages) => {
  localStorage.setItem(`chat_messages_${userId}`, JSON.stringify(messages));
};

export const loadMessages = (userId) => {
  const saved = localStorage.getItem(`chat_messages_${userId}`);
  return saved ? JSON.parse(saved) : [];
};

export const fetchPreviousChats = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
  if (!response.ok) throw new Error('Failed to load previous chats');
  
  const data = await response.json();
  return data.map(comment => ({
    id: comment.id,
    text: comment.body,
    timestamp: new Date().toISOString(),
    sender: 'history'
  }));
};