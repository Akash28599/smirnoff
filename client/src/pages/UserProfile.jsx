import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import assets from '../assets';

export default function UserProfile() {
  const { user } = useAppContext();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
      <div className="profile-header">
        <div className="profile-avatar">{user.name.charAt(0)}</div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.phone}</p>
        </div>
        <img src={assets.smirnoffBottle} alt="Smirnoff Ice" className="profile-product-img" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        <div className="stat-card">
          <div className="stat-value">{user.points.toLocaleString()}</div>
          <div className="stat-label">Point Balance</div>
        </div>
        <div className="stat-card">
          <div className="stat-value stat-active">{user.icePass}</div>
          <div className="stat-label">IcePass Status</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">12</div>
          <div className="stat-label">Codes Entered</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3</div>
          <div className="stat-label">Rewards Claimed</div>
        </div>
      </div>
      <div className="flex gap-6 mb-12 flex-wrap">
        <Link to="/rewards" className="btn btn-sm">VIEW REWARDS</Link>
        <button className="btn btn-sm btn-outline">REDEMPTION HISTORY</button>
      </div>
      <h3 className="mb-6 text-base">Recent Activity</h3>
      <div className="history-panel">
        <ul className="history-list">
          {user.history.map((item, idx) => (
            <li key={idx} className="history-item">
              <div className="history-item-info">
                <h4>{item.label}</h4>
                <p>{item.date}</p>
              </div>
              <span className={`history-item-points ${item.points > 0 ? 'positive' : 'negative'}`}>
                {item.points > 0 ? '+' : ''}{item.points} pts
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
