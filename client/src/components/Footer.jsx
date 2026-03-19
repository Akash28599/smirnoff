import { Link } from 'react-router-dom';
import assets from '../assets';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-how-it-works">
          <Link to="/shop" className="footer-step" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="footer-step-num">1</div>
            <span className="footer-step-text">Buy Smirnoff Ice</span>
          </Link>
          <div className="footer-step-divider"></div>
          <div className="footer-step-divider-mobile"></div>
          <Link to="/code" className="footer-step" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="footer-step-num">2</div>
            <span className="footer-step-text">Enter Code</span>
          </Link>
          <div className="footer-step-divider"></div>
          <div className="footer-step-divider-mobile"></div>
          <Link to="/games" className="footer-step" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="footer-step-num">3</div>
            <span className="footer-step-text">Earn Points</span>
          </Link>
          <div className="footer-step-divider"></div>
          <div className="footer-step-divider-mobile"></div>
          <Link to="/rewards" className="footer-step" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="footer-step-num">4</div>
            <span className="footer-step-text">Win Rewards</span>
          </Link>
        </div>

        <div className="footer-links">
          <div className="footer-links-col">
            <h4>Explore</h4>
            <Link to="/events">Events</Link>
            <Link to="/talent">Talent Academy</Link>
            <Link to="/games">Chill Games</Link>
          </div>
          <div className="footer-links-col">
            <h4>Account</h4>
            <Link to="/code">Enter Code</Link>
            <Link to="/profile">My Profile</Link>
            <Link to="/rewards">Rewards</Link>
          </div>
          <div className="footer-links-col">
            <h4>Shop</h4>
            <a href="https://www.jumia.com.ng" target="_blank" rel="noopener noreferrer">Jumia</a>
            <a href="https://www.konga.com" target="_blank" rel="noopener noreferrer">Konga</a>
          </div>
        </div>

        <div className="footer-bottom">
          <img src={assets.logo} alt="Smirnoff Ice" className="footer-logo" />
          <p>© 2026 Smirnoff Ice Nigeria. Drink Responsibly. Must be 18+.</p>
        </div>
      </div>
    </footer>
  );
}
