import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import BackendService from '../services/BackendService';

export default function Rewards() {
  const { user, setUser, showToast } = useAppContext();

  const handleRedeem = async (reward) => {
    if (user.points >= reward.cost) {
      const result = await BackendService.redeemPoints(user.phone, reward.cost, reward.title);
      if (result.success) {
        // Fetch updated user data to sync points & history from server
        const updatedUser = await BackendService.getUser(user.phone);
        if (updatedUser) setUser(updatedUser);
        
        showToast(`${reward.title} Redeemed! 🎉`);
      } else {
        showToast(result.message || 'Redemption failed.', 'error');
      }
    } else {
      showToast(`Not enough points for ${reward.title}. 🧊`, 'error');
    }
  };

  const rewards = [
    { icon: '🎫', title: 'VIP Event Pass', desc: 'Skip the queue at any Smirnoff Ice event.', cost: 500 },
    { icon: '🧥', title: 'Smirnoff Ice Hoodie', desc: 'Premium limited edition branded hoodie.', cost: 1000 },
    { icon: '🎧', title: 'Wireless Earbuds', desc: 'Premium wireless earbuds with noise cancellation.', cost: 2000 },
    { icon: '🎉', title: 'Party Starter Pack', desc: 'A crate of Smirnoff Ice delivered to your door.', cost: 750 },
    { icon: '✈️', title: 'All-Expense Trip', desc: 'Win a trip for 2 to the Smirnoff Ice Beach Festival.', cost: 5000 },
    { icon: '🎤', title: 'Studio Session', desc: '1-hour studio recording session at a top Lagos studio.', cost: 1500 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
      <Link to="/profile" className="back-btn">← Back to Profile</Link>
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3">
          Your <span className="text-smirnoff-red">Rewards</span>
        </h1>
        <p className="text-base text-gray-500 max-w-xl mx-auto">
          Redeem your points for exclusive Smirnoff Ice rewards.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rewards.map((reward, idx) => (
          <div key={idx} className="reward-item">
            <div className="reward-item-icon">{reward.icon}</div>
            <h3>{reward.title}</h3>
            <p>{reward.desc}</p>
            <div className="reward-cost">{reward.cost} Points</div>
            <br />
            {user.points >= reward.cost ? (
              <button className="btn btn-sm" onClick={() => handleRedeem(reward)}>REDEEM</button>
            ) : (
              <button className="btn btn-sm btn-outline" disabled>NOT ENOUGH POINTS</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
