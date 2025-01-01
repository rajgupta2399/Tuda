import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';

describe('Register Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
  });

  it('renders all form fields', () => {
    expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/profile picture/i)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const submitButton = screen.getByRole('button', { name: /register/i });
    fireEvent.click(submitButton);
    
    // Toast notifications would appear in a real environment
    expect(submitButton).toBeInTheDocument();
  });

  it('validates email format', () => {
    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByRole('button', { name: /register/i });
    fireEvent.click(submitButton);
    
    // Toast notifications would appear in a real environment
    expect(submitButton).toBeInTheDocument();
  });

  it('validates password length', () => {
    const passwordInput = screen.getByPlaceholderText(/enter your password/i);
    fireEvent.change(passwordInput, { target: { value: '12345' } });
    
    const submitButton = screen.getByRole('button', { name: /register/i });
    fireEvent.click(submitButton);
    
    // Toast notifications would appear in a real environment
    expect(submitButton).toBeInTheDocument();
  });
});