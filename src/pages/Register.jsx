import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { validateRegistration } from '../utils/authValidation';
import { registerUser } from '../services/authService';
import AuthForm from '../components/AuthForm';

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profilePicture: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateRegistration(formData);
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    setLoading(true);
    try {
      const userData = await registerUser(formData);
      login(userData);
      toast.success('Registration successful!');
      navigate('/chat');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      value: formData.name,
      onChange: handleChange,
      placeholder: 'Enter your name'
    },
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
    },
    {
      name: 'profilePicture',
      type: 'file',
      label: 'Profile Picture',
      onChange: handleChange,
      accept: 'image/*'
    }
  ];

  return (
    <AuthForm
      title="Register"
      fields={fields}
      loading={loading}
      onSubmit={handleSubmit}
      buttonText="Register"
      linkText="Already have an account?"
      linkTo="/login"
    />
  );
}

export default Register;