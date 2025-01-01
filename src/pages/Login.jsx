import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/authService';
import AuthForm from '../components/AuthForm';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('All fields are required');
      return;
    }

    setLoading(true);
    try {
      const userData = await loginUser(formData);
      login(userData);
      toast.success('Login successful!');
      navigate('/chat');
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      value: formData.email,
      onChange: handleChange,
      placeholder: 'Enter your email'
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      value: formData.password,
      onChange: handleChange,
      placeholder: 'Enter your password'
    }
  ];

  return (
    <AuthForm
      title="Login"
      fields={fields}
      loading={loading}
      onSubmit={handleSubmit}
      buttonText="Login"
      linkText="Don't have an account?"
      linkTo="/"
    />
  );
}

export default Login;