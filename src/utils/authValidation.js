export const validateEmail = (email) => {
  return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateRegistration = (formData) => {
  const errors = [];

  if (!formData.name || !formData.email || !formData.password) {
    errors.push('All fields are required');
  }

  if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email');
  }

  if (!validatePassword(formData.password)) {
    errors.push('Password must be at least 6 characters');
  }

  return errors;
};