export const registerUser = async (formData) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
};

export const loginUser = async (credentials) => {
  // In a real app, this would validate credentials against stored user data
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  
  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};