import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { MoonIcon } from './Moon';
import { SunIcon } from './Sun';

function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar bg-base-200">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Branding */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            Chat App
          </Link>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="menu menu-horizontal px-1 flex items-center space-x-4">
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/">Register</Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link to="/chat">Chat</Link>
              </li>
            )}
            <li>
              <Link to="/about">About</Link>
            </li>
            {user && (
              <li>
                <button onClick={logout} className="btn btn-ghost">
                  Logout
                </button>
              </li>
            )}
            <li>
              <button onClick={toggleTheme} className="btn btn-ghost">
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>
            </li>
          </ul>
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="flex md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {!user && (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/">Register</Link>
                  </li>
                </>
              )}
              {user && (
                <li>
                  <Link to="/chat">Chat</Link>
                </li>
              )}
              <li>
                <Link to="/about">About</Link>
              </li>
              {user && (
                <li>
                  <button onClick={logout} className="btn btn-ghost">
                    Logout
                  </button>
                </li>
              )}
              <li>
                <button onClick={toggleTheme} className="btn btn-ghost">
                  {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
