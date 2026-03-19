import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Leaderboard() {
  const { talents } = useAppContext();
  const sorted = [...talents].sort((a, b) => b.votes - a.votes);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
      <Link to="/talent" className="back-btn">← Back to Talent Academy</Link>
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3">
          Top <span className="text-smirnoff-red">Chillers</span>
        </h1>
        <p className="text-base text-gray-500 max-w-xl mx-auto">
          The most voted talents across all categories.
        </p>
      </div>
      <div className="leaderboard-panel">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Talent</th>
              <th className="hidden sm:table-cell">Category</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((t, i) => (
              <tr key={t.id}>
                <td>
                  <span className={`rank-badge ${i < 3 ? `rank-${i + 1}` : 'rank-default'}`}>
                    {i + 1}
                  </span>
                </td>
                <td className="font-bold">{t.name}</td>
                <td className="hidden sm:table-cell uppercase text-xs tracking-wider text-gray-400">
                  {t.category}
                </td>
                <td className="font-extrabold text-smirnoff-red">{t.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
