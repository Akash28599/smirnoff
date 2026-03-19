import { Link } from 'react-router-dom';
import assets from '../assets';

export default function Games() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in text-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20">
      <div className="text-center mb-12">
        <p className="section-label">PLAY & EARN</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3">
          PLAY. <span className="text-smirnoff-red">WIN.</span> REPEAT.
        </h1>
        <p className="text-base text-gray-500 max-w-xl mx-auto">
          Spin the wheel to earn more points.
        </p>
      </div>
      <div className="relative max-w-3xl mx-auto flex flex-col items-center">
        <img
          src={assets.chillGameBg}
          alt="Smirnoff Ice Chill Games"
          className="w-full mb-8"
          style={{ mixBlendMode: 'darken' }}
        />
        <div className="relative z-10">
          <Link
            to="/spin-game"
            className="btn text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-16"
            style={{ boxShadow: '0 0.625rem 1.875rem rgba(211,47,47,0.4)' }}
          >
            SPIN THE CHILL WHEEL
          </Link>
        </div>
      </div>
    </section>
  );
}
