import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import assets from '../assets';

export default function Gallery() {
  const { talents, talentFilter, setTalentFilter, voteTalent, showToast } = useAppContext();
  const categories = ['all', 'dj', 'hypeman', 'dance', 'producer'];
  const filtered = talentFilter === 'all'
    ? talents
    : talents.filter(t => t.category === talentFilter);

  const handleVote = (talent) => {
    voteTalent(talent.id);
    showToast(`Voted for ${talent.name}! ❤️`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
      <Link to="/talent" className="back-btn">← Back to Talent Academy</Link>
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3">
          Talent <span className="text-smirnoff-red">Gallery</span>
        </h1>
        <p className="text-base text-gray-500 max-w-xl mx-auto">
          Browse entries and vote for your favourite chiller.
        </p>
      </div>
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map(c => (
          <button
            key={c}
            className={`tab-btn ${talentFilter === c ? 'active' : ''}`}
            onClick={() => setTalentFilter(c)}
          >
            {c === 'all' ? 'All' : c.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(talent => (
          <div key={talent.id} className="gallery-card">
            <img className="gallery-card-img" src={assets[talent.img]} alt={talent.name} />
            <div className="gallery-card-info">
              <h4>{talent.name}</h4>
              <p>{talent.category.toUpperCase()}</p>
              <button className="vote-btn" onClick={() => handleVote(talent)}>
                ❤️ VOTE THIS CHILLER <span className="vote-count">({talent.votes})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
