import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Header() {
  const { user, darkMode, toggleDarkMode } = useAppContext();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (paths) => paths.some(p => currentPath === p || currentPath.startsWith(p + '/'));

  const handleHamburger = () => {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.classList.toggle('open');
  };

  const closeNav = () => {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.classList.remove('open');
  };

  return (
    <header className="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        <div>
          <Link to="/" className="smirnoff-badge" onClick={closeNav}>SMIRNOFF</Link>
        </div>
        <button
          id="theme-toggle"
          className="theme-toggle-btn"
          title="Toggle Theme"
          onClick={toggleDarkMode}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="hamburger" id="hamburger" onClick={handleHamburger}>
          <span></span><span></span><span></span>
        </div>
        <nav>
          <ul className="nav-links" id="nav-links">
            <li><Link to="/" className={currentPath === '/' ? 'active' : ''} onClick={closeNav}>Home</Link></li>
            <li><Link to="/events" className={isActive(['/events', '/event']) ? 'active' : ''} onClick={closeNav}>Events</Link></li>
            <li><Link to="/talent" className={isActive(['/talent', '/gallery', '/leaderboard']) ? 'active' : ''} onClick={closeNav}>Talent Academy</Link></li>
            <li><Link to="/games" className={isActive(['/games', '/spin-game']) ? 'active' : ''} onClick={closeNav}>Chill Games</Link></li>
            <li><Link to="/shop" className={isActive(['/shop']) ? 'active' : ''} onClick={closeNav}>Shop</Link></li>
            <li><Link to="/code" className={isActive(['/code']) ? 'active' : ''} onClick={closeNav}>Enter Code</Link></li>
            <li>
              <Link to="/profile" className="user-nav-btn" onClick={closeNav}>
                👤 {user.points} pts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
