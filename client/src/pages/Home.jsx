import { Link } from 'react-router-dom';
import assets from '../assets';

export default function Home() {
  return (
    <section className="animate-fade-in w-full relative bg-white flex flex-col items-center text-center pt-24 sm:pt-28 md:pt-36 overflow-hidden">
      <div className="z-10 mb-2 sm:mb-4 px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-black tracking-tight text-gray-900 mb-2 sm:mb-3 leading-none">
          POP. <span className="text-smirnoff-red">ENTER.</span> CHILL.
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-8 font-medium">
          Pop it. Play it. Show up. Win big.
        </p>
        <Link to="/code" className="btn text-xs sm:text-base py-3 sm:py-4 px-6 sm:px-10">
          POP A CAN… WIN A POINT
        </Link>
      </div>
      <div className="w-full relative mt-4 sm:mt-0">
        <img src={assets.landingNew} alt="Smirnoff Ice Bottles" className="w-full h-auto block object-contain" />
      </div>
    </section>
  );
}
