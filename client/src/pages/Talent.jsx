import { useState } from 'react';
import { Link } from 'react-router-dom';
import assets from '../assets';
import TalentModal from '../components/TalentModal';

export default function Talent() {
  const [modalCategory, setModalCategory] = useState(null);

  const categories = [
    { key: 'dj', label: 'DJ', img: 'talentDj' },
    { key: 'hypeman', label: 'HYPEMAN', img: 'talentHypeman' },
    { key: 'dance', label: 'DANCE', img: 'talentDance' },
    { key: 'producer', label: 'AFROBEAT PRODUCERS', img: 'talentProducer' },
  ];

  return (
    <>
      <section className="animate-fade-in w-screen -ml-[50vw] left-[50%] relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-[4.375rem]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1]">
          <img
            src={assets.talentBg}
            alt="Smirnoff Chill Talent Academy"
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.06) translate(2%,2%)' }}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-12 md:pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => (
            <div
              key={cat.key}
              className="talent-card"
              onClick={() => setModalCategory(cat.key)}
            >
              <img src={assets[cat.img]} alt={cat.label} />
              <div className="talent-card-overlay">
                <h3>{cat.label}</h3>
                <button className="btn btn-sm">Submit Entry →</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 justify-center mt-12 flex-wrap">
          <Link to="/gallery" className="btn">VIEW TOP CHILLERS</Link>
          <Link to="/leaderboard" className="btn btn-outline">LEADERBOARD</Link>
        </div>
      </section>

      {modalCategory && (
        <TalentModal
          category={modalCategory}
          onClose={() => setModalCategory(null)}
        />
      )}
    </>
  );
}
