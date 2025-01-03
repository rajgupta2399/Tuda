# React Chat Application

A modern chat application built with React, featuring user registration, real-time chat, and a responsive design.

## Features

### Registration Page
- User registration with name, email, password, and profile picture
- Form validation
- Mock API integration
- Dark & Light mode support

### Chat Page
- Real-time messaging
- Chat bubble UI using DaisyUI
- Load previous chats functionality
- Local storage persistence

### About Us Page
- Dynamic image loading
- Responsive design
- Company information

## Technical Stack

- React
- React Router DOM
- TailwindCSS
- DaisyUI
- React Hot Toast
- Vitest for testing

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Run tests:
   ```bash
   npm test
   ```

## API Integration

The application uses the following APIs:
- JSONPlaceholder for mock user registration
- JSONPlaceholder for mock chat history
- JSONPlaceholder for mock images (simulating Unsplash API)

## Features
- Responsive design for mobile and desktop
- Dark/Light theme toggle
- Form validation
- Loading states for API calls
- Error handling
- Unit tests for the Register component