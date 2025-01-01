import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import About from './pages/About';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-base-100">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/chat" 
                  element={
                    <ProtectedRoute>
                      <Chat />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Toaster position="top-right" />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;